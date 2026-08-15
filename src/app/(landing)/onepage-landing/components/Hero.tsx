import Link from 'next/link';
import React from 'react';
import { LuRocket, LuShoppingCart } from 'react-icons/lu';

const Hero = () => {
  return (
    <section className="relative lg:pt-44 lg:pb-36 md:pt-34 md:pb-20 pt-30 pb-16">
      <div className="absolute rotate-45 size-125 border border-dashed border-t-default-300  border-l-default-300  border-r-default-300/40 border-b-default-700  rounded-full end-40 -bottom-62.5 z-20 lg:block hidden"></div>

      <div className="absolute rotate-45 size-175 border border-dashed border-t-default-300  border-l-default-300  border-r-default-300/40 border-b-default-700 rounded-full end-16 -bottom-87.5 z-20 lg:block hidden"></div>

      <div className="container">
        <div className="grid lg:grid-cols-2">
          <div>
            <h1 className="mb-8 leading-relaxed md:text-5xl text-4xl font-semibold text-default-800">
              Deteksi Dini untuk Membantu Menjaga Kesehatan dari
              <span className="relative inline-block px-2 mx-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-primary/10 before:rounded-md before:backdrop-blur-xl">
                <span className="relative text-primary">Stroke</span>
              </span>
            </h1>
            <p className="mb-6 text-lg text-default-500">
              Sistem berbasis teknologi yang dirancang untuk membantu mengidentifikasi potensi
              risiko secara cepat berdasarkan data kesehatan yang diberikan. Dengan proses yang
              sederhana dan mudah digunakan, sistem memberikan hasil deteksi awal untuk membantu
              meningkatkan kesadaran terhadap risiko stroke. Gunakan hasil deteksi sebagai informasi
              pendukung dan segera konsultasikan dengan tenaga medis untuk pemeriksaan lebih lanjut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
