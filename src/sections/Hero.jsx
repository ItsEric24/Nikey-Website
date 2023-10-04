import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Buttons from "../components/Buttons";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

function Hero() {
  const [bigShoe, setBigShoe] = useState(bigShoe1);
  return (
    <div
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-1 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nikey</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nikey arrivals, quality, comfort, and innovation of
          your active life
        </p>
        <Buttons text="Shop now" icon={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 w-full p-6 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoe}
          alt="shoe-img"
          width={610}
          height={500}
          className="object-contain z-10 relative"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgUrl={shoe}
                changeShoe={(shoe) => {
                  setBigShoe(shoe);
                }}
                bigShoe={bigShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
