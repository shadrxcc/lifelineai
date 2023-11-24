import React from "react";

const ModalCard = ({
  heading,
  children,
  className,
}: {
  heading?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`modal-card w-[600px] ${className}`}>
       <p className="text-xl font-semibold leading-7 text-[#141414]">
          {heading}
        </p>

      {children}
    </div>
  );
};

export default ModalCard;
