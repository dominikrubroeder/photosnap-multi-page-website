import React from 'react';

interface ArrowProps {
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : ''}
      width="43"
      height="14"
    >
      <g fill="none" fillRule="evenodd" stroke="currentColor">
        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
      </g>
    </svg>
  );
};

export default Arrow;
