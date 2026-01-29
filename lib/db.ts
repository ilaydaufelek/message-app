import { PrismaClient as PrismaClientExport } from "@/generated/prisma/client";

// 👇 constructor olarak zorla tanıtıyoruz
const PrismaClient =
  PrismaClientExport as unknown as new () => PrismaClientExport;

declare global {
  var prisma: InstanceType<typeof PrismaClient> | undefined;
}

export const db =
  globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
