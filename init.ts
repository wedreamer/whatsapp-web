import { Client } from "whatsapp-web.js";
import { existsSync, writeFile } from "fs";
import * as qrcode from "qrcode-terminal";
import { sendText } from "./handles/sendText";
import { everyoneContacts } from "./handles/everyoneContacts";
import { sendMedia } from "./handles/sendMedia";
import { sendLocation } from "./handles/sendLocation";
import { sendContact } from "./handles/sendContact";
import { groupJoinListener } from "./handles/groupJoinListener";
import { groupLeaveListener } from "./handles/groupLeaveListener";
import { groupUpdateListener } from "./handles/groupUpdateListener";
import { sessionData, SESSION_FILE_PATH } from "./client";


const registerEvent = (client: Client, fristInit: boolean = true) => {

    client.on('authenticated', (session) => {
        // https://wwebjs.dev/guide/resuming-sessions.html#restoring-the-session
        writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
            if (err) {
                console.error(err);
            }
        });
    })

    client.on('auth_failure', (msg) => {
        // session 失效重新初始化客户端
        if (!fristInit) {
            return;
        }
        console.info(msg)
        // clear sessionData -> reinit
        client = new Client({})
        registerEvent(client)
        client.initialize()
    })

    client.on('qr', (qr) => {
        qrcode.generate(qr, {
            small: true,
        })
        // Generate and scan this code with your phone
        console.log('QR RECEIVED', qr);
    });

    client.on('group_join', groupJoinListener)

    client.on('group_leave', groupLeaveListener)

    client.on('group_update', groupUpdateListener)

    // client.on('')

    client.on('ready', () => {
        console.log('Client is ready!');
    });

    client.on('message', async msg => {
        everyoneContacts(msg)
        sendText(msg)
        sendMedia(msg)
        sendLocation(msg)
        sendContact(msg)
        console.log(msg)
    });
}

export default registerEvent