const {readEnv,updateEnv} = require('../BHASHI-DB/settingsdb2')
const {cmd , commands} = require('../commands')
const fs = require('fs');
const { sleep } = require('../BHASHI-DB/mainfun');
const path = require('path');
const os = require('os');
const axios = require('axios')
const { exec } = require("child_process");
const EnvVar = require('../BHASHI-DB/envdb');
if (require("../package.json").version === "1.0.0") {
    return console.log("ado thota puluwnnm mt kochchr pulundh");
}
const messages = {
    "EN": {
        "joinSuccess": "✅ Successfully joined the group!",
        "joinFail": "❌ Failed to join the group. Please check the invite link.",
        "joinError": "❗ An error occurred while trying to join the group.",
        "leaveError": "❗ An error occurred while trying to leave the group.",
        "hidetagGroupOnly": "❌ This command can only be used in a group.",
        "hidetagNoMessage": "❗ Please provide a message to send.",
        "restartMessage": "𝗕𝗵𝗮𝘀𝗵𝗶 𝗠𝗗 𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴...",
        "upgradeStart": "🔄 Redeploying the bot...",
        "upgradeSuccess": "✅ Bot redeployment successful.",
        "upgradeFail": "❌ Error occurred during redeployment.",
        "broadcastNoMessage": "❗ Please provide a message to broadcast.",
        "broadcastSuccess": "✅ Broadcast sent to {0} chats successfully!",
        "banNotOwner": "❌ You are not the owner!",
        "banNoUser": "❗ Please provide a valid user number to ban or quote a user.",
        "banSuccess": "🚫 User {0} has been banned from using the bot.",
        "banAlready": "❗ User is already banned.",
        "unbanSuccess": "✅ User {0} has been unbanned.",
        "unbanNotBanned": "❗ User is not in the blacklist.",
        "setNameNoName": "❗ Please provide a new name for the bot.",
        "setNameSuccess": "✅ Bot's name has been changed to: *{0}*",
        "setBioNoBio": "❗ Please provide a new bio for the bot.",
        "setBioSuccess": "✅ Bot's bio has been changed to: *{0}*",
        "blockSuccess": "🚫 User {0} has been blocked.",
        "unblockSuccess": "✅ User {0} has been unblocked.",
        "setppNoMedia": "❗ No image or video found.",
        "setppSuccess": "✅ Profile picture has been updated.",
        "setppFail": "❗ Failed to update profile picture.",
        "autoBioEnabled": "🛠️ AutoBIO feature has been *enabled*! 🔄",
        "autoBioDisabled": "🛠️ AutoBIO feature has been *disabled*! 🚫",
        "invalidChat": "Please provide a valid chat ID.",
        "archiveSuccess": "*✅ Chat has been archived successfully.*",
        "archiveFail": "*⚠️ Failed to archive the chat. Please try again.*",
        "archiveError": "⚠️ An error occurred while archiving the chat.",
        "starSuccess": "*✅ Message has been starred successfully.*",
        "starFail": "*⚠️ Failed to star the message. Please try again.*",
        "starError": "⚠️ An error occurred while starring the message.",
        "unstarSuccess": "*✅ Message has been unstarred successfully.*",
        "unstarFail": "*⚠️ Failed to unstar the message. Please try again.*",
        "unstarError": "⚠️ An error occurred while unstarring the message.",
        "addSudoNoUser": "❗ Please provide a user to add to the sudo list or quote a user.",
        "addSudoError": "❌ An error occurred while trying to add the user to the sudo list.",
        "addSudoSuccess": "✅ User {0} has been added to the sudo list.",
        "addSudoAlready": "❗ User is already in the sudo list.",
        "delSudoNoUser": "❗ Please provide a user to remove from the sudo list or quote a user.",
        "delSudoError": "❌ An error occurred while trying to remove the user from the sudo list.",
        "delSudoSuccess": "✅ User {0} has been removed from the sudo list.",
        "delSudoNotFound": "❗ User is not found in the sudo list."
    },
    "SI": {
        "joinSuccess": "✅ සාර්ථකව සමූහයට එක්විය!",
        "joinFail": "❌ සමූහයට එක්වීමට අසමත් විය. කරුණාකර ආරාධනා සබැඳිය පරීක්ෂා කරන්න.",
        "joinError": "❗ සමූහයට එක්වීමට උත්සාහ කිරීමේදී දෝෂයක් ඇති විය.",
        "leaveError": "❗ සමූහයෙන් ඉවත් වීමට උත්සාහ කිරීමේදී දෝෂයක් ඇති විය.",
        "hidetagGroupOnly": "❌ මෙම විධානය සමූහයක පමණක් භාවිතා කළ හැකිය.",
        "hidetagNoMessage": "❗ කරුණාකර යැවීමට පණිවිඩයක් සපයන්න.",
        "restartMessage": "𝗕𝗵𝗮𝘀𝗵𝗶 𝗠𝗗 නැවත ආරම්භ වෙමින්...",
        "upgradeStart": "🔄 බොට් නැවත යෙදවීම...",
        "upgradeSuccess": "✅ බොට් නැවත යෙදවීම සාර්ථකයි.",
        "upgradeFail": "❌ නැවත යෙදවීමේදී දෝෂයක් සිදු විය.",
        "broadcastNoMessage": "❗ කරුණාකර විකාශනය කිරීමට පණිවිඩයක් සපයන්න.",
        "broadcastSuccess": "✅ විකාශනය සාර්ථකව චැට් {0}කට යවන ලදී!",
        "banNotOwner": "❌ ඔබ හිමිකරු නොවේ!",
        "banNoUser": "❗ කරුණාකර තහනම් කිරීමට වලංගු පරිශීලක අංකයක් සපයන්න හෝ පරිශීලකයෙකු උපුටා දක්වන්න.",
        "banSuccess": "🚫 පරිශීලක {0} බොට් භාවිතයෙන් තහනම් කර ඇත.",
        "banAlready": "❗ පරිශීලකයා දැනටමත් තහනම් කර ඇත.",
        "unbanSuccess": "✅ පරිශීලක {0}ගේ තහනම ඉවත් කර ඇත.",
        "unbanNotBanned": "❗ පරිශීලකයා අසාදු ලේඛනයේ නොමැත.",
        "setNameNoName": "❗ කරුණාකර බොට් සඳහා නව නමක් සපයන්න.",
        "setNameSuccess": "✅ බොට්ගේ නම වෙනස් කර ඇත: *{0}*",
        "setBioNoBio": "❗ කරුණාකර බොට් සඳහා නව ජීව දත්තයක් සපයන්න.",
        "setBioSuccess": "✅ බොට්ගේ ජීව දත්ත වෙනස් කර ඇත: *{0}*",
        "blockSuccess": "🚫 පරිශීලක {0} අවහිර කර ඇත.",
        "unblockSuccess": "✅ පරිශීලක {0}ගේ අවහිරය ඉවත් කර ඇත.",
        "setppNoMedia": "❗ රූපයක් හෝ වීඩියෝවක් හමු නොවීය.",
        "setppSuccess": "✅ පැතිකඩ පින්තූරය යාවත්කාලීන කර ඇත.",
        "setppFail": "❗ පැතිකඩ පින්තූරය යාවත්කාලීන කිරීමට අසමත් විය.",
        "autoBioEnabled": "🛠️ ස්වයංක්‍රීය ජීව දත්ත විශේෂාංගය *සක්‍රීය* කර ඇත! 🔄",
        "autoBioDisabled": "🛠️ ස්වයංක්‍රීය ජීව දත්ත විශේෂාංගය *අක්‍රීය* කර ඇත! 🚫",
        "invalidChat": "කරුණාකර වලංගු කතාබස් හැඳුනුම්පතක් ලබා දෙන්න.",
        "archiveSuccess": "*✅ කතාබස් සාර්ථකව ආරක්ෂිත කර ඇත.*",
        "archiveFail": "*⚠️ කතාබස් ආරක්ෂා කිරීමට අසමත් විය. කරුණාකර නැවත උත්සාහ කරන්න.*",
        "archiveError": "⚠️ කතාබස් ආරක්ෂා කිරීමේදී දෝෂයක් සිදු විය.",
        "starSuccess": "*✅ පණිවිඩය සාර්ථකව තාරකාව ලැබී ඇත.*",
        "starFail": "*⚠️ පණිවිඩය තාරකාව ලැබීමට අසමත් විය. කරුණාකර නැවත උත්සාහ කරන්න.*",
        "starError": "⚠️ පණිවිඩය තාරකාව ලබා ගැනීමට දෝෂයක් ඇති විය.",
        "unstarSuccess": "*✅ පණිවිඩය සාර්ථකව තාරකාව ඉවත් කර ඇත.*",
        "unstarFail": "*⚠️ පණිවිඩය තාරකාව ඉවත් කිරීමට අසමත් විය. කරුණාකර නැවත උත්සාහ කරන්න.*",
        "unstarError": "⚠️ පණිවිඩය තාරකාව ඉවත් කිරීමට දෝෂයක් ඇති විය.",
        "addSudoNoUser": "❗ කරුණාකර sudo ලැයිස්තුයට එකතු කිරීමට පරිශීලකයෙකු ලබා දෙන්න හෝ පරිශීලකයෙකු උපුටා දක්වන්න.",
        "addSudoError": "❌ sudo ලැයිස්තුයට පරිශීලකයා එකතු කිරීමට දෝෂයක් ඇති විය.",
        "addSudoSuccess": "✅ පරිශීලකයා {0} sudo ලැයිස්තුවට එකතු කර ඇත.",
        "addSudoAlready": "❗ පරිශීලකයා දැනටමත් sudo ලැයිස්තුවේ ඇත.",
        "delSudoNoUser": "❗ කරුණාකර sudo ලැයිස්තුවෙන් ඉවත් කිරීමට පරිශීලකයෙකු ලබා දෙන්න හෝ පරිශීලකයෙකු උපුටා දක්වන්න.",
        "delSudoError": "❌ sudo ලැයිස්තුවෙන් පරිශීලකයා ඉවත් කිරීමට දෝෂයක් ඇති විය.",
        "delSudoSuccess": "✅ පරිශීලකයා {0} sudo ලැයිස්තුවෙන් ඉවත් කර ඇත.",
        "delSudoNotFound": "❗ පරිශීලකයා sudo ලැයිස්තුවේ නොමැත."
    }
};


