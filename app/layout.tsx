// app/layout.tsx
import './globals.css'; // Importa los estilos globales de Tailwind
import '../styles/globals.css';  // Importa el archivo CSS global

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
