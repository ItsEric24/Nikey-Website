import offer from "../assets/images/offer.svg";
import Buttons from "../components/Buttons";
import arrowRight from "../assets/icons/arrow-right.svg";

function SpecialOffer() {
  return (
    <div className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer-img"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <br />
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="mt-5 lg:max-w-lg info-text">
          Embark on a shopping journey taht redifines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets apart
        </p>
        <p className="mt-5 lg:max-w-lg info-text">
          Naviagte a realm of possiblities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of expectations
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Buttons text="Shop now" icon={arrowRight} />
          <Buttons
            text="Learn more"
            bgColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </div>
  );
}
export default SpecialOffer;
