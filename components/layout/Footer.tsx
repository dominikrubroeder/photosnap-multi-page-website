import React from 'react';
import Logo from '../svg/Logo';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-4 text-white">
      <div className="mx-auto flex max-w-[69.375rem] items-center justify-between">
        <Logo />
        <Button variant="text" text="Get an invite" />
      </div>
    </footer>
  );
};

export default Footer;
