export type PricingModel = {
  level: 'Basic' | 'Pro' | 'Business';
  description: string;
  priceMonthly: number;
  priceYearly: number;
};

export const pricingModels: PricingModel[] = [
  {
    level: 'Basic',
    description:
      'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
    priceMonthly: 19,
    priceYearly: 190,
  },
  {
    level: 'Pro',
    description:
      'More advanced features available. Recommended for photography veterans and professionals.',
    priceMonthly: 39,
    priceYearly: 390,
  },
  {
    level: 'Business',
    description:
      'Additional features available such as more detailed metrics. Recommended for business owners.',
    priceMonthly: 99,
    priceYearly: 990,
  },
];
