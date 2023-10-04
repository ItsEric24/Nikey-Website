import { star } from "../assets/icons";

/* eslint-disable react/prop-types */
function ReviewCard({ imgUrl, customerName, rating, feedBack }) {
  return (
    <div className="flex justify-center items-center flex-col shadow-lg p-8 rounded-xl">
      <img
        src={imgUrl}
        alt="customer"
        className="rounded-full object-cover w-[120] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedBack}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="icon"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
}
export default ReviewCard;
