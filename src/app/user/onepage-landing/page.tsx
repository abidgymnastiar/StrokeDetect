import { Metadata } from 'next';
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export const metadata: Metadata = { title: 'One Page Landing' };
const Page = () => {
  return (
    <>
      <Navbar />
      <About />
      <Pricing />
      <Footer />
    </>
  );
};

export default Page;
