import WAWebJS from "whatsapp-web.js";

export const typing = async (msg: WAWebJS.Message) => {
    if (msg.body === '!typing') {
        const chat = await msg.getChat();
        // simulates typing in the chat
        chat.sendStateTyping();
    }
}