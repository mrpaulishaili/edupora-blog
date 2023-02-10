import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

export default function Format({ children }) {
  return (
    <>
      <Head>
        <title>EDUPORA Blog</title>
        <meta name="description" content="Staying updated!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
