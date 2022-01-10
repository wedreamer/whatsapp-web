import WAWebJS from "whatsapp-web.js";

export const mention = async (msg: WAWebJS.Message) => {
    if (msg.body === '!mention') {
        const contact = await msg.getContact();
        const chat = await msg.getChat();
        chat.sendMessage(`Hi @${contact.number}!`, {
            mentions: [contact]
        });
    }
}