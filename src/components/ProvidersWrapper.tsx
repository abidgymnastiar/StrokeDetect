'use client';
import { usePathname } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import React, { useEffect } from 'react';

import LayoutProvider from '@/context/useLayoutContext';

const ProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  useEffect(() => {
    import('preline/preline').then(() => {
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    });
  }, []);

  useEffect(() => {
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [path]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <SessionProvider>
      <LayoutProvider>{children}</LayoutProvider>
    </SessionProvider>
  );
};

export default ProvidersWrapper;
