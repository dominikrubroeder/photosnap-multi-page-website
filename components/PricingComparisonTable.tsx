import React from 'react';
import CheckmarkIcon from './svg/CheckmarkIcon';
import { services } from '../data/services';

const PricingComparisonTable: React.FC = () => {
  return (
    <div className="mx-auto grid w-full max-w-screen-md gap-14">
      <h2 className="text-center text-[2.5rem] font-bold uppercase tracking-[0.25rem]">
        Compare
      </h2>

      <div className="text-xs">
        <div className="sticky top-0 grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-b-black bg-white/30 p-4 backdrop-blur">
          <div className="uppercase">The Features</div>
          <div className="uppercase">Basic</div>
          <div className="uppercase">Pro</div>
          <div className="uppercase">Business</div>
        </div>

        {services.map(({ title, isBasic, isPro, isBusiness }, i) => (
          <div
            key={i}
            className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 border-b p-4"
          >
            <div className="uppercase">{title}</div>
            <div>{isBasic && <CheckmarkIcon />}</div>
            <div>{isPro && <CheckmarkIcon />}</div>
            <div>{isBusiness && <CheckmarkIcon />}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComparisonTable;
