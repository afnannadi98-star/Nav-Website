import React from 'react';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M50 15L85 75H15L50 15Z" 
        stroke="currentColor" 
        strokeWidth="8" 
        strokeLinejoin="round"
      />
      <path 
        d="M50 35L70 70H30L50 35Z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
