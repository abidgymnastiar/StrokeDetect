'use server';

import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';

import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { Role } from '@/generated/prisma/enums';
import type { UserFormState } from './types';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function assertAdmin() {
  const session = await auth();
  if (session?.user?.role !== 'ADMIN') {
    throw new Error('Not authorized');
  }
}

export async function createUser(
  _prev: UserFormState,
  formData: FormData,
): Promise<UserFormState> {
  await assertAdmin();

  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const name = String(formData.get('name') ?? '').trim();
  const password = String(formData.get('password') ?? '');

  const fieldErrors: UserFormState['fieldErrors'] = {};
  if (!EMAIL_RE.test(email)) fieldErrors.email = 'Email tidak valid';
  if (name.length < 2) fieldErrors.name = 'Nama minimal 2 karakter';
  if (password.length < 6) fieldErrors.password = 'Password minimal 6 karakter';
  if (Object.keys(fieldErrors).length > 0) return { fieldErrors };

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return { fieldErrors: { email: 'Email sudah terdaftar' } };

  await prisma.user.create({
    data: {
      email,
      name,
      role: Role.USER,
      password: await bcrypt.hash(password, 10),
    },
  });

  revalidatePath('/admin/users');
  return { success: true };
}

export async function updateUser(
  _prev: UserFormState,
  formData: FormData,
): Promise<UserFormState> {
  await assertAdmin();

  const id = Number(formData.get('id'));
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const name = String(formData.get('name') ?? '').trim();
  const password = String(formData.get('password') ?? '');

  if (!Number.isInteger(id) || id <= 0) return { error: 'User tidak ditemukan' };

  const target = await prisma.user.findUnique({ where: { id }, select: { role: true } });
  if (!target) return { error: 'User tidak ditemukan' };
  if (target.role === Role.ADMIN) return { error: 'Akun admin tidak bisa diubah dari sini' };

  const fieldErrors: UserFormState['fieldErrors'] = {};
  if (!EMAIL_RE.test(email)) fieldErrors.email = 'Email tidak valid';
  if (name.length < 2) fieldErrors.name = 'Nama minimal 2 karakter';
  if (password.length > 0 && password.length < 6) {
    fieldErrors.password = 'Password minimal 6 karakter';
  }
  if (Object.keys(fieldErrors).length > 0) return { fieldErrors };

  const clash = await prisma.user.findFirst({
    where: { email, NOT: { id } },
    select: { id: true },
  });
  if (clash) return { fieldErrors: { email: 'Email sudah dipakai user lain' } };

  await prisma.user.update({
    where: { id },
    data: {
      email,
      name,
      ...(password ? { password: await bcrypt.hash(password, 10) } : {}),
    },
  });

  revalidatePath('/admin/users');
  return { success: true };
}

export async function deleteUser(id: number): Promise<UserFormState> {
  await assertAdmin();

  if (!Number.isInteger(id) || id <= 0) return { error: 'User tidak ditemukan' };

  const target = await prisma.user.findUnique({ where: { id }, select: { role: true } });
  if (!target) return { error: 'User tidak ditemukan' };
  if (target.role === Role.ADMIN) return { error: 'Akun admin tidak bisa dihapus' };

  await prisma.user.delete({ where: { id } });

  revalidatePath('/admin/users');
  return { success: true };
}
