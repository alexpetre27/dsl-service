import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="mb-6 inline-flex p-3 rounded-xl bg-accent/10">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-accent/10 transition-all duration-500" />
    </div>
  );
}
