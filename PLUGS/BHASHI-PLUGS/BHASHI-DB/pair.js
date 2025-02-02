const express = require('express');
const fs = require('fs-extra');
const { exec } = require("child_process");
let router = express.Router();
const pino = require("pino");
const { Boom } = require("@hapi/boom");
const MESSAGE = process.env.MESSAGE || `> SESSION GENERATED SUCCESSFULLY ✅`;

const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers,
    DisconnectReason
} = require("@whiskeysockets/baileys");

// Ensure the directory exists, but don't remove its contents
if (!fs.existsSync('./BHASHI-DB/BHASHI-MD-SESSION')) {
    fs.ensureDirSync('./BHASHI-DB/BHASHI-MD-SESSION');
}

router.get('/', async (req, res) => {
    let num = req.query.number;

    async function SUHAIL() {
        const credsPath = './BHASHI-DB/BHASHI-MD-SESSION/creds.json';

        // Check if creds.json already exists
        if (fs.existsSync(credsPath)) {
            console.log("Session already connected. Skipping connection process.");
            if (!res.headersSent) {
                return res.send({ message: "connected", status: "success" });
            }
            return;
        }

        const { state, saveCreds } = await useMultiFileAuthState(`./BHASHI-DB/BHASHI-MD-SESSION`);
        try {
            let Smd = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
                },
                printQRInTerminal: false,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                browser: Browsers.macOS("Safari"),
            });

            // Check if the user is registered
            if (!Smd.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g, '');  // Strip non-numeric characters
                if (!num || num.length < 10) {
                    console.log("Invalid number format");
                    return res.send({ message: "Invalid phone number", status: "error" });
                }

                // Request the pairing code
                const code = await Smd.requestPairingCode(num);
                if (!res.headersSent) {
                    console.log("Pairing code sent:", code);
                    await res.send({ code });
                }
            }

            Smd.ev.on('creds.update', async () => {
                await saveCreds();
                console.log("Credentials updated and saved.");
            });

            Smd.ev.on("connection.update", async (s) => {
                const { connection, lastDisconnect } = s;

                if (connection === "open") {
                    try {
                        console.log("Connection established.");
                        let user = Smd.user.id;

                        await Smd.sendMessage(user, {
                            text: MESSAGE,
                        });

                        console.log("Session completed successfully. Exiting process...");
                        process.exit(0); // Exit the process after saving `creds.json`
                    } catch (e) {
                        console.error("Error during message send: ", e);
                    }
                }

                // Handle connection closures
                if (connection === "close") {
                    let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
                    if (reason === DisconnectReason.connectionClosed) {
                        console.log("Connection closed!");
                    } else if (reason === DisconnectReason.connectionLost) {
                        console.log("Connection Lost from Server!");
                    } else if (reason === DisconnectReason.restartRequired) {
                        console.log("Restart Required, Restarting...");
                        SUHAIL().catch(err => console.log(err));
                    } else if (reason === DisconnectReason.timedOut) {
                        console.log("Connection TimedOut!");
                    } else {
                        console.log("Connection closed with bot. Please run again.");
                        console.log(reason);
                        await delay(5000);
                    }

                    // Delete creds.json and exit if the connection is not established
                    if (!fs.existsSync(credsPath)) {
                        console.log("Credentials file not found. Deleting and exiting...");
                        process.exit(1); // Exit the process to allow a retry
                    }
                }
            });

        } catch (err) {
            console.log("Error in SUHAIL function: ", err);
            console.log("Restarting service...");
            if (!res.headersSent) {
                await res.send({ message: "Try Again Later", status: "error" });
            }

            // Delete creds.json on error
            if (fs.existsSync(credsPath)) {
                fs.removeSync(credsPath);
            }
        }
    }

    await SUHAIL();
});

module.exports = router;
