import React from 'react';
import { features } from '../data/features';

interface FeaturesProps {
  /** This property determines how many features will be shown within the list. */
  show: number;
}

const Features: React.FC<FeaturesProps> = ({ show = 0 }) => {
  const featuresToShow = features.slice(0, show === 0 ? features.length : show);

  return (
    <section className="mx-auto grid max-w-[69.375rem] gap-32 py-32 lg:grid-cols-3 lg:gap-8 lg:gap-y-28">
      {featuresToShow.map(({ icon, title, description }, i) => (
        <div
          key={i}
          className="mx-auto grid max-w-md gap-8 text-center lg:mx-0"
        >
          <div className="mx-auto flex h-20 items-center justify-center">
            {icon}
          </div>
          <div className="grid gap-4">
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="opacity-[60%]">{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
