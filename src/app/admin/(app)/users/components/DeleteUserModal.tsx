'use client';

import { useState } from 'react';
import { LuTriangleAlert, LuX } from 'react-icons/lu';

import { deleteUser } from '../actions';
import type { UserRow } from '../types';

type Props = {
  user: UserRow;
  onClose: () => void;
  onDone: () => void;
};

const DeleteUserModal = ({ user, onClose, onDone }: Props) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setPending(true);
    setError(null);
    const res = await deleteUser(user.id);
    setPending(false);
    if (res.error) {
      setError(res.error);
      return;
    }
    onDone();
  };

  return (
    <div className="fixed inset-0 z-80 flex items-center justify-center overflow-y-auto bg-default-900/50 p-4">
      <div className="card relative w-full max-w-sm rounded-xl border border-default-200 px-6 py-8 shadow-lg">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute end-3 top-3 size-5 text-default-800"
        >
          <LuX className="size-5" />
        </button>

        <div className="text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-danger/10 text-danger">
            <LuTriangleAlert className="size-6" />
          </span>
          <h5 className="mb-1 mt-5 text-lg font-semibold text-default-800">Hapus user?</h5>
          <p className="text-sm text-default-500">
            User <b>{user.name ?? user.email}</b> akan dihapus permanen.
          </p>

          {error && <p className="mt-3 text-sm text-danger">{error}</p>}

          <div className="mt-5 flex justify-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="btn bg-transparent text-danger hover:bg-danger/10"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={pending}
              className="btn border-0 bg-danger text-white disabled:opacity-60"
            >
              {pending ? 'Menghapus...' : 'Ya, Hapus'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
