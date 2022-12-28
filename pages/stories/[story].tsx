import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { stories } from '../../data/stories';
import StoryHero from '../../components/StoryHero';
import Layout from '../../components/layout';

const Story: NextPage = () => {
  const router = useRouter();
  const { story } = router.query;
  const storyData = stories.find(
    (currStory) => currStory.title.toLowerCase().replaceAll(' ', '-') === story
  );

  return (
    <Layout footerWithBetaBanner={false}>
      <StoryHero {...(storyData ?? stories[0])} />
    </Layout>
  );
};

export default Story;
