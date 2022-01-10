import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const jumpto = async (msg: WAWebJS.Message) => {
    if (msg.body === '!jumpto') {
        if (msg.hasQuotedMsg) {
            const quotedMsg = await msg.getQuotedMessage();
            // await client.interface.openChatWindowAt(quotedMsg.id._serialized);
        }
    }
}