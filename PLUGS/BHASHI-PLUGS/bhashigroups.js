const {readEnv,updateEnv} = require('../BHASHI-DB/settingsdb2')
const { cmd, commands } = require('../commands');

if (require("../package.json").version === "1.0.0") {
    return console.log("ado thota puluwnnm mt kochchr pulundh");
}
// Helper function to check permissions
const checkPermissions = (isGroup, isAdmins, isOwner, isBotAdmins, isDev) => {
    // Ensure the command is being used in a group
    if (!isGroup) return 'This command can only be used in groups.';

    // Ensure the user is an admin or the owner or has the IsDev permission
    if (!isAdmins && !isOwner && !isDev) return 'This command can only be used by group admins or users with IsDev permission.';

    // Ensure the bot is an admin
    if (!isBotAdmins) return 'Bot must be admin to use this command.';

    // All checks passed
    return null;
};

cmd({
    pattern: "lock",
    desc: "🔒 Lock the group settings (only admins can modify).",
    fromMe: true,
    category: "group",
    filename: __filename
}, async (conn, mek, m, { reply,isGroup,isOwner, isBotAdmins, isAdmins,isDev }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);
        const groupId = m.chat; // Get the group ID from the message context
        await conn.groupSettingUpdate(groupId, 'locked'); // Lock the group settings
        reply("*🔒 The group settings have been locked. Only admins can modify settings now.*");
    } catch (error) {
        console.error("Error locking group settings:", error);
        reply("⚠️ An error occurred while locking the group settings: " + error.message);
    }
});

cmd({
    pattern: "unlock",
    desc: "🔓 Unlock the group settings (anyone can modify).",
    fromMe: true,
    category: "group",
    filename: __filename
}, async (conn, mek, m, { reply,isGroup,isOwner, isBotAdmins, isAdmins,isDev }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);
        const groupId = m.chat; // Get the group ID from the message context
        await conn.groupSettingUpdate(groupId, 'unlocked'); // Unlock the group settings
        reply("*🔓 The group settings have been unlocked. Anyone can modify settings now.*");
    } catch (error) {
        console.error("Error unlocking group settings:", error);
        reply("⚠️ An error occurred while unlocking the group settings: " + error.message);
    }
});


