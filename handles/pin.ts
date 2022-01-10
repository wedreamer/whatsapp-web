import WAWebJS from "whatsapp-web.js";

export const pin = async (msg: WAWebJS.Message) => {
    if (msg.body === '!pin') {
        const chat = await msg.getChat();
        await chat.pin();
    }
}