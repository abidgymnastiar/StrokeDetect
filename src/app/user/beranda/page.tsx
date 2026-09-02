import type { Metadata } from 'next';

import About from './components/About';
import AboutDetect from './components/AboutDetect';
import AboutDetection from './components/AboutDetection';
import AboutHealth from './components/AboutHealth';
import Home from './components/Home';
import Working from './components/Working';

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
