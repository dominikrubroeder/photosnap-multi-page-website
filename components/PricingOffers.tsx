import React, { useState } from 'react';
import { pricingModels } from '../data/pricing';

const PricingOffers: React.FC = () => {
  const [paymentInterval, setPaymentInterval] = useState<'monthly' | 'yearly'>(
    'monthly'
  );
  const [selectedPricingLevel, setSelectedPricingLevel] = useState<
    'Basic' | 'Pro' | 'Business'
  >('Pro');

  return (
    <div className="mx-auto grid w-full max-w-[69.375rem] gap-14">
      <div className="mx-auto flex flex-nowrap items-center gap-4">
        <span
          className={`cursor-pointer transition duration-300 hover:opacity-100 ${
            paymentInterval === 'monthly' ? 'opacity-100' : 'opacity-50'
          }`}
          onClick={() => setPaymentInterval('monthly')}
        >
          Monthly
        </span>

        <div
          className="flex w-10 cursor-pointer rounded-full bg-brand-light-grey p-1 transition-all"
          onClick={() =>
            setPaymentInterval((previousState) => {
              return previousState === 'monthly' ? 'yearly' : 'monthly';
            })
          }
        >
          <span
            className={`h-4 w-4 rounded-full bg-black transition-all ${
              paymentInterval === 'monthly'
                ? 'translate-x-0'
                : 'translate-x-full'
            }`}
          ></span>
        </div>

        <span
          className={`cursor-pointer transition duration-300 hover:opacity-100 ${
            paymentInterval === 'yearly' ? 'opacity-100' : 'opacity-50'
          }`}
          onClick={() => setPaymentInterval('yearly')}
        >
          Yearly
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        {pricingModels.map(
          ({ level, description, priceMonthly, priceYearly }, i) => (
            <div
              key={i}
              className={`relative grid cursor-pointer gap-8 py-14 px-10 transition-all ${
                selectedPricingLevel === level
                  ? 'z-10 scale-100 bg-black text-white'
                  : 'scale-90 bg-brand-light-grey'
              }`}
              onClick={() => setSelectedPricingLevel(level)}
            >
              {selectedPricingLevel === level && (
                <div className="absolute top-0 left-0 h-1 w-full bg-brand"></div>
              )}

              <div className="grid gap-4">
                <h2 className="text-2xl font-bold">{level}</h2>
                <p className="opacity-[60%]">{description}</p>
              </div>

              <div>
                {paymentInterval === 'monthly' && (
                  <p className="text-[2.5rem] font-bold leading-none tracking-[0.25rem]">
                    ${priceMonthly.toFixed(2)}
                  </p>
                )}
                {paymentInterval === 'yearly' && (
                  <p className="text-[2.5rem] font-bold leading-none tracking-[0.25rem]">
                    ${priceYearly.toFixed(2)}
                  </p>
                )}
                <p>per {paymentInterval === 'yearly' ? 'year' : 'month'}</p>
              </div>

              <button
                className={`py-3 ${
                  selectedPricingLevel === level
                    ? 'bg-white text-black'
                    : 'bg-black text-white'
                }`}
              >
                Pick plan
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PricingOffers;
