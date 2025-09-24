# Multi-stage build for Next.js 15 app on Debian 12 (Bookworm)
# 1) Install dependencies & build
FROM node:20-bookworm-slim AS builder

# Install system deps (optional but helpful for sharp, etc.)
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    openssl \
    git \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Set production env by default
ENV NODE_ENV=production

# Copy package manifests first for better caching
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Install deps using npm (lockfile present)
RUN if [ -f package-lock.json ]; then \
      npm ci --include=dev; \
    else \
      npm install --include=dev; \
    fi

# Copy the rest of the app
COPY . .

# Build the Next.js app (standalone output)
RUN npm run build

# 2) Create a lightweight runtime image
FROM node:20-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Create a non-root user
RUN groupadd -r nextjs && useradd -r -g nextjs nextjs \
    && mkdir -p /app/.next \
    && chown -R nextjs:nextjs /app

# Copy only necessary artifacts from builder
# .next/standalone contains the Node server and minimal node_modules
COPY --from=builder /app/.next/standalone ./
# static assets
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose Next.js default port
EXPOSE 3000

USER nextjs

# Start the server
ENV PORT=3000
CMD ["node", "server.js"]
