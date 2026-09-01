import { Metadata } from 'next';

import PageBreadcrumb from '@/components/PageBreadcrumb';
import { prisma } from '@/lib/prisma';
import { Role } from '@/generated/prisma/enums';
import UsersTable from './components/UsersTable';
import type { UserRow } from './types';

export const metadata: Metadata = { title: 'Users' };
export const dynamic = 'force-dynamic';

const Page = async () => {
  const users = await prisma.user.findMany({
    where: { role: Role.USER },
    orderBy: { createdAt: 'desc' },
    select: { id: true, email: true, name: true, createdAt: true },
  });

  const rows: UserRow[] = users.map((u) => ({
    ...u,
    createdAt: u.createdAt.toISOString(),
  }));

  return (
    <main>
      <PageBreadcrumb subtitle="Admin" title="Users" />
      <UsersTable users={rows} />
    </main>
  );
};

export default Page;
