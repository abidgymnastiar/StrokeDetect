import { Metadata } from 'next';

import Prediction from './components/Prediction';

export const metadata: Metadata = { title: 'Prediksi' };

const Page = () => {
  return <Prediction />;
};

export default Page;
