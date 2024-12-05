// MetaTags.tsx
import React from 'react';
import Head from 'next/head';

const MetaTags = () => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Gatitos World 2 es un servidor para gamers con eventos exclusivos, sorteos y una comunidad activa. ¡Conéctate ahora!"
    />
    <meta
      name="keywords"
      content="Gatitos World, servidor de gamers, comunidad, discord, juegos, eventos, sorteos, contenidos exclusivos"
    />
    <meta name="author" content="Gatitos World 2" />
    <link rel="icon" href="/favicon.ico" />
    <title>Gatitos World 2 - Comunidad de Gamers</title>
  </Head>
);

export default MetaTags;
