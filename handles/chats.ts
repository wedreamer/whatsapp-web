import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const chats = async (msg: WAWebJS.Message) => {
    if (msg.body === '!chats') {
        const chats = await client.getChats();
        Promise.all(chats.map(chat => client.sendMessage(chat.id._serialized, 'hahha')))
        await client.sendMessage(msg.from, `The bot has ${chats.length} chats open.`);
        await client.sendMessage(msg.from, `The bot is ${chats.map(chat => chat.name).join('\n')}`);
    }
}