import React from 'react';
import Logo from '../svg/Logo';
import Button from '../ui/Button';
import Image from 'next/image';
import Navigation from '../navigation/navigation';

interface FooterProps {
  withBetaBanner?: boolean;
}

const Footer: React.FC<FooterProps> = ({ withBetaBanner = true }) => {
  return (
    <>
      {withBetaBanner && (
        <section className="relative flex min-h-[17.5rem] items-center px-10 text-white">
          <div className="absolute top-0 left-10 z-10 h-1 w-32 bg-brand md:left-0 md:h-full md:w-1"></div>

          <div className="relative z-20 mx-auto grid w-full max-w-[69.375rem] gap-8 md:flex md:items-center md:justify-between">
            <h3 className="max-w-[25rem] text-[2.5rem] font-bold uppercase leading-[3rem] tracking-[0.25rem]">
              We’re in beta. Get your invite today!
            </h3>
            <Button variant="text" text="Get an invite" />
          </div>

          <Image
            src="/shared/desktop/bg-beta.jpg"
            fill
            alt="Features beta phase banner"
            className="object-cover"
          />
        </section>
      )}

      <footer className="bg-black py-16 px-10 text-white">
        <div className="mx-auto flex max-w-[69.375rem] items-center justify-between">
          <div>
            <Logo />
            <Navigation />
          </div>

          <Button variant="text" text="Get an invite" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
