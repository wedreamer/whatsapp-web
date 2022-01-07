import WAWebJS, { Location } from "whatsapp-web.js";
import { client } from "../client";

export const sendContact = async (msg: WAWebJS.Message) => {
    // string | MessageMedia | Location | Contact | Contact[] | List | Buttons
    if (msg.body === '好友的名片都发一下') {
        const chat = await msg.getChat()
        const from = await msg.getContact()
        const contacts = await client.getContacts()
        // console.log(chat.isGroup)
        // await chat.sendMessage(from)
        // contacts.forEach(async (item) => await chat.sendMessage(item))
        Promise.all(contacts.filter(contact => contact.number != from.number).map(async contact => await chat.sendMessage(contact)))
    }
}