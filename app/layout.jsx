'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import {useState } from 'react'
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import { Theme } from '@radix-ui/themes';

import ThemeToggle from './components/ThemeToggle';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const [mode, setMode] = useState(false);

  const modeHandler = () => {
    setMode((prevMode) => !prevMode);
  };

  return (

    <html lang="en">
      <body className={inter.className}>

        <Header />
        <Theme appearance={mode ? 'dark' : 'light'}>
          <ThemeToggle mode={mode} modeHandler={modeHandler} />
          {/* <main className={`grow ml-12 p-6 ${mode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
            {children}
          </main> */}
          <main>{children}</main>
          <Footer />
        </Theme>
      
        
        </body>
        
    </html>
    
  );
}
