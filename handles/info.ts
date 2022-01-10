import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const info = async (msg: WAWebJS.Message) => {
    if (msg.body === '!info') {
        let info = client.info;
        client.sendMessage(msg.from, `
            *Connection info*
            User name: ${info.pushname}
            My number: ${info.me.user}
            Platform: ${info.platform}
            WhatsApp version: ${info.phone.wa_version}
        `);
    }
}