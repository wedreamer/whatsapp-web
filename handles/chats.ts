import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const chats = async (msg: WAWebJS.Message) => {
    if (msg.body === '!chats') {
        const chats = await client.getChats();
        client.sendMessage(msg.from, `The bot has ${chats.length} chats open.`);
    }
}