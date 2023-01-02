import React from 'react';
import { Story } from '../data/stories';
import Image from 'next/image';
import Button from './ui/Button';

const StoryHero: React.FC<Story> = ({
  image,
  title,
  author,
  description,
  date,
}) => {
  return (
    <div className="relative">
      <div className="relative h-80 md:min-h-[40.625rem]">
        <Image
          src={image}
          fill
          alt={`${title} story image`}
          className="object-cover"
          sizes="100vw"
          quality="100"
        />
      </div>

      <div className="grid w-full gap-8 bg-black p-10 text-white md:absolute md:top-1/2 md:z-10 md:ml-28 md:max-w-sm md:-translate-y-1/2 md:bg-transparent">
        <div className="grid gap-4">
          <small className="uppercase tracking-widest">
            Last month featured story
          </small>

          <h1 className="text-[2.5rem] font-bold uppercase tracking-[4px]">
            {title}
          </h1>

          <p>
            <span className="opacity-[60%]">{date} by </span>
            <span>{author}</span>
          </p>

          <p className="opacity-[60%]">{description}</p>
        </div>

        <Button variant="text" text="Read the story" />
      </div>
    </div>
  );
};

export default StoryHero;
