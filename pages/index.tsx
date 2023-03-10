import Image from 'next/image';
import Button from '../components/ui/Button';
import StoryPreviewCard from '../components/StoryPreviewCard';
import Features from '../components/Features';
import Layout from '../components/layout';
import PageHero from '../components/PageHero';
import { NextPage } from 'next';
import { stories } from '../data/stories';

const Home: NextPage = () => {
  /**
   * Line animation when scrolling (scrolling line through page)
   * Glowing, moving background image (lava effect)
   * Selected pricing model animation on switch
   */

  return (
    <Layout footerWithBetaBanner={false}>
      <PageHero
        image="/home/desktop/create-and-share.jpg"
        title="Create and share your photo stories."
        description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        link="/stories"
      />

      <section className="grid min-h-[40.625rem] md:grid-cols-[2fr_3fr] lg:grid-cols-[3fr_2fr]">
        <div className="relative min-h-[17.8125rem]">
          <Image
            src="/home/desktop/beautiful-stories.jpg"
            fill
            alt="Beautiful stories"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-8 px-8 py-20 md:py-0">
          <div className="grid max-w-xs gap-12">
            <div className="grid gap-2">
              <h2 className="text-[2.5rem] font-bold uppercase">
                Beautiful stories every time
              </h2>
              <p className="opacity-[60%]">
                We provide design templates to ensure your stories look
                terrific. Easily add photos, text, embed maps and media from
                other networks. Then share your story with everyone.
              </p>
            </div>

            <Button variant="text" text="View the stories" />
          </div>
        </div>
      </section>

      <section className="grid min-h-[40.625rem] md:grid-cols-[3fr_2fr] lg:grid-cols-[2fr_3fr]">
        <div className="relative min-h-[17.8125rem] md:order-2">
          <Image
            src="/home/desktop/designed-for-everyone.jpg"
            fill
            alt="Create and share"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-8 px-8 py-20 md:order-1 md:py-0">
          <div className="grid max-w-xs gap-12">
            <div className="grid gap-2">
              <h2 className="text-[2.5rem] font-bold uppercase">
                Designed for everyone
              </h2>
              <p className="opacity-[60%]">
                Photosnap can help you create stories that resonate with your
                audience. Our tool is designed for photographers of all levels,
                brands, businesses you name it.
              </p>
            </div>

            <Button variant="text" text="View the stories" />
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4">
        {stories.slice(1, 5).map(({ image, title, author, href }, i) => (
          <StoryPreviewCard
            key={i}
            image={image}
            author={author}
            title={title}
            href={href}
          />
        ))}
      </section>

      <Features show={3} />
    </Layout>
  );
};

export default Home;