cmd({
    pattern: "approveall",
    desc: "Approve all pending member requests in the group.",
    category: "group",
    react: "✅",
    filename: __filename
}, async (conn, mek, m, { from, isGroup,isOwner, isBotAdmins, isAdmins, reply,isDev }) => {
    try {
        const config = await readEnv(); // Load the configuration for language settings

        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        // Get group metadata
        const groupMetadata = await conn.groupMetadata(from);
        const participants = groupMetadata.participants;

        // Filter for pending participants (not yet in the group)
        const pendingRequests = participants.filter(participant => participant.status === 'pending');

        if (pendingRequests.length === 0) {
            return reply(config.LANGUAGE === 'SI' 
                ? '*❌ ක්ෂේම අයදුම් පතක් නැත.*' 
                : '*❌ There are no pending requests to approve.*');
        }

        // Approve all pending requests
        const approvedMembers = [];
        for (const request of pendingRequests) {
            await conn.groupParticipantsUpdate(from, [request.id], 'add');
            approvedMembers.push(request.id);
        }

        // Notify the group about the approved members
        await conn.sendMessage(from, {
            text: `${config.LANGUAGE === 'SI' ? '*✅ අනුමත කළ සාමාජිකයෝ:*' : '*✅ Approved members:*'}\n` +
                  `${approvedMembers.map(id => `@${id.split('@')[0]}`).join('\n')}`,
            mentions: approvedMembers
        });

        reply(config.LANGUAGE === 'SI' 
            ? '*✅ සියලු අයදුම් පතන් අනුමත කර ඇත.*' 
            : '*✅ All pending requests have been approved.*');
    } catch (e) {
        console.error(e);
        reply(`${config.LANGUAGE === 'SI' ? 'දෝෂයක්:' : 'Error:'} ${e}`);
    }
});
cmd({
    pattern: "revoke",
    desc: "Revoke the group invitation link and send a new link.",
    category: "group",
    react: "🔒",
    filename: __filename
}, async (conn, mek, m, { from, isGroup,isOwner, isBotAdmins, reply,isDev }) => {
    try {
        const config = await readEnv();
        // Check if the command is used in a group
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        // Revoke the group invite link
        await conn.groupRevokeInvite(from);

        // Generate a new invitation link
        const newInviteLink = await conn.groupInviteCode(from);

        // Notify the user about the revocation and the new link
        await reply(config.LANGUAGE === 'SI' 
            ? `*🔒 කණ්ඩායමේ ආරාධනා සම්බන්ධතා අහිමි කර ඇත.*\n\n*නව ආරාධනා සම්බන්ධතා:* https://chat.whatsapp.com/${newInviteLink}` 
            : `*🔒 The group invitation link has been revoked.*\n\n*New invitation link:* https://chat.whatsapp.com/${newInviteLink}`);

    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI' 
            ? `දෝෂයක්: ${e}` 
            : `Error: ${e}`);
    }
});
cmd({
    pattern: "add",
    desc: "Add a member to the group.",
    category: "group",
    react: "➕",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply,isDev }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        const user = q.split(' ')[0];
        if (!user) {
            return reply(config.LANGUAGE === 'SI' 
                ? 'කරුණාකර එකතු කිරීමට දුරකථන අංකයක් ඇතුළත් කරන්න.' 
                : 'Please provide a phone number to add.');
        }

        await conn.groupParticipantsUpdate(from, [`${user}@s.whatsapp.net`], 'add');
        await reply(config.LANGUAGE === 'SI'
            ? `@${user} කණ්ඩායමට එකතු කරන ලදි.` 
            : `@${user} has been added to the group.`, { mentions: [`${user}@s.whatsapp.net`] });
    } catch (e) {
        console.log(e);
        reply(config.LANGUAGE === 'SI' 
            ? `දෝෂයක්: ${e}` 
            : `Error: ${e}`);
    }
});
cmd({
    pattern: "seticon",
    desc: "Set a new group icon.",
    category: "group",
    filename: __filename,
    react: "🖼️"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply,isDev }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        if (!m.quoted) return reply(config.LANGUAGE === 'SI'
            ? "කරුණාකර ගෲපයේ රූපය සකස් කිරීමට රූපයකට පිළිතුරක් ලබා දෙන්න."
            : "Please reply to an image to set it as the group icon.");

        const media = await conn.downloadAndSaveMediaMessage(m.quoted);
        await conn.updateProfilePicture(from, { url: media });

        reply(config.LANGUAGE === 'SI'
            ? "✅ ගෲපයේ රූපය සාර්ථකව යාවත්කාලීන කර ඇත."
            : "✅ Group icon has been updated successfully.");
    } catch(e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});


// New command: Tag all group members
cmd({
    pattern: "tagall",
    desc: "Mention all group members.",
    category: "group",
    filename: __filename,
    react: "📢"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, participants, reply,isDev }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        let teks = config.LANGUAGE === 'SI'
            ? "📢 *සියලුම සාමාජිකයින්ගේ අවධානය!*\n\n"
            : "📢 *Attention All Members!*\n\n";

        for (let mem of participants) {
            teks += `@${mem.id.split('@')[0]}\n`;
        }

        conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) });
    } catch(e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});


// New command: Remove all members (except bot and group creator)
cmd({
    pattern: "removeall",
    desc: "Remove all members from the group (except bot and group creator).",
    category: "group",
    filename: __filename,
    react: "🚫"
},
async (conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, groupMetadata, reply ,isDev}) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        if (!isOwner) return reply(config.LANGUAGE === 'SI'
            ? "මෙම විධානය භාවිතා කළ හැක්කේ ගෲප් නිර්මාතෘට පමණි."
            : "This command can only be used by the group creator.");

        const creator = groupMetadata.owner;
        const botId = conn.user.id;
        const participants = groupMetadata.participants.filter(p => p.id !== creator && p.id !== botId);

        await conn.groupParticipantsUpdate(from, participants.map(p => p.id), "remove");
        reply(config.LANGUAGE === 'SI'
            ? "*🚫 ගෲප්යේ සියලුම සාමාජිකයින් ඉවත් කර ඇත (බොට් සහ නිර්මාතෘ හැර).*"
            : "*🚫 All members have been removed from the group (except the bot and group creator).*");
    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});

