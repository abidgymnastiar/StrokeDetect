'use client';

import darkLogo from '@/assets/images/logo/logo.png';
import logoLight from '@/assets/images/logo/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuClipboardPlus, LuHistory, LuHouse } from 'react-icons/lu';
import AuthButton from './AuthButton';
import MobileMenu from './MobileMenu';

const navigationItems = [
  { href: '/user/beranda', label: 'Beranda', icon: LuHouse },
  { href: '/user/prediction', label: 'Prediction', icon: LuClipboardPlus },
  { href: '/user/riwayat', label: 'History', icon: LuHistory },
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/user/beranda'
      ? pathname === '/user' || pathname === '/user/beranda'
      : pathname === href;

  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-[60] border-b border-default-200 bg-card/95 py-3 shadow-sm backdrop-blur">
        <div className="container">
          <div className="relative flex items-center justify-between gap-4">
            <Link href="/user" className="shrink-0" aria-label="StrokeDetect Beranda">
              <Image
                src={darkLogo}
                alt="StrokeDetect"
                className="h-auto block dark:hidden"
                width={111}
              />
              <Image
                src={logoLight}
                alt="StrokeDetect"
                className="h-auto hidden dark:block"
                width={111}
              />
            </Link>

            <ul
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex"
              aria-label="Navigasi utama"
            >
              {navigationItems.map(({ href, label, icon: Icon }) => {
                const active = isActive(href);

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? 'page' : undefined}
                      className={`relative flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 after:absolute after:-bottom-[13px] after:left-1/2 after:h-0.5 after:w-[calc(100%-1.5rem)] after:-translate-x-1/2 after:rounded-full after:transition-opacity ${active ? 'bg-primary/10 text-primary after:bg-primary after:opacity-100' : 'text-default-500 hover:bg-primary/5 hover:text-primary after:opacity-0'}`}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <MobileMenu />
              <div className="hidden md:block">
                <AuthButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
