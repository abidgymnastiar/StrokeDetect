import { Metadata } from 'next';

import Riwayat from './components/Riwayat';

export const metadata: Metadata = { title: 'Riwayat' };

const Page = () => {
  return <Riwayat />;
};

export default Page;
