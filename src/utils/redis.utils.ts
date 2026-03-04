import { createClient, RedisClientType } from 'redis';

const client: RedisClientType = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    ...(process.env.REDIS_PASSWORD && {
        password: process.env.REDIS_PASSWORD,
    }),
});

client.on('error', (err) => console.error('Redis Client Error', err));

await client.connect();

export default client;
