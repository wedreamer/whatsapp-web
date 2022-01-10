import WAWebJS, { GroupChat } from "whatsapp-web.js";

export const getInviteCode = async (msg: WAWebJS.Message) => {
    if (msg.body.startsWith('!getInviteCode')) {
        // Change the group subject
        let chat = await msg.getChat();
        if (chat.isGroup) {
            const oldCode = await (chat as GroupChat).getInviteCode();
            const newCode = await (chat as GroupChat).revokeInvite()
            msg.reply(`This command can only be used in a group! <br/> 
            oldCode:*${oldCode}*<br/> 
            newCode:*${newCode}*<br/> `);
        } else {
            msg.reply('This command can only be used in a group!');
        }
    }
}