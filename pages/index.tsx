import Image from 'next/image';
import Button from '../components/ui/Button';
import StoryPreviewCard from '../components/StoryPreviewCard';
import Features from '../components/Features';
import Layout from '../components/layout';
import PageHero from '../components/PageHero';

export default function Home() {
  return (
    <Layout>
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
        <StoryPreviewCard
          image="/stories/desktop/mountains.jpg"
          author="John Appleseed"
          title="The Mountains"
        />

        <StoryPreviewCard
          image="/stories/desktop/cityscapes.jpg"
          author="Benjamin Cruz"
          title="Sunset Cityscapes"
        />

        <StoryPreviewCard
          image="/stories/desktop/18-days-voyage.jpg"
          author="Alexei Borodin"
          title="18 Days Voyage"
        />

        <StoryPreviewCard
          image="/stories/desktop/architecturals.jpg"
          author="Samantha Brooke"
          title="Architecturals"
        />
      </section>

      <Features show={3} />
    </Layout>
  );
}
