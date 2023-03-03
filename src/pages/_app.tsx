import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Ronja Pietrzykowska</title>
        <meta
          name="description"
          content="Personal portfolio website by Ronja Pietrzykowska showcasing projects and technical skills as a full stack web developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
