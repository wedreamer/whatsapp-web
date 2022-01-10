import { client } from "./client";


process.on('uncaughtException', (e) => {
    console.error('process error is:', e.message);
});

client.initialize();