import Link from 'next/link';
import { LuHistory, LuLock } from 'react-icons/lu';

import { auth } from '@/auth';

const Riwayat = async () => {
  const session = await auth();

  return (
    <section
      id="riwayat"
      className="relative scroll-mt-28 bg-blue-50 pt-28 pb-16 lg:pt-40 lg:pb-24"
    >
      <div className="container">
        <div className="flex flex-col gap-y-12">
          <div className="text-center lg:w-2xl mx-auto">
            <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              Riwayat
            </span>
            <h2 className="mb-4 leading-normal text-4xl font-semibold text-default-800">
              Riwayat Pemeriksaan Anda
            </h2>
            <p className="text-lg text-default-500">
              Lihat kembali hasil deteksi risiko stroke yang pernah Anda lakukan.
            </p>
          </div>

          {session ? (
            <div className="mx-auto flex max-w-lg flex-col items-center gap-y-4 rounded-2xl border border-default-200 bg-card px-6 py-14 text-center shadow-sm">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                <LuHistory className="size-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-default-800">Belum Ada Riwayat</h3>
              <p className="max-w-md text-default-500">
                Riwayat hasil deteksi Anda akan tampil di sini setelah Anda melakukan pemeriksaan.
              </p>
              <Link href="/user/prediction" className="btn bg-primary text-white mt-2">
                Mulai Pemeriksaan
              </Link>
            </div>
          ) : (
            <div className="mx-auto flex max-w-lg flex-col items-center gap-y-4 rounded-2xl border border-default-200 bg-card px-6 py-14 text-center shadow-sm">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                <LuLock className="size-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-default-800">Riwayat Pemeriksaan Terkunci</h3>
              <p className="max-w-md text-default-500">
                Silakan login terlebih dahulu untuk melihat riwayat pemeriksaan Anda.
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

export default Riwayat;
