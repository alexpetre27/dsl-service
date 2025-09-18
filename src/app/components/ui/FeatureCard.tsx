import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center flex flex-col items-center">
      {/* Icon centrat într-un cerc */}
      <div className="mb-6 p-3 rounded-xl bg-accent/10 flex justify-center items-center">
        <Icon className="w-6 h-6 text-accent" />
      </div>

      {/* Titlu și descriere centrate */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-accent/10 transition-all duration-500" />
    </div>
  );
}
