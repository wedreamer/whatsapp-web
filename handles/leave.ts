import WAWebJS, { GroupChat } from "whatsapp-web.js";

export const leave = async (msg: WAWebJS.Message) => {
    if (msg.body === '!leave') {
        // Leave the group
        let chat = await msg.getChat();
        if (chat.isGroup) {
            (chat as GroupChat).leave();
        } else {
            msg.reply('This command can only be used in a group!');
        }
    }
}