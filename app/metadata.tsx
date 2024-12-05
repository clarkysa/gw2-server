// app/metadata.tsx
import Head from 'next/head';

export default function Metadata() {
  const metadata = {
    title: "Gatitos World 2 - La mejor comunidad",
    description: "Únete a Gatitos World 2, la comunidad más activa de Minecraft con eventos, sorteos y más.",
  };

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph (OG) Metatags */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content="https://gatitos2.world/images/hero-bg.jpg" />
      <meta property="og:url" content="https://gatitos2.world" />
      <meta property="og:type" content="website" />

      {/* Twitter Metatags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content="https://gatitos2.world/images/hero-bg.jpg" />

      {/* Favicon */}
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
  );
}
