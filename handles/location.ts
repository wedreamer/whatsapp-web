import WAWebJS, { Location} from "whatsapp-web.js";

export const location = async (msg: WAWebJS.Message) => {
    if (msg.body === '!location') {
        msg.reply(new Location(37.422, -122.084, 'Googleplex\nGoogle Headquarters'));
    }
}