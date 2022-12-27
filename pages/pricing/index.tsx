import { NextPage } from 'next';
import React from 'react';
import PageHero from '../../components/PageHero';
import Layout from '../../components/layout';
import PricingOffers from '../../components/PricingOffers';
import PricingComparisonTable from '../../components/PricingComparisonTable';

const PricingPage: NextPage = () => {
  return (
    <Layout>
      <PageHero
        title="Pricing"
        description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        image="/pricing/desktop/hero.jpg"
      />
      <section className="my-32">
        <PricingOffers />
      </section>

      <section className="my-32">
        <PricingComparisonTable />
      </section>
    </Layout>
  );
};

export default PricingPage;
