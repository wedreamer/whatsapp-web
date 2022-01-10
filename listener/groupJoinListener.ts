import { GroupNotification } from "whatsapp-web.js";

export const groupJoinListener: (
    notification: GroupNotification
) => void = async (group) => {
    const adder = await group.getContact()
    const groupMember = await group.getRecipients()
    const chat = await group.getChat()
    await chat.sendMessage(`@${adder.id.user}, 好兄弟, 你来了, 看看群里谁没有加, 加一下好友 😊😊 🚀🚀`, {
        mentions: [
            adder
        ]
    })
    await chat.sendMessage(`下面是名片 👀👀`)
    Promise.all(groupMember.filter((contact) => contact.number != adder.number).map(async (contact) => {
        return await chat.sendMessage(contact)
    }))
}