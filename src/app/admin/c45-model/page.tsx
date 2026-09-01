import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = { title: 'C4.5 Model' };
const Page = () => {
  return (
    <main>
      <PageBreadcrumb title="C4.5 Model" subtitle="Menu" />
      <div className="card h-40"></div>
    </main>
  );
};

export default Page;
