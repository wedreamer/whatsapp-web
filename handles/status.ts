import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const status = async (msg: WAWebJS.Message) => {
    if (msg.body.startsWith('!status ')) {
        const newStatus = msg.body.split(' ')[1];
        await client.setStatus(newStatus);
        msg.reply(`Status was updated to *${newStatus}*`);
    }
}