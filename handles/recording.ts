import WAWebJS from "whatsapp-web.js";

export const recording = async (msg: WAWebJS.Message) => {
    if (msg.body === '!recording') {
        const chat = await msg.getChat();
        // simulates recording audio in the chat
        await chat.sendStateRecording();
    }
}