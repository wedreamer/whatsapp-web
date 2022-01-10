import WAWebJS from "whatsapp-web.js";

export const mute = async (msg: WAWebJS.Message) => {
    if (msg.body === '!mute') {
        const chat = await msg.getChat();
        // mute the chat for 20 seconds
        const unmuteDate = new Date();
        unmuteDate.setSeconds(unmuteDate.getSeconds() + 20);
        await chat.mute(unmuteDate);
    }
}