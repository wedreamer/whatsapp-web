import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const everyoneContacts = async (msg: WAWebJS.Message) => {
    if (msg.body === '!everyoneContacts') {
        const chat = await msg.getChat();

        const contacts = await client.getContacts()

        let text = "";
        let mentions = [];

        for (let participant of contacts) {
            const contact = await client.getContactById(participant.id._serialized);

            mentions.push(contact);
            text += `@${participant.id.user} `;
        }

        await chat.sendMessage(text, { mentions });
    }
}