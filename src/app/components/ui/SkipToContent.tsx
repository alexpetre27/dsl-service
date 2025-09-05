'use client';

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only fixed top-2 left-2 z-[100] bg-black text-white px-4 py-2 rounded-lg"
    >
      Skip to content
    </a>
  );
}

