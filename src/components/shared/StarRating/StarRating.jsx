import StarRatingComponent from "react-star-rating-component";

const StarRating = ({ rating, onStarClick }) => {
  return (
    <StarRatingComponent
      name="rating"
      starCount={5}
      value={rating}
      onStarClick={onStarClick}
      starColor="#F39C12"
      emptyStarColor="#BDC3C7"
    />
  );
};
export default StarRating;
