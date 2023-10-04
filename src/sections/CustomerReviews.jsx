import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants/index";

function CustomerReviews() {
  return (
    <div className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our customers with us
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgUrl={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedBack={review.feedback}
          />
        ))}
      </div>
    </div>
  );
}
export default CustomerReviews;
