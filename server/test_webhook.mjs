import fetch from 'node-fetch';
import crypto from 'crypto';

const API_URL = 'http://localhost:5000/api/clerk';
const SECRET_KEY = 'whsec_RrO/JGwpzPwK47eZKLBiJsy9cq6FFPqV'; // from .env

const payload = {
  "data": {
    "status": "paid",
    "charge_type": "recurring",
    "payer": { "user_id": "user_39y6inSwx353XQlhqjTIXrThI4p" },
    "subscription_items": [ { "plan": { "slug": "pro" } } ]
  },
  "object": "event",
  "type": "paymentAttempt.updated"
};

const payloadString = JSON.stringify(payload);
const msgId = 'msg_12345';
const timestamp = Math.floor(Date.now() / 1000).toString();

const toSign = `${msgId}.${timestamp}.${payloadString}`;
const signature = crypto.createHmac('sha256', Buffer.from(SECRET_KEY.replace('whsec_', ''), 'base64'))
  .update(toSign)
  .digest('base64');

async function testWebhook() {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'svix-id': msgId,
      'svix-timestamp': timestamp,
      'svix-signature': `v1,${signature}`
    },
    body: payloadString
  });
  console.log("Status:", res.status);
  console.log("Body:", await res.text());
}
testWebhook().catch(console.error);
