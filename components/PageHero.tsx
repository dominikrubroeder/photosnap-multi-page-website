import Image from 'next/image';
import React from 'react';
import Button from './ui/Button';

interface PageHeroProps {
  image: string;
  title: string;
  description: string;
  link?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  image,
  title,
  description,
  link = '',
}) => {
  return (
    <section className="grid min-h-[40.625rem] md:grid-cols-[3fr_1fr] lg:grid-cols-[2fr_3fr]">
      <div className="relative min-h-[17.8125rem] md:order-2">
        <Image
          src={image}
          fill
          alt={`${title} hero image`}
          className="object-cover"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center gap-8 bg-black py-20 text-white md:order-1 md:py-0">
        <div className="flex w-full gap-4">
          <div className="absolute top-0 left-8 h-1 w-32 bg-brand md:relative md:left-0 md:h-full md:w-1"></div>

          <div className="relative grid max-w-xs flex-1 gap-12 pl-8 md:left-1/2 md:-ml-4 md:-translate-x-1/2">
            <div className="grid gap-2">
              <h1 className="text-[2.5rem] font-bold uppercase">{title}</h1>
              <p className="opacity-[60%]">{description}</p>
            </div>

            {link !== '' && <Button variant="text" text="Get an invite" />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
