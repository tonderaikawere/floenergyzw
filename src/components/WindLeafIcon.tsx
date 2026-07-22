import React from 'react';

const WindLeafIcon = ({ className = "w-8 h-4 text-aluwind-green" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 50 C 30 20, 70 20, 100 0 C 70 30, 30 30, 0 50 Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default WindLeafIcon;
