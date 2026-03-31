import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../generated/prisma/client';

let db: PrismaClient;

const adapter = new PrismaMariaDb(process.env.DATABASE_URL || '');

db = new PrismaClient({ adapter });

export { db };
