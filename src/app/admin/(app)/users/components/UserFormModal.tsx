'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { LuX } from 'react-icons/lu';

import { createUser, updateUser } from '../actions';
import type { UserFormState, UserRow } from '../types';

type Props = {
  mode: 'create' | 'edit';
  user?: UserRow | null;
  onClose: () => void;
  onDone: () => void;
};

const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn bg-primary text-white disabled:opacity-60">
      {pending ? 'Menyimpan...' : label}
    </button>
  );
};

const UserFormModal = ({ mode, user, onClose, onDone }: Props) => {
  const action = mode === 'create' ? createUser : updateUser;
  const [state, formAction] = useActionState<UserFormState, FormData>(action, {});

  useEffect(() => {
    if (state.success) onDone();
  }, [state.success, onDone]);

  return (
    <div className="fixed inset-0 z-80 flex items-center justify-center overflow-y-auto bg-default-900/50 p-4">
      <div className="card w-full max-w-lg rounded-xl border border-default-200 shadow-lg">
        <div className="card-header">
          <h3 className="text-base font-bold text-default-800">
            {mode === 'create' ? 'Tambah User' : 'Edit User'}
          </h3>
          <button type="button" onClick={onClose} aria-label="Close" className="size-5 text-default-800">
            <LuX className="size-5" />
          </button>
        </div>

        <form action={formAction} className="flex flex-col">
          <div className="flex flex-col gap-y-4 p-4">
            {state.error && (
              <p className="rounded bg-danger/10 px-3 py-2 text-sm text-danger">{state.error}</p>
            )}

            {mode === 'edit' && <input type="hidden" name="id" defaultValue={user?.id} />}

            <div>
              <label htmlFor="name" className="mb-2 inline-block text-base font-medium">
                Nama
              </label>
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={user?.name ?? ''}
                className="form-input"
                placeholder="Nama lengkap"
              />
              {state.fieldErrors?.name && (
                <span className="mt-1 block text-xs text-danger">{state.fieldErrors.name}</span>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 inline-block text-base font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={user?.email ?? ''}
                className="form-input"
                placeholder="nama@email.com"
              />
              {state.fieldErrors?.email && (
                <span className="mt-1 block text-xs text-danger">{state.fieldErrors.email}</span>
              )}
            </div>

            <div>
              <label htmlFor="password" className="mb-2 inline-block text-base font-medium">
                Password{' '}
                {mode === 'edit' && (
                  <span className="text-xs font-normal text-default-500">
                    (kosongkan jika tidak diubah)
                  </span>
                )}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-input"
                placeholder="Minimal 6 karakter"
                autoComplete="new-password"
              />
              {state.fieldErrors?.password && (
                <span className="mt-1 block text-xs text-danger">{state.fieldErrors.password}</span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-end gap-x-2 px-4 py-3">
            <button
              type="button"
              onClick={onClose}
              className="btn border-0 bg-transparent text-danger hover:bg-danger/10"
            >
              Batal
            </button>
            <SubmitButton label={mode === 'create' ? 'Tambah User' : 'Simpan Perubahan'} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormModal;
