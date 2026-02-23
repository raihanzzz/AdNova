import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config();

async function main() {
    const response = await fetch('https://api.clerk.com/v1/subscriptions', {
        headers: {
            'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`
        }
    });
    
    if (response.ok) {
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    } else {
        console.log("Error:", await response.text());
    }
}
main();
