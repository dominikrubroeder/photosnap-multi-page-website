import React from 'react';
import Logo from '../svg/Logo';
import Button from '../ui/Button';
import Image from 'next/image';
import Navigation from '../Navigation';

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
              We&prime;re in beta. Get your invite today!
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
        <div className="mx-auto grid max-w-[69.375rem] justify-center gap-28 md:flex md:justify-between">
          <div className="grid gap-8 lg:flex lg:justify-start lg:gap-32">
            <Logo className="mx-auto md:mx-0" />
            <Navigation isFooter />
          </div>

          <div className="flex flex-col items-start justify-between">
            <div className="mx-auto md:mx-0 md:ml-auto">
              <Button variant="text" text="Get an invite" />
            </div>

            <div className="grid justify-start gap-2">
              <p className="mt-8 text-center text-xs font-normal opacity-50 md:text-right">
                Frontend challenge by&nbsp;
                <a
                  href="https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW"
                  target="_blank"
                  rel="noreferrer"
                >
                  frontendmentor.io
                </a>
                , developed by&nbsp;
                <a
                  href="https://github.com/dominikrubroeder"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dominik Rubröder
                </a>
              </p>

              <p className="text-center font-normal opacity-50 md:text-right">
                Copyright {new Date().getFullYear()}. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
