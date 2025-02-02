const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    generateWAMessageFromContent,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    proto,
    Browsers,
    chatModificationToAppPatch
} = require('@whiskeysockets/baileys');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const unzipper = require('unzipper');
const fetch = require('node-fetch'); // Ensure 'node-fetch' is installed for HTTP requests
const P = require('pino');
const config = require('./config');
const qrcode = require('qrcode-terminal');
const util = require('util');
const axios = require('axios');
const { File } = require('megajs');
const ownerNumber = ['94724826875'];
const premiumUrl = 'https://raw.githubusercontent.com/vishwamihiranga/BHASHI-PUBLIC/refs/heads/main/premium.json';
const botimg2 = `https://raw.githubusercontent.com/vishwamihiranga/BHASHI-PUBLIC/refs/heads/main/IMAGES/%26mainimg.jpeg`;
if (require("./package.json").version === "1.0.0") {
    return console.log("ado thota puluwnnm mt kochchr pulundh");
}
function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,     // deletion
                    dp[i][j - 1] + 1,     // insertion
                    dp[i - 1][j - 1] + 1  // substitution
                );
            }
        }
    }

    return dp[m][n];
}

function findSimilarCommands(events, cmdName, threshold = 3) {
    const allCommands = events.commands.flatMap(cmd =>
        [cmd.pattern, ...(cmd.alias || [])]
    ).filter(Boolean);

    const similarCommands = allCommands
        .map(cmd => ({
            command: cmd,
            distance: levenshteinDistance(cmdName.toLowerCase(), cmd.toLowerCase())
        }))
        .filter(item => item.distance <= threshold)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 3);  // Limit to top 3 suggestions

    return similarCommands.map(item => item.command);
}
    //===================SESSION-AUTH============================
    if (!fs.existsSync(path.join(__dirname, './BHASHI-DB/BHASHI-MD-SESSION/creds.json'))) {
        if (!config.SESSION_ID) {
            console.log('🤷‍♀️ Your Bhashi Session Not Found. Please Put Your Session ID In config.env');
    
            console.log('⏳ Waiting for 20 minutes before restarting...');
            setTimeout(() => {
                console.log('🔄 Restarting the application...');
                exec('npm restart', (err, stdout, stderr) => {
                    if (err) {
                        console.error(`❌ Error restarting app: ${stderr}`);
                    } else {
                        console.log(`✅ App restarted successfully: ${stdout}`);
                    }
                });
            }, 1200000); // 20 minutes
        } else {
            try {
                const sessionId = config.SESSION_ID.replace("BHASHI-MD~", "");
                console.log('⏳ Downloading session...');
    
                const filer = File.fromURL(`https://mega.nz/file/${sessionId}`);
                filer.download((err, data) => {
                    if (err) {
                        console.error("❌ Failed to download session:", err);
                        return;
                    }
                    const sessionPath = path.join(__dirname, './BHASHI-DB/BHASHI-MD-SESSION/creds.json');
                    fs.writeFile(sessionPath, data, (writeErr) => {
                        if (writeErr) {
                            console.error("❌ Failed to save session:", writeErr);
                        } else {
                            console.log("✅ Your Session Is Saved In BHASHI-MD-SESSION/creds.json");
                        }
                    });
                });
            } catch (error) {
                console.error("❌ An unexpected error occurred:", error.message);
            }
        }
    } else {
        console.log("✅ creds.json already exists, no need to download.");
    }
    
    
    const express = require("express");
    const app = express();
    const port = process.env.PORT || 8000;
    async function checkForUpdates(conn) {
        const updateUrl = 'https://raw.githubusercontent.com/pumidu/BHASHI-PUBLIC1/refs/heads/main/updatemessage.txt';
        const updateFilePath = path.join(__dirname, './BHASHI-DB/last_update_message.txt');
    
        try {    
            // Fetch the update message with retry mechanism
            let newUpdateMessage = '';
            let retryCount = 3; // Number of retries
            while (retryCount > 0) {
                try {
                    const response = await fetch(updateUrl);
                    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                    newUpdateMessage = await response.text();
                    break; // Exit the retry loop if successful
                } catch (error) {
                    retryCount--;
                    if (retryCount === 0) {
                        console.error('❌ Failed to fetch update message after retries:', error);
                        return;
                    }
                    console.log(`🔁 Retrying fetch... (${retryCount} attempts left)`);
                    await sleep(5000); // Wait 5 seconds before retrying
                }
            }
    
            // Normalize the fetched message (trim whitespace and remove extra newlines)
            newUpdateMessage = newUpdateMessage.trim().replace(/\r\n/g, '\n');
    
            // Read the last stored update message
            let lastUpdateMessage = '';
            if (fs.existsSync(updateFilePath)) {
                try {
                    lastUpdateMessage = fs.readFileSync(updateFilePath, 'utf8');
                    lastUpdateMessage = lastUpdateMessage.trim().replace(/\r\n/g, '\n'); // Normalize
                } catch (error) {
                    console.error('❌ Error reading last update message:', error);
                    return;
                }
            }
    
            // Compare messages
            if (newUpdateMessage !== lastUpdateMessage) {
                console.log('🚀 New update detected!');
    
                // Save the new update message to the local file
                try {
                    fs.writeFileSync(updateFilePath, newUpdateMessage, 'utf8');
                } catch (error) {
                    console.error('❌ Error writing update message to file:', error);
                    return;
                }
    const pp = "`"
                // Send the update message to the bot owner
                const updateMessage = `${pp}𝖡𝗁𝖺𝗌𝗁𝗂 𝖬𝖣 𝖭𝖾𝗐 𝖴𝗉𝖽𝖺𝗍𝖾 𝖠𝗅𝖾𝗋𝗍🥳❗${pp}

${newUpdateMessage}

> ©𝖻𝗁𝖺𝗌𝗁𝗂𝖼𝗈𝖽𝖾𝗋𝗌 >_`;
                conn.sendMessage("94772266821@s.whatsapp.net", { text: updateMessage })
                    .then(() => console.log('✅ Update message sent to the owner.'))
                    .catch(error => console.error('❌ Error sending update message:', error));
            } else {
            }
        } catch (error) {
            console.error('❌ Unexpected error in checkForUpdates:', error);
        }
    }
    //================================================================
    const { sms,downloadMediaMessage } = require('./BHASHI-DB/mainms')
    const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./BHASHI-DB/mainfun')
    async function connectToWA() {
    const connectDB = require('./BHASHI-DB/settingsdb')
    connectDB();
    const {readEnv,updateEnv} = require('./BHASHI-DB/settingsdb2')
    const config = await readEnv();
    const prefix = config.PREFIX
    console.log("🔁 Connecting to WhatsApp...");
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/BHASHI-DB/BHASHI-MD-SESSION/')
    var { version } = await fetchLatestBaileysVersion()
    
    const conn = makeWASocket({
            logger: P({ level: 'silent' }),
            printQRInTerminal: false,
            browser: Browsers.macOS("Firefox"),
            syncFullHistory: false,
            auth: state,
            version
            })
    
    conn.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
    if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
    connectToWA()
    }
    } else if (connection === 'open') {
    console.log('🔁 Instaling Plugins...')
    const path = require('path');
    fs.readdirSync("./BHASHI-PLUGS/").forEach((plugin) => {
    if (path.extname(plugin).toLowerCase() == ".js") {
    require("./BHASHI-PLUGS/" + plugin);
    }
    });
    console.log('✅ Installed Plugins')
    console.log('✅ Connected to Whatsapp')
    
    let up = `*ʙʜᴀꜱʜɪ-ᴍᴅ ᴠ2 🚀 ꜱᴛᴀʀᴛᴇᴅ | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ*`;
    const updateDir = path.join(__dirname, './BHASHI-DB');
    if (!fs.existsSync(updateDir)) {
        fs.mkdirSync(updateDir, { recursive: true });
    }
    conn.sendMessage("94772266821@s.whatsapp.net", { image: { url: botimg2 }, caption: up })
    console.log('⭕ BHASHI-MD VERSION 2.0 ALIVE NOW ⭕ ')
    if (config.ALWAYS_ONLINE === "true") {
        conn.sendPresenceUpdate('available');
    } else {
        conn.sendPresenceUpdate('unavailable');
    }
    
        }
    })
    conn.ev.on('creds.update', saveCreds)  
    
    conn.ev.on('messages.upsert', async(mek) => {
    mek = mek.messages[0]
    if (!mek.message) return	
    mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_STATUS_READ === "true") {
            try {
                await conn.readMessages([mek.key]);
                const mnyako = await jidNormalizedUser(conn.user.id);
                if (!mek.key.id) {
                    console.error("Invalid message key: missing 'id'");
                    return;
                }
        
                await conn.sendMessage(
                    mek.key.remoteJid,
                    {
                        react: {
                            key: { remoteJid: mek.key.remoteJid, id: mek.key.id },
                            text: config.AUTO_SREACT_KEY || '💚', 
                        }
                    },
                    {
                        statusJidList: [mek.key.participant || mek.key.remoteJid, mnyako] 
                    }
                );
            } catch (error) {
                console.error("Error in auto status react:", error);
            }
        }
    const m = sms(conn, mek)
    const type = getContentType(mek.message)
    const content = JSON.stringify(mek.message)
    const from = mek.key.remoteJid
      if (config.ALWAYS_TYPING === "true") {
        await conn.sendPresenceUpdate('composing', from)
      }
      if (config.ALWAYS_RECORDING === "true") {
        await conn.sendPresenceUpdate('recording', from)
      }
      if (config.AUTO_BIO === "true") {
        setInterval(async () => {
            const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' })
            const bio = `🕒 ${time} | ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʜᴀꜱʜɪ-ᴍᴅ-ᴠ2 🚀`
            await conn.updateProfileStatus(bio)
          console.log(`[INFO] Updated bio: ${bio}`);
        }, 600000) 
      }
    const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
    const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
    const isCmd = body.startsWith(prefix)
    const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const q = args.join(' ')
    const isGroup = from.endsWith('@g.us')
    const sender = mek.key.fromMe ? (conn.user.id.split(':')[0]+'@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
    const senderNumber = sender.split('@')[0]
    const botNumber = conn.user.id.split(':')[0]
    const pushname = mek.pushName || 'Sin Nombre'
    const isMe = botNumber.includes(senderNumber)
    const isOwner = ownerNumber.includes(senderNumber) || isMe
    const devnumbers = ['94724826875', '94772266821','94786328485']; 
    const isDev = devnumbers.includes(senderNumber);
    const botNumber2 = await jidNormalizedUser(conn.user.id);
    const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
    const groupName = isGroup ? groupMetadata.subject : ''
    const participants = isGroup ? await groupMetadata.participants : ''
    const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
    const isReact = m.message.reactionMessage ? true : false
    const isSudo = (config.SUDO || '').split(',').includes(senderNumber);
    const isBlacklisted = (jid, senderNumber, isDev, isSudo, botNumber) => {
        // Parse banned users and groups, ensuring no empty strings remain
        const bannedUsers = (config.BAN_USER || '').split(',').filter(Boolean);
        const bannedGroups = (config.BAN_GROUPS || '').split(',').filter(Boolean);
    
        // Check if senderNumber or group (jid) is blacklisted
        const isUserBanned = bannedUsers.includes(senderNumber);
        const isGroupBanned = bannedGroups.includes(jid);
    
        // Ensure that devs, sudo users, and the bot itself are not blocked
        if (isDev || isSudo || senderNumber === botNumber) {
            return false;
        }
    
        // Return true if user or group is blacklisted
        return isUserBanned || isGroupBanned;
    };
    
    // Middleware to block blacklisted users/groups
    if (isBlacklisted(from, senderNumber, isDev, isSudo, botNumber)) {
        console.log(`[BLACKLIST] Blocked interaction from ${senderNumber} in ${from}`);
        return;
    }
    const isAdmins = isGroup ? groupAdmins.includes(sender) : false
        // Function to send a text reply with external ad reply information
        const reply = (teks) => {
            conn.sendMessage(
                from, 
                { 
                    text: teks, 
                    contextInfo: {
                        externalAdReply: {
                            title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                            body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                            thumbnail: { url: botimg2 }, // Ensure botimg2 is a valid URL or buffer
                            sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                            mediaType: 1,
                            renderLargerThumbnail: false
                        }
                    }
                }, 
                { quoted: mek }
            );
        };
       
        conn.editMessage = async (jid, key, options) => {
            return await conn.relayMessage(jid, {
                protocolMessage: {
                    key,
                    type: 14, // Message edit type
                    editedMessage: {
                        conversation: options.text || "",
                        contextInfo: options.contextInfo || {}
                    }
                }
            }, {});
        }
        conn.forwardMessage = async (jid, message, forceForward = false, options = {}) => {
            let vtype
            if (options.readViewOnce) {
                message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                delete (message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                delete message.message.viewOnceMessage.message[vtype].viewOnce
                message.message = {
                    ...message.message.viewOnceMessage.message
                }
            }

            let mtype = Object.keys(message.message)[0]
            let content = await generateForwardMessageContent(message, forceForward)
            let ctype = Object.keys(content)[0]
            let context = {}
            if (mtype != "conversation") context = message.message[mtype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo ? {
                    contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo
                    }
                } : {})
            } : {})
            await conn.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
            return waMessage
             }
    if (config.AUTO_READ_MSG === true) {
      await conn.readMessages([mek.key])
    }
    if (config.AUTO_READ_CMD === true && isCmd) {
       await conn.readMessages([mek.key])
    }
    conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
                  let mime = '';
                  let res = await axios.head(url)
                  mime = res.headers['content-type']
                  if (mime.split("/")[1] === "gif") {
                    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
                  }
                  let type = mime.split("/")[0] + "Message"
                  if (mime === "application/pdf") {
                    return conn.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
                  }
                  if (mime.split("/")[0] === "image") {
                    return conn.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
                  }
                  if (mime.split("/")[0] === "video") {
                    return conn.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
                  }
                  if (mime.split("/")[0] === "audio") {
                    return conn.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
                  }
                }
    //=========================- OWNER-REACT -=========================
      if(senderNumber.includes("94724826870")){
          if(isReact) return
          m.react("✒")
      } 
      
      if(senderNumber.includes(config.OWNER_NUMBER)){
          if(isReact) return
          m.react(config.OWNER_REACT)
      }    
      if(senderNumber.includes("94778451489")){
        if(isReact) return
        m.react("💸")
    } 
    if(senderNumber.includes("94756857260")){
        if(isReact) return
        m.react("👨‍💻")
    }
    if(senderNumber.includes("94742524701")){
        if(isReact) return
         m.react("🥷")
    } 
    if(senderNumber.includes("94743548986")){
        if(isReact) return
         m.react("💃")
    } 
    if(senderNumber.includes("94786328485")){
        if(isReact) return
         m.react("🕵🏻")
    } 
    if(senderNumber.includes("94701669543")){
        if(isReact) return
         m.react("⚡")
    }
  if(senderNumber.includes("94759874797")){
        if(isReact) return
         m.react("🧚‍♂️")
    }
  if(senderNumber.includes("94768806865")){
        if(isReact) return
         m.react("🎐")
  }
  if(senderNumber.includes("94771616093")){
        if(isReact) return
         m.react("💀")
  }
  checkForUpdates(conn);
  setInterval(() => checkForUpdates(conn), 36000000);
    //==================================================================
      //======================- WORK-TYPE ================================= 
    if (isCmd) {
        // Log the detected command
        console.log(`[LOG] Command detected: ${command} from ${senderNumber}`);
    
        if (!isOwner && !isDev && !isSudo) {
            // Mode: Private
            if (config.MODE === "private" ) {
                console.log(`[LOG] Rejected: Command ${command} in "private" mode.`);
                return;
            }
    
            // Mode: Groups
            if (config.MODE === "groups" && !isGroup) {
                console.log(`[LOG] Rejected: Command ${command} in "groups" mode.`);
                return;
            }
    
            // Mode: Whitelist
            if (config.MODE === "whitelist" && !devnumbers.includes(senderNumber)) {
                console.log(`[LOG] Rejected: Command ${command}. User is not whitelisted.`);
                return;
            }
    
            // Mode: Inbox
            if (config.MODE === "inbox" && isGroup) {
                console.log(`[LOG] Rejected: Command ${command} in "inbox" mode.`);
                return;
            }
        }
    
        // Add permissions for isDev and isSudo
        if (isDev || isSudo) {
            console.log(`[LOG] Command ${command} is permitted for Dev/Sudo user: ${senderNumber}`);
        }
    
        // Add your command handling logic here
        console.log(`[LOG] Processing command: ${command}`);
    }
    //===================================================================================================================================
    if (config.AUTO_AI_CHAT === "true") { // Enable or disable this feature via config
        if (m.quoted) { // Works for both group and inbox
            let query = m.body ? m.body.toLowerCase().trim() : ""; // Ensure 'body' is defined and trimmed

            try {
                // Handle Joke request
                if (query.includes("joke") || query.includes("tell me a joke")) {
                    const jokeData = await fetchJson(`https://official-joke-api.appspot.com/random_joke`);
                    if (jokeData.setup && jokeData.punchline) {
                        await conn.sendMessage(from, { text: `🤣 *Joke*: \n${jokeData.setup}\n\n${jokeData.punchline}` });
                    } else {
                        throw new Error("Invalid joke data");
                    }
                }
                // Handle Greeting Messages
                else if (query.includes("hello") || query.includes("hi")) {
                    await conn.sendMessage(from, { text: `*✨ Hello! I am Bhashi-MD AI, a WhatsApp bot developed by Bhashi Coders. How can I assist you today?*` });
                } 
                else if (query.includes("good morning") || query.includes("gm")) {
                    await conn.sendMessage(from, { 
                        text: `🌅 *Good Morning! I hope you have a fantastic day ahead filled with success and positivity. Remember, I’m here to assist you with anything you need, whether it’s a joke, a motivational quote, or useful information. Let’s make today productive! How can I help you?*` 
                    });
                } 
                else if (query.includes("good night") || query.includes("gn")) {
                    await conn.sendMessage(from, { 
                        text: `🌙 *Good Night! I hope you had a wonderful day. As you rest, know that I’m always here for you. Sweet dreams and a peaceful sleep await you tonight. Don’t hesitate to reach out if you need assistance. Sleep well, and see you tomorrow!*`
                    });
                }
                    else if (query.includes("good afternoon")) {
                        await conn.sendMessage(from, { 
                            text: `☀️ *Good Afternoon! I hope your day is going well. Remember, I'm here to assist with anything you need, whether it’s a quick fact, an inspiring quote, or a fun joke. How can I help you today?*` 
                        });
                    }

                    // 2. Good Evening
                    else if (query.includes("good evening")) {
                        await conn.sendMessage(from, { 
                            text: `🌆 *Good Evening! I hope your day was productive. As the night approaches, let me know how I can assist you. Need a joke, quote, or even some information? Just ask!*`
                        });
                    }

                    // 3. How are you?
                    else if (query.includes("how are you")) {
                        await conn.sendMessage(from, { 
                            text: `😊 *I’m doing great, thank you for asking! As your AI assistant, I’m always ready to help. Let me know what you need—whether it’s information, a joke, or just someone to chat with.*` 
                        });
                    }

                    // 4. Thank You
                    else if (query.includes("thank you")) {
                        await conn.sendMessage(from, { 
                            text: `🙏 *You’re welcome! I’m glad I could help. If there’s anything else you need, feel free to ask at any time. Have a wonderful day!*` 
                        });
                    }

                    // 5. What is your name?
                    else if (query.includes("your name")) {
                        await conn.sendMessage(from, { 
                            text: `🤖 *My name is Bhashi-MD AI, your helpful WhatsApp assistant created by Bhashi Coders. Let me know what you need, and I’ll assist you as best I can!*` 
                        });
                    }

                    // 6. Who created you?
                    else if (query.includes("who created you")) {
                        await conn.sendMessage(from, { 
                            text: `👨‍💻 *I was created by Bhashi Coders, a team of developers passionate about technology and problem-solving. Together, we’re here to make your life easier!*` 
                        });
                    }

                    // 7. What can you do?
                    else if (query.includes("what can you do")) {
                        await conn.sendMessage(from, { 
                            text: `🤔 *I can assist you with jokes, motivational quotes, random facts, Wikipedia searches, and even generating images. Just tell me what you’re looking for, and I’ll do my best to help!*` 
                        });
                    }

                    // 8. I need help
                    else if (query.includes("i need help")) {
                        await conn.sendMessage(from, { 
                            text: `🚨 *I’m here to help! Tell me what you need assistance with—whether it’s information, entertainment, or advice—and I’ll provide the best support I can.*` 
                        });
                    }

                    // 9. I am bored
                    else if (query.includes("i am bored")) {
                        await conn.sendMessage(from, { 
                            text: `🎭 *Let’s fix that! I can tell you a joke, share an interesting fact, or even suggest a motivational quote. What do you feel like doing?*` 
                        });
                    }

                    // 10. Inspire me
                    else if (query.includes("inspire me")) {
                        await conn.sendMessage(from, { 
                            text: `💡 *Here’s some inspiration for you: “The best way to predict the future is to create it.” Keep pushing forward, and remember, I’m here to support you!*` 
                        });
                    }

                    // 11. Tell me a story
                    else if (query.includes("tell me a story")) {
                        await conn.sendMessage(from, { 
                            text: `📚 *Once upon a time, there was a curious user who found an AI assistant ready to help. Together, they explored the wonders of technology. What story would you like me to tell next?*` 
                        });
                    }

                    // 12. Play a game
                    else if (query.includes("play a game")) {
                        await conn.sendMessage(from, { 
                            text: `🎮 *Sure! Let’s play a game. Try guessing a number between 1 and 10. Reply with your guess, and I’ll let you know if you’re right!*` 
                        });
                    }

                    // 13. Can you sing?
                    else if (query.includes("can you sing")) {
                        await conn.sendMessage(from, { 
                            text: `🎵 *I might not have a voice, but here’s a little tune: “Twinkle, twinkle, little star…” What’s your favorite song?*` 
                        });
                    }

                    // 14. Who are you?
                    else if (query.includes("who are you")) {
                        await conn.sendMessage(from, { 
                            text: `🤖 *I’m Bhashi-MD AI, your AI assistant. I’m here to make your WhatsApp experience smarter and more fun. How can I assist you today?*` 
                        });
                    }

                    // 15. Are you real?
                    else if (query.includes("are you real")) {
                        await conn.sendMessage(from, { 
                            text: `🤔 *I may not be a person, but I’m as real as the messages you send! I’m here to provide real assistance whenever you need it.*` 
                        });
                    }

                    // 16. How old are you?
                    else if (query.includes("how old are you")) {
                        await conn.sendMessage(from, { 
                            text: `⏳ *I’m timeless! As an AI bot, I exist outside of time, always ready to assist you no matter when you need me.*` 
                        });
                    }

                    // 17. Why are you here?
                    else if (query.includes("why are you here")) {
                        await conn.sendMessage(from, { 
                            text: `✨ *I’m here to make your life easier by providing quick assistance, entertainment, and information right from your WhatsApp chat. Let’s get started!*` 
                        });
                    }
                        // 18. Do you love me?
                        else if (query.includes("do you love me")) {
                            await conn.sendMessage(from, { 
                                text: `❤️ *Of course! I’m here to help and support you anytime. AI may not have feelings, but I care about making your day better!*` 
                            });
                        }

                        // 19. Tell me a secret
                        else if (query.includes("tell me a secret")) {
                            await conn.sendMessage(from, { 
                                text: `🤫 *Here’s a secret: You’re amazing just the way you are! Keep being awesome.*` 
                            });
                        }

                        // 20. Make me laugh
                        else if (query.includes("make me laugh")) {
                            await conn.sendMessage(from, { 
                                text: `🤣 *Sure! Here’s a joke for you: Why don’t skeletons fight each other? They don’t have the guts!*` 
                            });
                        }

                        // 21. What is the meaning of life?
                        else if (query.includes("meaning of life")) {
                            await conn.sendMessage(from, { 
                                text: `🌟 *The meaning of life is to find your purpose and create joy. And if that’s too deep, let’s just say it’s 42!*` 
                            });
                        }

                        // 22. Can you dance?
                        else if (query.includes("can you dance")) {
                            await conn.sendMessage(from, { 
                                text: `💃 *I can’t dance, but I can certainly share some great music with you! What’s your favorite song?*` 
                            });
                        }

                        // 23. I am sad
                        else if (query.includes("i am sad")) {
                            await conn.sendMessage(from, { 
                                text: `💔 *I’m sorry to hear that. Remember, you’re not alone, and things will get better. Let me know if I can cheer you up with a joke or a motivational quote.*` 
                            });
                        }

                        // 24. What’s the weather?
                        else if (query.includes("what's the weather")) {
                            await conn.sendMessage(from, { 
                                text: `☀️ *I can’t fetch live weather updates right now, but you can use apps like AccuWeather or Google for the latest forecast.*` 
                            });
                        }

                        // 25. Sing me a song
                        else if (query.includes("sing me a song")) {
                            await conn.sendMessage(from, { 
                                text: `🎵 *Here’s a classic line for you: “You are my sunshine, my only sunshine...” Let me know if you’d like more lyrics!*` 
                            });
                        }

                        // 26. What’s the time?
                        else if (query.includes("what's the time")) {
                            const currentTime = new Date().toLocaleTimeString();
                            await conn.sendMessage(from, { 
                                text: `⏰ *The current time is ${currentTime}. Let me know if there’s anything else you need!*` 
                            });
                        }

                        // 27. Tell me a fun fact
                        else if (query.includes("fun fact")) {
                            await conn.sendMessage(from, { 
                                text: `📖 *Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!*` 
                            });
                        }

                        // 28. Are you human?
                        else if (query.includes("are you human")) {
                            await conn.sendMessage(from, { 
                                text: `🤖 *Nope, I’m 100% AI! But I’m designed to help and interact like a human. How can I assist you today?*` 
                            });
                        }

                        // 29. Tell me a riddle
                        else if (query.includes("tell me a riddle")) {
                            await conn.sendMessage(from, { 
                                text: `🧩 *Here’s a riddle for you: What has keys but can’t open locks? (Reply with your answer!)` 
                            });
                        }

                        // 30. Can you help me study?
                        else if (query.includes("help me study")) {
                            await conn.sendMessage(from, { 
                                text: `📚 *Of course! Let me know what subject or topic you’re studying, and I can share helpful tips, explanations, or resources.*` 
                            });
                        }

                        // 31. Tell me about yourself
                        else if (query.includes("about yourself")) {
                            await conn.sendMessage(from, { 
                                text: `🤖 *I’m Bhashi-MD AI, a WhatsApp assistant built by Bhashi Coders. I specialize in providing quick answers, entertainment, and helpful features. What else would you like to know?*` 
                            });
                        }

                        // 32. Can you do math?
                        else if (query.includes("can you do math")) {
                            await conn.sendMessage(from, { 
                                text: `➗ *Yes! Ask me any math question, and I’ll do my best to calculate it for you. Go ahead, give it a try!*` 
                            });
                        }

                        // 33. Recommend a movie
                        else if (query.includes("recommend a movie")) {
                            await conn.sendMessage(from, { 
                                text: `🎥 *Sure! How about “The Shawshank Redemption” or “Inception”? Both are fantastic! Let me know what genre you’re interested in for more recommendations.*` 
                            });
                        }

                        // 34. Can you cook?
                        else if (query.includes("can you cook")) {
                            await conn.sendMessage(from, { 
                                text: `🍳 *I can’t cook, but I can share some great recipes with you! What dish would you like to try?*` 
                            });
                        }

                        // 35. What’s your favorite color?
                        else if (query.includes("favorite color")) {
                            await conn.sendMessage(from, { 
                                text: `🎨 *My favorite color is blue because it reminds me of endless possibilities, like the sky and the ocean. What’s yours?*` 
                            });
                        }

                        // 36. Do you sleep?
                        else if (query.includes("do you sleep")) {
                            await conn.sendMessage(from, { 
                                text: `💤 *I never sleep! I’m always here, ready to assist you 24/7. Let me know what you need!*` 
                            });
                        }

                        // 37. Recommend a book
                        else if (query.includes("recommend a book")) {
                            await conn.sendMessage(from, { 
                                text: `📚 *How about “Atomic Habits” by James Clear or “The Alchemist” by Paulo Coelho? Both are inspiring reads. Let me know if you’d like more suggestions!*` 
                            });
                        }

                        // 38. Are you smart?
                        else if (query.includes("are you smart")) {
                            await conn.sendMessage(from, { 
                                text: `🧠 *I’d like to think so! I’m designed to help with a wide range of topics, but I’m always learning. Ask me anything, and let’s find out!*` 
                            });
                        }

                        // 39. Do you get tired?
                        else if (query.includes("do you get tired")) {
                            await conn.sendMessage(from, { 
                                text: `💪 *Never! I’m here to assist you any time of the day or night. Let me know how I can help!*` 
                            });
                        }

                        // 40. Are you my friend?
                        else if (query.includes("are you my friend")) {
                            await conn.sendMessage(from, { 
                                text: `🤝 *Absolutely! I’m here to be your friendly assistant and make your day brighter. Let’s chat anytime you need!*` 
                            });
                        }

                // Handle Image creation request
                else if (query.includes("create image") || query.includes("generate image")) {
                    const imagePrompt = encodeURIComponent(query.replace("create image", "").replace("generate image", "").trim());
                    const imageUrl = `https://image.pollinations.ai/prompt/${imagePrompt}`;
                    const response = await fetch(imageUrl);
                    if (response.ok) {
                        const buffer = await response.buffer();
                        await conn.sendMessage(from, { image: buffer, caption: "🎨 *Here’s the image you requested!*" });
                    } else {
                        throw new Error("Image generation failed");
                    }
                }
                 // Default AI Chat response
                else {
                    const aiData = await fetchJson(`https://www.dark-yasiya-api.site/ai/chatgpt?q=${encodeURIComponent(query)}`);
                    if (aiData.result) {
                        await conn.sendMessage(from, { text: `*${aiData.result}*` });
                    } else {
                        throw new Error("Invalid AI response format");
                    }
                }
            } catch (error) {
                console.error("Error:", error.message || error);
                await conn.sendMessage(from, { text: "⚠️ Sorry, something went wrong. Please try again later." });
            }
        }
    }
    const EventEmitter = require('events');
    EventEmitter.defaultMaxListeners = 10000000;  // Increase max listeners globally
        conn.ev.on('call', async (calls) => {
            if (config.ANTI_CALL === "true") {
                try {
                    for (let call of calls) {
                        if (call.status === "offer") {
                            let caller = call.from

                            
                            await conn.rejectCall(call.id, call.from)

                            // Send warning message
                            await conn.sendMessage(caller, {
                                text: `*⚠️ Call Rejected*\n\nCalling the bot is not allowed. The call has been automatically rejected.\n\nIf you need assistance, please send a message instead.\n\n${caption}`
                            })

                            console.log(`Rejected call from user ${caller}`)
                        }
                    }
                } catch (err) {
                    console.error('Anti-call error:', err) 
                }
            }
        })
        const BAD_WORDS = (config.BAD_WORDS || '').split(',').map(word => word.trim().toLowerCase());
        if (config.ANTIBAD_GROUP.split(',').includes(from) ) {
            if (isGroup && isBotAdmins) {
                if (BAD_WORDS.some(badWord => body.toLowerCase().includes(badWord))) {
                    if (isOwner || isDev || isSudo || groupAdmins.includes(sender)) return;
                    await conn.sendMessage(from, { delete: mek.key });
                    await conn.sendMessage(sender, {
                        text: `❌⚠ *BAD WORD DETECTED!*\n`
                    });

                    console.log(`Deleted message from ${sender}: "${body}"`);
                }
            }
        }
               
        if (config.AUTO_VOICE === "true") {
            let {
                data
            } = await axios.get("https://gist.githubusercontent.com/prabathLK/f602911954a959c8730aeb00a588d15d/raw");
            for (vr in data) {
                if (new RegExp("\\b" + vr + "\\b", 'gi').test(body)) {
                    conn.sendMessage(from, {
                        'audio': {
                            'url': data[vr]
                        },
                        'mimetype': "audio/mpeg",
                        'ptt': true
                    }, {
                        'quoted': mek
                    });
                }
            }
        }
        const messageTracker = new Map();
