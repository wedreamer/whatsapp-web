import axios, { AxiosResponse } from "axios";
import WAWebJS, { MessageMedia } from "whatsapp-web.js";
import proxy from "../config/proxy";

export const sendMedia = async (msg: WAWebJS.Message) => {
    // string | MessageMedia | Location | Contact | Contact[] | List | Buttons
    if (msg.body === '搞点视频') {
        const url = `https://user-images.githubusercontent.com/73140494/137400450-2638cf8e-f2bb-4bc7-81f6-b502662f8c96.mp4`
        let mimetype: string;
        let response: AxiosResponse<any, any> | undefined
        response = await axios.get(url, {
            responseType: 'arraybuffer',
            proxy,
        })
        mimetype = response!.headers['content-type'];
        const attachment = response!.data.toString('base64');
        const media = new MessageMedia(mimetype, attachment, "137400450-2638cf8e-f2bb-4bc7-81f6-b502662f8c96.mp4")
        const chat = await msg.getChat()
        // const caption = await getCaption(`https://i0.hdslb.com/bfs/archive/b21fd6bd57d5ada841a8c13ea44b760aa4a28e0d.jpg@672w_378h_1c_100q.webp`)
        // await chat.sendMessage(media, { caption });
        await chat.sendMessage(media);


        // const media = await MessageMedia.fromUrl("https://user-images.githubusercontent.com/73140494/137400450-2638cf8e-f2bb-4bc7-81f6-b502662f8c96.mp4")
        // const chat = await msg.getChat()
        // await chat.sendMessage(media);
    }
}

const getCaption = async (url: string): Promise<string> => {
    const res = await axios.get(url, {
        responseType: 'arraybuffer'
    })
    return res.data.toString('base64')
}