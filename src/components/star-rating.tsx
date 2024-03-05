import { StarIcon } from "./icons";

export function StarRating({ rating = 5 }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating).fill("")].map((index) => (
        <StarIcon key={index} className="h-5 w-5 fill-current" />
      ))}
    </div>
  );
}
