import React, { useEffect, useState } from 'react';
import { pricingModels } from '../data/pricing';
import { motion, useAnimationControls } from 'framer-motion';

const PricingOffers: React.FC = () => {
  const controls = useAnimationControls();
  const [paymentInterval, setPaymentInterval] = useState<'monthly' | 'yearly'>(
    'monthly'
  );
  const [selectedPricingLevel, setSelectedPricingLevel] = useState<
    'Basic' | 'Pro' | 'Business'
  >('Pro');

  useEffect(() => {
    if (selectedPricingLevel === 'Basic')
      controls.start({
        translateX: '0%',
        opacity: 1,
        visibility: 'visible',
        scale: 0.9,
        transition: { ease: 'easeOut', duration: 0.6 },
        width: '33%',
      });
    if (selectedPricingLevel === 'Pro')
      controls.start({
        translateX: '100%',
        opacity: 1,
        visibility: 'visible',
        scale: 0.9,
        transition: { ease: 'easeOut', duration: 0.6 },
        width: '33%',
      });
    if (selectedPricingLevel === 'Business')
      controls.start({
        translateX: '200%',
        opacity: 1,
        visibility: 'visible',
        scale: 0.9,
        transition: { ease: 'easeOut', duration: 0.6 },
        width: '33%',
      });
  }, [controls, selectedPricingLevel]);

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
          className="flex w-10 cursor-pointer rounded-full bg-brand-lightest-grey p-1 transition-all"
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

      <div className="relative grid gap-8 text-center lg:grid-cols-3 lg:gap-4">
        {pricingModels.map(
          ({ level, description, priceMonthly, priceYearly }, i) => (
            <div
              key={i}
              className={`relative mx-auto grid max-w-2xl cursor-pointer gap-8 py-14 px-10 transition-all active:scale-75 ${
                selectedPricingLevel === level
                  ? 'z-10 scale-100 bg-black text-white'
                  : 'scale-90 bg-brand-lightest-grey'
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

        <motion.div
          initial={{ translateX: '100%', width: '0%' }}
          animate={controls}
          exit={{ translateX: '100%' }}
          className="absolute left-0 -z-10 h-full bg-brand opacity-0 blur-3xl"
        ></motion.div>
      </div>
    </div>
  );
};

export default PricingOffers;
