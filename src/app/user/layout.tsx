import type { ReactNode } from 'react';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default UserLayout;
