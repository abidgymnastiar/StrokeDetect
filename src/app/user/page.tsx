import { Metadata } from 'next';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Working from './components/working';
import AboutDetect from './components/AboutDetect';
import AboutHealth from './components/AboutHealth';
import AboutDetection from './components/AboutDetection';

export const metadata: Metadata = { title: 'Home' };
const Page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Working />
      <AboutDetect />
      <AboutHealth />
      <AboutDetection />
      <Footer />
    </>
  );
};

export default Page;
