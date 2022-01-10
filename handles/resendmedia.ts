import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const resendmedia = async (msg: WAWebJS.Message) => {
    if (msg.body === '!resendmedia' && msg.hasQuotedMsg) {
        const quotedMsg = await msg.getQuotedMessage();
        if (quotedMsg.hasMedia) {
            const attachmentData = await quotedMsg.downloadMedia();
            client.sendMessage(msg.from, attachmentData, { caption: 'Here\'s your requested media.' });
        }
    }
}