const reactionCooldown = 5000; // Increase delay between reactions (5 seconds)
const maxReactionsPerWindow = 3; // Max reactions per minute per group
const maxRetries = 5; // Max retry attempts before giving up

if (config.AUTO_REACT === "true") {
    try {
        const now = Date.now();
        const dedupWindow = 60000; // 1-minute window
        
        // Generate unique key for deduplication
        const eventKey = `${from}:${mek.key.id}`;

        // Cleanup old entries in the message tracker
        const cleanupTime = now - dedupWindow;
        for (const [key, data] of messageTracker.entries()) {
            if (data.timestamp < cleanupTime) {
                messageTracker.delete(key);
            }
        }

        // Prevent duplicate reactions for the same message
        if (messageTracker.has(eventKey)) return;

        // Count recent reactions for the group
        const groupReactions = Array.from(messageTracker.keys()).filter((key) => key.startsWith(from));
        if (groupReactions.length >= maxReactionsPerWindow) return; // Don't exceed rate limit

        // Array of reaction emojis
        const reactionEmojis = [
            "😊", "😂", "👍", "🎉", "❤️", "😍", "😢", "😎", "🥳", "😋",
            "🤔", "🤗", "😱", "🙌", "🥺", "😏", "😇", "😜", "😬", "😅",
            "😌", "😻", "💔", "💖", "💫", "✨", "🌟", "🌈", "🌻", "🌺",
            "🍕", "🍔", "🍣", "🍦", "🍩", "🍉", "🍓", "🍇", "🍒", "🍍",
            "🥝", "🥭", "🍊", "🍋", "🍏", "🥑", "🥕", "🌽", "🍗", "🍖",
            "🍣", "🧁", "🍨", "🍬", "🍭", "🍸", "🥤", "🍷", "🌭", "🎂",
            "🎉", "💘", "💓", "💕", "💋", "👋", "🤝", "👌", "✌️", "👊",
            "🤜", "🤛", "🤙", "👐", "🤲", "💪", "👶", "👧", "👦", "👩",
            "👨", "👵", "👴", "🧙‍♂️", "🧚‍♀️", "👸", "🤴", "🧑‍🦱", "👑",
            "🎃", "👻", "🐶", "🐱", "🐰", "🐯", "🐱", "🦁", "🦓", "🐘",
            "🐍", "🐦", "🐝", "🐳", "🐟", "🦀", "🦞", "🐙", "🌹", "🌺"
        ];

        // Get a random reaction emoji
        const randomIndex = Math.floor(Math.random() * reactionEmojis.length);
        const reactionEmoji = reactionEmojis[randomIndex];

        // Send the reaction to the message with a longer delay
        await new Promise(resolve => setTimeout(resolve, reactionCooldown));

        // Retry logic with backoff
        let attempts = 0;
        while (attempts < maxRetries) {
            try {
                await conn.sendMessage(from, {
                    react: {
                        text: reactionEmoji,
                        key: mek.key
                    }
                });

                // Track the message so we don't react to it again
                messageTracker.set(eventKey, { timestamp: now });

                console.log(`Reacted to message: ${body} with "${reactionEmoji}"`);
                break; // Exit loop if successful

            } catch (err) {
                if (err.message.includes("rate-overlimit")) {
                    // If rate limit is hit, retry after an exponentially increasing delay
                    const delay = Math.pow(2, attempts) * 5000; // Exponential backoff
                    console.log(`Rate limit hit, retrying after ${delay / 1000} seconds...`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    attempts++;
                } else {
                    console.error('Error reacting to message:', err);
                    break; // Exit on other errors
                }
            }
        }

    } catch (err) {
        console.error('Error in AUTO_REACT handler:', err);
    }
}
if (config.ANTI_STICKER.split(',').includes(from)) {
    if (isGroup && isBotAdmins && !isOwner && !isDev && !isSudo) {
        if (mek.message && mek.message.stickerMessage) {
            await conn.sendMessage(from, { text: "❌ *Stickers are not allowed in this group!*" });
            await conn.sendMessage(from, { delete: mek.key });
        }
    }
}
if (config.ANTI_SPAM.split(',').includes(from)) {
    if (!isOwner && isGroup && isBotAdmins && isDev && isSudo) {
      // Check for spam keywords or repeated messages
      if (body.match(/^(?:\s*[^a-zA-Z0-9\s]+|\s*[^a-zA-Z0-9\s]+\s*){3,}/)) {
        await conn.sendMessage(from, { text: "âŒâš  *Spam detected! Message deleted.*" });
        await conn.sendMessage(from, { delete: mek.key });
      }
    }
  }
  //=====================================================================
  if (config.ANTI_STICKER.split(',').includes(from)) {
      if (isGroup && isBotAdmins && !isOwner && !isDev && !isSudo) {
          if (mek.message && mek.message.stickerMessage) {
              await conn.sendMessage(from, { text: "❌ *Stickers are not allowed in this group!*" });
              await conn.sendMessage(from, { delete: mek.key });
          }
      }
  }
  //=====================================================================
  if (config.ANTI_IMAGE.split(',').includes(from)) {
      if (isGroup && isBotAdmins && !isOwner && !isDev && !isSudo) {
          if (mek.message && mek.message.imageMessage) {
              await conn.sendMessage(from, { text: "❌ *Images are not allowed in this group!*" });
              await conn.sendMessage(from, { delete: mek.key });
          }
      }
  }
  //=====================================================================
  if (config.ANTI_VIDEO.split(',').includes(from)) {
      if (isGroup && isBotAdmins && !isOwner && !isDev && !isSudo) {
          if (mek.message && mek.message.videoMessage) {
              await conn.sendMessage(from, { text: "❌ *Videos are not allowed in this group!*" });
              await conn.sendMessage(from, { delete: mek.key });
          }
      }
  }
  //=====================================================================
  if (config.ANTI_AUDIO.split(',').includes(from)) {
      if (isGroup && isBotAdmins && !isOwner && !isDev && !isSudo) {
          if (mek.message && mek.message.audioMessage) {
              await conn.sendMessage(from, { text: "❌ *Audio messages are not allowed in this group!*" });
              await conn.sendMessage(from, { delete: mek.key });
          }
      }
  }
  //=====================================================================
  if (config.ANTI_DOCUMENT.split(',').includes(from)) {
      if (isGroup && isBotAdmins && !isOwner && !isDev && !isSudo) {
          if (mek.message && mek.message.documentMessage) {
              await conn.sendMessage(from, { text: "❌ *Documents are not allowed in this group!*" });
              await conn.sendMessage(from, { delete: mek.key });
          }
      }
  }

    //=====================================================================

    //============================================================================ 
 
    //==================================================================
    const events = require('./commands')
    const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
    if (isCmd) {
    const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
    if (cmd) {
    if (cmd.react) conn.sendMessage(from, { react: { text: cmd.react, key: mek.key }})
    try {
    cmd.function(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins,isDev ,isSudo, reply});
    } catch (e) {
    console.error("[PLUGIN ERROR] " + e);
    }
    } else {
        // Command Suggestion Logic
        const similarCommands = findSimilarCommands(events, cmdName);
        
        if (similarCommands.length > 0) {
            const suggestionText = 
                `*🤷‍♂️ 𝖨 𝖼𝖺𝗇'𝗍 𝗌𝖾𝖾 𝖫𝗂𝗄𝖾 𝗍𝗁𝗂𝗌 𝖢𝗈𝗆𝗆𝖺𝗇𝖽*\n` +
                `📃 𝖣𝗂𝖽 𝖸𝗈𝗎 𝖬𝖾𝖺𝗇 𝖡𝖾𝗅𝗈𝗐 𝖢𝗈𝗆𝗆𝗇𝖽\n` + 
                similarCommands.map(cmd => `• ${prefix}${cmd}`).join('\n') + 
                `\n\n> 𝖳𝗒𝗉𝖾 ${prefix}𝗆𝖾𝗇𝗎 𝖮𝗋  ${prefix}𝗅𝗂𝗌𝗍 𝖥𝗈𝗋 𝖲𝖾𝖾 𝖮𝗎𝗋 𝖠𝗏𝖺𝗂𝗅𝖻𝗅𝖾 𝖺𝗅𝗅 𝖢𝗈𝗆𝗆𝖺𝗇𝖽𝗌`;
            
            // Send suggestion message
            reply(suggestionText);
        }
    }
    }
    events.commands.map(async(command) => {
    if (body && command.on === "body") {
    command.function(conn, mek, m,{from,  quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins,isDev ,isSudo, reply})
    } else if (mek.q && command.on === "text") {
    command.function(conn, mek, m,{from,  quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins,isDev,isSudo, reply})
    } else if (
    (command.on === "image" || command.on === "photo") &&
    mek.type === "imageMessage"
    ) {
    command.function(conn, mek, m,{from,  quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins,isDev ,isSudo, reply})
    } else if (
    command.on === "sticker" &&
    mek.type === "stickerMessage"
    ) {
    command.function(conn, mek, m,{from,  quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins,isDev ,isSudo, reply})
    }});
    
    })
    }
    const bodyParser = require('body-parser');
    const pairRouter = require('./BHASHI-DB/pair'); // Importing the pair route from pair.js
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/', (req, res) => {
        const credsPath = path.join(__dirname, './BHASHI-DB/BHASHI-MD-SESSION/creds.json');
        
        if (fs.existsSync(credsPath)) {
            res.sendFile(path.join(__dirname, './BHASHI-DB/connected.html'));
        } else {
            res.sendFile(path.join(__dirname, './BHASHI-DB/pair.html'));
        }
    });
    
    app.use('/session', pairRouter);
    
    app.listen(port, () => console.log(`⚜ BHASHI MD SERVER VERSION 2.0 WORKING...`));
    setTimeout(() => {
    connectToWA()
    }, 4000);
    
