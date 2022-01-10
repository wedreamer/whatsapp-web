import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const subject = async (msg: WAWebJS.Message) => {
    if (msg.body.startsWith('!subject ')) {
        // Change the group subject
        let chat = await msg.getChat();
        if (chat.isGroup) {
            let newSubject = msg.body.slice(9);
            // todo: fix
            chat.setSubject(newSubject);
        } else {
            msg.reply('This command can only be used in a group!');
        }
    }
}