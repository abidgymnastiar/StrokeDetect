'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import {
  LuClipboardPlus,
  LuHistory,
  LuHouse,
  LuLogIn,
  LuLogOut,
  LuMenu,
  LuUserRound,
  LuX,
} from 'react-icons/lu';

const navigationItems = [
  { href: '/user/beranda', label: 'Beranda', icon: LuHouse },
  { href: '/user/prediction', label: 'Prediction', icon: LuClipboardPlus },
  { href: '/user/riwayat', label: 'History', icon: LuHistory },
];

const MobileMenu = () => {
  const { data: session, status } = useSession();
  const name = session?.user?.name || 'User';
  const email = session?.user?.email || 'Email tidak tersedia';

  return (
    <>
      <button
        className="btn size-10 bg-primary text-white md:hidden"
        aria-label="Buka menu navigasi"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="navbarMenu"
        data-hs-overlay="#navbarMenu"
      >
        <LuMenu className="size-5" />
      </button>
      <div
        className="hs-overlay hs-overlay-open:translate-y-0 fixed inset-x-0 top-0 z-[60] hidden min-h-screen -translate-y-full border-b border-default-200 bg-card p-5 transition-all duration-300"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="navbarMenu-label"
        id="navbarMenu"
      >
        <div className="flex items-center justify-between">
          <p id="navbarMenu-label" className="text-lg font-semibold text-default-800">
            Menu
          </p>
          <button
            aria-label="Tutup menu navigasi"
            data-hs-overlay="#navbarMenu"
            className="inline-flex size-10 items-center justify-center rounded-lg text-default-600 hover:bg-primary/10 hover:text-primary"
          >
            <LuX className="size-5" />
          </button>
        </div>
        <ul className="mt-8 flex flex-col gap-2" aria-label="Navigasi utama">
          {navigationItems.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                data-hs-overlay="#navbarMenu"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-default-600 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="size-5" aria-hidden="true" />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-default-200 pt-5">
          {status === 'loading' ? (
            <div className="h-16 animate-pulse rounded-xl bg-default-100" />
          ) : session ? (
            <>
              <div className="flex items-center gap-3 rounded-xl bg-primary/5 p-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <LuUserRound className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-default-800">{name}</p>
                  <p className="truncate text-xs text-default-500">{email}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: '/login' })}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-danger transition-colors hover:bg-danger/10"
              >
                <LuLogOut className="size-4" aria-hidden="true" />
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              data-hs-overlay="#navbarMenu"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-3 py-3 text-sm font-semibold text-white"
            >
              <LuLogIn className="size-4" aria-hidden="true" />
              Sign In
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
