import React from 'react';
import { LuClock, LuHeartPulse, LuSettings, LuShieldCheck } from 'react-icons/lu';

type Feature = {
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: LuShieldCheck,
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    title: 'Akurat & Terpercaya',
    description: 'Menggunakan metode data mining C4.5 untuk hasil prediksi yang lebih akurat.',
  },
  {
    icon: LuSettings,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/10',
    title: 'Mudah Digunakan',
    description:
      'Tampilan sederhana dan alur yang jelas, sehingga mudah dipahami oleh semua pengguna.',
  },
  {
    icon: LuClock,
    iconColor: 'text-success',
    iconBg: 'bg-success/10',
    title: 'Cek Kapan Saja',
    description: 'Lakukan deteksi risiko stroke dengan cepat, menggunakan website di mana saja dan kapan saja.',
  },
  {
    icon: LuHeartPulse,
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-500/10',
    title: 'Fokus pada Pencegahan',
    description: 'Bantu Anda mengambil langkah lebih awal untuk hidup yang lebih sehat dan terjaga.',
  },
];

const About = () => {
  return (
    <section id="tentang-stroke" className="relative lg:py-24 md:pb-18 pb-12 bg-blue-50">
      <div className="container">
        <div className="flex flex-col gap-y-12">
          <div className="text-center lg:w-2xl mx-auto">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              Mengapa StrokeDetect?
            </span>
            <h1 className="mb-4 leading-normal text-4xl font-semibold text-default-800">
              Solusi Cerdas untuk Deteksi Dini Stroke
            </h1>
            <p className="text-lg text-default-500">
              Kami menghadirkan sistem yang mudah digunakan, akurat, dan dapat diandalkan untuk
              membantu Anda menjaga kesehatan otak.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
            {features.map(feature => (
              <div key={feature.title} className="card">
                <div className="card-body">
                  <div
                    className={`size-14 rounded-full flex items-center justify-center mb-4 ${feature.iconBg}`}
                  >
                    <feature.icon className={`size-6 ${feature.iconColor}`} />
                  </div>
                  <h5 className="mb-2 text-lg font-semibold text-default-800">{feature.title}</h5>
                  <p className="text-default-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