// Function to handle group promotion
cmd({
    pattern: "promote",
    desc: "Promote a user to admin.",
    category: "group",
    filename: __filename,
    react: "⬆️"
},
async (conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply ,isDev}) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;


        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        const mentionedJid = m.message.extendedTextMessage?.contextInfo?.mentionedJid;
        if (!mentionedJid || mentionedJid.length === 0) return reply(config.LANGUAGE === 'SI'
            ? "කරුණාකර ප්‍රවර්ධනය කළ යුතු සාමාජිකයා සඳහන් කරන්න."
            : "Please mention the user you want to promote.");

        await conn.groupParticipantsUpdate(from, mentionedJid, "promote");
        reply(config.LANGUAGE === 'SI'
            ? "*✅ සාමාජිකයා පරිපාලකයෙකු ලෙස ප්‍රවර්ධනය කර ඇත.*"
            : "*✅ User promoted to admin successfully.*");
    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});


// Function to handle group demotion
cmd({
    pattern: "demote",
    desc: "Demote an admin to regular user.",
    category: "group",
    filename: __filename,
    react: "⬇️"
},
async (conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply,isDev }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        const mentionedJid = m.message.extendedTextMessage?.contextInfo?.mentionedJid;
        if (!mentionedJid || mentionedJid.length === 0) return reply(config.LANGUAGE === 'SI'
            ? "කරුණාකර පද්ධති පරිපාලකයා වැඩෙහි දක්වන්න."
            : "Please mention the admin you want to demote.");

        await conn.groupParticipantsUpdate(from, mentionedJid, "demote");
        reply(config.LANGUAGE === 'SI'
            ? "*✅ පරිපාලකයා සාමාජිකයට පහත දමා ඇත.*"
            : "*✅ Admin demoted to regular user successfully.*");
    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});


// Function to handle group invites
cmd({
    pattern: "invite",
    desc: "Get the group invite link.",
    category: "group",
    filename: __filename,
    react: "🔗"
},
async (conn, mek, m, { from, isGroup,isOwner, isBotAdmins, reply ,isDev}) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);
        const inviteCode = await conn.groupInviteCode(from);
        reply(config.LANGUAGE === 'SI'
            ? `*🔗 ගෲප් ආරාධන සබැඳිය: https://chat.whatsapp.com/${inviteCode}*`
            : `*🔗 Group Invite Link: https://chat.whatsapp.com/${inviteCode}*`);
    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});


// Function to get group info
cmd({
    pattern: "groupinfo",
    desc: "Get information about the group.",
    category: "group",
    filename: __filename,
    react: "ℹ️"
},
async(conn, mek, m, { from, isGroup, groupMetadata, groupName, participants, groupAdmins, reply,isDev }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        const groupInfo = config.LANGUAGE === 'SI' 
            ? `
📋 *කණ්ඩායම් තොරතුරු*
👥 *නම:* ${groupName}
📝 *විස්තරය:* ${groupMetadata.desc || 'විස්තරයක් නොමැත'}
🆔 *ID:* ${from}
👑 *නිර්මාතෘ:* ${groupMetadata.owner || 'ලබා ගත නොහැක'}
👤 *සාමාජිකයින්:* ${participants.length}
👮 *පරිපාලකයින්:* ${groupAdmins.length}
📅 *නිර්මාණය වූ දිනය:* ${new Date(groupMetadata.creation * 1000).toLocaleString()}
            `
            : `
📋 *Group Information*
👥 *Name:* ${groupName}
📝 *Description:* ${groupMetadata.desc || 'No description'}
🆔 *ID:* ${from}
👑 *Owner:* ${groupMetadata.owner || 'Not available'}
👤 *Members:* ${participants.length}
👮 *Admins:* ${groupAdmins.length}
📅 *Created:* ${new Date(groupMetadata.creation * 1000).toLocaleString()}
            `;

        reply(groupInfo);
    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});


