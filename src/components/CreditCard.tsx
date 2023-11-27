const CreditCard = ({
  heading,
  subHeading,
  className,
  btnText,
  id,
  url,
}: {
  heading?: string;
  subHeading?: string;
  id: number;
  url: string;
  className?: string;
  btnText?: string;
}) => {
  return (
    <div
      key={id}
      className={`py-8 rounded-xl  text-center relative credit-card shadow-lg mx-auto border border-gray-50 ${className}`}
    >
      <div className=" my-5">
        <p className="text-lg text-white mb-2 font-semibold">{heading}</p>
        <p className="text-white text-sm font-light">{subHeading}</p>
      </div>

      {/* {children} */}

      <img
        width={125}
        className="m-auto absolute top-[-2em] left-0 right-0"
        src="/bulb.svg"
        alt=""
      />

      <a
        href={url}
        id="credit-btn"
        target="_blank"
        rel="noreferrer"
        className="flex mx-auto text-[#18A1CC] w-fit items-center py-2 px-4 font-semibold leading-6 text-sm"
      >
        {btnText} <img src="/chevron-right.svg" alt="" />
      </a>
    </div>
  );
};

export default CreditCard;
