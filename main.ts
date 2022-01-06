import WAWebJS, { Client } from "whatsapp-web.js";
import type {
    LaunchOptions,
    BrowserLaunchArgumentOptions,
} from 'puppeteer'
import * as qrcode from "qrcode-terminal";

// const puppeteer: LaunchOptions & BrowserLaunchArgumentOptions = {
//     /**
//      * No usable sandbox!
//      *  https://github.com/pedroslopez/whatsapp-web.js/issues/344#issuecomment-691570764
//      */
//     args: [
//         '--no-sandbox',
//         '--disable-setuid-sandbox',
//     ],
//     headless: true,
// }

const client = new Client({
    // puppeteer
});

client.on('qr', (qr) => {
    qrcode.generate(qr, {
        small: true,
    })
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body == '!ping') {
        client.sendMessage(msg.from, 'pong');
        // msg.reply('pong');
    }
});

client.initialize();