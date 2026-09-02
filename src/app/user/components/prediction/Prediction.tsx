import React from 'react';
import Link from 'next/link';
import { LuLock } from 'react-icons/lu';

import { auth } from '@/auth';
import PredictionForm from './PredictionForm';

const Prediction = async () => {
  const session = await auth();

  return (
    <section
      id="prediksi"
      className="relative scroll-mt-28 bg-blue-50 pt-28 pb-16 lg:pt-40 lg:pb-24"
    >
      <div className="container">
        <div className="flex flex-col gap-y-12">
          <div className="text-center lg:w-2xl mx-auto">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              Prediksi
            </span>
            <h2 className="mb-4 leading-normal text-4xl font-semibold text-default-800">
              Cek Risiko Stroke Anda Sekarang
            </h2>
            <p className="text-lg text-default-500">
              Isi data kesehatan dan gejala yang Anda alami, lalu sistem akan memperkirakan tingkat
              risiko stroke Anda.
            </p>
          </div>

          {session ? (
            <PredictionForm />
          ) : (
            <div className="mx-auto flex max-w-lg flex-col items-center gap-y-4 rounded-2xl border border-default-200 bg-card px-6 py-14 text-center shadow-sm">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                <LuLock className="size-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-default-800">Fitur Prediksi Terkunci</h3>
              <p className="max-w-md text-default-500">
                Silakan login terlebih dahulu untuk mengakses fitur prediksi risiko stroke.
              </p>
              <Link href="/login" className="btn bg-primary text-white mt-2">
                Login untuk Melanjutkan
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Prediction;
