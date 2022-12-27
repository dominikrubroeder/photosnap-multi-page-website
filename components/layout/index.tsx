import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  footerWithBetaBanner?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, footerWithBetaBanner }) => {
  return (
    <>
      <Head>
        <title>Photosnap multi page website</title>
        <meta name="description" content="Photosnap multi page websit" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer withBetaBanner={footerWithBetaBanner} />
    </>
  );
};

export default Layout;
