import { Client } from "whatsapp-web.js";
import { existsSync, writeFile } from "fs";
import * as qrcode from "qrcode-terminal";
import { sendText } from "./handles/sendText";
import { everyoneContacts } from "./handles/everyoneContacts";
import { sendMedia } from "./handles/sendMedia";
import { sendLocation } from "./handles/sendLocation";
import { sendContact } from "./handles/sendContact";
import { groupJoinListener } from "./listener/groupJoinListener";
import { sessionData, SESSION_FILE_PATH } from "./client";
import { sendButton } from "./handles/sendButtons";
import { sendList } from "./handles/sendList";
import { groupLeaveListener } from "./listener/groupLeaveListener";
import { groupUpdateListener } from "./listener/groupUpdateListener";
import { ping } from "./handles/ping";
import { pingReply } from "./handles/pingReply";


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
        await everyoneContacts(msg)
        await sendText(msg)
        await sendMedia(msg)
        await sendLocation(msg)
        await sendContact(msg)
        await sendButton(msg)
        await sendList(msg)
        console.log(msg)
        // https://github.com/pedroslopez/whatsapp-web.js/blob/main/example.js

        await pingReply(msg)
    });

    client.on('message_create', (msg) => {
        // Fired on all message creations, including your own
        if (msg.fromMe) {
            // do stuff here
        }
    });


    client.on('message_revoke_everyone', async (after, before) => {
        // Fired whenever a message is deleted by anyone (including you)
        console.log(after); // message after it was deleted.
        if (before) {
            console.log(before); // message before it was deleted.
        }
    });

    client.on('message_revoke_me', async (msg) => {
        // Fired whenever a message is only deleted in your own view.
        console.log(msg.body); // message before it was deleted.
    });

    client.on('message_ack', (msg, ack) => {
        /*
            == ACK VALUES ==
            ACK_ERROR: -1
            ACK_PENDING: 0
            ACK_SERVER: 1
            ACK_DEVICE: 2
            ACK_READ: 3
            ACK_PLAYED: 4
        */

        if (ack == 3) {
            // The message was read
        }
    });

}

export default registerEvent