const TourDialog = ({
  heading,
  subHeading,
  className,
  btnText,
  step,
}: {
  heading?: string;
  subHeading?: string;
  step: string | number;
  className?: string;
  btnText?: string;
}) => {
  return (
    <div
      className={`p-4 rounded bg-white w-[391px] flex flex-col gap-y-4 shadow-lg mx-auto border border-gray-50 ${className}`}
    >
      <div className="flex flex-col gap-y-3.5">
        <div className="flex items-center justify-between">
          <p className="text-xl text-[#242424] leading-7 font-semibold">
            {heading}
          </p>
          <img src="/dismiss.svg" alt="" />
        </div>

        <div>
          <p className="text-[#424242] text-base leading-6">{subHeading}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-[#616161] leading-5">{step} of 3</p>{" "}
        <button
          id="tour-btn"
          className="flex border text-white leading-4 items-center py-2 px-6 font-semibold text-xs"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default TourDialog;
