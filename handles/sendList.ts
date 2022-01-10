import WAWebJS, { Buttons, List, Location } from "whatsapp-web.js";

export const sendList = async (msg: WAWebJS.Message) => {
    // string | MessageMedia | Location | Contact | Contact[] | List | Buttons
    if (msg.body === 'send list') {
        const chat = await msg.getChat()
        // const buttons = new Buttons('this is button', [['button1'], ['button2']], 'title', 'footer')
        const list = new List('this is body', 'buttonText', [], 'title', 'footer')
        await chat.sendMessage(list)
    }
}