import type { ReactNode } from 'react';

import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

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
