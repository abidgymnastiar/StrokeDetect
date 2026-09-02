'use client';

import React, { useActionState, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import logoDark from '@/assets/images/logo/logo.png';
import logoLight from '@/assets/images/logo/logo.png';
import authBg from '@/assets/images/auth-bg.jpg';
import authBgDark from '@/assets/images/auth-bg-dark.jpg';

import { registerUser, type RegisterState } from './actions';

const Page = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState<RegisterState, FormData>(
    registerUser,
    {},
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    if (!state.success) return;

    const finish = async () => {
      setSigningIn(true);
      const result = await signIn('credentials', { email, password, redirect: false });
      if (result?.error) {
        router.push('/login');
        return;
      }
      router.push('/user');
      router.refresh();
    };

    finish();
  }, [state.success]);

  const loading = isPending || signingIn;

  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <div className="absolute inset-0">
        <div className="block dark:hidden h-full w-full relative">
          <Image src={authBg} alt="background" fill className="object-cover" />
        </div>
        <div className="hidden dark:block h-full w-full relative">
          <Image src={authBgDark} alt="background dark" fill className="object-cover" />
        </div>
      </div>

      <div className="relative z-10 bg-card/70 rounded-lg w-lg">
        <div className="text-center px-10 py-12">
          <Link href="/login" className="flex justify-center">
            <div className="h-auto max-w-xs relative flex dark:hidden">
              <Image src={logoDark} alt="logo dark" className="object-contain" />
            </div>
            <div className="h-auto max-w-xs relative hidden dark:flex">
              <Image src={logoLight} alt="logo light" className="object-contain" />
            </div>
          </Link>

          <div className="mt-8 text-center">
            <h4 className="mb-2.5 text-xl font-semibold text-primary">Buat Akun Baru</h4>
            <p className="text-base text-default-500">Daftar untuk melanjutkan ke StrokeDetect.</p>
          </div>

          <form action={formAction} className="text-left w-full mt-10">
            {state.error && (
              <div className="mb-4 rounded-md bg-red-100 px-4 py-2 text-sm text-red-700">
                {state.error}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="name" className="block font-medium text-default-900 text-sm mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Masukkan nama lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {state.fieldErrors?.name && (
                <span className="mt-1 block text-xs text-red-600">{state.fieldErrors.name}</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-medium text-default-900 text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {state.fieldErrors?.email && (
                <span className="mt-1 block text-xs text-red-600">{state.fieldErrors.email}</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block font-medium text-default-900 text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="Minimal 6 karakter"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {state.fieldErrors?.password && (
                <span className="mt-1 block text-xs text-red-600">
                  {state.fieldErrors.password}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block font-medium text-default-900 text-sm mb-2"
              >
                Konfirmasi Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                placeholder="Ulangi password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {state.fieldErrors?.confirmPassword && (
                <span className="mt-1 block text-xs text-red-600">
                  {state.fieldErrors.confirmPassword}
                </span>
              )}
            </div>

            <p className="italic text-sm font-medium text-default-500">
              Dengan mendaftar, kamu menyetujui{' '}
              <Link href="#" className="underline">
                Ketentuan Layanan
              </Link>{' '}
              StrokeDetect.
            </p>

            <div className="mt-10 text-center">
              <button
                type="submit"
                disabled={loading}
                className="btn bg-primary text-white w-full disabled:opacity-60"
              >
                {loading ? 'Memproses...' : 'Daftar'}
              </button>
            </div>

            <div className="mt-10 text-center">
              <p className="text-base text-default-500">
                Sudah punya akun ?{' '}
                <Link
                  href="/login"
                  className="font-semibold underline hover:text-primary transition duration-200"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
