import bcrypt from 'bcryptjs';
import { PrismaClient } from '../../src/generated/prisma/client';
import { users } from './data/users';

export async function seedUsers(prisma: PrismaClient) {
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        email: user.email,
        password: hashedPassword,
        name: user.name,
        role: user.role,
      },
    });
  }

  console.log(`Seeded ${users.length} users`);
}
