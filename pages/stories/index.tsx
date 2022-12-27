import React, { useState } from 'react';
import Layout from '../../components/layout';
import { stories } from '../../data/stories';
import StoryPreviewCard from '../../components/StoryPreviewCard';
import StoryHero from '../../components/StoryHero';
import { NextPage } from 'next';

const StoriesPage: NextPage = () => {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <Layout>
      <StoryHero {...stories[activeStory]} />

      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        {stories.map((story, i) => {
          if (i === 0) return null;
          return (
            <div key={i} onClick={() => setActiveStory(i)}>
              <StoryPreviewCard {...story} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default StoriesPage;
