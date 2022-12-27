import React from 'react';
import Layout from '../../components/layout';
import PageHero from '../../components/PageHero';
import Features from '../../components/Features';
import { NextPage } from 'next';

const FeaturesPage: NextPage = () => {
  return (
    <Layout>
      <PageHero
        title="Features"
        description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        image="/features/desktop/hero.jpg"
      />

      <Features show={0} />
    </Layout>
  );
};

export default FeaturesPage;
