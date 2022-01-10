import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const sendto = async (msg: WAWebJS.Message) => {
    // Direct send a new message to specific id
    if (msg.body.startsWith('!sendto ')) {
        let number = msg.body.split(' ')[1];
        let messageIndex = msg.body.indexOf(number) + number.length;
        let message = msg.body.slice(messageIndex, msg.body.length);
        number = number.includes('@c.us') ? number : `${number}@c.us`;
        let chat = await msg.getChat();
        chat.sendSeen();
        client.sendMessage(number, message);
    }
}