// New command: Kick user
cmd({
    pattern: "kick",
    desc: "Kick a user from the group.",
    category: "group",
    filename: __filename,
    react: "👢"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply ,isDev}) => {
    const config = await readEnv();
    try {

        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        const mentionedJid = m.message.extendedTextMessage?.contextInfo?.mentionedJid;
        if (!mentionedJid || mentionedJid.length === 0) return reply(config.LANGUAGE === 'SI'
            ? "කරුණාකර ඉවත් කළ යුතු සාමාජිකයා සඳහන් කරන්න."
            : "Please mention the user you want to kick.");

        await conn.groupParticipantsUpdate(from, mentionedJid, "remove");
        reply(config.LANGUAGE === 'SI'
            ? "*👢 සාමාජිකයා කණ්ඩායමේ ඉවත් කර ඇත.*"
            : "*👢 User has been kicked from the group.*");
    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});

// New command: Change group subject
cmd({
    pattern: "setsubject",
    desc: "Change the group subject.",
    category: "group",
    filename: __filename,
    react: "✏️"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, args, reply,isDev }) => {
    const config = await readEnv();
    try {

        const senderNumber = m.sender;

        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        const newSubject = args.join(" ");
        if (!newSubject) return reply(config.LANGUAGE === 'SI'
            ? "කරුණාකර කණ්ඩායමේ නව මාතෘකාව සපයන්න."
            : "Please provide a new subject for the group.");

        await conn.groupUpdateSubject(from, newSubject);
        reply(config.LANGUAGE === 'SI'
            ? `*✏️ කණ්ඩායමේ මාතෘකාව යාවත්කාලීන කරන ලදි: ${newSubject}*`
            : `*✏️ Group subject has been updated to: ${newSubject}*`);
    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});


// New command: Change group description
cmd({
    pattern: "setdesc",
    desc: "Change the group description.",
    category: "group",
    filename: __filename,
    react: "📝"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, args, reply ,isDev}) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        const newDesc = args.join(" ");
        if (!newDesc) return reply(config.LANGUAGE === 'SI'
            ? "කරුණාකර කණ්ඩායමේ නව විස්තරය සපයන්න."
            : "Please provide a new description for the group.");

        await conn.groupUpdateDescription(from, newDesc);
        reply(config.LANGUAGE === 'SI'
            ? `*📝 කණ්ඩායමේ විස්තරය යාවත්කාලීන කරන ලදි.*`
            : `*📝 Group description has been updated.*`);
    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});


// New command: Mute group
const cron = require('node-cron');

let scheduledMutes = new Map(); // To store scheduled mutes
let scheduledUnmutes = new Map(); // To store scheduled unmutes

cmd({
    pattern: "mute",
    desc: "Mute the group (only admins can send messages).",
    category: "group",
    filename: __filename,
    react: "🔇"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply,isDev }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        await conn.groupSettingUpdate(from, 'announcement');
        reply(config.LANGUAGE === 'SI'
            ? `*🔇 කණ්ඩායම නීර්වචනය කර ඇත. දැන් පරිපාලකයින්ට පමණක් පණිවිඩ යැවිය හැක.*`
            : `*🔇 Group has been muted. Only admins can send messages now.*`);
    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});


// New command: Unmute group
cmd({
    pattern: "unmute",
    desc: "Unmute the group (allow all participants to send messages).",
    category: "group",
    filename: __filename,
    react: "🔊"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply,isDev }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;


        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);

        await conn.groupSettingUpdate(from, 'not_announcement');
        reply(config.LANGUAGE === 'SI'
            ? `*🔊 කණ්ඩායම නිදහස් කර ඇත. දැන් සියලුම සාමාජිකයින්ට පණිවිඩ යැවිය හැක.*`
            : `*🔊 Group has been unmuted. All participants can send messages now.*`);
    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});


