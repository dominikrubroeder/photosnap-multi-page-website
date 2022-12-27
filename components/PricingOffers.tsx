import React, { useState } from 'react';

const PricingOffers: React.FC = () => {
  const [paymentInterval, setPaymentInterval] = useState<'monthly' | 'yearly'>(
    'monthly'
  );
  const [selectedPricingService, setSelectedPricingService] = useState<
    'basic' | 'pro' | 'business'
  >('pro');

  return (
    <div className="mx-auto grid w-full max-w-screen-md gap-14">
      <div className="flex flex-nowrap items-center gap-4">
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
    </div>
  );
};

export default PricingOffers;
