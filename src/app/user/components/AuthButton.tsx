'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { LuLogIn, LuLogOut } from 'react-icons/lu';

const AuthButton = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <button type="button" className="btn bg-primary text-white invisible" />;
  }

  if (session) {
    return (
      <button
        type="button"
        onClick={() => signOut({ callbackUrl: '/login' })}
        className="btn bg-primary text-white"
      >
        Logout
        <LuLogOut className="size-4" />
      </button>
    );
  }

  return (
    <Link href="/cover-login" className="flex justify-end">
      <button type="button" className="btn bg-primary text-white">
        Sign In
        <LuLogIn className="size-4" />
      </button>
    </Link>
  );
};

export default AuthButton;
