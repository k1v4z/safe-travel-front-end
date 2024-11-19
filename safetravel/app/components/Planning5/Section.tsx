import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children?: ReactNode; // `children` is now optional
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
        {children}
      </div>
    </div>
  );
}
