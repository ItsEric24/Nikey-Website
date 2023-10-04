/* eslint-disable react/prop-types */
function ShoeCard({ imgUrl, changeShoe, bigShoe }) {
  const handleClick = () => {
    if (bigShoe !== imgUrl.bigShoe) {
      changeShoe(imgUrl.bigShoe);
    }
  };
  return (
    <>
      <div
        className={`border-2 rounded-xl ${
          bigShoe === imgUrl.bigShoe ? "border-coral-red" : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
          <img
            src={imgUrl.thumbnail}
            alt="shoe-img"
            width={127}
            height={103}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}
export default ShoeCard;
