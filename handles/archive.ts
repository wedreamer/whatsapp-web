import WAWebJS from "whatsapp-web.js";

export const archive = async (msg: WAWebJS.Message) => {
    if (msg.body === '!archive') {
        const chat = await msg.getChat();
        await chat.archive();
    }
}