cmd({
    pattern: "fetch",
    fromMe: true,
    desc: "🔄 Fetch data from a URL and display it",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo }) => {
    // Ensure the user has permission to use the command (if required)
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    // Get the URL from the user input
    const url = args[0];

    if (!url) return reply("❌ Please provide a URL to fetch data from.");

    try {
        // Send a GET request to the provided URL
        const response = await axios.get(url);

        // Check if the response is in JSON format and handle accordingly
        const data = response.data;

        // Reply with the fetched data (you can format it or limit it as needed)
        reply(`✅ Fetched data from ${url}:\n\n` + JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error fetching data:", error);
        reply("❌ Failed to fetch data. Please check the URL and try again.");
    }
});
cmd({
    pattern: "feedback",
    category: "owner",
    react: "📝",
    use: ".feedback <your feedback description>",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply, args, isOwner, isDev,isSudo }) => {
    try {
        // Ensure only the owner or developers can use the command
        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }

        // Join the arguments into a single feedback description
        const feedbackDescription = args.join(' ').trim();

        // Check if feedback text is provided
        if (!feedbackDescription) {
            return reply("❌ Please provide your feedback.");
        }

        // Collect context information (e.g., sender's name, number, message ID, timestamp)
        const senderName = from.split('@')[0];  // Extract sender's name or ID
        const senderNumber = from;  // Full number with country code
        const messageID = mek.key.id;  // Message ID for reference
        const timestamp = new Date().toISOString();  // Date and time of feedback submission

        // Format the feedback message
        const feedbackMessage = `
~📝*'BHASHI FEEDBACK'*📝~

* 🗨️ *Your Feedback :* ${feedbackDescription}
* 👨‍💻 *Developer :* Vishwa Mihiranga

* 👤 *Feedback By:* ${senderName}
* 📞 *Sender's Number:* ${senderNumber}
* 🆔 *Message ID:* ${messageID}
* 🕒 *Feedback Time:* ${timestamp}

_We appreciate your feedback and will use it to improve the bot._

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
        `;

        // Developer's number to send feedback to (update this with your number)
        const devnum = '94724826875@s.whatsapp.net'; // Replace with the actual developer's number

        // Send the feedback to the developer with context info
        await conn.sendMessage(devnum, { text: feedbackMessage }, { quoted: mek });

        // Notify the user that the feedback has been sent
        return reply("✅ Your feedback has been successfully submitted to the developer.");

    } catch (error) {
        reply("🚫 An error occurred while submitting your feedback.");
        console.error(error);
    }
});


cmd({
    pattern: "featurerequest",
    category: "owner",
    react: "💡",
    use: ".featurerequest <your feature description>",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply, args, isOwner, isDev,isSudo }) => {
    try {
        // Ensure the user is either the owner or a developer
        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }

        // Join the arguments into a single feature request description
        const featureDescription = args.join(' ').trim();

        // Check if a feature description is provided
        if (!featureDescription) {
            return reply("❌ Please provide a description of the feature.");
        }

        // Collect context information (e.g., sender's name, number, message ID, timestamp)
        const senderName = from.split('@')[0];  // Extract sender's name or ID
        const senderNumber = from;  // Full number with country code
        const messageID = mek.key.id;  // Message ID for reference
        const timestamp = new Date().toISOString();  // Date and time of feature request submission

        // Format the feature request message
        const featureRequestMessage = `
~💡*'BHASHI FEATURE REQUESTER'*💡~

* 📝 *Feature Request :* ${featureDescription}
* 👨‍💻 *Developer :* Vishwa Mihiranga

* 👤 *Requested by:* ${senderName}
* 📞 *Sender's Number:* ${senderNumber}
* 🆔 *Message ID:* ${messageID}
* 🕒 *Request Time:* ${timestamp}

_We will consider your feature request and work on it. Once the feature is implemented, you can redeploy the bot._

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
        `;

        // Developer's number (ensure the number is correct and in the correct international format)
        const devnum = '94724826875@s.whatsapp.net'; // Replace with the actual developer's number

        // Send the feature request to the developer with context info
        await conn.sendMessage(devnum, { text: featureRequestMessage }, { quoted: mek });

        // Notify the user that the feature request has been sent
        return reply("✅ Your feature request has been successfully sent to the developer.");

    } catch (error) {
        reply("🚫 An error occurred while submitting your feature request.");
        console.error(error);
    }
});


