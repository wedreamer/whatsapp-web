import WAWebJS from "whatsapp-web.js";

export const clearstate = async (msg: WAWebJS.Message) => {
    if (msg.body === '!clearstate') {
        const chat = await msg.getChat();
        // stops typing or recording in the chat
        await chat.clearState();
    }
}