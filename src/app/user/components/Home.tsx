import React from 'react';
import widgets4 from '@/assets/images/landing-page/about-1.png';
import widgets5 from '@/assets/images/landing/widgets-5.jpg';

import Image from 'next/image';

const Home = () => {
  return (
    <section id="home" className="relative lg:pt-44 lg:pb-3 md:pt-34 md:pb-20 pt-30 pb-16">
      <div className="container">
        <div className="flex flex-col lg:gap-y-20 gap-y-12">
          <div className="text-center lg:w-3xl mx-auto">
            <h1 className="mb-6 leading-relaxed text-4xl font-semibold text-default-800">
              Mendeteksi Lebih Cepat Penyakit
              <span className="relative inline-block px-2 mx-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-primary/10 before:rounded-md before:backdrop-blur-xl">
                <span className="relative text-primary">Stroke</span>
              </span>{' '}
            </h1>
            <p className="text-lg text-default-500">
              Kenali potensi risiko stroke lebih awal dengan mudah. Sistem kami menganalisis data
              kesehatan Anda untuk memberikan hasil prediksi sebagai langkah awal dalam meningkatkan
              kesadaran dan menjaga kesehatan.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-7 items-center">
            <div className="lg:col-span-5">
              <h1 className="mb-3 leading-normal capitalize text-4xl font-semibold text-default-800">
                Kenali Risiko Stroke Lebih Awal dengan Mudah
              </h1>
              <p className="text-lg mb-6 text-default-500">
                Sistem StrokeDetect membantu menganalisis data kesehatan yang Anda masukkan untuk
                memberikan informasi awal mengenai potensi risiko stroke. Proses deteksi dilakukan
                secara cepat dan sederhana melalui beberapa tahapan.
              </p>
            </div>

            <div className="lg:col-span-6">
              <Image src={widgets4} alt="" className="shadow-lg lg:ms-auto rounded-xl" />
              {/* <Image src={widgets5} alt="" className="shadow-lg -mt-24 rounded-xl ms-auto mr-24" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
