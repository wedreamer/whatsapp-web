import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const resendmedia = async (msg: WAWebJS.Message) => {
    if (msg.body === '!resendmedia' && msg.hasQuotedMsg) {
        const quotedMsg = await msg.getQuotedMessage();
        // TODO: bug
        if (quotedMsg.hasMedia) {
            const attachmentData = await quotedMsg.downloadMedia();
            await client.sendMessage(msg.from, attachmentData, { caption: 'Here\'s your requested media.' });
        }
    }
}