import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const join = async (msg: WAWebJS.Message) => {
    if (msg.body.startsWith('!join ')) {
        const inviteCode = msg.body.split(' ')[1];
        try {
            await client.acceptInvite(inviteCode);
            msg.reply('Joined the group!');
        } catch (e) {
            msg.reply('That invite code seems to be invalid.');
        }
    }
}