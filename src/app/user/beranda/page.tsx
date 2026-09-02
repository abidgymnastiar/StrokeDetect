import type { Metadata } from 'next';

import About from '../components/home/About';
import AboutDetect from '../components/home/AboutDetect';
import AboutDetection from '../components/home/AboutDetection';
import AboutHealth from '../components/home/AboutHealth';
import Home from '../components/home/Home';
import Working from '../components/home/Working';

export const metadata: Metadata = { title: 'Beranda' };

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
