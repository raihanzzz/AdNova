import { clerkClient } from '@clerk/express';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

async function main() {
    try {
        const userId = 'user_39y6inSwx353XQlhqjTIXrThI4p';
        console.log("Fetching user...");
        const user = await clerkClient.users.getUser(userId);
        fs.writeFileSync('clerk_user.json', JSON.stringify(user, null, 2));

        // Let's also check if we can get subscriptions
        // Clerk SDK doesn't expose a clean billing sub list on users yet, but we can try 
        // using the REST API directly or just inspecting the object
        console.log("Check clerk_user.json");
    } catch (e) {
        console.error(e);
    }
}
main();
