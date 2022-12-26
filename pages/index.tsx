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
        <section className="grid min-h-[40.625rem] md:grid-cols-[1fr_3fr]">
          <div className="flex flex-col items-center justify-center gap-8 bg-black p-4 text-white">
            <div className="grid gap-4">
              <h1 className="text-[2.5rem] font-bold">
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

          <div className="relative">
            <Image
              src="/home/desktop/create-and-share.jpg"
              fill
              alt="Create and share"
              className="object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
