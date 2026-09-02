import { Metadata } from 'next';

import Riwayat from '../components/history/Riwayat';

export const metadata: Metadata = { title: 'Riwayat' };

const Page = () => {
  return <Riwayat />;
};

export default Page;
