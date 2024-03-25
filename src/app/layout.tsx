import '../output.css'; // Aquí está todo el css

import type { Metadata } from "next";
import { Header } from './Components/Header';
export const metadata: Metadata = {
  title: "Driscolls",
  description: "Prueba técnica driscolls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
