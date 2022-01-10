import { GroupNotification } from "whatsapp-web.js";

export const groupUpdateListener: (
    notification: GroupNotification
) => void = async (group) => {
    console.info(group)
}