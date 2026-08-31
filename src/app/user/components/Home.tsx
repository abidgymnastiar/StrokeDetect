import React from 'react';
import homeIllustration from '@/assets/images/landing-page/home.png';
import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';

const Home = () => {
  return (
    <section id="home" className="relative lg:pt-44 lg:pb-16 md:pt-34 md:pb-20 pt-30 pb-16 bg-blue-50">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              Sistem Deteksi Dini Stroke
            </span>
            <h1 className="mb-4 leading-normal text-4xl font-semibold text-default-800">
              Kenali Risiko <span className="text-primary">Stroke</span> Lebih Awal dengan Mudah
            </h1>
            <p className="text-lg mb-8 text-default-500">
              StrokeDetect membantu Anda mengenali risiko stroke sejak dini melalui analisis data
              kesehatan dan gejala yang Anda masukkan. Deteksi lebih cepat, langkah pencegahan
              lebih baik untuk masa depan yang lebih sehat.
            </p>
            <Link href="#prediksi" className="btn bg-primary text-white">
              <LuArrowRight className="size-4" />
              Mulai Sekarang
            </Link>
          </div>

          <div className="lg:col-span-6">
            <Image src={homeIllustration} alt="Ilustrasi sistem deteksi dini stroke" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
