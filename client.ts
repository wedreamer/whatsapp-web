import { Client } from "whatsapp-web.js";
import { existsSync, writeFile } from "fs";
import * as qrcode from "qrcode-terminal";
import { sendText } from "./handles/sendText";
import { everyoneContacts } from "./handles/everyoneContacts";
import { sendMedia } from "./handles/sendMedia";
import { sendLocation } from "./handles/sendLocation";
import { sendContact } from "./handles/sendContact";
import { groupJoinListener } from "./listener/groupJoinListener";
import { groupLeaveListener } from "./handles/groupLeaveListener";
import { groupUpdateListener } from "./handles/groupUpdateListener";
import registerEvent from "./init";

// Path where the session data will be stored
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if (existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}


const client = new Client({
    // puppeteer
    session: sessionData
});

registerEvent(client)

// client.createGroup()

export { sessionData, client, SESSION_FILE_PATH }
