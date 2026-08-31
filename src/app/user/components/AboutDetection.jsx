import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import aboutDetectionImage from '@/assets/images/landing-page/about-3.png';

const AboutDetection = () => {
  return (
    <section className="relative lg:pb-24 md:pb-18 pb-12">
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-blue-700 overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-6 items-center px-6 py-10 lg:px-12">
            <div className="lg:col-span-6">
              <h1 className="mb-4 leading-normal text-4xl font-semibold text-white">
                Mulai Periksa Kesehatan Otak Anda Sekarang Juga
              </h1>
              <p className="text-lg mb-6 text-white/80">
                Deteksi risiko stroke lebih dini dengan mudah, cepat, dan aman bersama
                StrokeDetect.
              </p>
              <Link href="#prediksi" className="btn bg-white text-primary">
                <LuArrowRight className="size-4" />
                Mulai Deteksi Sekarang
              </Link>
            </div>

            <div className="lg:col-span-6">
              <Image
                src={aboutDetectionImage}
                alt="Ilustrasi aplikasi StrokeDetect"
                className="w-full max-w-sm h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetection;
