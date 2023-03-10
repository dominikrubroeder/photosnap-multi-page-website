import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { stories } from '../../data/stories';
import StoryHero from '../../components/StoryHero';
import Layout from '../../components/layout';
import Arrow from '../../components/svg/Arrow';

const Story: NextPage = () => {
  const router = useRouter();
  const { story } = router.query;
  const storyData = stories.find(
    (currStory) => currStory.title.toLowerCase().replaceAll(' ', '-') === story
  );

  return (
    <Layout footerWithBetaBanner={false}>
      <div className="relative">
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 z-50 rounded-md bg-white/30 p-4 backdrop-blur-md"
        >
          <Arrow className="-scale-100" />
        </button>
        <StoryHero {...(storyData ?? stories[0])} />
      </div>
    </Layout>
  );
};

export default Story;
