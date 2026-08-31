import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import aboutDetectImage from '@/assets/images/landing-page/about-1.png';

const AboutDetect = () => {
  return (
    <section className="relative lg:pb-24 md:pb-18 pb-12">
      <div className="container">
        <div className="rounded-2xl bg-primary/5 overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-6 items-center px-6 py-10 lg:px-12">
            <div className="lg:col-span-6">
              <Image
                src={aboutDetectImage}
                alt="Ilustrasi tentang StrokeDetect"
                className="w-full max-w-sm h-auto mx-auto"
              />
            </div>

            <div className="lg:col-span-6">
              <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Tentang StrokeDetect
              </span>
              <h1 className="mb-4 leading-normal text-4xl font-semibold text-default-800">
                Deteksi Dini, Cegah Stroke
              </h1>
              <p className="text-lg mb-6 text-default-500">
                StrokeDetect adalah sistem deteksi dini stroke berbasis data kesehatan dan gejala,
                yang menggunakan algoritma C4.5 untuk memprediksi risiko stroke secara akurat.
              </p>
              <Link href="#prediksi" className="btn bg-primary text-white">
                <LuArrowRight className="size-4" />
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetect;
