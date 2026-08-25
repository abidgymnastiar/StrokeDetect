import React from 'react';
import widgets4 from '@/assets/images/landing-page/about-1.png';
import widgets5 from '@/assets/images/landing/widgets-5.jpg';
import widgets6 from '@/assets/images/landing/widgets-6.jpg';
import widgets7 from '@/assets/images/landing/widgets-7.jpg';
import widgets8 from '@/assets/images/landing/widgets-8.jpg';
import widgets9 from '@/assets/images/landing/widgets-9.jpg';

import Image from 'next/image';

const Working = () => {
  return (
    <section id="cara-kerja" className="relative lg:pb-24 md:pb-18 pb-12">
      <div className="container">
        <div className="flex flex-col lg:gap-y-20 gap-y-12">
          <div className="grid lg:grid-cols-12 gap-6 items-center lg:mt-12 mt-8">
            <div className="lg:col-span-5">
              <h1 className="mb-3 leading-normal capitalize text-4xl font-semibold text-default-800">
                Mudah Digunakan, Mudah Dipahami
              </h1>
              <p className="text-lg mb-4 text-default-500">
                Tidak perlu proses yang rumit untuk mendapatkan informasi awal mengenai kondisi
                kesehatan Anda. StrokeDetect menyediakan alur yang sederhana, mulai dari mengisi
                data kesehatan hingga melihat hasil deteksi.
              </p>
              <ul className="flex flex-col gap-y-3 mb-6 text-lg list-disc list-inside text-default-900">
                <li>Isi Data Kesehatan</li>

                <li>Proses Analisis Otomatis</li>

                <li>Lihat Hasil Deteksi</li>

                <li>Pantau Riwayat Pemeriksaan</li>
              </ul>
            </div>

            <div className="lg:col-span-6">
              <Image src={widgets8} alt="" className="shadow-lg lg:ms-auto me-auto rounded-xl" />
              <Image
                src={widgets9}
                alt=""
                className="shadow-lg -mt-24 rounded-xl ms-auto lg:me-24 mr-40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
