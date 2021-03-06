import WAWebJS, { GroupChat } from "whatsapp-web.js";

export const desc = async (msg: WAWebJS.Message) => {
    if (msg.body.startsWith('!desc ')) {
        // Change the group description
        let chat = await msg.getChat();
        if (chat.isGroup) {
            let newDescription = msg.body.slice(6);
            await (chat as GroupChat).setDescription(newDescription);
        } else {
            msg.reply('This command can only be used in a group!');
        }
    }
}