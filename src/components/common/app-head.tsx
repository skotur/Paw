import Head from 'next/head';

export function AppHead(): JSX.Element {
  return (
    <Head>
      <title>PurrLife</title>
      <meta name='og:title' content='PurrLife' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' key='site-manifest' />
      <meta name='twitter:site' content='@purrlife' />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  );
}
