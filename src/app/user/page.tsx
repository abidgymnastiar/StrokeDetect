import { Metadata } from 'next';
import React from 'react';
import About from './components/home/About';
import AboutDetect from './components/home/AboutDetect';
import AboutDetection from './components/home/AboutDetection';
import AboutHealth from './components/home/AboutHealth';
import Home from './components/home/Home';
import Working from './components/home/Working';

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
