import Image from 'next/image';
import FavoriteButton from './FavoriteButton';

interface CardProps {
  title: string;
  imageSrc: string;
  subtitle?: string;  // Add subtitle as an optional prop
  isFirst: boolean;
  isLast: boolean;
}

export default function Card({ title, imageSrc, subtitle, isFirst, isLast }: CardProps) {
  return (
    <div className="relative group p-4">
      {/* Image with conditional navigation buttons */}
      <div className="relative">
        {/* Left navigation button */}
        {isFirst && (
          <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-md">
            &lt;
          </button>
        )}

        {/* Image */}
        <Image src={imageSrc} alt={title} width={300} height={200} className="rounded-lg" />

        {/* Right navigation button */}
        {isLast && (
          <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-md">
            &gt;
          </button>
        )}

        {/* Favorite Button */}
        <FavoriteButton className="absolute top-2 right-2" />
      </div>

      {/* Title and subtitle below the image */}
      <h4 className="mt-2 font-semibold">{title}</h4>
      {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
    </div>
  );
}
