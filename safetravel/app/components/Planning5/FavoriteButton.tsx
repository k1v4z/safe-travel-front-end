// components/FavoriteButton.js
interface FavoriteButtonProps {
  className?: string;
}
export default function FavoriteButton({ className }: FavoriteButtonProps) {
  return (
    <button className="absolute top-2 right-2 bg-white p-2 rounded-full">❤️</button>
  );
}
