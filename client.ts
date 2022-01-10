import { Client } from "whatsapp-web.js";
import { existsSync } from "fs";
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