cmd({
    pattern: "bugreport",
    category: "owner",
    react: "💬",
    use: ".bugreport <your bug description>",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply, args, isOwner, isDev,isSudo }) => {
    try {
        // Ensure the user is either the owner or a developer
        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }

        // Join the arguments into a single bug report description
        const bugDescription = args.join(' ').trim();

        // Check if there is a bug description provided
        if (!bugDescription) {
            return reply("❌ Please provide a description of the bug.");
        }

        // Collect context information (e.g., sender's name, number, message ID, timestamp)
        const senderName = from.split('@')[0];  // Extract sender's name or ID
        const senderNumber = from;  // Full number with country code
        const messageID = mek.key.id;  // Message ID for reference
        const timestamp = new Date().toISOString();  // Date and time of bug report submission

        // Format the bug report message
        const bugReportMessage = `
~💬*'BHASHI BUG REPORTER'*💬~

* 🧾 *Your Request :* ${bugDescription}
* 👨‍💻 *Developer :* Vishwa Mihiranga

* 👤 *Reported by:* ${senderName}
* 📞 *Sender's Number:* ${senderNumber}
* 🆔 *Message ID:* ${messageID}
* 🕒 *Report Time:* ${timestamp}

_We will fix your bug. After we update the GitHub repo, you can redeploy._

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
        `;

        // Developer's number (ensure the number is correct and in the correct international format)
        const devnum = '94724826875@s.whatsapp.net';  // Replace with the actual developer's number

        // Send the bug report to the developer
        await conn.sendMessage(devnum, { text: bugReportMessage }, { quoted: mek });

        // Notify the user that the bug report has been sent
        return reply("✅ Your bug report has been successfully sent to the developer.");

    } catch (error) {
        reply("🚫 An error occurred while sending your bug report.");
        console.error(error);
    }
});





cmd({
    pattern: "clearchats",
    desc: "Clear all chats from the bot.",
    category: "owner",
    use: '.clearchats',
    react: "🧹",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply,isSudo }) => {
    try {
        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }
        const chats = conn.chats.all();
        for (const chat of chats) {
            await conn.modifyChat(chat.jid, 'delete');
        }
        reply("🧹 All chats cleared successfully!");
    } catch (error) {
        reply(`❌ Error clearing chats: ${error.message}`);
    }
});

cmd({
    pattern: "rename",
    desc: "rename file/caption and forward",
    category: "owner",
    use: '.rename filename|caption|jid',
    filename: __filename
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Check owner
        if (!isOwner) return reply("*Owner Only ❌*");

        // Check quoted message
        if (!m.quoted) return reply("*Reply to a message with media ❌*");

        // Check arguments
        if (!q) return reply("*Format: .rename filename|caption|jid*\nExample: .rename mynewfile|My Caption|91xxxxxx@s.whatsapp.net");

        // Split the arguments
        let [newFileName, newCaption, targetJid] = q.split("|");
        
        if (!newFileName && !newCaption) return reply("*Please provide filename or caption to rename*");

        // Process target JID
        if (targetJid) {
            // Add @s.whatsapp.net if not provided
            if (!targetJid.includes('@')) {
                targetJid = `${targetJid}@s.whatsapp.net`;
            }
        } else {
            // Use 'from' as default if no JID provided
            targetJid = from;
        }

        let message = {};
        message.key = mek.quoted?.fakeObj?.key;

        // Handle document with caption
        if (mek.quoted?.documentWithCaptionMessage?.message?.documentMessage) {
            let doc = mek.quoted.documentWithCaptionMessage.message.documentMessage;
            let mime = doc.mimetype;

            const mimeType = require('mime-types');
            let ext = mimeType.extension(mime);

            // Set new filename if provided
            if (newFileName) {
                doc.fileName = `${newFileName}.${ext}`;
            }

            // Set new caption if provided
            if (newCaption) {
                doc.caption = newCaption;
            }
        }
        // Handle other media types
        else if (mek.quoted.mtype?.includes('image') || mek.quoted.mtype?.includes('video') || mek.quoted.mtype?.includes('audio')) {
            if (newCaption) {
                mek.quoted.caption = newCaption;
            }
        }

        message.message = mek.quoted;

        // Forward the modified message
        await conn.forwardMessage(targetJid, message, true);

        return reply(`*✅ Forwarded with modifications:*\n${newFileName ? `\nFilename: ${newFileName}` : ''}${newCaption ? `\nCaption: ${newCaption}` : ''}\n\nTo: ${targetJid}`);

    } catch (error) {
        console.error('Rename error:', error);
        return reply(`❌ Error: ${error.message}`);
    }
});
cmd({
    pattern: "forward",
    desc: "forward msgs",
    alias: ["fo"],
    category: "owner",
    use: '.forward < Jid address >',
    filename: __filename
},

async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

if (!isOwner) {
    return reply("*Owner Only ❌*")}
    
if (!q || !m.quoted) {
reply("*give me message ❌*")
}



let p;
let message = {}

            message.key = mek.quoted?.fakeObj?.key;

            if (mek.quoted?.documentWithCaptionMessage?.message?.documentMessage) {
            
        let mime = mek.quoted.documentWithCaptionMessage.message.documentMessage.mimetype

const mimeType = require('mime-types');
let ext = mimeType.extension(mime);		    

                mek.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (p ? p : mek.quoted.documentWithCaptionMessage.message.documentMessage.caption) + "." + ext;
            }

            message.message = mek.quoted;
const mass =  await conn.forwardMessage(q, message, true)
return reply(`*Message forwarded to:*\n\n ${q}`)
            
})
cmd({
    pattern: 'ssave',
    desc: 'Downloads media from a quoted status or message and reposts it.',
    category: 'owner',
    react: '🔄',
    filename: __filename
}, async (conn, mek, m, { from, reply, args, isSudo, senderNumber }) => {
    try {
        // Ensure the message is quoted
        if (!m.quoted) {
            return reply("❌ Please reply to a status or message with media to repost.");
        }

        // Get the quoted message
        const quotedMsg = m.quoted;

        // Check for different types of media
        const mediaType = quotedMsg.type || quotedMsg.mtype;
        let mediaData;
        let fileExtension = '';
        let mimeType = '';

        switch (mediaType) {
            case 'imageMessage':
                mediaData = await quotedMsg.download() || await conn.downloadMediaMessage(quotedMsg);
                fileExtension = 'jpg';
                mimeType = 'image/jpeg';
                break;
            case 'videoMessage':
                mediaData = await quotedMsg.download() || await conn.downloadMediaMessage(quotedMsg);
                fileExtension = 'mp4';
                mimeType = 'video/mp4';
                break;
            case 'audioMessage':
                mediaData = await quotedMsg.download() || await conn.downloadMediaMessage(quotedMsg);
                fileExtension = 'ogg';
                mimeType = 'audio/ogg';
                break;
            case 'documentMessage':
                mediaData = await quotedMsg.download() || await conn.downloadMediaMessage(quotedMsg);
                fileExtension = quotedMsg.fileName ? quotedMsg.fileName.split('.').pop() : 'bin';
                mimeType = quotedMsg.mimetype || 'application/octet-stream';
                break;
            default:
                return reply("❌ The replied message does not contain supported media. Please reply to an image, video, audio, or document.");
        }

        if (!mediaData) {
            return reply("❌ Failed to download the media.");
        }

        // Prepare media message for repost
        const messageOptions = {};
        if (mediaType === 'imageMessage') {
            messageOptions.image = mediaData;
        } else if (mediaType === 'videoMessage') {
            messageOptions.video = mediaData;
        } else if (mediaType === 'audioMessage') {
            messageOptions.audio = mediaData;
        } else if (mediaType === 'documentMessage') {
            messageOptions.document = mediaData;
            messageOptions.mimetype = mimeType;
            messageOptions.fileName = quotedMsg.fileName || `Repost-${Date.now()}.${fileExtension}`;
        }

        // Repost the media message
        await conn.sendMessage(from, messageOptions, { quoted: m });
    } catch (e) {
        console.error('Error executing repost command:', e);
        reply("⚠️ An error occurred while reposting the media.");
    }
});

