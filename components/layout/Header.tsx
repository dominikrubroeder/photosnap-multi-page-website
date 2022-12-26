import React from 'react';
import Logo from '../svg/Logo';
import Button from '../ui/Button';

const Header: React.FC = () => {
  return (
    <header className="relative p-4">
      <div className="mx-auto flex max-w-[69.375rem] items-center justify-between gap-4">
        <Logo />

        <div className="md:flex-1">
          <button className="group inline-grid gap-1 transition md:hidden">
            <span className="h-[0.0625rem] w-5 origin-center bg-black transition group-hover:rotate-45"></span>
            <span className="h-[0.0625rem] w-5 origin-center bg-black transition group-hover:-rotate-45"></span>
          </button>

          <div className="absolute left-0 mt-4 grid w-full justify-center gap-8 md:relative md:left-auto md:mt-0 md:flex md:justify-between">
            <ul className="grid gap-4 text-center md:flex md:flex-1 md:items-center md:justify-center md:gap-2 md:text-left">
              <li className="uppercase tracking-widest">Stories</li>
              <li className="uppercase tracking-widest">Features</li>
              <li className="uppercase tracking-widest">Pricing</li>
            </ul>

            <hr className="border-black opacity-25 md:hidden" />

            <Button>Get an invite</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;