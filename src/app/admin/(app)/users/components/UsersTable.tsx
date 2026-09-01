'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LuEye, LuPlus, LuSearch, LuSquarePen, LuTrash2 } from 'react-icons/lu';

import type { UserRow } from '../types';
import UserFormModal from './UserFormModal';
import DeleteUserModal from './DeleteUserModal';
import DetailUserModal from './DetailUserModal';

type ModalState =
  | { type: 'create' }
  | { type: 'detail'; user: UserRow }
  | { type: 'edit'; user: UserRow }
  | { type: 'delete'; user: UserRow }
  | null;

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const initials = (user: UserRow) =>
  (user.name ?? user.email)
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const UsersTable = ({ users }: { users: UserRow[] }) => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState<ModalState>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return users;
    return users.filter(
      (u) =>
        u.email.toLowerCase().includes(q) || (u.name ?? '').toLowerCase().includes(q),
    );
  }, [users, search]);

  const closeModal = () => setModal(null);
  const handleDone = () => {
    setModal(null);
    router.refresh();
  };

  return (
    <div className="card">
      <div className="card-header">
        <h6 className="card-title">Users List</h6>
        <button
          type="button"
          onClick={() => setModal({ type: 'create' })}
          className="btn btn-sm bg-primary text-white"
        >
          <LuPlus className="me-1 size-4" />
          Add user
        </button>
      </div>

      <div className="card-header">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-input form-input-sm ps-9"
            placeholder="Cari nama / email"
          />
          <div className="absolute inset-y-0 start-0 flex items-center ps-3">
            <LuSearch className="size-3.5 text-default-500" />
          </div>
        </div>
      </div>

      <div className="card-body pt-0">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-default-200">
                <thead>
                  <tr className="text-start text-sm font-medium text-default-500">
                    <th className="px-3.5 py-3 text-start">Nama</th>
                    <th className="px-3.5 py-3 text-start">Email</th>
                    <th className="px-3.5 py-3 text-start">Dibuat</th>
                    <th className="px-3.5 py-3 text-end">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-default-200">
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-3.5 py-8 text-center text-sm text-default-500">
                        Tidak ada user.
                      </td>
                    </tr>
                  )}

                  {filtered.map((user) => (
                    <tr key={user.id} className="text-sm text-default-600">
                      <td className="px-3.5 py-3">
                        <div className="flex items-center gap-2">
                          <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                            {initials(user)}
                          </span>
                          <span className="font-medium text-default-800">
                            {user.name ?? '-'}
                          </span>
                        </div>
                      </td>
                      <td className="px-3.5 py-3">{user.email}</td>
                      <td className="px-3.5 py-3">{formatDate(user.createdAt)}</td>
                      <td className="px-3.5 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            type="button"
                            onClick={() => setModal({ type: 'detail', user })}
                            aria-label="Detail"
                            className="btn size-7.5 bg-default-200 text-default-500 hover:bg-info hover:text-white"
                          >
                            <LuEye className="size-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setModal({ type: 'edit', user })}
                            aria-label="Edit"
                            className="btn size-7.5 bg-default-200 text-default-500 hover:bg-primary hover:text-white"
                          >
                            <LuSquarePen className="size-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setModal({ type: 'delete', user })}
                            aria-label="Delete"
                            className="btn size-7.5 bg-default-200 text-default-500 hover:bg-danger hover:text-white"
                          >
                            <LuTrash2 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <p className="text-sm text-default-500">
          Menampilkan <b>{filtered.length}</b> dari <b>{users.length}</b> user
        </p>
      </div>

      {modal?.type === 'create' && (
        <UserFormModal mode="create" onClose={closeModal} onDone={handleDone} />
      )}
      {modal?.type === 'detail' && (
        <DetailUserModal user={modal.user} onClose={closeModal} />
      )}
      {modal?.type === 'edit' && (
        <UserFormModal mode="edit" user={modal.user} onClose={closeModal} onDone={handleDone} />
      )}
      {modal?.type === 'delete' && (
        <DeleteUserModal user={modal.user} onClose={closeModal} onDone={handleDone} />
      )}
    </div>
  );
};

export default UsersTable;
