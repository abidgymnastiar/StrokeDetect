'use client';

import { LuX } from 'react-icons/lu';

import type { UserRow } from '../types';

type Props = {
  user: UserRow;
  onClose: () => void;
};

const formatDateTime = (iso: string) =>
  new Date(iso).toLocaleString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

const initials = (user: UserRow) =>
  (user.name ?? user.email)
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between gap-4 border-b border-default-200 py-2.5 last:border-0">
    <span className="text-sm text-default-500">{label}</span>
    <span className="text-sm font-medium text-default-800 text-end break-all">{value}</span>
  </div>
);

const DetailUserModal = ({ user, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-80 flex items-center justify-center overflow-y-auto bg-default-900/50 p-4">
      <div className="card w-full max-w-md rounded-xl border border-default-200 shadow-lg">
        <div className="card-header">
          <h3 className="text-base font-bold text-default-800">Detail User</h3>
          <button type="button" onClick={onClose} aria-label="Close" className="size-5 text-default-800">
            <LuX className="size-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              {initials(user)}
            </span>
            <div>
              <p className="font-semibold text-default-800">{user.name ?? '-'}</p>
              <p className="text-sm text-default-500">{user.email}</p>
            </div>
          </div>

          <Row label="ID" value={String(user.id)} />
          <Row label="Nama" value={user.name ?? '-'} />
          <Row label="Email" value={user.email} />
          <Row label="Role" value="USER" />
          <Row label="Dibuat" value={formatDateTime(user.createdAt)} />
        </div>

        <div className="flex items-center justify-end gap-x-2 px-4 py-3">
          <button type="button" onClick={onClose} className="btn bg-primary text-white">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailUserModal;
