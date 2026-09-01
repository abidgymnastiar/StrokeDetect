import Image from 'next/image';
import Link from 'next/link';

import SimplebarClient from '@/components/client-wrapper/SimplebarClient';
import AppMenu from './AppMenu';
import HoverToggle from './HoverToggle';

import logoDark from '@/assets/images/logo/logo.png';
import logoLight from '@/assets/images/logo/logo.png';
import logoSm from '@/assets/images/logo/logo-1.png';

const Sidebar = () => {
  return (
    <aside id="app-menu" className="app-menu">
      <Link
        href="/admin/dashboards"
        className="logo-box sticky top-0 flex min-h-topbar-height items-center justify-start px-6 backdrop-blur-xs"
      >
        <div className="logo-light">
          <Image src={logoLight} className="logo-lg " alt="Light logo" width={111} />
          <Image src={logoSm} className="logo-sm h-6 w-6" alt="Small logo" />
        </div>

        <div className="logo-dark">
          <Image src={logoDark} className="logo-lg " alt="Dark logo" width={111} />
          <Image src={logoSm} className="logo-sm h-6 w-6" alt="Small logo" />
        </div>
      </Link>

      <HoverToggle />

      <div className="relative min-h-0 flex-grow">
        <SimplebarClient className="size-full">
          <AppMenu />
        </SimplebarClient>
      </div>
    </aside>
  );
};

export default Sidebar;
