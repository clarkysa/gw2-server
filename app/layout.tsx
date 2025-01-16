import './globals.css'; // Importa los estilos globales de Tailwind
import '../styles/globals.css';  // Importa el archivo CSS global

export const metadata = {
  title: "GW2 | Página Inicial", // Título de la página
  description: "Bienvenido al mundo de los gatitos nwn.", // Descripción de la página
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        {/* Otros metadatos opcionales */}
      </head>
      <body>{children}</body>
    </html>
  );
}
