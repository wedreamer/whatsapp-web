import WAWebJS from "whatsapp-web.js";

export const leave = async (msg: WAWebJS.Message) => {
    if (msg.body === '!leave') {
        // Leave the group
        let chat = await msg.getChat();
        if (chat.isGroup) {
            // chat.leave();
        } else {
            msg.reply('This command can only be used in a group!');
        }
    }
}