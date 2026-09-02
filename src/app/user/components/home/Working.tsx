import React from 'react';
import { LuClipboardCheck, LuClipboardPen, LuClock, LuSettings } from 'react-icons/lu';

type Step = {
  number: number;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: 1,
    icon: LuClipboardPen,
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    title: 'Isi Data Kesehatan',
    description: 'Masukkan informasi kesehatan dan gejala yang Anda alami.',
  },
  {
    number: 2,
    icon: LuSettings,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/10',
    title: 'Proses Analisis Otomatis',
    description: 'Sistem akan menganalisis data yang Anda masukkan secara otomatis.',
  },
  {
    number: 3,
    icon: LuClipboardCheck,
    iconColor: 'text-success',
    iconBg: 'bg-success/10',
    title: 'Lihat Hasil Deteksi',
    description: 'Dapatkan hasil prediksi risiko stroke secara cepat dan akurat.',
  },
  {
    number: 4,
    icon: LuClock,
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-500/10',
    title: 'Pantau Riwayat Pemeriksaan',
    description: 'Lihat kembali riwayat pemeriksaan yang pernah Anda lakukan.',
  },
];

const Working = () => {
  return (
    <section id="cara-kerja" className="relative lg:py-24 md:pb-18 pb-12">
      <div className="container">
        <div className="flex flex-col gap-y-12">
          <div className="text-center lg:w-2xl mx-auto">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              Cara Kerja
            </span>
            <h1 className="mb-4 leading-normal text-4xl font-semibold text-default-800">
              Mudah Digunakan, Mudah Dipahami
            </h1>
            <p className="text-lg text-default-500">
              Hanya dalam beberapa langkah sederhana, Anda sudah bisa mendapatkan hasil deteksi
              risiko stroke dengan cepat dan akurat.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
            {steps.map(step => (
              <div key={step.number} className="card relative">
                <div className="card-body">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`size-7 rounded-full flex items-center justify-center text-xs font-semibold text-white ${
                        step.iconColor === 'text-primary'
                          ? 'bg-primary'
                          : step.iconColor === 'text-purple-500'
                            ? 'bg-purple-500'
                            : step.iconColor === 'text-success'
                              ? 'bg-success'
                              : 'bg-rose-500'
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className={`size-11 rounded-lg flex items-center justify-center ${step.iconBg}`}>
                      <step.icon className={`size-5 ${step.iconColor}`} />
                    </div>
                  </div>
                  <h5 className="mb-2 text-lg font-semibold text-default-800">{step.title}</h5>
                  <p className="text-default-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
