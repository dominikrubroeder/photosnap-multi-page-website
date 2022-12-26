import Head from 'next/head';
import Header from '../components/layout/Header';
import Arrow from '../components/svg/Arrow';
import Image from 'next/image';
import Button from '../components/ui/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photosnap multi page website</title>
        <meta name="description" content="Photosnap multi page websit" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
      </Head>

      <Header />

      <main>
        <section className="grid min-h-[40.625rem] md:grid-cols-[3fr_1fr] lg:grid-cols-[1fr_3fr]">
          <div className="relative min-h-[17.8125rem] md:order-2">
            <Image
              src="/home/desktop/create-and-share.jpg"
              fill
              alt="Create and share"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-8 bg-black px-8 py-4 text-white md:order-1">
            <div className="grid gap-4">
              <h1 className="text-[2.5rem] font-bold uppercase">
                Create and share your photo stories.
              </h1>
              <p className="opacity-[60%]">
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell stories and
                connect with others.
              </p>
            </div>

            <Button variant="text" text="Get an invite" />
          </div>
        </section>

        <section className="grid min-h-[40.625rem] md:grid-cols-[1fr_3fr] lg:grid-cols-[3fr_1fr]">
          <div className="relative min-h-[17.8125rem]">
            <Image
              src="/home/desktop/beautiful-stories.jpg"
              fill
              alt="Beautiful stories"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-8 px-8 py-4">
            <div className="grid gap-4">
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
        </section>

        <section className="grid min-h-[40.625rem] md:grid-cols-[3fr_1fr] lg:grid-cols-[1fr_3fr]">
          <div className="relative min-h-[17.8125rem] md:order-2">
            <Image
              src="/home/desktop/designed-for-everyone.jpg"
              fill
              alt="Create and share"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-8 px-8 py-4 md:order-1">
            <div className="grid gap-4">
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
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative cursor-pointer">
            <div className="relative min-h-[31.25rem] overflow-hidden">
              <Image
                src="/stories/desktop/mountains.jpg"
                fill
                alt="The montains story preview image"
                className="object-cover transition-all duration-300 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 z-20 grid w-full gap-4 p-10 text-white">
              <div>
                <h3 className="text-lg font-bold">The Mountains</h3>
                <small>by John Appleseed</small>
              </div>

              <hr className="w-full opacity-25 transition-all duration-300 group-hover:w-0" />

              <Button variant="text" text="Read story" />
            </div>

            <div className="absolute bottom-0 z-10 h-full w-full bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          <div className="group relative cursor-pointer">
            <div className="relative min-h-[31.25rem] overflow-hidden">
              <Image
                src="/stories/desktop/cityscapes.jpg"
                fill
                alt="Sunset Cityscapes story preview image"
                className="object-cover transition-all duration-300 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 z-20 grid w-full gap-4 p-10 text-white">
              <div>
                <h3 className="text-lg font-bold">Sunset Cityscapes</h3>
                <small>by Benjamin Cruz</small>
              </div>

              <hr className="w-full opacity-25 transition-all duration-300 group-hover:w-0" />

              <Button variant="text" text="Read story" />
            </div>

            <div className="absolute bottom-0 z-10 h-full w-full bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          <div className="group relative cursor-pointer">
            <div className="relative min-h-[31.25rem] overflow-hidden">
              <Image
                src="/stories/desktop/18-days-voyage.jpg"
                fill
                alt="18 days Voyage story preview image"
                className="object-cover transition-all duration-300 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 z-20 grid w-full gap-4 p-10 text-white">
              <div>
                <h3 className="text-lg font-bold">18 Days Voyage</h3>
                <small>by Alexei Borodin</small>
              </div>

              <hr className="w-full opacity-25 transition-all duration-300 group-hover:w-0" />

              <Button variant="text" text="Read story" />
            </div>

            <div className="absolute bottom-0 z-10 h-full w-full bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          <div className="group relative cursor-pointer">
            <div className="relative min-h-[31.25rem] overflow-hidden">
              <Image
                src="/stories/desktop/architecturals.jpg"
                fill
                alt="The montains story preview image"
                className="object-cover transition-all duration-300 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 z-20 grid w-full gap-4 p-10 text-white">
              <div>
                <h3 className="text-lg font-bold">Architecturals</h3>
                <small>by Samantha Brooke</small>
              </div>

              <hr className="w-full opacity-25 transition-all duration-300 group-hover:w-0" />

              <Button variant="text" text="Read story" />
            </div>

            <div className="absolute bottom-0 z-10 h-full w-full bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
