import axios from "axios";
import WAWebJS, { MessageMedia } from "whatsapp-web.js";
import { client } from "../client";

export const sendMedia = async (msg: WAWebJS.Message) => {
    // string | MessageMedia | Location | Contact | Contact[] | List | Buttons
    if (msg.body === '搞点视频') {
        const url = `https://www.bilibili.com/video/BV1DY411a7kz?spm_id_from=333.851.b_7265636f6d6d656e64.6`
        let mimetype: string;
        const response = await axios.get(url, {
            responseType: 'arraybuffer'
        })
        mimetype = response.headers['content-type'];
        const attachment = response.data.toString('base64');
        const media = new MessageMedia(mimetype, attachment, "zfcctv.mp4")
        const chat = await msg.getChat()
        const caption = await getCaption(`https://i0.hdslb.com/bfs/archive/b21fd6bd57d5ada841a8c13ea44b760aa4a28e0d.jpg@672w_378h_1c_100q.webp`)
        chat.sendMessage(media, { caption });


        // const media = await MessageMedia.fromUrl("http://img.zhufengpeixun.cn/zfcctv.mp4")
        // const chat = await msg.getChat()
        // chat.sendMessage(media);
    }
}

const getCaption = async (url: string): Promise<string> => {
    const res = await axios.get(url, {
        responseType: 'arraybuffer'
    })
    return res.data.toString('base64')
}