import { PrismaClient } from "../generated/prisma/client";


let db : PrismaClient;

db = new PrismaClient();

export { db };