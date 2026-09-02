import { Metadata } from 'next';
import React from 'react';
import About from './beranda/components/About';
import AboutDetect from './beranda/components/AboutDetect';
import AboutDetection from './beranda/components/AboutDetection';
import AboutHealth from './beranda/components/AboutHealth';
import Home from './beranda/components/Home';
import Working from './beranda/components/Working';

export const metadata: Metadata = { title: 'Home' };
const Page = () => {
  return (
    <>
      <Home />
      <About />
      <Working />
      <AboutDetect />
      <AboutHealth />
      <AboutDetection />
    </>
  );
};

export default Page;
