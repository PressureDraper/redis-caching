import { PrismaClient } from '../generated/prisma/client.js';

let db: PrismaClient;

db = new PrismaClient({ log: ['query', 'info'] });

export { db };
