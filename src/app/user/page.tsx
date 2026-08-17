import { Metadata } from 'next';
import { auth, signOut } from '@/auth';

export const metadata: Metadata = { title: 'User Dashboard' };

const Page = async () => {
  const session = await auth();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold text-default-900 mb-2">User Dashboard</h1>
      <p className="text-default-500 mb-6">
        Selamat datang, {session?.user?.name ?? session?.user?.email} (role: {session?.user?.role})
      </p>

      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/login' });
        }}
      >
        <button type="submit" className="btn bg-primary text-white">
          Sign Out
        </button>
      </form>
    </main>
  );
};

export default Page;
