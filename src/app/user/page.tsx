import { Metadata } from 'next';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Prediksi from './components/prediksi';
import Footer from './components/Footer';
import Working from './components/working';

export const metadata: Metadata = { title: 'Home' };
const Page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Working />
      <Prediksi />
      <Footer />
    </>
  );
};

export default Page;
