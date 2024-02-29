import { FaStar } from "react-icons/fa";

interface RatingsProps {
  totalStars: number;
}

export const Ratings: React.FC<RatingsProps> = ({totalStars}) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} style={{ color: index < totalStars ? "yellow" : "" }} />
      ))}
    </div>
  );
};
