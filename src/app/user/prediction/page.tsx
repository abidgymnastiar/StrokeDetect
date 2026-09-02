import { Metadata } from 'next';

import Prediction from '../components/prediction/Prediction';

export const metadata: Metadata = { title: 'Prediksi' };

const Page = () => {
  return <Prediction />;
};

export default Page;
