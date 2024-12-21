'use client';

import { useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import '@styles/common.scss';
import '@styles/reset.scss';
import Header from '@components/Header';
import { setTheme } from '@utils/setTheme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => setTheme(), []);

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
