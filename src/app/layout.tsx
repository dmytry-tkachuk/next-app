"use client";
import { SessionProvider } from "next-auth/react";
import "./assets/styles/common.scss";
import "./assets/styles/reset.scss";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
