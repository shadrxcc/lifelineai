import React from 'react';

const Card = ({
  heading,
  subHeading,
  children,
  className
}: {
  heading?: string;
  subHeading?: string;
  children: React.ReactNode;
  className?: string
}) => {
  return (
    <div className={`p-8 rounded-xl shadow-lg max-w-xl mx-auto border border-gray-50 ${className}`}>
      <div className='mb-8'>
        <p className='text-2xl md:text-3xl text-gray-900 mb-2 font-semibold'>
          {heading}
        </p>
        <p className='text-gray-500 text-lg font-light'>{subHeading}</p>
      </div>

      {children}
    </div>
  );
};

export default Card;