cmd({
    pattern: "setvar",
    alias: ["updatevar"],
    react: "⚙️",
    desc: "Check and update environment variables",
    category: "owner",
    filename: __filename,
},
async (conn, mek, m, { from, q, reply, isOwner,isDev,isSudo }) => {
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    if (!q) {
        return reply("🙇‍♂️ *Please provide the environment variable and its new value.* \n\nExample: `.update ALIVE_MSG: hello i am prabath kumara`");
    }

    // Find the position of the first colon or comma
    const colonIndex = q.indexOf(':');
    const commaIndex = q.indexOf(',');

    // Ensure we have a valid delimiter index
    const delimiterIndex = colonIndex !== -1 ? colonIndex : commaIndex;
    if (delimiterIndex === -1) {
        return reply("🫠 *Invalid format. Please use the format:* `.update KEY:VALUE`");
    }

    // Extract key and value
    const key = q.substring(0, delimiterIndex).trim();
    const value = q.substring(delimiterIndex + 1).trim();

    // Extract mode if provided
    const parts = value.split(/\s+/).filter(part => part.trim());
    const newValue = value; // Use the full value as provided by the user
    const mode = parts.length > 1 ? parts.slice(1).join(' ').trim() : '';

    const validModes = ['public', 'private', 'groups', 'inbox'];
    const finalMode = validModes.includes(mode) ? mode : '';

    if (!key || !newValue) {
        return reply("🫠 *Invalid format. Please use the format:* `.update KEY:VALUE`");
    }

    // Specific checks for MODE, ALIVE_IMG, and AUTO_READ_STATUS
    if (key === 'MODE' && !validModes.includes(newValue)) {
        return reply(`😒 *Invalid mode. Valid modes are: ${validModes.join(', ')}*`);
    }

    if (key === 'ALIVE_IMG' && !newValue.startsWith('https://')) {
        return reply("😓 *Invalid URL format. PLEASE GIVE ME IMAGE URL*");
    }

    if (key === 'AUTO_READ_STATUS' && !['true', 'false'].includes(newValue)) {
        return reply("😓 *Invalid value for AUTO_READ_STATUS. Please use `true` or `false`.*");
    }

    try {
        // Check if the environment variable exists
        const envVar = await EnvVar.findOne({ key: key });

        if (!envVar) {
            // If the variable does not exist, fetch and list all existing env vars
            const allEnvVars = await EnvVar.find({});
            const envList = allEnvVars.map(env => `${env.key}: ${env.value}`).join('\n');
            return reply(`❌ *The environment variable ${key} does not exist.*\n\n*Here are the existing environment variables:*\n\n${envList}`);
        }

        // Update the environment variable
        await updateEnv(key, newValue, finalMode);
        reply(`✅ *Environment variable updated.*\n\n🗃️ *${key}* ➠ ${newValue} ${finalMode ? `\n*Mode:* ${finalMode}` : ''}`);

    } catch (err) {
        console.error('Error updating environment variable:' + err.message);
        reply("🙇‍♂️ *Failed to update the environment variable. Please try again.*" + err);
    }
});
//==================================================================
cmd({
    pattern: "getvars",
    alias: ["vars"],
    react: "⚙️",
    desc: "Get all current environment variables",
    category: "owner",
    filename: __filename,
}, async (conn, mek, m, { reply, isOwner, isDev,isSudo }) => {
    // Permission check for owner and IsDev
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ *You do not have permission to use this command.*");
    }

    try {
        // Fetch all existing environment variables
        const allEnvVars = await EnvVar.find({});

        if (allEnvVars.length === 0) {
            return reply("🔍 *No environment variables found.*");
        }

        // Create a list of environment variables
        const envList = allEnvVars
            .map(env => `🌐 *${env.key}*: _${env.value}_`)
            .join('\n\n');

        // Formatting the output message with emojis and bold text
        reply(`🧰 *Current Environment Variables* ⚙️

Here are the currently configured environment variables:

${envList}

*Total Variables:* ${allEnvVars.length} 🌍`);

    } catch (err) {
        console.error('Error fetching environment variables:' + err.message);
        reply("🙇‍♂️ *Failed to retrieve the environment variables. Please try again later.*");
    }
});
//==================================================================
cmd({
    pattern: "remvar",
    alias: ["removevar"],
    react: "❌",
    desc: "Remove a specific environment variable.",
    category: "owner",
    filename: __filename,
}, async (conn, mek, m, { reply, isOwner, isDev, text,isSudo }) => {
    // Permission check for owner and IsDev
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ *You do not have permission to use this command.*");
    }

    // Check if the user provided a variable key to remove
    if (!text) {
        return reply("🔍 *Please provide the key of the environment variable to remove.*\nExample: .remvar API_KEY");
    }

    try {
        // Find the environment variable by its key
        const envVar = await EnvVar.findOne({ key: text });

        if (!envVar) {
            return reply(`🚫 *No environment variable found with the key: ${text}.*`);
        }

        // Remove the environment variable
        await EnvVar.deleteOne({ key: text });

        // Send a confirmation message
        reply(`✅ *Environment variable '${text}' has been successfully removed.*`);

    } catch (err) {
        console.error('Error removing environment variable:', err.message);
        reply("🙇‍♂️ *Failed to remove the environment variable. Please try again later.*");
    }
});

//=================================================================
cmd({
    pattern: "remallvars",
    alias: ["removeallvars"],
    desc: "Remove all environment variables",
    category: "owner",
    filename: __filename,
},
async (conn, mek, m, { from, q, reply, isOwner,isDev,isSudo }) => {
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    try {
        // Check if any environment variables exist
        const envVars = await EnvVar.find();

        if (envVars.length === 0) {
            return reply("❌ *No environment variables found to remove.*");
        }

        // Remove all environment variables
        await EnvVar.deleteMany({});
        reply("✅ *All environment variables have been removed successfully.*");

    } catch (err) {
        console.error('Error removing all environment variables:' + err.message);
        reply("🙇‍♂️ *Failed to remove all environment variables. Please try again.*" + err);
    }
});

