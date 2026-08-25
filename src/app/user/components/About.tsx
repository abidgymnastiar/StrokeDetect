import React from 'react';
import widgets4 from '@/assets/images/landing/widgets-4.jpg';
import widgets5 from '@/assets/images/landing/widgets-5.jpg';
import widgets6 from '@/assets/images/landing/widgets-6.jpg';
import widgets7 from '@/assets/images/landing/widgets-7.jpg';
import widgets8 from '@/assets/images/landing/widgets-8.jpg';
import widgets9 from '@/assets/images/landing/widgets-9.jpg';

import Image from 'next/image';
import { LuMoveRight } from 'react-icons/lu';

const About = () => {
  return (
    <section id="about" className="relative lg:pt-44 lg:pb-3 md:pt-34 md:pb-20 pt-30 pb-16">
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

          <div className="grid lg:grid-cols-12 gap-6 items-center">
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

          <div className="grid lg:grid-cols-12 gap-6 items-center lg:mt-12 mt-8">
            <div className="lg:col-span-6 lg:order-1 order-2">
              <Image src={widgets6} alt="" className="shadow-lg  rounded-xl" />
              <Image
                src={widgets7}
                alt=""
                className="shadow-lg -mt-24 ms-auto lg:me-24 md:me-40 rounded-xl"
              />
            </div>

            <div className="lg:col-span-5 lg:order-2 order-1 items-center">
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

export default About;
