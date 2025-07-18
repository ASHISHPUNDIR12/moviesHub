import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  totalStars?: number;
  onRatingChange?: (rating: number) => void;
}

const StarRating = ({ totalStars = 10, onRatingChange }: StarRatingProps) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleClick = (index: number) => {
    setRating(index);
    if (onRatingChange) onRatingChange(index);
  };

  return (
    <div className="flex items-center gap-1  ">
      {Array.from({ length: totalStars }, (_, i) => {
        const starIndex = i + 1;
        const isActive = hovered >= starIndex || rating >= starIndex;

        return (
          <button
            key={i}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => setHovered(starIndex)}
            onMouseLeave={() => setHovered(0)}
            className="cursor-pointer "
          >
            <Star
              className={`${
                isActive
                  ? "fill-yellow-400 stroke-yellow-400"
                  : "stroke-gray-400"
              } w-4 h-4 sm:w-6 sm:h-6`} // 👈 responsive size
            />
          </button>
        );
      })}
      <span className="ml-2 text-sm text-white">
        {rating}/{totalStars}
      </span>
    </div>
  );
};

export default StarRating;
