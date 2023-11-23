import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({
  title,
  linkText,
  url,
}: {
  title: string;
  linkText: string;
  url: string;
}) => {
  return (
    <div className='flex items-center justify-end gap-4 py-8'>
      <p className='font-semibold'>{title}</p>

      <Link
        className='gradient p-3 px-6 rounded-md capitalize text-white'
        to={url}
      >
        {linkText}
      </Link>
    </div>
  );
};

export default PageHeader;
