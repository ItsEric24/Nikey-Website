/* eslint-disable react/prop-types */
function Buttons({ text, icon, bgColor, borderColor, textColor }) {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
          bgColor ? bgColor : "bg-coral-red"
        } ${textColor ? textColor : "text-white"} rounded-full ${
          borderColor ? borderColor : "border-coral-red"
        }`}
      >
        {text}
        {icon && (
          <img
            className="ml-2 rounded-full w-5 h-5"
            src={icon}
            alt="icon-img"
          />
        )}
      </button>
    </>
  );
}
export default Buttons;
