import { Role } from '../../../src/generated/prisma/enums';

export const users = [
  {
    email: 'admin@strokedetect.com',
    password: 'Admin123!',
    name: 'Admin',
    role: Role.ADMIN,
  },
  {
    email: 'user@strokedetect.com',
    password: 'User123!',
    name: 'User',
    role: Role.USER,
  },
];
