import WAWebJS, { GroupChat } from "whatsapp-web.js";

export const groupinfo = async (msg: WAWebJS.Message) => {
    if (msg.body === '!groupinfo') {
        let chat = await msg.getChat();
        if (chat.isGroup) {
            const _chat = chat as GroupChat
            await msg.reply(`
                *Group Details*
                Name: ${_chat.name}
                Description: ${_chat.description}
                Created At: ${_chat.createdAt.toString()}
                Created By: ${_chat.owner.user}
                Participant count: ${_chat.participants.length}
            `);
        } else {
            msg.reply('This command can only be used in a group!');
        }
    }
}