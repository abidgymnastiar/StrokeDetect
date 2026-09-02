'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { LuChevronDown, LuLogIn, LuLogOut, LuUserRound } from 'react-icons/lu';

const AuthButton = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', closeDropdown);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('mousedown', closeDropdown);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  if (status === 'loading') {
    return <button type="button" className="btn bg-primary text-white invisible" />;
  }

  if (session) {
    const name = session.user?.name || 'User';
    const email = session.user?.email || 'Email tidak tersedia';

    return (
      <div ref={dropdownRef} className="relative hidden md:block">
        <button
          type="button"
          onClick={() => setIsOpen(open => !open)}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          className="flex items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-semibold text-default-700 transition-colors hover:bg-primary/5 hover:text-primary"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <LuUserRound className="size-5" aria-hidden="true" />
          </span>
          <span className="hidden max-w-28 truncate sm:block">{name}</span>
          <LuChevronDown
            className={`size-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <div
            role="menu"
            className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-64 rounded-2xl border border-default-200 bg-card p-2 shadow-lg"
          >
            <div className="flex items-center gap-3 rounded-xl bg-primary/5 p-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
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
              className="mt-2 flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-danger transition-colors hover:bg-danger/10"
            >
              <LuLogOut className="size-4" aria-hidden="true" />
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link href="/login" className="flex justify-end">
      <button type="button" className="btn bg-primary text-white">
        Sign In
        <LuLogIn className="size-4" />
      </button>
    </Link>
  );
};

export default AuthButton;
