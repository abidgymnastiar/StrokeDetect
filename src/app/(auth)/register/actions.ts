'use server';

import bcrypt from 'bcryptjs';

import { prisma } from '@/lib/prisma';
import { Role } from '@/generated/prisma/enums';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type RegisterState = {
  success?: boolean;
  error?: string;
  fieldErrors?: Partial<Record<'name' | 'email' | 'password' | 'confirmPassword', string>>;
};

export async function registerUser(
  _prev: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim().toLowerCase();
  const password = String(formData.get('password') ?? '');
  const confirmPassword = String(formData.get('confirmPassword') ?? '');

  const fieldErrors: RegisterState['fieldErrors'] = {};
  if (name.length < 2) fieldErrors.name = 'Nama minimal 2 karakter';
  if (!EMAIL_RE.test(email)) fieldErrors.email = 'Email tidak valid';
  if (password.length < 6) fieldErrors.password = 'Password minimal 6 karakter';
  if (confirmPassword !== password) {
    fieldErrors.confirmPassword = 'Konfirmasi password tidak sama';
  }
  if (Object.keys(fieldErrors).length > 0) return { fieldErrors };

  const existing = await prisma.user.findUnique({ where: { email }, select: { id: true } });
  if (existing) return { fieldErrors: { email: 'Email sudah terdaftar' } };

  await prisma.user.create({
    data: {
      name,
      email,
      role: Role.USER,
      password: await bcrypt.hash(password, 10),
    },
  });

  return { success: true };
}
