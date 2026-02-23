import { prisma } from './configs/prisma.js';

async function main() {
    await prisma.user.updateMany({
        where: { credits: 20 },
        data: { credits: 100 }
    });
    console.log("Updated credits to 100!");
}

main().catch(console.error).finally(() => prisma.$disconnect());
