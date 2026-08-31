import Image from 'next/image';
import Link from 'next/link';
import { LuArrowRight } from 'react-icons/lu';
import aboutHealthImage from '@/assets/images/landing-page/about-2.png';

const AboutHealth = () => {
  return (
    <section className="relative lg:pb-24 md:pb-18 pb-12">
      <div className="container">
        <div className="rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-3 items-center px-6 py-10 lg:px-12">
            <div className="lg:col-span-6 lg:order-1 order-2">
              <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Untuk Hidup Lebih Sehat
              </span>
              <h1 className="mb-4 leading-normal text-4xl font-semibold text-default-800">
                Langkah Sederhana untuk Menjaga Kesehatan
              </h1>
              <p className="text-lg mb-6 text-default-500">
                Menjaga kesehatan dapat dimulai dari kebiasaan sederhana dalam kehidupan
                sehari-hari. Perhatikan pola makan, lakukan aktivitas fisik secara rutin, istirahat
                yang cukup, dan pantau kondisi kesehatan secara berkala.
              </p>
              <Link href="#prediksi" className="btn bg-primary text-white">
                <LuArrowRight className="size-4" />
                Mulai Sekarang
              </Link>
            </div>

            <div className="lg:col-span-6 lg:order-2 order-1 h-full">
              <Image
                src={aboutHealthImage}
                alt="Ilustrasi menjaga kesehatan"
                className="w-full max-w-lg h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHealth;
