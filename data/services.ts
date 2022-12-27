export type Service = {
  title: string;
  isBasic: boolean;
  isPro: boolean;
  isBusiness: boolean;
};

export const services: Service[] = [
  {
    title: 'Unlimited story posting',
    isBasic: true,
    isPro: true,
    isBusiness: true,
  },
  {
    title: 'Unlimited photo upload',
    isBasic: true,
    isPro: true,
    isBusiness: true,
  },
  {
    title: 'Embedding custom content',
    isBasic: true,
    isPro: true,
    isBusiness: true,
  },
  {
    title: 'Customize meta data',
    isBasic: false,
    isPro: true,
    isBusiness: true,
  },
  {
    title: 'Advanced metrics',
    isBasic: false,
    isPro: false,
    isBusiness: true,
  },
  {
    title: 'Photo downloads',
    isBasic: false,
    isPro: false,
    isBusiness: true,
  },
  {
    title: 'Search engine indexing',
    isBasic: false,
    isPro: false,
    isBusiness: true,
  },
  {
    title: 'Custom analytics',
    isBasic: false,
    isPro: false,
    isBusiness: true,
  },
];