//==================================================================
cmd({
    pattern: "removevar",
    alias: ["remvar"],
    desc: "Remove an environment variable",
    category: "owner",
    filename: __filename,
},
async (conn, mek, m, { from, q, reply, isOwner,isDev,isSudo}) => {
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    if (!q) {
        return reply("🙇‍♂️ *Please provide the environment variable key to remove.* \n\nExample: `.removeconfig ALIVE_MSG`");
    }

    try {
        // Check if the environment variable exists
        const envVar = await EnvVar.findOne({ key: q.trim() });

        if (!envVar) {
            return reply(`❌ *The environment variable ${q} does not exist.*`);
        }

        // Remove the environment variable
        await EnvVar.deleteOne({ key: q.trim() });
        reply(`✅ *Environment variable ${q} has been removed successfully.*`);

    } catch (err) {
        console.error('Error removing environment variable:' + err.message);
        reply("🙇‍♂️ *Failed to remove the environment variable. Please try again.*" + err);
    }
});
//=================================================================
cmd({
    pattern: "getabout",
    desc: "Fetch WhatsApp status (about) of a quoted user.",
    react: 'ℹ️',
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { from, reply,isOwner,isDev,isSudo }) => {
    try {
        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }
        if (!m.quoted) {
            return reply("Please reply to a user's message to get their 'about' status.");
        }

        // Get the WhatsApp number from the quoted message
        const quotedUserJID = m.quoted.sender;

        // Fetch the status (about) of the quoted user
        const status = await conn.fetchStatus(quotedUserJID);
        console.log("User status: " + status.status);

        // Send the status back to the chat
        reply(`*✅ The 'About' status of ${quotedUserJID} :* "${status.status}"`);
    } catch (error) {
        console.log(error);
        reply("An error occurred: " + error.message);
    }
});
//=================================================================
cmd({
    pattern: "getbusiness",
    desc: "ℹGet the business profile description and category of a user.",
    fromMe: true,
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply,isOwner,isDev,isSudo }) => {
    try {
        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }
        const targetJID = (m.quoted ? m.quoted.sender : args[0]?.replace(/[^0-9]/g, "") + "@s.whatsapp.net") || "";

        // Check if a valid JID is provided
        if (!targetJID) return reply("❗ Please provide a valid user or reply to a user's message.");

        // Fetch the business profile
        const profile = await conn.getBusinessProfile(targetJID);

        // Log the business profile for debugging purposes
        console.log("Fetched profile:", profile);

        // Check if the profile is available
        if (!profile) {
            return reply("🔍 No business profile found for this user.");
        }

        // Construct the response message
        const responseMessage = `*🌟 Business Profile of ${targetJID}:*\n` +
            `📝 *Description:* ${profile.description || "No description available."}\n` +
            `🏷️ *Category:* ${profile.category || "No category available."}\n` +
            `📅 *Account Type:* ${profile.isBusiness ? "Business Account" : "Personal Account"}\n` +
            `📞 *Contact Info:* ${profile.contactNumber || "No contact info available."}\n` +
            `🌐 *Website:* ${profile.website || "No website available."}\n`;

        // Send the response back to the chat
        reply(responseMessage);
    } catch (error) {
        console.error("Error fetching business profile:", error);
        // Distinguish between different error types
        if (error.message.includes("not found")) {
            reply("🚫 The business profile could not be found for this user.");
        } else {
            reply("⚠️ An error occurred while fetching the business profile: " + error.message);
        }
    }
});
//=================================================================
cmd({
    pattern: "join",
    fromMe: true,
    desc: "Make the bot join a group using an invite link.",
    category: "owner",
    react: "🌀",
    filename: __filename
}, async (conn, mek, m, { q, reply, isOwner, isDev ,isSudo}) => {
    try {
        const config = await readEnv();
        const LANGUAGE = config.LANGUAGE || "EN";

        // Define the lang function outside the try block for scope access
        const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

        // Check if user has permission to use the command
        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }

        // Validate the invite link
        if (!q || !q.includes("chat.whatsapp.com")) {
            return await reply("❌ Please provide a valid WhatsApp group invite link.");
        }

        // Extract the invite code from the link
        const inviteCode = q.split("chat.whatsapp.com/")[1];
        if (!inviteCode) {
            return await reply("❌ Invalid invite link. Could not extract the invite code.");
        }

        // Attempt to join the group
        const response = await conn.groupAcceptInvite(inviteCode);
        if (response) {
            await reply(lang("joinSuccess"));
        } else {
            await reply(lang("joinFail"));
        }
    } catch (e) {
        console.error("Error while joining group:", e);

        // Ensure lang is available here
        const config = await readEnv();
        const LANGUAGE = config.LANGUAGE || "EN";
        const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

        await reply(lang("joinError"));
    }
});

//=================================================================
cmd({
    pattern: "left",
    fromMe: true,
    desc: "Make the bot leave the group.",
    category: "owner",
    react: "👋",
    filename: __filename
}, async (conn, mek, m, { from, isGroup,isOwner,isDev,isSudo }) => {
    try {
        const config = await readEnv();
        const LANGUAGE = config.LANGUAGE || "EN";
        const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];
        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }
        if (!isGroup) {
            return await reply(lang("hidetagGroupOnly"));
        }
        await conn.groupLeave(from);
        console.log(`Bot left the group: ${from}`);
    } catch (e) {
        console.error("Error while leaving group:", e);
        await reply(lang("leaveError"));
    }
});
//=================================================================
cmd({
    pattern: "hidetag",
    fromMe: true,
    desc: "Send a message with hidden tags to all group members.",
    category: "owner",
    react: "🔍",
    filename: __filename
}, async (conn, mek, m, { from, isGroup, q, participants, reply,isOwner,isDev,isSudo }) => {
    try {
        const config = await readEnv();
        const LANGUAGE = config.LANGUAGE || "EN";
        const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];
        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }
        if (!isGroup) {
            return await reply(lang("hidetagGroupOnly"));
        }
        if (!q) {
            return await reply(lang("hidetagNoMessage"));
        }
        const participantIds = participants.map((participant) => participant.id);
        await conn.sendMessage(from, { 
            text: q, 
            mentions: participantIds 
        });
        console.log("Hidetag message sent to all group members.");
    } catch (e) {
        console.error("Error while sending hidetag message:", e);
        await reply(lang("hidetagError"));
    }
});

