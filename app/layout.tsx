import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'Mehroj Tursunov — Developer & UI/UX Designer',
  description: 'Toronto-based front-end developer and UI/UX designer. Explore web projects, design work, skills, and experience.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
