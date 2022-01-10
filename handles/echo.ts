import WAWebJS from "whatsapp-web.js";

export const echo = async (msg: WAWebJS.Message) => {
    if (msg.body.startsWith('!echo ')) {
        // Replies with the same message
        msg.reply(msg.body.slice(6));
    }
}