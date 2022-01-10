import WAWebJS from "whatsapp-web.js";

export const groupinfo = async (msg: WAWebJS.Message) => {
    if (msg.body === '!groupinfo') {
        let chat = await msg.getChat();
        if (chat.isGroup) {
            // msg.reply(`
            //     *Group Details*
            //     Name: ${chat.name}
            //     Description: ${chat.description}
            //     Created At: ${chat.createdAt.toString()}
            //     Created By: ${chat.owner.user}
            //     Participant count: ${chat.participants.length}
            // `);
        } else {
            msg.reply('This command can only be used in a group!');
        }
    }
}