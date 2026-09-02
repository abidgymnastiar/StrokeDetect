import darkLogo from '@/assets/images/logo/logo.png';
import logoLight from '@/assets/images/logo/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import AuthButton from './AuthButton';

const Navbar = () => {
  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 bg-card py-6  shadow flex justify-between items-center">
        <div className="container">
          <div className="flex items-center justify-between gap-3">
            <div className="shrink-0">
              <Link href="/user">
                <Image
                  src={darkLogo}
                  alt="logo dark"
                  className="h-auto block dark:hidden"
                  width={111}
                />
                <Image
                  src={logoLight}
                  alt="logo light"
                  className="h-auto hidden dark:block"
                  width={111}
                />
              </Link>
            </div>

            <div className="md:block hidden">
              <ul
                className="flex items-center justify-center lg:gap-8 md:gap-4 font-medium text-sm"
                aria-label="Navigasi utama"
              >
                <li>
                  <Link
                    href="/user/beranda"
                    className="text-default-800  hover:text-primary transition duration-300"
                  >
                    Beranda
                  </Link>
                </li>

                <li>
                  <Link
                    href="/user/prediction"
                    className="text-default-800  hover:text-primary transition duration-300"
                  >
                    Prediction
                  </Link>
                </li>

                <li>
                  <Link
                    href="/user/riwayat"
                    className="text-default-800  hover:text-primary transition duration-300"
                  >
                    History
                  </Link>
                </li>
              </ul>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <MobileMenu />

              <AuthButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
