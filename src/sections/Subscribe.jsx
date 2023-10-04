import Buttons from "../components/Buttons";

function Subscribe() {
  return (
    <div
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="conatct-us"
    >
      <h3 className="text-4xl text-center leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up For<span className="text-coral-red"> Updates </span>& NewsLetter
      </h3>
      <div className="lg:max-w-[40%] w-full flex justify-between items-center max-sm:flex-col gap-2.5 p-3 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Buttons text="Sign Up" />
        </div>
      </div>
    </div>
  );
}
export default Subscribe;