// Auto mute command
cmd({
    pattern: "amute",
    desc: "Schedule auto mute for the group at a specified time.",
    category: "group",
    filename: __filename,
    react: "🔇"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply,isDev }) => {
    try {
        
        const config = await readEnv();
        const [time] = m.body.split(" ").slice(1);
        const currentTime = new Date();
        const [hours, minutes] = time.split('.').map(Number);
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);
        const muteTime = new Date();
        muteTime.setHours(hours, minutes, 0, 0);

        // Check if the time is in the past
        if (muteTime <= currentTime) {
            return reply(config.LANGUAGE === 'SI'
                ? "*🚫 කරුණාකර අනාගතයේදී කණ්ඩායම නිහතමානී කිරීමට කාලයක් ලබා දීන්න.*"
                : "*🚫 Please provide a future time to schedule the mute.*");
        }

        const timezone = config.TIMEZONE; // Fetch timezone from config
        const delay = muteTime.getTime() - currentTime.getTime();

        // Schedule the mute
        scheduledMutes.set(from, cron.schedule(`* ${minutes} ${hours} * * *`, async () => {
            await conn.groupSettingUpdate(from, 'announcement');
            reply(config.LANGUAGE === 'SI'
                ? `*🔇 කණ්ඩායම ස්වයංක්‍රීයව නිහතමානී කර ඇත. දැන් පරිපාලකයින්ට පමණක් පණිවිඩ යැවිය හැක.*`
                : `*🔇 Group has been automatically muted. Only admins can send messages now.*`);
            scheduledMutes.delete(from); // Remove the schedule after execution
        }, {
            timezone
        }));

        reply(config.LANGUAGE === 'SI'
            ? `*✅ කණ්ඩායම ස්වයංක්‍රීයව ${time} ට නිහතමානී කිරීමට කාලසටහනට එකතු කර ඇත.*`
            : `*✅ Auto mute has been scheduled at ${time}.*`);
    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});


// Auto unmute command
cmd({
    pattern: "aunmute",
    desc: "Schedule auto unmute for the group at a specified time.",
    category: "group",
    filename: __filename,
    react: "🔊"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply,isDev }) => {
    try {
        const config = await readEnv();
        const [time] = m.body.split(" ").slice(1);
        const currentTime = new Date();
        const [hours, minutes] = time.split('.').map(Number);

        const unmuteTime = new Date();
        unmuteTime.setHours(hours, minutes, 0, 0);
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins, isDev);
        if (permissionError) return reply(permissionError);
        // Check if the time is in the past
        if (unmuteTime <= currentTime) {
            return reply(config.LANGUAGE === 'SI'
                ? "*🚫 කරුණාකර අනාගතයේදී කණ්ඩායම නිදහස් කිරීමට කාලයක් ලබා දීන්න.*"
                : "*🚫 Please provide a future time to schedule the unmute.*");
        }

        const timezone = config.TIMEZONE; // Fetch timezone from config
        const delay = unmuteTime.getTime() - currentTime.getTime();

        // Schedule the unmute
        scheduledUnmutes.set(from, cron.schedule(`* ${minutes} ${hours} * * *`, async () => {
            await conn.groupSettingUpdate(from, 'not_announcement');
            reply(config.LANGUAGE === 'SI'
                ? `*🔊 කණ්ඩායම ස්වයංක්‍රීයව නිදහස් කර ඇත. දැන් සියලුම සාමාජිකයින්ට පණිවිඩ යැවිය හැක.*`
                : `*🔊 Group has been automatically unmuted. All participants can send messages now.*`);
            scheduledUnmutes.delete(from); // Remove the schedule after execution
        }, {
            timezone
        }));

        reply(config.LANGUAGE === 'SI'
            ? `*✅ කණ්ඩායම ස්වයංක්‍රීයව ${time} ට නිදහස් කිරීමට කාලසටහනට එකතු කර ඇත.*`
            : `*✅ Auto unmute has been scheduled at ${time}.*`);
    } catch (e) {
        console.error(e);
        reply(config.LANGUAGE === 'SI'
            ? `❌ දෝෂයක්: ${e}`
            : `❌ Error: ${e}`);
    }
});


module.exports = {
    // You can export any additional functions or variables if needed
};
