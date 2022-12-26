import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-black px-6 py-3 text-white transition duration-300 hover:bg-[#DFDFDF] hover:text-black">
      {children}
    </button>
  );
};

export default Button;
