import React from 'react';
import Logo from '../svg/Logo';
import Button from '../ui/Button';
import { motion } from 'framer-motion';
import Navigation from '../navigation/navigation';

const Header: React.FC = () => {
  return (
    <header className="relative p-4">
      <div className="mx-auto flex max-w-[69.375rem] items-center justify-between gap-4">
        <Logo />

        <div className="md:flex-1">
          <button className="group mb-4 inline-grid gap-1 transition md:hidden">
            <span className="h-[0.0625rem] w-5 origin-center bg-black transition group-hover:rotate-45"></span>
            <span className="h-[0.0625rem] w-5 origin-center bg-black transition group-hover:-rotate-45"></span>
          </button>

          <div className="absolute left-0 z-50 grid w-full justify-center gap-8 bg-white md:relative md:left-auto md:mt-0 md:flex md:justify-between md:py-0">
            <Navigation withHome={false} />

            <hr className="border-black opacity-25 md:hidden" />

            <Button variant="contained" text="Get an invite" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
