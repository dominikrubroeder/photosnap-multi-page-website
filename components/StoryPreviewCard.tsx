import Image from 'next/image';
import React from 'react';
import Button from './ui/Button';

interface StoryPreviewCardProps {
  /** Path to public image src. This property tells the component where the image url is located. */
  image: string;
  /** Title of story. */
  title: string;
  /** Name of the storie's author. */
  author: string;
}

const StoryPreviewCard: React.FC<StoryPreviewCardProps> = ({
  image = '/stories/desktop/mountains.jpg',
  author = 'John Appleseed',
  title = 'The Mountains',
}) => {
  return (
    <div className="group relative cursor-pointer">
      <div className="relative min-h-[65vh] overflow-hidden  md:min-h-[31.25rem]">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              25vw"
          alt={`${title} story preview image`}
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-0 z-20 grid w-full gap-4 p-10 text-white">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <small>by {author}</small>
        </div>

        <hr className="w-full opacity-25 transition-all duration-300 group-hover:w-0" />

        <Button variant="text" text="Read story" />
      </div>

      <div className="absolute bottom-0 z-10 h-full w-full bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  );
};

export default StoryPreviewCard;
