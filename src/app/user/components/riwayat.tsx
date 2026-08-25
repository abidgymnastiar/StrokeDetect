import Link from 'next/link';
import { LuHistory, LuLock } from 'react-icons/lu';
import { auth } from '@/auth';

const Riwayat = async () => {
  const session = await auth();

  if (!session) {
    return (
      <section id="riwayat" className="relative lg:pb-24 md:pb-18 pb-12">
        <div className="container">
          <div className="flex flex-col items-center gap-y-4 text-center card py-16 px-6">
            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center">
              <LuLock className="size-6 text-primary" />
            </div>
            <h1 className="text-3xl font-semibold text-default-800">Riwayat Pemeriksaan Terkunci</h1>
            <p className="text-lg text-default-500 max-w-lg">
              Silakan login terlebih dahulu untuk melihat riwayat pemeriksaan Anda.
            </p>
            <Link href="/login" className="btn bg-primary text-white mt-2">
              Login untuk Melanjutkan
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="riwayat" className="relative lg:pb-24 md:pb-18 pb-12">
      <div className="container">
        <div className="flex flex-col items-center gap-y-4 text-center card py-16 px-6">
          <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center">
            <LuHistory className="size-6 text-primary" />
          </div>
          <h1 className="text-3xl font-semibold text-default-800">Riwayat Pemeriksaan</h1>
          <p className="text-lg text-default-500 max-w-lg">
            Belum ada riwayat pemeriksaan. Riwayat hasil deteksi Anda akan tampil di sini.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Riwayat;
