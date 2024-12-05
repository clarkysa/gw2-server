// app/metadata.tsx
import { Metadata } from 'next';
import { headers } from 'next/headers'; // Solo para uso en Server Components

export default function PageMetadata() {
  const headersList = headers();
  const host = headersList.get('host'); // Ejemplo de uso de headers del servidor

  return (
    <Metadata>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Gatitos World 2 - Conéctate y juega" />
      <meta property="og:image" content="URL_DE_LA_IMAGEN_AQUI" />
      <meta property="og:site_name" content="Gatitos World 2" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/favicon.ico" />
    </Metadata>
  );
}
