import React from 'react';
import ResponsiveIcon from './svg/ResponsiveIcon';
import ForeverIcon from './svg/ForeverIcon';
import BullhornIcon from './svg/BullhornIcon';

const BrandBenefitsSection: React.FC = () => {
  return (
    <section className="mx-auto grid max-w-[69.375rem] gap-32 py-32 lg:grid-cols-3 lg:gap-8">
      <div className="mx-auto grid max-w-md gap-8 text-center lg:mx-0">
        <ResponsiveIcon className="mx-auto" />
        <div className="grid gap-4">
          <h4 className="text-lg font-bold">100% Responsive</h4>
          <p className="opacity-[60%]">
            No matter which the device youre on, our site is fully responsive
            and stories look beautiful on any screen.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-md gap-8 text-center lg:mx-0">
        <ForeverIcon className="mx-auto" />
        <div className="grid gap-4">
          <h4 className="text-lg font-bold">No Photo Upload Limit</h4>
          <p className="opacity-[60%]">
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-md gap-8 text-center lg:mx-0">
        <BullhornIcon className="mx-auto" />
        <div className="grid gap-4">
          <h4 className="text-lg font-bold">Available to Embed</h4>
          <p className="opacity-[60%]">
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandBenefitsSection;
