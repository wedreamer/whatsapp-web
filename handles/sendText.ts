import WAWebJS from "whatsapp-web.js";
import { client } from "../client";

export const sendText = async (msg: WAWebJS.Message) => {
    // string | MessageMedia | Location | Contact | Contact[] | List | Buttons
    if (msg.body === '舔一下') {
        const { from } = msg
        await client.sendMessage(from, `自从你把我的微信删除了之后，我经常去你宿舍楼下等你，早上偶尔去，晚上一定在。平时你都故意不看我，因为你比较害羞腼腆，但今天你终于忍不住对我的在乎，把我叫到小树林里独处。你说了什么我忘了，好像是让我不要老是找你免得你把持不住吧。嘻嘻，你真可爱。`)
    }
}