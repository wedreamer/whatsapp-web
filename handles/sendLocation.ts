import WAWebJS, { Location } from "whatsapp-web.js";

export const sendLocation = async (msg: WAWebJS.Message) => {
    // string | MessageMedia | Location | Contact | Contact[] | List | Buttons
    if (msg.body === '发一下地址') {
        const chat = await msg.getChat()
        // 37.389808, -122.081414
        const latitude: number = 37.389808
        const longitude: number = -122.081414
        // const description: string = '扁担李村'
        const location = new Location(latitude, longitude)
        chat.sendMessage(location)

    }
}