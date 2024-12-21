'use client';

import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import '@styles/common.scss';
import '@styles/reset.scss';
import Header from '@components/Header';
import { setTheme } from '@utils/setTheme';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => setTheme(), []);

  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
