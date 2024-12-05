// app/metadata.tsx
import { headers } from 'next/headers';

export function Metadata() {
  const headerList = headers();
  const urlHeader = headerList.get('x-url');
  const url = urlHeader ? new URL(urlHeader) : undefined;

  let metadata = {
    title: "Gatitos World 2 - La mejor comunidad",
    description: "Únete a Gatitos World 2, la comunidad más activa de Minecraft con eventos, sorteos y más.",
  };

  if (url) {
    const path = url.pathname;
    metadata = {
      ...metadata,
      metadataBase: new URL("https://gatitos2.world"),
      alternates: {
        languages: {
          "x-default": path,
          "en": `${path}/?hl=en-US`,
          "es": `${path}/?hl=es-ES`,
        },
      },
    };
  }

  return metadata; // Devuelve solo los datos del servidor
}
