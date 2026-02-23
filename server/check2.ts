import { prisma } from './configs/prisma.js';
import fs from 'fs';

async function main() {
    const users = await prisma.user.findMany();
    fs.writeFileSync('output.json', JSON.stringify(users, null, 2), 'utf8');
}

main().catch(console.error).finally(() => prisma.$disconnect());
