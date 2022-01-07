import { GroupNotification } from "whatsapp-web.js";

export const groupLeaveListener: (
    notification: GroupNotification
) => void = async (group) => {
    console.info(group)
}