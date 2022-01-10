import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const ping = async (msg: WAWebJS.Message) => {
    // string | MessageMedia | Location | Contact | Contact[] | List | Buttons
    if (msg.body === '!ping') {
        // Send a new message to the same chat
        const chat = await msg.getChat()
        console.log(chat)
        console.log(client)
        await chat.sendMessage('pong');
    }
}