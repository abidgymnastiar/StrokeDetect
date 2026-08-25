import React from 'react';
import widgets4 from '@/assets/images/landing-page/about-1.png';
import widgets5 from '@/assets/images/landing/widgets-5.jpg';
import widgets6 from '@/assets/images/landing/widgets-6.jpg';
import widgets7 from '@/assets/images/landing/widgets-7.jpg';
import widgets8 from '@/assets/images/landing/widgets-8.jpg';
import widgets9 from '@/assets/images/landing/widgets-9.jpg';

import Image from 'next/image';

const About = () => {
  return (
    <section id="tentang-stroke" className="relative lg:pb-24 md:pb-18 pb-12">
      <div className="container">
        <div className="flex flex-col lg:gap-y-20 gap-y-12">
          <div className="grid lg:grid-cols-12 gap-6 items-center lg:mt-12 mt-8">
            <div className="lg:col-span-6 lg:order-1 order-2">
              <Image src={widgets6} alt="" className="shadow-lg  rounded-xl" />
              <Image
                src={widgets7}
                alt=""
                className="shadow-lg -mt-24 ms-auto lg:me-24 md:me-40 rounded-xl"
              />
            </div>

            <div className="lg:col-span-5 lg:order-2 order-1 items-center" id="about">
              <h1 className="mb-3 leading-normal capitalize text-4xl font-semibold text-default-800">
                Langkah Sederhana untuk Menjaga Kesehatan
              </h1>
              <p className="text-lg mb-6 text-default-500">
                Menjaga kesehatan dapat dimulai dari kebiasaan sederhana dalam kehidupan
                sehari-hari. Perhatikan pola makan, lakukan aktivitas fisik secara rutin, istirahat
                yang cukup, dan pantau kondisi kesehatan secara berkala. Dengan memahami kondisi
                tubuh lebih baik, Anda dapat lebih peduli terhadap kesehatan dan mengambil langkah
                yang tepat bila diperlukan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
