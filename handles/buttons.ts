import WAWebJS, { Buttons } from "whatsapp-web.js";
import { client } from "../client";

export const buttons = async (msg: WAWebJS.Message) => {
    if (msg.body === '!buttons') {
        // let button = new Buttons('Button body', [{ body: 'bt1' }, { body: 'bt2' }, { body: 'bt3' }], 'title', 'footer');
        // await client.sendMessage(msg.from, button);
    }
}