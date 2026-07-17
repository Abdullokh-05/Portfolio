// Load env vars from .env.local
import "dotenv/config";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Simple raw query – returns PostgreSQL version
    const version = await prisma.$queryRaw`SELECT version();`;
    console.log("✅ Connected! PostgreSQL version:", version[0].version);

    // If you added a Project model, list rows (optional)
    // const projects = await prisma.project.findMany();
    // console.log(`📦 Projects in DB: ${projects.length}`);
  } catch (e) {
    console.error("❌ Prisma connection error:", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();