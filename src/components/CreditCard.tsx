import React from "react";

const CreditCard = ({
  heading,
  subHeading,
  children,
  className,
  btnText,
}: {
  heading?: string;
  subHeading?: string;
  children?: React.ReactNode;
  className?: string;
  btnText?: string;
}) => {
  return (
    <div
      className={`py-8 rounded-xl  text-center relative credit-card shadow-lg mx-auto border border-gray-50 ${className}`}
    >
      <div className=" my-5">
        <p className="text-lg text-white mb-2 font-semibold">
          {heading}
        </p>
        <p className="text-white text-sm font-light">{subHeading}</p>
      </div>

      {/* {children} */}

      <img width={125}
        className="m-auto absolute top-[-2em] left-0 right-0"
        src="/bulb.svg"
        alt=""
      />

      <button id="credit-btn" className="flex mx-auto text-[#18A1CC] items-center py-2 px-4 font-semibold leading-6 text-sm">{btnText} <img src="/chevron-right.svg" alt="" /></button>
    </div>
  );
};

export default CreditCard;
