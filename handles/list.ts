import WAWebJS, { List } from "whatsapp-web.js";
import { client } from "../client";

export const list = async (msg: WAWebJS.Message) => {
    if (msg.body === '!list') {
        let sections = [{ title: 'sectionTitle', rows: [{ title: 'ListItem1', description: 'desc' }, { title: 'ListItem2' }] }];
        let list = new List('List body', 'btnText', sections, 'Title', 'footer');
        await client.sendMessage(msg.from, list);
    }
}