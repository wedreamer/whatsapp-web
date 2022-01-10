import WAWebJS, { Buttons, Location } from "whatsapp-web.js";

export const sendButton = async (msg: WAWebJS.Message) => {
    // bug!
    // string | MessageMedia | Location | Contact | Contact[] | List | Buttons
    if (msg.body === 'send button') {
        const chat = await msg.getChat()
        // const buttons = new Buttons('this is button', [['button1'], ['button2']], 'title', 'footer')
        const buttons = new Buttons('this is button', [['button1']])
        chat.sendMessage(buttons)
    }
}