//=================================================================
cmd({
    pattern: "restart",
    desc: "restart the bot",
    category: "owner",
    use: '.restart',
    react: "☣",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply,isSudo}) => {
try{
if(!isOwner) return reply(`only for owner`);
reply("*BHASHI-MD-v2 RESTARTING....*")
await sleep(1500)
exec("npm restart")
}catch(e){
console.log(e)
reply(`${e}`)
}
});
cmd({
    pattern: "restart2",
    desc: "restart the bot",
    category: "owner",
    use: '.restart',
    react: "☣",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins,isSudo, reply}) => {
try{
if(!isOwner) return reply(`only for owner`);
const {exec} = require("child_process")
reply("*BHASHI-MD-v2 RESTARTING....*")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
});
//=================================================================
cmd({
    pattern: "upgrade",
    fromMe: true,
    desc: "Redeploy the bot.",
    category: "owner",
    react: "🔄",
    filename: __filename
}, async (conn, mek, m, { isOwner, reply ,isDev,isSudo}) => {
    try {
        const config = await readEnv();
        const LANGUAGE = config.LANGUAGE || "EN";
        const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }
        await reply(lang("upgradeStart"));
        exec('bash redeploy.sh', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error}`);
                return reply(lang("upgradeFail"));
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return reply(`${lang("upgradeFail")} ${stderr}`);
            }
            console.log(`stdout: ${stdout}`);
            reply(lang("upgradeSuccess"));
        });
    } catch (e) {
        console.error(e);
        reply(`${lang("upgradeFail")} ${e}`);
    }
});
//=================================================================
cmd({
    pattern: "broadcast",
    fromMe: true,
    desc: "Broadcast a message to all chats",
    react: "📢",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply,isDev,isSudo }) => {
    const config = await readEnv();
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];
    const message = args.join(" ");
    if (!message) return reply(lang("broadcastNoMessage"));

    const chats = await conn.getAllChats();
    let successCount = 0;

    for (let chat of chats) {
        try {

            if (!isOwner) return reply(banNotOwner);
            await conn.sendMessage(chat.id, { text: `📢 *BROADCAST MESSAGE*\n\n${message}` });
            successCount++;
        } catch (error) {
            console.error(`Failed to send broadcast to ${chat.id}:`, error);
        }
    }

    reply(lang("broadcastSuccess").replace("{0}", successCount));
});
//=================================================================
cmd({
    pattern: "addsudo",
    fromMe: true,
    desc: "Add a user to the sudo list",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    // Ensure the user has permission to add superusers
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    const userToAdd = (m.quoted ? m.quoted.sender : args[0])?.replace(/[^0-9]/g, "");

    if (!userToAdd) return reply(lang("addSudoNoUser"));

    // Parse current SUDO list from config
    let sudoList = (config.SUDO || '').split(',').filter(Boolean);

    // Add user to sudo list if not already present
    if (!sudoList.includes(userToAdd)) {
        sudoList.push(userToAdd);
        await updateEnv('SUDO', sudoList.join(',')); // Update the environment variable
        reply(lang("addSudoSuccess").replace("{0}", userToAdd));
    } else {
        reply(lang("addSudoAlready"));
    }

    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});

cmd({
    pattern: "delsudo",
    fromMe: true,
    desc: "Remove a user from the sudo list",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    // Ensure the user has permission to remove superusers
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    const userToRemove = (m.quoted ? m.quoted.sender : args[0])?.replace(/[^0-9]/g, "");

    if (!userToRemove) return reply(lang("delSudoNoUser"));

    // Parse current SUDO list from config
    let sudoList = (config.SUDO || '').split(',').filter(Boolean);

    // Remove user from sudo list if present
    if (sudoList.includes(userToRemove)) {
        sudoList = sudoList.filter(user => user !== userToRemove);
        await updateEnv('SUDO', sudoList.join(',')); // Update the environment variable
        reply(lang("delSudoSuccess").replace("{0}", userToRemove));
    } else {
        reply(lang("delSudoNotFound"));
    }

    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});
//=================================================================
cmd({
    pattern: "addbadword",
    fromMe: true,
    desc: "Add bad words to the list",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    // Ensure the user has permission to add bad words
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    // Get the bad words to add
    const wordsToAdd = args[0]?.split(',').map(word => word.trim()).join(',');

    if (!wordsToAdd) return reply(lang("addBadWordNoWords"));

    // Get current BAD_WORDS from config and add the new words
    const currentBadWords = (config.BAD_WORDS || '').split(',').filter(Boolean);
    const newWords = wordsToAdd.split(',').map(word => word.trim());

    newWords.forEach(word => {
        if (!currentBadWords.includes(word)) {
            currentBadWords.push(word);
        }
    });

    const updatedBadWords = currentBadWords.join(',');

    // Update the config with the new bad words
    await updateEnv('BAD_WORDS', updatedBadWords);

    reply(lang("addBadWordSuccess").replace("{0}", wordsToAdd));

    // Restart bot after updating the bad words list
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});
cmd({
    pattern: "removebadword",
    fromMe: true,
    desc: "Remove bad words from the list",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    // Ensure the user has permission to remove bad words
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    // Get the bad words to remove
    const wordsToRemove = args[0]?.split(',').map(word => word.trim()).join(',');

    if (!wordsToRemove) return reply(lang("removeBadWordNoWords"));

    // Get current BAD_WORDS from config and remove the specified words
    const currentBadWords = (config.BAD_WORDS || '').split(',').filter(Boolean);
    const wordsToRemoveArr = wordsToRemove.split(',').map(word => word.trim());

    const updatedBadWords = currentBadWords.filter(word => !wordsToRemoveArr.includes(word)).join(',');

    // Update the config with the new bad words list
    await updateEnv('BAD_WORDS', updatedBadWords);

    reply(lang("removeBadWordSuccess").replace("{0}", wordsToRemove));

    // Restart bot after updating the bad words list
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});
cmd({
    pattern: "getbadwords",
    fromMe: true,
    desc: "Get the current list of bad words",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    // Ensure the user has permission to view the bad words list
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    // Get the current bad words list from config
    const badWords = config.BAD_WORDS ? config.BAD_WORDS.split(',').join(', ') : 'No bad words configured yet.';

    // Send the list of bad words to the user
    reply(`Current list of bad words:\n${badWords}`);
    
});
cmd({
    pattern: "antibadon",
    fromMe: true,
    desc: "Add this group to the anti-bad words group list",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    // Ensure the user has permission to use this command
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    // Get the group ID (JID) from the message
    const groupJid = from;

    if (!config.ANTIBAD_GROUP) {
        config.ANTIBAD_GROUP = '';
    }

    // Add the group JID to the ANTIBAD_GROUP list if it's not already there
    let antibadGroups = config.ANTIBAD_GROUP.split(',').filter(Boolean);

    if (!antibadGroups.includes(groupJid)) {
        antibadGroups.push(groupJid);
        const updatedGroupList = antibadGroups.join(',');
        await updateEnv('ANTIBAD_GROUP', updatedGroupList);  // Persist the change
        reply(`✅ This group has been added to the anti-bad words list.`);
    } else {
        reply("❌ This group is already in the anti-bad words list.");
    }
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});
cmd({
    pattern: "antibadoff",
    fromMe: true,
    desc: "Remove this group from the anti-bad words group list",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    // Ensure the user has permission to use this command
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    // Get the group ID (JID) from the message
    const groupJid = from;

    if (!config.ANTIBAD_GROUP) {
        config.ANTIBAD_GROUP = '';
    }

    // Remove the group JID from the ANTIBAD_GROUP list if it exists
    let antibadGroups = config.ANTIBAD_GROUP.split(',').filter(Boolean);

    if (antibadGroups.includes(groupJid)) {
        antibadGroups = antibadGroups.filter(group => group !== groupJid);
        const updatedGroupList = antibadGroups.join(',');
        await updateEnv('ANTIBAD_GROUP', updatedGroupList);  // Persist the change
        reply(`✅ This group has been removed from the anti-bad words list.`);
    } else {
        reply("❌ This group is not in the anti-bad words list.");
    }
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});
cmd({
    pattern: "antistcikeron",
    fromMe: true,
    desc: "Add this group to the anti-sticker group list",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    // Ensure the user has permission to use this command
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    // Get the group ID (JID) from the message
    const groupJid = from;

    if (!config.ANTI_STICKER) {
        config.ANTI_STICKER = '';
    }

    // Add the group JID to the ANTI_STICKER list if it's not already there
    let antiStickerGroups = config.ANTI_STICKER.split(',').filter(Boolean);

    if (!antiStickerGroups.includes(groupJid)) {
        antiStickerGroups.push(groupJid);
        const updatedGroupList = antiStickerGroups.join(',');
        await updateEnv('ANTI_STICKER', updatedGroupList);  // Persist the change
        reply(`✅ This group has been added to the anti-sticker list.`);
    } else {
        reply("❌ This group is already in the anti-sticker list.");
    }
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});

cmd({
    pattern: "antistickeroff",
    fromMe: true,
    desc: "Remove this group from the anti-sticker group list",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    // Ensure the user has permission to use this command
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    // Get the group ID (JID) from the message
    const groupJid = from;

    if (!config.ANTI_STICKER) {
        config.ANTI_STICKER = '';
    }

    // Remove the group JID from the ANTI_STICKER list if it exists
    let antiStickerGroups = config.ANTI_STICKER.split(',').filter(Boolean);

    if (antiStickerGroups.includes(groupJid)) {
        antiStickerGroups = antiStickerGroups.filter(group => group !== groupJid);
        const updatedGroupList = antiStickerGroups.join(',');
        await updateEnv('ANTI_STICKER', updatedGroupList);  // Persist the change
        reply(`✅ This group has been removed from the anti-sticker list.`);
    } else {
        reply("❌ This group is not in the anti-sticker list.");
    }
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});
cmd({
    pattern: "antiimagen",
    fromMe: true,
    desc: "Enable anti-image for this group",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    if (!config.ANTI_IMAGE) {
        config.ANTI_IMAGE = '';
    }

    let antiImageGroups = config.ANTI_IMAGE.split(',').filter(Boolean);

    if (!antiImageGroups.includes(from)) {
        antiImageGroups.push(from);
        const updatedImageList = antiImageGroups.join(',');
        await updateEnv('ANTI_IMAGE', updatedImageList);
        reply("✅ Anti-image has been enabled for this group.");
    } else {
        reply("❌ Anti-image is already enabled for this group.");
    }
});

cmd({
    pattern: "antiimageoff",
    fromMe: true,
    desc: "Disable anti-image for this group",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    if (!config.ANTI_IMAGE) {
        config.ANTI_IMAGE = '';
    }

    let antiImageGroups = config.ANTI_IMAGE.split(',').filter(Boolean);

    if (antiImageGroups.includes(from)) {
        antiImageGroups = antiImageGroups.filter(group => group !== from);
        const updatedImageList = antiImageGroups.join(',');
        await updateEnv('ANTI_IMAGE', updatedImageList);
        reply("✅ Anti-image has been disabled for this group.");
    } else {
        reply("❌ Anti-image is not enabled for this group.");
    }
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});
cmd({
    pattern: "antivideon",
    fromMe: true,
    desc: "Enable anti-video for this group",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    if (!config.ANTI_VIDEO) {
        config.ANTI_VIDEO = '';
    }

    let antiVideoGroups = config.ANTI_VIDEO.split(',').filter(Boolean);

    if (!antiVideoGroups.includes(from)) {
        antiVideoGroups.push(from);
        const updatedVideoList = antiVideoGroups.join(',');
        await updateEnv('ANTI_VIDEO', updatedVideoList);
        reply("✅ Anti-video has been enabled for this group.");
    } else {
        reply("❌ Anti-video is already enabled for this group.");
    }
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});

cmd({
    pattern: "antivideooff",
    fromMe: true,
    desc: "Disable anti-video for this group",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    if (!config.ANTI_VIDEO) {
        config.ANTI_VIDEO = '';
    }

    let antiVideoGroups = config.ANTI_VIDEO.split(',').filter(Boolean);

    if (antiVideoGroups.includes(from)) {
        antiVideoGroups = antiVideoGroups.filter(group => group !== from);
        const updatedVideoList = antiVideoGroups.join(',');
        await updateEnv('ANTI_VIDEO', updatedVideoList);
        reply("✅ Anti-video has been disabled for this group.");
    } else {
        reply("❌ Anti-video is not enabled for this group.");
    }
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});
cmd({
    pattern: "antiaudion",
    fromMe: true,
    desc: "Enable anti-audio for this group",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    if (!config.ANTI_AUDIO) {
        config.ANTI_AUDIO = '';
    }

    let antiAudioGroups = config.ANTI_AUDIO.split(',').filter(Boolean);

    if (!antiAudioGroups.includes(from)) {
        antiAudioGroups.push(from);
        const updatedAudioList = antiAudioGroups.join(',');
        await updateEnv('ANTI_AUDIO', updatedAudioList);
        reply("✅ Anti-audio has been enabled for this group.");
    } else {
        reply("❌ Anti-audio is already enabled for this group.");
    }
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});

cmd({
    pattern: "antiaudiooff",
    fromMe: true,
    desc: "Disable anti-audio for this group",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    if (!config.ANTI_AUDIO) {
        config.ANTI_AUDIO = '';
    }

    let antiAudioGroups = config.ANTI_AUDIO.split(',').filter(Boolean);

    if (antiAudioGroups.includes(from)) {
        antiAudioGroups = antiAudioGroups.filter(group => group !== from);
        const updatedAudioList = antiAudioGroups.join(',');
        await updateEnv('ANTI_AUDIO', updatedAudioList);
        reply("✅ Anti-audio has been disabled for this group.");
    } else {
        reply("❌ Anti-audio is not enabled for this group.");
    }
});
cmd({
    pattern: "antidocumentn",
    fromMe: true,
    desc: "Enable anti-document for this group",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    if (!config.ANTI_DOCUMENT) {
        config.ANTI_DOCUMENT = '';
    }

    let antiDocumentGroups = config.ANTI_DOCUMENT.split(',').filter(Boolean);

    if (!antiDocumentGroups.includes(from)) {
        antiDocumentGroups.push(from);
        const updatedDocumentList = antiDocumentGroups.join(',');
        await updateEnv('ANTI_DOCUMENT', updatedDocumentList);
        reply("✅ Anti-document has been enabled for this group.");
    } else {
        reply("❌ Anti-document is already enabled for this group.");
    }
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});

cmd({
    pattern: "antidocumentoff",
    fromMe: true,
    desc: "Disable anti-document for this group",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    if (!config.ANTI_DOCUMENT) {
        config.ANTI_DOCUMENT = '';
    }

    let antiDocumentGroups = config.ANTI_DOCUMENT.split(',').filter(Boolean);

    if (antiDocumentGroups.includes(from)) {
        antiDocumentGroups = antiDocumentGroups.filter(group => group !== from);
        const updatedDocumentList = antiDocumentGroups.join(',');
        await updateEnv('ANTI_DOCUMENT', updatedDocumentList);
        reply("✅ Anti-document has been disabled for this group.");
    } else {
        reply("❌ Anti-document is not enabled for this group.");
    }
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});
cmd({
    pattern: "antispamon",
    fromMe: true,
    desc: "Enable anti-spam for this group",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    if (!config.ANTI_SPAM) {
        config.ANTI_SPAM = '';
    }

    let antiSpamGroups = config.ANTI_SPAM.split(',').filter(Boolean);

    if (!antiSpamGroups.includes(from)) {
        antiSpamGroups.push(from);
        const updatedSpamList = antiSpamGroups.join(',');
        await updateEnv('ANTI_SPAM', updatedSpamList);
        reply("✅ Anti-spam has been enabled for this group.");
    } else {
        reply("❌ Anti-spam is already enabled for this group.");
    }
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});

cmd({
    pattern: "antispamoff",
    fromMe: true,
    desc: "Disable anti-spam for this group",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo, from }) => {
    const config = await readEnv();
    if (!config.ANTI_SPAM) {
        config.ANTI_SPAM = '';
    }

    let antiSpamGroups = config.ANTI_SPAM.split(',').filter(Boolean);

    if (antiSpamGroups.includes(from)) {
        antiSpamGroups = antiSpamGroups.filter(group => group !== from);
        const updatedSpamList = antiSpamGroups.join(',');
        await updateEnv('ANTI_SPAM', updatedSpamList);
        reply("✅ Anti-spam has been disabled for this group.");
    } else {
        reply("❌ Anti-spam is not enabled for this group.");
    }
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});

cmd({
    pattern: "ban",
    fromMe: true,
    desc: "Ban a user from using the bot or quoted user",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    // Extract user to ban (keep only the number like 94727626829)
    let userToBan = args[0]
        ? args[0].replace(/[^0-9]/g, "")
        : (m.quoted ? m.quoted.sender.replace(/[^0-9]/g, "") : null);

    if (!userToBan) {
        return reply(lang("banNoUser")); // Ensure user is specified
    }

    const bannedUsers = (config.BAN_USER || '').split(',').filter(Boolean);

    if (!bannedUsers.includes(userToBan)) {
        bannedUsers.push(userToBan);
        const updatedBanUsers = bannedUsers.join(',');
        await updateEnv('BAN_USER', updatedBanUsers); // Persist the update
        reply(lang("banSuccess").replace("{0}", userToBan));
    } else {
        reply(lang("banAlready"));
    }

    // Restart bot after ban
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});

// Unban command
cmd({
    pattern: "unban",
    desc: "Unban a user or quoted user",
    fromMe: true,
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    // Extract user to unban (keep only the number like 94727626829)
    let userToUnban = args[0]
        ? args[0].replace(/[^0-9]/g, "")
        : (m.quoted ? m.quoted.sender.replace(/[^0-9]/g, "") : null);

    if (!userToUnban) {
        return reply(lang("banNoUser")); // Ensure user is specified
    }

    const bannedUsers = (config.BAN_USER || '').split(',').filter(Boolean);

    if (bannedUsers.includes(userToUnban)) {
        const updatedUsers = bannedUsers.filter(user => user !== userToUnban);
        await updateEnv('BAN_USER', updatedUsers.join(',')); // Persist the update
        reply(lang("unbanSuccess").replace("{0}", userToUnban));
    } else {
        reply(lang("unbanNotBanned"));
    }

    // Restart bot after unban
    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});


// Bangc command (ban group)
cmd({
    pattern: "bangc",
    fromMe: true,
    desc: "Ban a group from using the bot",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    let groupToBan = args[0] ? args[0] : m.chat;

    if (!groupToBan.endsWith('@g.us')) {
        return reply("❌ Invalid group ID. Please provide a valid group ID (e.g., 736263826382@g.us).");
    }

    const bannedGroups = (config.BAN_GROUPS || '').split(',').filter(Boolean);

    if (!bannedGroups.includes(groupToBan)) {
        bannedGroups.push(groupToBan);
        const updatedBanGroups = bannedGroups.join(',');
        await updateEnv('BAN_GROUPS', updatedBanGroups); // Persist the update
        reply(lang("banSuccess").replace("{0}", groupToBan));
    } else {
        reply(lang("banAlready"));
    }

    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});

// Unbangc command (unban group)
cmd({
    pattern: "unbangc",
    fromMe: true,
    desc: "Unban a group from using the bot",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner, isDev, isSudo }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    let groupToUnban = args[0] ? args[0] : m.chat;

    if (!groupToUnban.endsWith('@g.us')) {
        return reply("❌ Invalid group ID. Please provide a valid group ID (e.g., 736263826382@g.us).");
    }

    const bannedGroups = (config.BAN_GROUPS || '').split(',').filter(Boolean);

    if (bannedGroups.includes(groupToUnban)) {
        const updatedGroups = bannedGroups.filter(group => group !== groupToUnban);
        await updateEnv('BAN_GROUPS', updatedGroups.join(',')); // Persist the update
        reply(lang("unbanSuccess").replace("{0}", groupToUnban));
    } else {
        reply(lang("unbanNotBanned"));
    }

    reply("*BHASHI-MD-v2 RESTARTING....*");
    await sleep(1500);
    exec("npm restart");
});

//=================================================================
    cmd({
        pattern: "setbotname",
        desc: "Change the bot's name",
        fromMe: true,
        category: "owner",
        filename: __filename
    }, async (conn, mek, m, { args, reply, isOwner,isDev,isSudo }) => {
        const config = await readEnv();
        const LANGUAGE = config.LANGUAGE || "EN";
        const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];
        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }

        const newName = args.join(" ");
        if (!newName) return reply(lang("setNameNoName"));

        await conn.updateProfileName(newName);
        reply(lang("setNameSuccess").replace("{0}", newName));
    });
//=================================================================
    cmd({
        pattern: "setbotbio",
        desc: "Change the bot's bio",
        fromMe: true,
        category: "owner",
        filename: __filename
    }, async (conn, mek, m, { args, reply, isOwner,isDev,isSudo }) => {
        const config = await readEnv();
        const LANGUAGE = config.LANGUAGE || "EN";
        const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];
        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }

        const newBio = args.join(" ");
        if (!newBio) return reply(lang("setBioNoBio"));

        await conn.updateProfileStatus(newBio);
        reply(lang("setBioSuccess").replace("{0}", newBio));
    });

//=================================================================
cmd({
    pattern: "block",
    desc: "Block a user or quoted user",
    fromMe: true,
    react:"🚫",
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner,isDev,isSudo }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];

    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    // Get the user to block (either quoted or passed in arguments)
    const userToBlock = (m.quoted ? m.quoted.sender : args[0])?.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    // Check if a valid user is provided
    if (!userToBlock) return reply(lang("banNoUser"));

    try {
        reply(lang("blockSuccess").replace("{0}", userToBlock));
        await conn.updateBlockStatus(userToBlock, "block");
    } catch (error) {
        console.error("Error blocking user:", error);
        reply(lang("blockError"));
    }
});
//=================================================================
cmd({
    pattern: "unblock",
    desc: "Unblock a user or quoted user",
    fromMe: true,
    category: "owner",
    filename: __filename
}, async (conn, mek, m, { args, reply, isOwner,isDev,isSudo }) => {
    const config = await readEnv();
    const LANGUAGE = config.LANGUAGE || "EN";
    const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];
    if (!isOwner && !isDev && !isSudo) {
        return reply("❌ You do not have permission to use this command.");
    }

    // Get the user to unblock (either quoted or passed in arguments)
    const userToUnblock = (m.quoted ? m.quoted.sender : args[0])?.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    // Check if a valid user is provided
    if (!userToUnblock) return reply(lang("banNoUser"));

    try {
        reply(lang("unblockSuccess").replace("{0}", userToUnblock));
        await conn.updateBlockStatus(userToUnblock, "unblock");
    } catch (error) {
        console.error("Error unblocking user:", error);
        reply(lang("unblockError"));
    }
});
//=================================================================
    cmd({
        pattern: "setpp",
        desc: "Set bot's profile picture",
        fromMe: true,
        category: "owner",
        filename: __filename
    }, async (conn, mek, m, { reply, isOwner,isDev,isSudo }) => {
        const config = await readEnv();
        const LANGUAGE = config.LANGUAGE || "EN";
        const lang = (key) => messages[LANGUAGE][key] || messages["EN"][key];
        if (!isOwner && !isDev && !isSudo) {
            return reply("❌ You do not have permission to use this command.");
        }

        const media = m.message?.imageMessage || m.message?.videoMessage;
        if (!media || !media.url) return reply(lang("setppNoMedia"));

        try {
            const buffer = await conn.downloadMediaMessage(m);
            await conn.updateProfilePicture(buffer);
            reply(lang("setppSuccess"));
        } catch (error) {
            console.error("Failed to update profile picture:", error);
            reply(lang("setppFail"));
        }
    });
//===================================================================

//===================================================================
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body }) => {
    const fileUrl = 'https://raw.githubusercontent.com/vishwamihiranga/BHASHI-PUBLIC/refs/heads/main/AUTO-STICKER/auto_sticker.json';

    try {
        // Fetch the JSON data from the URL
        const response = await axios.get(fileUrl);
        const data = response.data;

        for (const text in data) {
            if (body.toLowerCase() === text.toLowerCase()) {
                const config = await readEnv();
                if (config.AUTO_STICKER === 'true') {
                    await conn.sendPresenceUpdate('composing', from);
                    await conn.sendMessage(from, { sticker: { url: data[text] },package:'BHASHI-MD-V2' }, { quoted: mek });
                }
            }
        }
    } catch (error) {
        console.error('Error fetching or processing auto_sticker.json:', error);
        // Do nothing visible to the user
    }
});
//===================================================================
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body }) => {
    const fileUrl = 'https://raw.githubusercontent.com/vishwamihiranga/BHASHI-PUBLIC/refs/heads/main/auto_reply.json';

    try {
        // Fetch the JSON data from the URL
        const response = await axios.get(fileUrl);
        const data = response.data;

        // Read the language configuration
        const config = await readEnv();
        const language = config.LANGUAGE || 'EN'; // Default to English (EN)

        if (data[language]) {
            for (const text in data[language]) {
                if (body.toLowerCase() === text.toLowerCase()) {
                    if (config.AUTO_REPLY === 'true') {
                        await m.reply(data[language][text]);
                    }
                }
            }
        } else {
            console.error(`Language "${language}" not found in auto_reply.json.`);
        }
    } catch (error) {
        console.error('Error fetching or processing auto_reply.json:', error);
        // Do nothing visible to the user
    }
});
//===================================================================
/*
cmd({
  on: "body"
}, async (conn, mek, m, { from, body, quoted }) => {
    // Check if the message is a reply to another message (quoted message)
    if (quoted) {
        try {
            // Fetch the configuration for AUTO_AI_CHAT
            const config = await readEnv();
            const AUTO_AI_CHAT = config.AUTO_AI_CHAT === 'true'; // Ensure it's true to trigger AI response

            // Check if AI chat is enabled
            if (AUTO_AI_CHAT) {
                // Construct the API URL for AI response
                const apiUrl = `https://www.dark-yasiya-api.site/ai/chatgpt?q=${encodeURIComponent(body)}`;

                // Fetch the AI response from the API
                const response = await axios.get(apiUrl);
                const data = response.data;

                if (data.status) {
                    // Send AI response to the user
                    await m.reply(data.result);
                } else {
                    // Handle case where AI API doesn't return a valid result
                    console.error("AI API returned no valid result.");
                    await m.reply('Sorry, I couldn’t fetch an AI response at the moment.');
                }
            }
        } catch (error) {
            // Catch any unexpected errors (API issues, network errors, etc.)
            console.error('Error during AI response:', error);
            await m.reply('Sorry, there was an error while fetching the AI response.');
        }
    }
});
*/
//===================================================================
