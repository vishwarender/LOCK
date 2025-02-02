
const axios = require('axios');
const { exec } = require("child_process");
const zxcvbn = require("zxcvbn");
const sharp = require('sharp');
const { instagramDownload } = require("@mrnima/instagram-downloader");
const { downloadTiktok } = require("@mrnima/tiktok-downloader");
const { facebook } = require('@mrnima/facebook-downloader');
const os = require('os');
const Esana = require('@sl-code-lords/esana-news')
var api = new Esana()
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('../BHASHI-DB/mainfun')
const { cmd, commands } = require('../commands');
const { ytmp3, ytmp4,ytsearch } = require('@dark-yasiya/yt-dl.js');
const {readEnv,updateEnv} = require('../BHASHI-DB/settingsdb2')
const path = require('path');
const Seedr = require("seedr");
const jj ="`" 
const { Buffer } = require('buffer');
const fs = require('fs');
const activatePath = path.join(__dirname, '..', 'BHASHI-DB', 'activate.json');
const fetch = require('node-fetch');
const footer = `🎞️ Bԋαʂԋι Cιɳҽɱα 🎥`
const slogan = `ᴘᴏᴡᴇʀᴅ ʙʏ ᴠɪꜱʜᴡᴀ & ʙʜᴀꜱʜɪᴛʜᴀ`
const mvimg = `https://raw.githubusercontent.com/vishwamihiranga/BHASHI-PUBLIC/refs/heads/main/IMAGES/%26mainimg.jpeg`
const EnvVar = require('../BHASHI-DB/envdb');
const botimg = 'https://raw.githubusercontent.com/vishwamihiranga/BHASHI-PUBLIC/refs/heads/main/IMAGES/%26mainimg.jpeg'
const botimg2 = 'https://raw.githubusercontent.com/vishwamihiranga/BHASHI-PUBLIC/refs/heads/main/IMAGES/%26mainimg.jpeg'
const readmore = "\u200B".repeat(4000); 
const mono = "`"
const NineGag = require('9gag');
const { googleImage } = require("nima-google-now");
const Scraper = NineGag.Scraper;
const { tiktokdl } = require('tiktokdl')
if (require("../package.json").version === "1.0.0") {
    return console.log("ado thota puluwnnm mt kochchr pulundh");
}
let vishwa;
(async () => {
    try {
        let vishwaGet = await fetchJson('https://raw.githubusercontent.com/vishwamihiranga/BHASHI-PUBLIC/refs/heads/main/vishwa.json');
        vishwa = vishwaGet.api; 
    } catch (error) {
        console.error('Error fetching base URL:', error);
    }
})();
const https = require('https')
const yts = require('yt-search');
const qrcode = require('qrcode');
const {Sticker, createSticker, StickerTypes} = require("wa-sticker-formatter");
const math = require('mathjs');
const dns = require('dns');
const whois = require('whois')
const crypto = require('crypto');
const cheerio = require('cheerio');
const { File } = require('megajs'); 
const { image2url } = require("@dark-yasiya/imgbb.js");
const caption = `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
//=================================================================

const retryAxios = async (url, retries = 3, timeout = 10000) => {
    for (let i = 0; i < retries; i++) {
        try {
            return await axios.get(url, { timeout });
        } catch (error) {
            if (i === retries - 1) throw error; // Fail after retries
        }
    }
};
//=====================================================================
cmd({
    pattern: "shock",
    desc: "Shock reaction Video Note",
    category: "reaction",
    react: "🪄",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const reactvideo = 'https://raw.githubusercontent.com/pumidu/BHASHI-PUBLIC1/refs/heads/main/REACT-VIDEOS/hQOOp7nb%20(1).mp4';
        
        await conn.sendMessage(
            from, 
            { 
                video: { url: reactvideo },
                caption: caption,
                ptv:true
            },
            { quoted: quoted }
        );
    } catch (e) {
        reply(`Error : ${e}`);
    }
});
//==========================================================
cmd({
    pattern: "danu",
    desc: "Download songs.",
    react: "🎶",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q, config }) => {
    try {
        const config = await readEnv();
        const language = config.LANGUAGE || 'EN'; // Default to English if no language is set

        // Multi-language responses
        const messages = {
            'EN': {
                noQuery: "🪄 Please provide a song URL or name ✨",
                songInfo: `*╭─「 ${jj}Alex Music Video${jj} 」*
*╰────────────┈>*
*⏤͟͟͞͞★❬❬ Alex Music Information ❭❭⏤͟͟͞͞★*
*╭⃘⃝─────────────┈◦•☻•◦*
*╎🍀 ${jj}Title:${jj} {title}*
*╎👁️‍🗨️ ${jj}Views:${jj} {views}*
*╎🔮 ${jj}Duration:${jj} {duration}*
*╎🎧 ${jj}Ago:${jj} {uploaded}*
*╚─────────────❨⥁⚘*

${jj}🌟 𝗙𝗼𝗹𝗹𝗼𝘄 𝗨𝘀 - https://whatsapp.com/channel/0029Vaa6QzC4o7qEV92gin3H${jj}

> *Alex Music Video 🤍🕊️|🇱🇰❞*`,
                invalidChoice: "🚫 Invalid choice! Please reply with '1' to download as audio or '2' to download as a document."
            },
            'SI': {
                noQuery: "🪄 කරුණාකර සංගීත URL එකක් හෝ නමක් ලබා දෙන්න ✨",
                songInfo: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖲 𝖮 𝖭 𝖦  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 මාතෘකාව : {title}
⏰ කාලසීමාව : {duration}
📻 චැනලය :  {channel}
📆 උඩුගත කල දිනය : {uploaded}
👁️‍🗨️ බැලීම් : {views}
🖇️ පිවිසුම් ලින්කුව : {url}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖬 𝖤 𝖭 𝖴  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  බාගත කිරීම : සංගීත ආකාරයට.
│ 2️⃣  බාගත කිරීම : ගොනු ආකාරයට.
╰─────────────────────┈`,
                invalidChoice: "🚫 වැරදි තෝරන්න! කරුණාකර '1' ලෙස උත්තර දෙන්න, සංගීත ආකාරයට බාගත කිරීමට හෝ '2' ලෙස ගොනු ආකාරයට බාගත කිරීමට."
            }
        };

        // Check for query input
        if (!q) return reply(messages[language].noQuery);

        // Search for song
        const search = await ytsearch(q);
        if (!search || !search.results || search.results.length === 0) {
            return reply(messages[language].noQuery);
        }

        const data = search.results[0];
        const url = data.url;

        // Ensure that the author exists
        const authorName = data.author ? data.author.name : "Unknown Channel";

        // Prepare song details message
        let desc = messages[language].songInfo
            .replace("{title}", data.title)
            .replace("{duration}", data.timestamp)
            .replace("{channel}", authorName)
            .replace("{uploaded}", data.ago)
            .replace("{views}", data.views || "N/A") // Replace {views} with actual view count or "N/A"
            .replace("{url}", data.url);

        // Send song details with thumbnail and emoji
        const sentMessage = await conn.sendMessage(
            from,
            {
                image: { url: data.thumbnail },
                caption: desc,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    externalAdReply: {
                        title: `Bhashi Song Downloader`,
                        body: `${data.title} : Powered By Bhashi Song Information Search Engine`,
                        thumbnailUrl: data.thumbnail,
                        sourceUrl: "",
                        mediaType: 1,
                        renderLargerThumbnail: false,
                    },
                },
            },
            { quoted: mek }
        );

        // Download audio
        const audioInfo = await ytmp3(url);
        const audioUrl = audioInfo.download.url;

        // Listen for the user's reply (handle the number choice)
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply is to the previously sent prompt
            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                if (userReply === '1') {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(from, {
                        audio: { url: audioUrl },
                        mimetype: "audio/mpeg",
                        caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
                    }, { quoted: mek });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else if (userReply === '2') {
                    const docUrl = audioInfo.download.url;
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(from, {
                        document: { url: docUrl },
                        mimetype: "audio/mpeg",
                        caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
                        jpegThumbnail: await (await fetch(data.thumbnail)).buffer(),
                        fileName: `${data.title}.mp3`
                    }, { quoted: mek });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else {
                    await reply(messages[language].invalidChoice);
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply(`❌ An error occurred: ${e.message}. Please try again!`);
    }
});
cmd({
    pattern: "alex",
    desc: "Download songs.",
    react: "🎶",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q, config }) => {
    try {
        const config = await readEnv();
        const language = config.LANGUAGE || 'EN'; // Default to English if no language is set

        // Multi-language responses
        const messages = {
            'EN': {
                noQuery: "🪄 Please provide a song URL or name ✨",
                songInfo: `*╭─「 ${jj}Alex Music Video${jj} 」*
*╰────────────┈>*
*⏤͟͟͞͞★❬❬ Alex Music Information ❭❭⏤͟͟͞͞★*
*╭⃘⃝─────────────┈◦•☻•◦*
*╎🍀 ${jj}Title:${jj} {title}*
*╎👁️‍🗨️ ${jj}Views:${jj} {views}*
*╎🔮 ${jj}Duration:${jj} {duration}*
*╎🎧 ${jj}Ago:${jj} {uploaded}*
*╚─────────────❨⥁⚘*

${jj}🌟 𝗙𝗼𝗹𝗹𝗼𝘄 𝗨𝘀 - https://whatsapp.com/channel/0029Vaa6QzC4o7qEV92gin3H${jj}

> *Alex Music Video 🤍🕊️|🇱🇰❞*`,
                invalidChoice: "🚫 Invalid choice! Please reply with '1' to download as audio or '2' to download as a document."
            },
            'SI': {
                noQuery: "🪄 කරුණාකර සංගීත URL එකක් හෝ නමක් ලබා දෙන්න ✨",
                songInfo: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖲 𝖮 𝖭 𝖦  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 මාතෘකාව : {title}
⏰ කාලසීමාව : {duration}
📻 චැනලය :  {channel}
📆 උඩුගත කල දිනය : {uploaded}
👁️‍🗨️ බැලීම් : {views}
🖇️ පිවිසුම් ලින්කුව : {url}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖬 𝖤 𝖭 𝖴  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  බාගත කිරීම : සංගීත ආකාරයට.
│ 2️⃣  බාගත කිරීම : ගොනු ආකාරයට.
╰─────────────────────┈`,
                invalidChoice: "🚫 වැරදි තෝරන්න! කරුණාකර '1' ලෙස උත්තර දෙන්න, සංගීත ආකාරයට බාගත කිරීමට හෝ '2' ලෙස ගොනු ආකාරයට බාගත කිරීමට."
            }
        };

        // Check for query input
        if (!q) return reply(messages[language].noQuery);

        // Search for song
        const search = await ytsearch(q);
        if (!search || !search.results || search.results.length === 0) {
            return reply(messages[language].noQuery);
        }

        const data = search.results[0];
        const url = data.url;

        // Ensure that the author exists
        const authorName = data.author ? data.author.name : "Unknown Channel";

        // Prepare song details message
        let desc = messages[language].songInfo
            .replace("{title}", data.title)
            .replace("{duration}", data.timestamp)
            .replace("{channel}", authorName)
            .replace("{uploaded}", data.ago)
            .replace("{views}", data.views || "N/A") // Replace {views} with actual view count or "N/A"
            .replace("{url}", data.url);

        // Send song details with thumbnail and emoji
        const sentMessage = await conn.sendMessage(
            from,
            {
                image: { url: data.thumbnail },
                caption: desc,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    externalAdReply: {
                        title: `Bhashi Song Downloader`,
                        body: `${data.title} : Powered By Bhashi Song Information Search Engine`,
                        thumbnailUrl: data.thumbnail,
                        sourceUrl: "",
                        mediaType: 1,
                        renderLargerThumbnail: false,
                    },
                },
            },
            { quoted: mek }
        );

        // Download audio
        const audioInfo = await ytmp3(url);
        const audioUrl = audioInfo.download.url;

        // Listen for the user's reply (handle the number choice)
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply is to the previously sent prompt
            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                if (userReply === '1') {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(from, {
                        audio: { url: audioUrl },
                        mimetype: "audio/mpeg",
                        caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
                    }, { quoted: mek });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else if (userReply === '2') {
                    const docUrl = audioInfo.download.url;
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(from, {
                        document: { url: docUrl },
                        mimetype: "audio/mpeg",
                        caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
                        jpegThumbnail: await (await fetch(data.thumbnail)).buffer(),
                        fileName: `${data.title}.mp3`
                    }, { quoted: mek });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else {
                    await reply(messages[language].invalidChoice);
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply(`❌ An error occurred: ${e.message}. Please try again!`);
    }
});
cmd({
    pattern: "bible",
    desc: "Fetch Bible verses by reference.",
    category: "search",
    react: "📖",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Check if a reference is provided
        if (args.length === 0) {
            return reply(`⚠️ *Please provide a Bible reference.*\n\n📝 *Example:*\n.bible John 1:1`);
        }

        // Join arguments to form the reference
        const reference = args.join(" ");

        // Call the API with the reference
        const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
        const response = await axios.get(apiUrl);

        // Check if the response contains valid data
        if (response.status === 200 && response.data.text) {
            const { reference: ref, text, translation_name } = response.data;

            // Send the formatted response with emojis
            reply(
                `📜 *Bible Verse Found!*\n\n` +
                `📖 *Reference:* ${ref}\n` +
                `📚 *Text:* ${text}\n` +
                `🗂️ *Translation:* ${translation_name}`
            );
        } else {
            reply("❌ *Verse not found.* Please check the reference and try again.");
        }
    } catch (error) {
        console.error(error);

        // Handle specific error cases
        if (error.response) {
            if (error.response.status === 404) {
                reply("❌ *Verse not found.* Please check the reference and try again.");
            } else {
                reply(`⚠️ *An error occurred while fetching the Bible verse.*\nError Code: ${error.response.status}`);
            }
        } else if (error.request) {
            reply("⚠️ *Unable to connect to the Bible API.* Please check your internet connection.");
        } else {
            reply("⚠️ *An unexpected error occurred.* Please try again.");
        }
    }
});
cmd({
    pattern: "phub",
    alias: ["pornhub", "phsearch"],
    desc: "Search and download videos from Pornhub",
    category: "downloader",
    react: "🔞",
    filename: __filename,
}, async (conn, mek, m, { args, reply, quoted }) => {
    try {
        const searchQuery = args.join(" "); // Get the search query
        if (!searchQuery) return reply("❌ Please provide a search query. Example: .phub <search term>");

        const searchUrl = `https://ipa-oya.vercel.app/api/ph?q=${encodeURIComponent(searchQuery)}`;

        // Fetch search results with retry
        const searchResponse = await retryAxios(searchUrl);
        const searchResults = searchResponse.data;

        if (!searchResults || searchResults.length === 0) {
            return reply("❌ No results found for the given query.");
        }

        // Create a list of search results
        let resultMessage = `乂 ＰＯＲＮＨＵＢ ＳＥＡＲＣＨ ＲＥＳＵＬＴＳ\n\n`;
        searchResults.forEach((item, index) => {
            resultMessage += `*${index + 1}. ${item.title}*\n`;
        });
        resultMessage += `\n> 🙌 Reply with the number of your choice to download the video 💗`;

        // Send the search results with the first result's thumbnail
        const menuMessage = await conn.sendMessage(
            m.chat,
            {
                text: resultMessage,
                contextInfo: {
                    externalAdReply: {
                        title: 'Pornhub Search Results',
                        body: 'Reply with the number to choose a video.',
                        thumbnail: { url: searchResults[0].image },
                        sourceUrl: searchResults[0].url,
                    },
                },
            },
            { quoted: mek }
        );

        // Handle user's reply to select a video
        conn.ev.on("messages.upsert", async (msgUpsert) => {
            const msg = msgUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            if (messageContext && messageContext.stanzaId === menuMessage.key.id) {
                const choice = parseInt(userReply, 10) - 1;

                if (isNaN(choice) || choice < 0 || choice >= searchResults.length) {
                    return reply("❌ Invalid choice. Please reply with a valid number.");
                }

                const selectedVideo = searchResults[choice];
                const downloadUrl = `https://www.dark-yasiya-api.site/download/phub?url=${encodeURIComponent(selectedVideo.url)}`;

                // Fetch video download links with retry
                const downloadResponse = await retryAxios(downloadUrl);
                const downloadData = downloadResponse.data;

                if (!downloadData.status || !downloadData.result || !downloadData.result.format) {
                    return reply("❌ Unable to fetch video download links. Please try again later.");
                }

                const formats = downloadData.result.format;
                let downloadMessage = `乂 ＰＯＲＮＨＵＢ ＤＯＷＮＬＯＡＤ ＬＩＮＫＳ\n\n*${downloadData.result.video_title}*\n\n`;

                formats.forEach((format, index) => {
                    downloadMessage += `*${index + 1}. ${format.resolution}p*\n`;
                });

                downloadMessage += `\n> 🙌 Reply with the number to download the video 💗`;

                // Send the download options with the video thumbnail
                const downloadMenuMessage = await conn.sendMessage(
                    m.chat,
                    {
                        image: { url: downloadData.result.video_cover },
                        caption: downloadMessage,
                        contextInfo: {
                            externalAdReply: {
                                title: downloadData.result.video_title,
                                body: `Uploaded by: ${downloadData.result.video_uploader}`,
                                thumbnail: { url: downloadData.result.video_cover },
                                sourceUrl: downloadData.result.original_url,
                            },
                        },
                    },
                    { quoted: mek }
                );

                // Handle user's choice for download
                conn.ev.on("messages.upsert", async (msgUpsert) => {
                    const msg = msgUpsert.messages[0];
                    if (!msg.message || !msg.message.extendedTextMessage) return;

                    const downloadReply = msg.message.extendedTextMessage.text.trim();
                    const downloadContext = msg.message.extendedTextMessage.contextInfo;

                    if (downloadContext && downloadContext.stanzaId === downloadMenuMessage.key.id) {
                        const downloadChoice = parseInt(downloadReply, 10) - 1;

                        if (isNaN(downloadChoice) || downloadChoice < 0 || downloadChoice >= formats.length) {
                            return reply("❌ Invalid choice. Please reply with a valid number.");
                        }

                        const selectedFormat = formats[downloadChoice];

                        // Send the selected video
                        await conn.sendMessage(m.chat, {
                            video: { url: selectedFormat.download_url },
                            caption: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | ${downloadData.result.video_title}`,
                        });
                    }
                });
            }
        });
    } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 504) {
            reply("❌ The server is taking too long to respond. Please try again later.");
        } else {
            reply("❌ An error occurred while processing your request. Please try again later.");
        }
    }
});

cmd({
    pattern: "ephoto",
    alias: ["ephoto360"],
    desc: "Generate logos using the Ephoto API",
    category: "logo",
    react: "🖼️",
    filename: __filename,
}, async (conn, mek, m, { args, reply, quoted }) => {
    try {
        if (args.length === 0) {
            return reply(`❌ Please Give Me text to create the logo!`);
        }

        const name = args.join(" ");

        // API URLs for generating different images
        const apiUrls = [
            // Original APIs kept for compatibility
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-typography-art-effects-with-multiple-layers-811.html",
            // New APIs added from the first document
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-star-wars-character-mascot-logo-online-707.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-glowing-text-effects-online-706.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-3d-text-effect-on-the-beach-online-688.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/3d-underwater-text-effect-online-682.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-bear-logo-maker-online-673.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-football-team-logo-online-free-671.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-on-vintage-television-online-670.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-realistic-embroidery-text-effect-online-662.html",
            "https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html"
        ];

        // Generate menu options dynamically
        const menuOptions = apiUrls.map((url, index) => {
            const effectName = url.split('/').pop().replace('.html', '')
                .split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            return `${index + 1}️⃣ ${effectName}`;
        });

        // Prepare menu message with dynamic options
        const message = `乂 ＥＰＨＯＴＯ ＧＥＮＥＲＡＴＯＲ

╭───────────●➤
├ 1️⃣ Create A Blackpink Style Logo With Members Signatures 810
├ 2️⃣ Create Online 3d Comic Style Text Effects 817
├ 3️⃣ Create Dragon Ball Style Text Effects Online 809
├ 4️⃣ Create Glossy Silver 3d Text Effect Online 802
├ 5️⃣ Create Colorful Neon Light Text Effects Online 797
├ 6️⃣ Create Typography Text Effect On Pavement Online 774
├ 7️⃣ Create Digital Glitch Text Effects Online 767
├ 8️⃣ Handwritten Text On Foggy Glass Online 680
├ 9️⃣ Write Text On Wet Glass Online 589
├ 1️⃣0️⃣ Create Online Typography Art Effects With Multiple Layers 811
├ 1️⃣1️⃣ Naruto Shippuden Logo Style Text Effect Online 808
├ 1️⃣2️⃣ Beautiful 3d Foil Balloon Effects For Holidays And Birthday 803
├ 1️⃣3️⃣ Create 3d Colorful Paint Text Effect Online 801
├ 1️⃣4️⃣ Create Pixel Glitch Text Effect Online 769
├ 1️⃣5️⃣ Create Impressive Neon Glitch Text Effects Online 768
├ 1️⃣6️⃣ Free Online American Flag 3d Text Effect Generator 725
├ 1️⃣7️⃣ Create Eraser Deleting Text Effect Online 717
├ 1️⃣8️⃣ Create Multicolored Signature Attachment Arrow Effect 714
├ 1️⃣9️⃣ Online Blackpink Style Logo Maker Effect 711
├ 2️⃣0️⃣ Create A Star Wars Character Mascot Logo Online 707
├ 2️⃣1️⃣ Create Glowing Text Effects Online 706
├ 2️⃣2️⃣ Create 3d Text Effect On The Beach Online 688
├ 2️⃣3️⃣ Create Cute Girl Gamer Mascot Logo Online 687
├ 2️⃣4️⃣ 3d Underwater Text Effect Online 682
├ 2️⃣5️⃣ Free Bear Logo Maker Online 673
├ 2️⃣6️⃣ Create Football Team Logo Online Free 671
├ 2️⃣7️⃣ Write Text On Vintage Television Online 670
├ 2️⃣8️⃣ Create A Cartoon Style Graffiti Text Effect Online 668
├ 2️⃣9️⃣ Create A Realistic Embroidery Text Effect Online 662
├ 3️⃣0️⃣ Multicolor 3d Paper Cut Style Text Effect 658
╰───────────●➤

> 🙌 Reply with the number of your choice (1-30).`;

        // Send the menu
        const menuMessage = await conn.sendMessage(
            m.chat,
            {
                text: message,
                contextInfo: {
                    externalAdReply: {
                        title: "Bhashi - MD Version 2.0.0 🧚🏻‍♀️",
                        body: "© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.",
                        thumbnail: { url: "https://i.ibb.co/YtfSPK8/logo.jpg" },
                        sourceUrl: "https://bhashi-md-ofc.netlify.app/",
                        mediaType: 1,
                    },
                },
            },
            { quoted: mek }
        );

        // Enhanced reply listener with better error handling
        const replyListener = async (msgUpsert) => {
            try {
                const msg = msgUpsert.messages[0];
                if (!msg.message?.extendedTextMessage) return;

                const userReply = msg.message.extendedTextMessage.text.trim();
                const messageContext = msg.message.extendedTextMessage.contextInfo;

                if (messageContext?.stanzaId === menuMessage.key.id) {
                    const choice = parseInt(userReply, 10) - 1;

                    if (choice >= 0 && choice < apiUrls.length) {
                        await conn.sendMessage(m.chat, { react: { text: "🔄", key: msg.key } });

                        const selectedApi = apiUrls[choice] + `&name=${encodeURIComponent(name)}`;
                        const res = await fetch(selectedApi);

                        if (!res.ok) {
                            throw new Error(`API request failed with status ${res.status}`);
                        }

                        const json = await res.json();

                        if (json.status && json.result?.download_url) {
                            await conn.sendMessage(m.chat, { 
                                image: { url: json.result.download_url }, 
                                caption: `${caption}`
                            });
                            await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                        } else {
                            throw new Error("Invalid API response format");
                        }
                    } else {
                        await conn.sendMessage(m.chat, { react: { text: "❌", key: msg.key } });
                        reply(`❌ Invalid choice. Please reply with a number between 1 and ${apiUrls.length}.`);
                    }
                }
            } catch (error) {
                console.error("Error in replyListener:", error);
                reply(`❌ ${error.message || "An error occurred while processing your request."}`);
                await conn.sendMessage(m.chat, { react: { text: "❌", key: msg.key } });
            }
        };

        // Add the event listener
        conn.ev.on("messages.upsert", replyListener);
    } catch (error) {
        console.error("Error in ephoto command:", error);
        reply("❌ An error occurred while initializing the command. Please try again later.");
    }
});



//======================- RANDOM COMMANDS -=======================
cmd({
    pattern: "mysteryimage",
    alias: ["rmysteryimg", "rimage"],
    desc: "Get a random mystery image",
    category: "random",
    react: "📸",
    filename: __filename,
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Fetch data from the API
        const response = await axios.get('https://itzpire.com/random/rumah-hantu');
        const data = response.data;

        if (data.status === "success" && data.data && data.data.length > 0) {
            // Pick a random image
            const randomImage = data.data[Math.floor(Math.random() * data.data.length)];
            const { thumbnail, category } = randomImage;

            // Send the image with category link
            await conn.sendMessage(from, {
                image: { url: thumbnail },
                caption: `💀 ＲＡＮＤＯＭ ＭＹＳＴＥＲＹ ＩＭＡＧＥ 💀\n\n📂 𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗒 : ${category}`,
            }, { quoted: mek });
        } else {
            reply("⚠️ Could not fetch a mystery image. Please try again later.");
        }
    } catch (error) {
        console.error(error);
        reply(`⚠️ Error fetching mystery image: ${error.message}`);
    }
});

cmd({
    pattern: "randommystery",
    alias: ["rmystery", "mystery"],
    desc: "Get a random mystery story",
    category: "random",
    react: "👻",
    filename: __filename,
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Fetch data from the given API
        const response = await axios.get('https://itzpire.com/random/rumah-misteri');
        const data = response.data;

        if (data.status === "success" && data.data && data.data.length > 0) {
            // Pick the first story (or randomize if needed)
            const story = data.data[0];
            const { href, image, category, postedOn, author, title, content } = story;

            // Send the story details as a message
            const message = `👻 ＲＡＮＤＯＭ  ＭＹＳＴＥＲＹ ＳＴＯＲＹ 👻\n\n📖 𝖳𝗂𝗍𝗅𝖾 :  ${title}\n🗂️ 𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗒 :  ${category}\n📝 𝖠𝗎𝗍𝗁𝗈𝗋 ${author}\n📅 𝖯𝗈𝖽𝗍𝖾𝖽 𝖮𝗇 : ${postedOn}\n\n📜 𝖢𝗈𝗇𝗍𝖾𝗇𝗍 : \n${content}\n\n🔗 𝖱𝖾𝖺𝖽 𝖬𝗈re 𝖫𝗂𝗇𝗄 : ${href}`;

            // Send the image with the message as a caption
            await conn.sendMessage(from, {
                image: { url: image },
                caption: message,
            }, { quoted: mek });
        } else {
            reply("⚠️ Could not fetch a mystery story. Please try again later.");
        }
    } catch (error) {
        console.error(error);
        reply(`⚠️ Error fetching mystery story: ${error.message}`);
    }
});
cmd({
    pattern: "randomsound",
    alias: ["rsound"],
    desc: "Get a random sound effect",
    category: "random",
    react: "🎵",
    filename: __filename,
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Fetch sound data from the provided API
        const response = await axios.get('https://itzpire.com/random/sound-effect');
        const data = response.data;

        if (data.status === "success" && data.data && data.data.length > 0) {
            // Pick a random sound
            const sounds = data.data;
            const randomSound = sounds[Math.floor(Math.random() * sounds.length)];

            const { title, soundLink, pageLink } = randomSound;

            // Send the sound as an audio message
            await conn.sendMessage(from, {
                audio: { url: soundLink },
                mimetype: 'audio/mpeg',
                ptt: true, // Set to true to send as voice note
            }, { quoted: mek });

            // Send a follow-up message with the sound title and page link
            reply(`🎵 ＲＡＮＤＯＭ ＳＯＵＮＤ 🎵\n\n🎶 𝖳𝗂𝗍𝗅𝖾 : ${title}\n🔗 𝖲𝗈𝗎𝗋𝖼𝖾 :  ${pageLink}`);
        } else {
            reply("⚠️ Could not fetch sound data. Please try again later.");
        }
    } catch (error) {
        console.error(error);
        reply(`⚠️ Error fetching sound data: ${error.message}`);
    }
});
cmd({
    pattern: "randommeme",
    react: "🤣",
    desc: "Get a random meme to laugh at.",
    category: "random",
    use: ".randommeme",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const memeAPI = "https://api.imgflip.com/get_memes";
        const response = await axios.get(memeAPI);

        // Ensure the response has valid data
        if (response.data.success && response.data.data.memes.length > 0) {
            const memes = response.data.data.memes;
            const randomMeme = memes[Math.floor(Math.random() * memes.length)];
            const memeImageUrl = randomMeme.url;

            // Send the meme as an image with a caption
            await conn.sendMessage(from, { 
                image: { url: memeImageUrl }, 
                caption: `${caption}`
            });
        } else {
            throw new Error("No memes found in API response.");
        }
    } catch (error) {
        // Handle errors gracefully
        await reply("❌ *Failed to fetch a random meme.* Please try again later.");
        console.error("Random Meme Error:", error);
    }
});


//=================================================================

//=================================================================
cmd({
    pattern: "dogbreed",
    desc: "Get information about a random dog breed",
    category: "random",
    react: "🐶",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    const config = await readEnv();
    // Define language preference (SI for Sinhala, EN for English)
    const language = config.LANGUAGE; // Ensure this is set to either 'SI' or 'EN'

    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        const breed = data.message.split('/')[4];

        // Localized messages
        const breedInfo = {
            SI: `🐶 සයුරුවා: ${breed.charAt(0).toUpperCase() + breed.slice(1)}\n\n${caption}`,
            EN: `🐶 Breed: ${breed.charAt(0).toUpperCase() + breed.slice(1)}\n\n${caption}`
        };

        await conn.sendMessage(m.chat, { image: { url: data.message }, caption: breedInfo[language] });
    } catch (error) {
        console.error(error);
        const errorMsg = {
            SI: "⚠️ සයුරුවා තොරතුරු ලබා ගැනීමේදී දෝෂයක් සිදු විය.",
            EN: "⚠️ An error occurred while fetching dog breed information."
        };
        await reply(errorMsg[language]);
    }
});

//=================================================================
cmd({
    pattern: "cocktail",
    desc: "Get a random cocktail recipe",
    category: "random",
    react: "🍹",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    const config = await readEnv();
    // Define language preference (SI for Sinhala, EN for English)
    const language = config.LANGUAGE; // Ensure this is set to either 'SI' or 'EN'

    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const drink = data.drinks[0];
        let ingredients = '';

        for (let i = 1; i <= 15; i++) {
            if (drink[`strIngredient${i}`]) {
                ingredients += `${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`] || (language === 'SI' ? 'ඇවිලෙන තරමට' : 'To taste')}\n`;
            }
        }

        const replyText = {
            SI: `*🍹 අහම්බෙන් තේරූ කෝක්ටේල්:* ${drink.strDrink}\n\n*අවශ්‍ය ද්‍රව්‍ය:*\n${ingredients}*ඉතිරි කරුණු:*\n${drink.strInstructions}\n\n${caption}`,
            EN: `*🍹 Random Cocktail:* ${drink.strDrink}\n\n*Ingredients:*\n${ingredients}*Instructions:*\n${drink.strInstructions}\n\n${caption}`
        };

        await reply(replyText[language]);
    } catch (error) {
        console.error(error);
        const errorMsg = {
            SI: "⚠️ කෝක්ටේල් නිපැයුම් තොරතුරු ලබා ගැනීමට දෝෂයක් සිදුවිය.",
            EN: "⚠️ An error occurred while fetching a cocktail recipe."
        };
        await reply(errorMsg[language]);
    }
});
//=================================================================
cmd({
    pattern: 'rcoffee',
    desc: "Animal image.",
    react: '☕',
    category: "random",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {

    try {
        const sendRandomCoffee = async () => {
            const coffeeUrl = "https://coffee.alexflipnote.dev/random";
            const messageText = `Here is your random coffee image! ☕\n\n${caption}`;

            return await conn.sendMessage(from, {
                image: { url: coffeeUrl },
                caption: messageText
            }, { quoted: mek });
        };

        // Send random coffee image
        await sendRandomCoffee();

    } catch (error) {
        console.log(error);
        reply("An error occurred while fetching the coffee image: " + error.message);
    }
});

//===================================================================
cmd({
    pattern: "rimgs",
    desc: "Random image.",
    react: '🪄',
    category: "random",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE || 'EN'; // Fallback to 'EN' if LANGUAGE is not set
        const messages = {
            EN: {
                blacklisted: "You are blacklisted.",
                accessDenied: "You don't have access to this feature.",
                randomImage: `*💌 Here is a random image for you!*\n\n${caption}`,
                invalidInput: "Invalid input, please reply with '1' to get another image.",
                errorOccurred: "An error occurred: "
            },
            SI: {
                blacklisted: "ඔබ කළු ලිස්තුවේ වේ.",
                accessDenied: "ඔබට මෙම විශේෂාංගය භාවිතා කිරීමට අවසර නැත.",
                randomImage: `*💌 ඔබට යමක් සදහා පින්තූරයකි!*\n\n${caption}`,
                invalidInput: "වැරදි ආදානයක්, වෙනත් පින්තූරයක් ලබා ගැනීමට '1' යන්නෙන් පිළිතුරු දෙන්න.",
                errorOccurred: "දෝෂයක් සිදු විය: "
            }
        };

        const sendRandomImage = async () => {
            const imageUrl = "https://random-image-pepebigotes.vercel.app/api/random-image";
            const messageText = messages[lang].randomImage;

            return await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: messageText
            }, { quoted: mek });
        };

        let sentMessage = await sendRandomImage();

        conn.ev.on('messages.upsert', async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                if (userReply === '1') {
                    sentMessage = await sendRandomImage();
                } else {
                    reply(messages[lang].invalidInput);
                }
            }
        });

    } catch (error) {
        console.log(error);
        reply(messages[lang].errorOccurred + error.message);
    }
});

//=================================================================
cmd({
    pattern: 'rcolor',
    desc: 'Get a random color with its name and image.',
    category: 'random',
    react: '🎨',
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Function to fetch and send a random color
        const sendRandomColor = async () => {
            const response = await axios.get('https://api.popcat.xyz/randomcolor');
            const color = response.data;

            // Construct the message
            const messageText = `💌 *This Is Your Random Color* 💫
✨ *Color Name:* ${color.name}
🎉 *Color Code:* ${color.hex}

1 | *Get Another One*\n${caption}`;

            // Send the color with its name, code, and image
            return await conn.sendMessage(from, {
                image: { url: color.image },
                caption: messageText
            }, { quoted: mek });
        };

        // Send the first random color
        const sentMessage = await sendRandomColor();

        // Listen for user replies
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply is to the previously sent random color message
            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                if (userReply === '1') {
                    // User requested another random color
                    await sendRandomColor();
                } else {
                    reply("⚠️ *Invalid input. Reply with 1 to get another random color.*");
                }
            }
        });
    } catch (error) {
        console.error('Error fetching random color:', error);
        reply("⚠️ An error occurred while fetching the random color.");
    }
});
//=================================================================
cmd({
    pattern: "dog",
    alias: ["rdog"],
    desc: "Fetch a random dog image.",
    category: "random",
    react: "🐶",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const config = await readEnv();
        const lang = config.LANGUAGE || 'EN'; // Get the language preference
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        // Multi-language messages
        const accessDeniedText = lang === 'SI' ? "*🚫 ඔබ කළු ලැයිස්තුවේ නාමාවලියට ගිහින් ඇත. ඇතුලත් වීමට අවසර නැහැ.*" : "*🚫 You are blacklisted. Access denied.*";
        const accessDeniedGeneral = lang === 'SI' ? "*😢 අයිතිකාරකම ලබා ගැනීමට ඔබට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!*" : "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*";
        const errorFetchingText = lang === 'SI' ? '🐶  සුරතල් බල්ලාගේ පින්තූරයක් ලබා ගැනීමට දෝෂයක් ඇතිවිය.' : '🐶 Error fetching dog image.';

        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, {
            image: { url: data.message },
            caption: lang === 'SI' 
                ? `🐶 *යූනික් අන්දුනේ සුරතල් බල්ලා* 🐶\n${caption}` 
                : `🐶 *Random Dog Image* 🐶\n${caption}`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(errorFetchingText);
    }
});
//=================================================================







//===========================- NEWS COMMANDS -=====================
cmd({
    pattern: "businessnews",
    alias: ["business-latest", "businessnews"],
    desc: "Get the latest business news with titles, content, and images.",
    category: "news",
    react: "💼",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // API URL for business news
        const apiURL = "https://api-vishwa.vercel.app/busines-news";

        // Fetch data from the API
        const response = await axios.get(apiURL);

        // Check if the API returned successful data
        if (!response.data.success || !response.data.data) {
            return reply("❌ No business news found or failed to fetch news.");
        }

        // Extract and format the business news item
        const businessNews = response.data.data;
        let message = "💼 ＢＵＳＩＮＥＳＳ ＮＥＷＳ 💼\n\n";

        message += `*${businessNews.title}*\n\n`;
        message += `📖 ${businessNews.content || "No content available"}\n`;
        message += `🔗 [Read More](${businessNews.link})\n\n`;

        // Send the message with the image URL
        await conn.sendMessage(m.chat, {
            caption: message.trim(),
            image: { url: businessNews.image },
        });
    } catch (error) {
        console.error("Error fetching Business News:", error.message);
        reply("❌ Failed to fetch business news. Please try again later.");
    }
});
cmd({
    pattern: "sportnews",
    alias: ["sports-latest", "sportsnews"],
    desc: "Get the latest sports news with titles, content, and images.",
    category: "news",
    react: "🏅",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // API URL for sports news
        const apiURL = "https://api-vishwa.vercel.app/sport-news";

        // Fetch data from the API
        const response = await axios.get(apiURL);

        // Check if the API returned successful data
        if (!response.data.success || !response.data.data || response.data.data.length === 0) {
            return reply("❌ No sports news found or failed to fetch news.");
        }

        // Extract and format the sports news item (latest news)
        const sportsNews = response.data.data[0]; // Fetch the latest news article
        let message = "🏅 ＳＰＯＲＴＳ ＮＥＷＳ 🏅\n\n";

        message += `*${sportsNews.title}*\n\n`;
        message += `🕒 Published: ${sportsNews.publishedTime || "Not available"}\n`;
        message += `📖 ${sportsNews.content || "No content available"}\n`;
        message += `🔗 [Read More](${sportsNews.link})\n\n`;

        // Send the message with the image URL
        await conn.sendMessage(m.chat, {
            caption: message.trim(),
            image: { url: sportsNews.image },
        });
    } catch (error) {
        console.error("Error fetching Sports News:", error.message);
        reply("❌ Failed to fetch sports news. Please try again later.");
    }
});
cmd({
    pattern: "gagana",
    alias: ["gaganews", "gagana-latest"],
    desc: "Get the latest news with titles, content, and images from Gagana News",
    category: "news",
    react: "📰",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // API URL
        const apiURL = "https://api-vishwa.vercel.app/gagana-news";

        // Fetch data from the API
        const response = await axios.get(apiURL);

        // Check if the API returned successful data
        if (!response.data.success || !response.data.title) {
            return reply("❌ No news found or failed to fetch news.");
        }

        // Extract and format the news item
        const news = response.data;
        let message = "📰 ＧＡＧＡＮＡ ＮＥＷＳ 📰\n\n";

        message += `*${news.title}*\n\n`;
        message += `🕒 Published: ${news.publishedTime}\n`;
        message += `🖋 Author: ${news.author}\n`;
        message += `📖 ${news.content || "No content available"}\n`;
        message += `🔗 [Read More](${news.url})\n\n`;

        // Send the message with the image URL
        await conn.sendMessage(m.chat, {
            caption: message.trim(),
            image: { url: news.image },
        });
    } catch (error) {
        console.error("Error fetching Gagana News:", error.message);
        reply("❌ Failed to fetch Gagana News. Please try again later.");
    }
});
cmd({
    pattern: "nethnews",
    alias: ["neth-news", "nethlatest"],
    desc: "Get the latest news with titles, content, and images from NethNews",
    category: "news",
    react: "📰",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // API URL
        const apiURL = "https://api-vishwa.vercel.app/neth-news";

        // Fetch data from the API
        const response = await axios.get(apiURL);

        // Check if the API returned successful data
        if (!response.data.success || !response.data.data) {
            return reply("❌ No news found or failed to fetch news.");
        }

        // Extract and format the news item
        const news = response.data.data;
        let message = "📰 ＮＥＴＨ ＮＥＷＳ 📰\n\n";

        message += `*${news.title}*\n\n📖 ${news.description || "No content available"}\n🔗 [Read More](${news.link})\n\n`;

        // Send the message with the image URL
        await conn.sendMessage(m.chat, {
            caption: message.trim(),
            image: { url: news.image },
        });
    } catch (error) {
        console.error("Error fetching Neth News:", error.message);
        reply("❌ Failed to fetch Neth News. Please try again later.");
    }
});
cmd({
    pattern: "silumina",
    alias: ["silnews", "silumina-news"],
    desc: "Get the latest news with titles and content from Silumina",
    category: "news",
    react: "📰",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // API URL
        const apiURL = "https://api-vishwa.vercel.app/silumina-news";

        // Fetch data from the API
        const response = await axios.get(apiURL);

        // Check if the API returned successful data
        if (!response.data.success || !response.data.data || response.data.data.length === 0) {
            return reply("❌ No news found or failed to fetch news.");
        }

        // Extract and format the news items
        const newsItems = response.data.data.slice(0, 3); // Limit to the first 3 news items
        let message = "📰 ＳＩＬＵＭＩＮＡ ＮＥＷＳ 📰\n\n";

        newsItems.forEach((news) => {
            message += `*${news.title}*\n\n📖 ${news.content || "No content available"}\n🔗 [Read More](${news.link})\n🗓️ Date: ${news.date || "No date available"}\n\n`;
        });

        // Send the formatted news message
        reply(message.trim());
    } catch (error) {
        console.error("Error fetching Silumina news:", error.message);
        reply("❌ Failed to fetch Silumina news. Please try again later.");
    }
});

cmd({
    pattern: "lankantruth",
    alias: ["ltnews", "lankann"],
    desc: "Get the latest news with titles and content from LankaTruth",
    category: "news",
    react: "📰",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // API URL
        const apiURL = "https://api-vishwa.vercel.app/lankatruth-news";

        // Fetch data from the API
        const response = await axios.get(apiURL);

        // Check if the API returned successful data
        if (!response.data.success || !response.data.data || response.data.data.length === 0) {
            return reply("❌ No news found or failed to fetch news.");
        }

        // Extract and format the news items
        const newsItems = response.data.data.slice(0, 3); // Limit to the first 3 news items
        let message = "📰 ＬＡＮＫＡＮ ＴＲＵＴＨ ＮＥＷＳ 📰\n\n";

        newsItems.forEach((news) => {
            message += `*${news.title}*\n\n📖 ${news.content || "No content available"}\n🔗 [Read More](${news.link})\n\n`;
        });

        // Send the formatted news message
        reply(message.trim());
    } catch (error) {
        console.error("Error fetching news:", error.message);
        reply("❌ Failed to fetch news. Please try again later.");
    }
});

//=================================================================
cmd({
    pattern: "technews",
    alias: ["androidwadakarayo"],
    desc: "Get the latest Android Wedakarayo tech news.",
    category: "news",
    react: "📰",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        await conn.sendMessage(from, { text: '📰 *Fetching latest tech news...*' }, { quoted: mek });

        // Define the API URL and fetch the latest news
        const newsApiUrl = `${vishwa}/AndroidWadakarayo-latest-news?limit=10&apikey=key1`;
        const response = await axios.get(newsApiUrl);

        if (response.data.status !== "success" || !response.data.data || response.data.data.length === 0) {
            return reply("❌ *No tech news available at the moment.*");
        }

        // Generate a list of news articles
        let newsMessage = `📰  ＴＥＣＨ ＮＥＷＳ  📰\n\n`;
        response.data.data.forEach((article, index) => {
            newsMessage += `*${index + 1}.* 📌 *${article.title}*\n`;
            newsMessage += `   🗓️ *𝖯𝗎𝖻𝗅𝗂𝗌𝗁𝖾𝖽:* ${article.publishedTime}\n`;
            newsMessage += `   ⏳ *𝖱𝖾𝖺𝖽 𝖳𝗂𝗆𝖾:* ${article.readTime}\n`;
            newsMessage += `   🔔 *𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗒:* ${article.category}\n\n`;
        });
        newsMessage += "➤ *Reply with a number to read more about a selected article.*";

        // Send the list to the user
        const sentMessage = await conn.sendMessage(from, { text: newsMessage }, { quoted: mek });

        // Listen for user replies with article selection
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Ensure the reply is for the sent message
            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                const index = parseInt(userReply) - 1;
                await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                if (isNaN(index) || index < 0 || index >= response.data.data.length) {
                    return reply("❌ *Invalid selection. Please reply with a valid number.*");
                }

                // Fetch detailed information for the selected article
                const selectedArticle = response.data.data[index];
                const articleInfoUrl = `${vishwa}/AndroidWadakarayo-article?url=${encodeURIComponent(selectedArticle.link)}&apikey=key1`;

                const articleInfoResponse = await axios.get(articleInfoUrl);
                if (articleInfoResponse.data.status !== "success" || !articleInfoResponse.data.data) {
                    return reply("❌ *Failed to retrieve article information.*");
                }

                const articleDetails = articleInfoResponse.data.data;

                // Send the detailed article info
                let articleMessage = `📰 *${articleDetails.title}*\n\n`;
                articleMessage += `📖 *𝖲𝗎𝗆𝗆𝖺𝗋𝗒:*\n${articleDetails.content}\n\n`;
                articleMessage += `🔗 *𝖱𝖾𝖺𝖽 𝖬𝗈𝗋𝖾:* ${articleDetails.source}\n`;
                articleMessage += `🗓️ *Published On:* ${articleDetails.writtenDate}\n`;
                articleMessage += `✍️ *𝖠𝗎𝗍𝗁𝗈𝗋:* ${articleDetails.writerName}\n`;
                articleMessage += `⏳ *𝖱𝖾𝖺𝖽 𝖳𝗂𝗆𝖾:* ${articleDetails.readTime}\n\n`;
                articleMessage += `${caption}`;

                await conn.sendMessage(from, { text: articleMessage }, { quoted: mek });
            }
        });
    } catch (e) {
        console.error("Error fetching tech news:", e);
        reply(`❌ *Error:* ${e.message}`);
    }
});

//=================================================================
cmd({
  pattern: "hackernews",
  alias: ["hn"],
  desc: "Search for the latest articles on The Hacker News and get details.",
  react: "📰",
  category: "news",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
      const config = await readEnv();
    const apiKey = "key1"; // Your provided API key
    const apiUrl = `${vishwa}/news-hackernews?apikey=key1`;
    const language = config.LANGUAGE; // Language set either to 'SI' or 'EN'

    const response = await axios.get(apiUrl);
    const articlesData = response.data;

    // Check if the response contains articles
    if (!articlesData.data || articlesData.data.length === 0) {
      const noArticlesMessage = {
        SI: "❌ කිසිදු ලිපියක් නොමැත.",
        EN: "❌ No articles found."
      };
      return reply(noArticlesMessage[language]);
    }

    // Message display
    let resultMessage = {
      SI: `📰 ＨＡＣＫＥＲ ＮＥＷＳ 📰\n` +
          `\n*> මෙම ලිපි පිළිබඳ වැඩිදුර කියවීමට ලිපි අංකය ආපහු පිළිතුරු දෙන්න.*\n\n`,
      EN: `📰 ＨＡＣＫＥＲ ＮＥＷＳ 📰\n` +
          `\n*➤ Reply with a number to read more about a selected article.*\n\n`
    };

    // Displaying article details with indexing
    articlesData.data.forEach((article, index) => {
      resultMessage[language] += `📰 *${index + 1}. ${article.title}*\n` +
                                   `   🕒𝖯𝗎𝖻𝗅𝗂𝗌𝗁𝖾𝖽: ${article.date}\n\n`;
    });

    resultMessage[language] += `${caption}`;

    // Send the initial article list with the external ad promotion
    const sentMessage = await conn.sendMessage(from, {
      text: resultMessage[language],
        externalAdReply: {
            title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
            body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
            thumbnail: { url: botimg2 }, // Ensure botimg2 is a valid URL or buffer
            sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
            mediaType: 1,
      }
    }, { quoted: mek });

    // Function to handle user replies for article selection
    const handleUserReply = async (messageUpsert) => {
      const msg = messageUpsert.messages[0];
      if (!msg.message || !msg.message.extendedTextMessage) return;

      const userReply = msg.message.extendedTextMessage.text.trim();
      const messageContext = msg.message.extendedTextMessage.contextInfo;

      // Check if the reply matches the original context
      if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
        if (userReply.toLowerCase() === 'done') {
          conn.ev.off("messages.upsert", handleUserReply);
          return reply(language === 'SI' ? "ආයුබෝවන්! Hacker News සෙවීම නිමාවට පත් විය." : "Thank you for using The Hacker News search. Search ended.");
        }

        const articleIndex = parseInt(userReply) - 1;

        // Validate selected article index
        if (articleIndex >= 0 && articleIndex < articlesData.data.length) {
          const selectedArticle = articlesData.data[articleIndex];

          // Check if URL exists before making the detailed API call
          if (!selectedArticle.link) {
            return reply(language === 'SI' ? "❌ මෙම ලිපියට වලංගු URL එකක් නොමැත." : "❌ This article has no valid URL.");
          }

          // Fetch detailed article information
          const detailsApiUrl = `${vishwa}/news-hackernews/article?url=${selectedArticle.link}&apikey=key1`;

          try {
            const detailsResponse = await axios.get(detailsApiUrl);
            const articleDetails = detailsResponse.data;

            // Prepare detailed article message
            let detailsMessage = `📰 *${articleDetails.data.title}*\n\n`;
            detailsMessage += `🕒 *𝖯𝗎𝖻𝗅𝗂𝗌𝗁𝖾𝖽:* ${articleDetails.data.date}\n`;
            detailsMessage += `👤 *𝖠𝗎𝗍𝗁𝗈𝗋:* ${articleDetails.author}\n`;
            detailsMessage += `🔗 *𝖫𝗂𝗇𝗄:* ${articleDetails.data.link}\n\n`;
            detailsMessage += `📝 *𝖲𝗎𝗆𝗆𝖺𝗋𝗒:* ${articleDetails.data.content.replace(/Found this article interesting\\? Follow us on Twitter  and LinkedIn to read more exclusive content we post\\./, '')}\n\n`;
            detailsMessage += `🖼️ *𝖳𝖺𝗀𝗌:* ${articleDetails.data.tags}\n\n${caption}`;

            // Send image if available
            if (articleDetails.data.image && articleDetails.data.image.link) {
                await conn.sendMessage(m.chat, { react: { text: "♻", key: msg.key } });
              await conn.sendMessage(from, {
                caption: detailsMessage,
                image: { url: articleDetails.data.image.link },
                quoted: msg,
                  externalAdReply: {
                      title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                      body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                      thumbnail: { url: botimg2 }, // Ensure botimg2 is a valid URL or buffer
                      sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                      mediaType: 1,
                }
              });
            } else {
              // Send only text if no image, with the external ad reply
              await conn.sendMessage(from, {
                text: detailsMessage,
                quoted: msg,
                  externalAdReply: {
                      title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                      body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                      thumbnail: { url: botimg2 }, // Ensure botimg2 is a valid URL or buffer
                      sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                      mediaType: 1,
                }
              });
                await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
            }

          } catch (detailsError) {
            console.error(`Error fetching detailed article info: ${detailsError.message}`);
            return reply(language === 'SI' ? "🚨 ලිපි විස්තර ලබා ගැනීමට දෝෂයක් විය." : "🚨 An error occurred while fetching article details.");
          }

        } else {
          // Error handling for invalid article numbers
          reply(language === 'SI' ? `❌ අපේක්ෂිත ලිපි අංකයක් තෝරන්න. 1 සහ ${articlesData.data.length} අතර අංකයක් තෝරන්න.` : `❌ Invalid article number. Please choose a number between 1 and ${articlesData.data.length}.`);
        }
      }
    };

    // Add listener to capture user reply for article selection
    conn.ev.on("messages.upsert", handleUserReply);

  } catch (error) {
    // Error handling for API request failures
    console.error(`Error in The Hacker News search: ${error.response ? error.response.data : error.message}`);
    reply(language === 'SI' ? `🚨 ලිපි ලබා ගැනීමට දෝෂයක් විය: ${error.message}` : `🚨 An error occurred while fetching articles: ${error.message}`);
  }
});
//===============================================================
cmd({
  pattern: "adanews",
  alias: ["adan"],
  desc: "Search for the latest articles on Ada Derana and get details.",
  react: "📰",
  category: "news",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    const config = await readEnv();
    const apiKey = "key1"; // Your provided API key
    const apiUrl = `${vishwa}/news-ada?pageNo=1&apikey=${apiKey}`;
    const language = config.LANGUAGE; // Language set either to 'SI' or 'EN'

    const response = await axios.get(apiUrl);
    const articlesData = response.data;

    // Check if the response contains articles
    if (!articlesData.data || articlesData.data.length === 0) {
      const noArticlesMessage = {
        SI: "❌ කිසිදු ලිපියක් නොමැත.",
        EN: "❌ No articles found."
      };
      return reply(noArticlesMessage[language]);
    }

    // Message display
    let resultMessage = {
      SI: `📰 ＡＤＡ ＤＥＲＡＮＡ 📰\n` +
          `\n*> මෙම ලිපි පිළිබඳ වැඩිදුර කියවීමට ලිපි අංකය ආපහු පිළිතුරු දෙන්න.*\n\n`,
      EN: `📰 ＡＤＡ ＤＥＲＡＮＡ 📰\n` +
          `\n*➤ Reply with a number to read more about a selected article.*\n\n`
    };

    // Displaying article details with indexing
    articlesData.data.forEach((article, index) => {
      resultMessage[language] += `📰 *${index + 1}. ${article.title}*\n` +
                                   `   🕒𝖯𝗎𝖻𝗅𝗂𝗌𝗁𝖾𝖽: ${article.date}\n\n`;
    });

    // Send the initial article list
    const sentMessage = await conn.sendMessage(from, {
      text: resultMessage[language],
      externalAdReply: {
        title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
        body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
        thumbnail: { url: botimg2 },
        sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
        mediaType: 1
      }
    }, { quoted: mek });

    // Function to handle user replies for article selection
    const handleUserReply = async (messageUpsert) => {
      const msg = messageUpsert.messages[0];
      if (!msg.message || !msg.message.extendedTextMessage) return;

      const userReply = msg.message.extendedTextMessage.text.trim();
      const messageContext = msg.message.extendedTextMessage.contextInfo;

      if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
        if (userReply.toLowerCase() === 'done') {
          conn.ev.off("messages.upsert", handleUserReply);
          return reply(language === 'SI' ? "ආයුබෝවන්! Ada Derana සෙවීම නිමාවට පත් විය." : "Thank you for using Ada Derana search. Search ended.");
        }

        const articleIndex = parseInt(userReply) - 1;

        // Validate selected article index
        if (articleIndex >= 0 && articleIndex < articlesData.data.length) {
          const selectedArticle = articlesData.data[articleIndex];

          // Check if URL exists before making the detailed API call
          if (!selectedArticle.link) {
            return reply(language === 'SI' ? "❌ මෙම ලිපියට වලංගු URL එකක් නොමැත." : "❌ This article has no valid URL.");
          }

          // Fetch detailed article information
          const detailsApiUrl = `${vishwa}/news-ada-article?articleUrl=${encodeURIComponent(selectedArticle.link)}&apikey=${apiKey}`;

          try {
            const detailsResponse = await axios.get(detailsApiUrl);
            const articleDetails = detailsResponse.data;

            // Prepare detailed article message
            let detailsMessage = `📰 *${articleDetails.title}*\n\n`;
            detailsMessage += `🕒 *𝖯𝗎𝖻𝗅𝗂𝗌𝗁𝖾𝖽:* ${articleDetails.date}\n`;
            detailsMessage += `🔗 *𝖫𝗂𝗇𝗄:* ${articleDetails.image}\n\n`;
            detailsMessage += `📝 *𝖲𝗎𝗆𝗆𝖺𝗋𝗒:* ${articleDetails.content}\n\n${caption}`;
              await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
            // Send image if available
            if (articleDetails.image) {
              await conn.sendMessage(from, {
                caption: detailsMessage,
                image: { url: articleDetails.image },
                quoted: msg,
                externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                  thumbnail: { url: botimg2 },
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                  mediaType: 1
                }
              });
            } else {
              await conn.sendMessage(from, {
                text: detailsMessage,
                quoted: msg,
                externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                  thumbnail: { url: botimg2 },
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                  mediaType: 1
                }
              });
            }

          } catch (detailsError) {
            console.error(`Error fetching detailed article info: ${detailsError.message}`);
            return reply(language === 'SI' ? "🚨 ලිපි විස්තර ලබා ගැනීමට දෝෂයක් විය." : "🚨 An error occurred while fetching article details.");
          }

        } else {
          reply(language === 'SI' ? `❌ අපේක්ෂිත ලිපි අංකයක් තෝරන්න. 1 සහ ${articlesData.data.length} අතර අංකයක් තෝරන්න.` : `❌ Invalid article number. Please choose a number between 1 and ${articlesData.data.length}.`);
        }
      }
    };

    conn.ev.on("messages.upsert", handleUserReply);

  } catch (error) {
    console.error(`Error in Ada Derana search: ${error.message}`);
    reply(language === 'SI' ? `🚨 ලිපි ලබා ගැනීමට දෝෂයක් විය: ${error.message}` : `🚨 An error occurred while fetching articles: ${error.message}`);
  }
});
cmd({
  pattern: "bbcnews",
  alias: ["bbc", "newsbbc"],
  desc: "Search for the latest articles on BBC News and get details.",
  react: "📰",
  category: "news",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    const config = await readEnv();
    const apiKey = "key1"; // API key for BBC News
    const apiUrl = `${vishwa}/news-bbc?apikey=${apiKey}`;
    const language = config.LANGUAGE; // Language preference (SI or EN)

    const response = await axios.get(apiUrl);
    const articlesData = response.data;

    // Check if the response contains articles
    if (!articlesData.success || !articlesData.data || articlesData.data.length === 0) {
      const noArticlesMessage = {
        SI: "❌ කිසිදු ලිපියක් නොමැත.",
        EN: "❌ No articles found."
      };
      return reply(noArticlesMessage[language]);
    }

    // Initial message to display the article list
    let resultMessage = {
      SI: `📰 ＢＢＣ ＮＥＷＳ 📰\n\n` +
          `*➤ මෙම ලිපි පිළිබඳ වැඩිදුර කියවීමට ලිපි අංකය ආපහු පිළිතුරු දෙන්න.*\n\n`,
      EN: `📰 ＢＢＣ ＮＥＷＳ 📰\n\n` +
          `*➤ Reply with a number to read more about a selected article.*\n\n`
    };

    // Display each article with an index
    articlesData.data.forEach((article, index) => {
      resultMessage[language] += `📰 *${index + 1}. ${article.title}*\n` +
                                   `   🌍 *Category:* ${article.category}\n` +
                                   `   🕒 *Published:* ${article.timeStamp}\n` +
                                   `   🔗 *Link:* ${article.link}\n\n`;
    });

    // Send the article list message
    const sentMessage = await conn.sendMessage(from, {
      text: resultMessage[language],
      externalAdReply: {
        title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
        body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
        thumbnail: { url: botimg2 }, // Ensure `botimg2` is a valid URL or buffer
        sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
        mediaType: 1
      }
    }, { quoted: mek });

    // Function to handle user replies for article selection
    const handleUserReply = async (messageUpsert) => {
      const msg = messageUpsert.messages[0];
      if (!msg.message || !msg.message.extendedTextMessage) return;

      const userReply = msg.message.extendedTextMessage.text.trim();
      const messageContext = msg.message.extendedTextMessage.contextInfo;

      // Check if the reply matches the original message context
      if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
        if (userReply.toLowerCase() === 'done') {
          conn.ev.off("messages.upsert", handleUserReply);
          return reply(language === 'SI' ? "ආයුබෝවන්! BBC News සෙවීම නිමාවට පත් විය." : "Thank you for using BBC News search. Search ended.");
        }

        const articleIndex = parseInt(userReply) - 1;

        // Validate selected article index
        if (articleIndex >= 0 && articleIndex < articlesData.data.length) {
          const selectedArticle = articlesData.data[articleIndex];

          // Fetch detailed article information using the article URL
          const detailsApiUrl = `${vishwa}/news-bbc-article?articleUrl=${encodeURIComponent(selectedArticle.link)}&apikey=${apiKey}`;

          try {
            await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
            const detailsResponse = await axios.get(detailsApiUrl);
            const articleDetails = detailsResponse.data.data;

            // Prepare the detailed article message
            let detailsMessage = `📰 *${articleDetails.headline}*\n\n`;
            detailsMessage += `🗂️ *Category:* ${articleDetails.category}\n`;
            detailsMessage += `👤 *Author:* ${articleDetails.author || "Unknown"}\n`;
            detailsMessage += `🕒 *Published:* ${articleDetails.timestamp}\n\n`;
            detailsMessage += `📝 *Summary:* ${articleDetails.content}\n\n`;
            detailsMessage += `🔗 *Link:* ${articleDetails.link}\n\n`;

              // Send text message if no image is available
              await conn.sendMessage(from, {
                text: detailsMessage,
                quoted: msg,
                externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                  thumbnail: { url: botimg2 },
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                  mediaType: 1
                }
              });

          } catch (detailsError) {
            console.error(`Error fetching article details: ${detailsError.message}`);
            return reply(language === 'SI' ? "🚨 ලිපි විස්තර ලබා ගැනීමට දෝෂයක් විය." : "🚨 An error occurred while fetching article details.");
          }

        } else {
          reply(language === 'SI' ? `❌ ගැලපෙන ලිපි අංකයක් තෝරන්න. 1 සහ ${articlesData.data.length} අතර අංකයක් තෝරන්න.` : `❌ Invalid article number. Please choose a number between 1 and ${articlesData.data.length}.`);
        }
      }
    };

    // Add listener to capture user reply for article selection
    conn.ev.on("messages.upsert", handleUserReply);

  } catch (error) {
    console.error(`Error in BBC News search: ${error.message}`);
    reply(language === 'SI' ? `🚨 ලිපි ලබා ගැනීමට දෝෂයක් විය: ${error.message}` : `🚨 An error occurred while fetching articles: ${error.message}`);
  }
});
cmd({
  pattern: "siyathanews",
  alias: ["siyatha"],
  desc: "Search for the latest articles on Siyatha News and get details.",
  react: "📰",
  category: "news",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    const config = await readEnv();
    const apiKey = "key1"; // API key for Siyatha News
    const apiUrl = `${vishwa}/news-siyatha?apikey=${apiKey}`;
    const language = config.LANGUAGE; // Language preference (SI or EN)

    const response = await axios.get(apiUrl);
    const articlesData = response.data;

    // Check if the response contains articles
    if (!articlesData.success || !articlesData.data || articlesData.data.length === 0) {
      const noArticlesMessage = {
        SI: "❌ කිසිදු ලිපියක් නොමැත.",
        EN: "❌ No articles found."
      };
      return reply(noArticlesMessage[language]);
    }

    // Initial message to display the article list
    let resultMessage = {
      SI: `📰 ＳＩＹＡＴＨＡ ＮＥＷＳ 📰\n\n` +
          `*➤ මෙම ලිපි පිළිබඳ වැඩිදුර කියවීමට ලිපි අංකය ආපහු පිළිතුරු දෙන්න.*\n\n`,
      EN: `📰 ＳＩＹＡＴＨＡ ＮＥＷＳ 📰\n\n` +
          `*➤ Reply with a number to read more about a selected article.*\n\n`
    };

    // Display each article with an index
    articlesData.data.forEach((article, index) => {
      resultMessage[language] += `📰 *${index + 1}. ${article.title}*\n` +
                                   `   👤 *Author:* ${article.author}\n` +
                                   `   🕒 *Published:* ${article.date}\n\n`;
    });

    // Send the article list message
    const sentMessage = await conn.sendMessage(from, {
      text: resultMessage[language],
      externalAdReply: {
        title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
        body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
        thumbnail: { url: botimg2 }, // Ensure `botimg2` is a valid URL or buffer
        sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
        mediaType: 1
      }
    }, { quoted: mek });

    // Function to handle user replies for article selection
    const handleUserReply = async (messageUpsert) => {
      const msg = messageUpsert.messages[0];
      if (!msg.message || !msg.message.extendedTextMessage) return;

      const userReply = msg.message.extendedTextMessage.text.trim();
      const messageContext = msg.message.extendedTextMessage.contextInfo;

      // Check if the reply matches the original message context
      if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
        if (userReply.toLowerCase() === 'done') {
          conn.ev.off("messages.upsert", handleUserReply);
          return reply(language === 'SI' ? "ආයුබෝවන්! Siyatha News සෙවීම නිමාවට පත් විය." : "Thank you for using Siyatha News search. Search ended.");
        }

        const articleIndex = parseInt(userReply) - 1;

        // Validate selected article index
        if (articleIndex >= 0 && articleIndex < articlesData.data.length) {
          const selectedArticle = articlesData.data[articleIndex];

          // Check if the article has a valid URL
          if (!selectedArticle.url) {
            return reply(language === 'SI' ? "❌ මෙම ලිපියට වලංගු URL එකක් නොමැත." : "❌ This article has no valid URL.");
          }

          // Fetch detailed article information
          const detailsApiUrl = `${vishwa}/news-siyatha-article?articleUrl=${encodeURIComponent(selectedArticle.url)}&apikey=${apiKey}`;

          try {
              await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
            const detailsResponse = await axios.get(detailsApiUrl);
            const articleDetails = detailsResponse.data.data;

            // Prepare the detailed article message
            let detailsMessage = `📰 *${articleDetails.title}*\n\n`;
            detailsMessage += `🗂️ *𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗒:* ${articleDetails.category}\n`;
            detailsMessage += `👤 *𝖠𝗎𝗍𝗁𝗈𝗋:* ${articleDetails.author}\n`;
            detailsMessage += `🕒 *𝖯𝗎𝖻𝗅𝗂𝗌𝗁𝖾𝖽:* ${articleDetails.date}\n\n`;
            detailsMessage += `📝 *𝖲𝗎𝗆𝗆𝖺𝗋𝗒:* ${articleDetails.content}\n\n`;
            detailsMessage += `🔗 *𝖫𝗂𝗇𝗄:* ${articleDetails.url}\n\n`;

            // Send the detailed article message with the image if available
            if (articleDetails.image) {
              await conn.sendMessage(from, {
                caption: detailsMessage,
                image: { url: articleDetails.image },
                quoted: msg,
                externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                  thumbnail: { url: botimg2 }, // Ensure `botimg2` is a valid URL or buffer
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                  mediaType: 1
                }
              });
            } else {
              // Send text message if no image is available
              await conn.sendMessage(from, {
                text: detailsMessage,
                quoted: msg,
                externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                  thumbnail: { url: botimg2 },
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                  mediaType: 1
                }
              });
            }

          } catch (detailsError) {
            console.error(`Error fetching article details: ${detailsError.message}`);
            return reply(language === 'SI' ? "🚨 ලිපි විස්තර ලබා ගැනීමට දෝෂයක් විය." : "🚨 An error occurred while fetching article details.");
          }

        } else {
          reply(language === 'SI' ? `❌ ගැලපෙන ලිපි අංකයක් තෝරන්න. 1 සහ ${articlesData.data.length} අතර අංකයක් තෝරන්න.` : `❌ Invalid article number. Please choose a number between 1 and ${articlesData.data.length}.`);
        }
      }
    };

    // Add listener to capture user reply for article selection
    conn.ev.on("messages.upsert", handleUserReply);

  } catch (error) {
    console.error(`Error in Siyatha News search: ${error.message}`);
    reply(language === 'SI' ? `🚨 ලිපි ලබා ගැනීමට දෝෂයක් විය: ${error.message}` : `🚨 An error occurred while fetching articles: ${error.message}`);
  }
});


//=================================================
cmd({
  pattern: "sirasa",
  alias: ["sirasalist", "sirasanews"],
  desc: "Get the latest news from Sirasa.",
  react: "📰",
  category: "news",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
      const config = await readEnv();
    const language = config.LANGUAGE; // Language set either to 'SI' or 'EN'
    const apiUrl = `${vishwa}/news-newsfirst/list?limit=10&page=2&apikey=key1`;

    // Fetch the latest news articles
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check for successful response and valid data array
    if (!data || !data.data || data.data.length === 0) {
      const noNewsMessage = {
        SI: "❌ නවතම වාර්තා සොයාගැනීමට ගැටලුවක් ඇති විය.",
        EN: "❌ No news articles found."
      };
      return reply(noNewsMessage[language]);
    }

    let resultMessage = {
      SI: "📰 සිරස ප්‍රවෘත්ති ලැයිස්තුව 📰\n\n",
      EN: "📰 ＳＩＲＡＳＡ ＮＥＷＳ 📰\n\n"
    };

    const articles = data.data;

    articles.forEach((article, index) => {
      resultMessage[language] += `📅 *${index + 1}.* ${article.title || "Untitled Article"}\n` +
                                  `*${article.date}*\n\n`;
    });

    resultMessage[language] += `\n${caption}`;

    // Send the news articles as a message
    const sentMessage = await conn.sendMessage(from, {
      text: resultMessage[language],
      contextInfo: {
          externalAdReply: {
              title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
              body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
              thumbnail: { url: botimg2 }, // Ensure botimg2 is a valid URL or buffer
              sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
              mediaType: 1,
        }
      }
    }, { quoted: mek });

    // Listen for user replies to the message
    conn.ev.on("messages.upsert", async (messageUpsert) => {
      const msg = messageUpsert.messages[0];
      if (!msg.message || !msg.message.extendedTextMessage) return;

      const userReply = msg.message.extendedTextMessage.text.trim();
      const messageContext = msg.message.extendedTextMessage.contextInfo;

      if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
        const index = parseInt(userReply) - 1;
           // Check if the index is valid
        if (index >= 0 && index < articles.length) {
          const article = articles[index];
          const articleDetails = `📰 *${article.title || "Untitled Article"}*\n` +
            `📅 *𝖯𝗎𝖻𝗅𝗂𝗌𝗁𝖾𝖽:* ${article.date}\n` +
            `📜 *Excerpt:* ${article.excerpt}\n`;

          // Fetch article details for the selected article
          const articleDetailsUrl = `${vishwa}/news-newsfirst/article?url=${encodeURIComponent(article.link)}&apikey=key1`;
          const articleDetailsResponse = await fetch(articleDetailsUrl);
          const articleDetailData = await articleDetailsResponse.json();

          if (articleDetailData.status === "success") {
            const fullArticle = articleDetailData.data;
            const detailedMessage = {
              SI: `📰 *${fullArticle.title}*\n\n` +
                  `📜 *අන්තර්ගතය:* ${fullArticle.content}\n` +
                  `📅 *ප්‍රකාශිත දිනය:* ${fullArticle.publishedDate}\n` +
                  `\n${caption}`,
              EN: `📰 *${fullArticle.title}*\n\n` +
                  `📜 *𝖲𝗎𝗆𝗆𝖺𝗋𝗒:* ${fullArticle.content}\n` +
                  `📅 *𝖯𝗎𝖻𝗅𝗂𝗌𝗁𝖾𝖽:* ${fullArticle.publishedDate}\n` +
                  `\n${caption}`
            };

            await conn.sendMessage(from, { text: detailedMessage[language] }, { quoted: msg });
              await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
          } else {
            const fetchErrorMessage = {
              SI: "❌ ලිපි විස්තර ලබා ගැනීමට අසාර්ථක විය.",
              EN: "❌ Failed to fetch article details."
            };
            reply(fetchErrorMessage[language]);
          }
        } else {
          const invalidIndexMessage = {
            SI: "❌ කරුණාකර වලංගු ලිපි අංකයක් ලබා දෙන්න.",
            EN: "❌ Please provide a valid article number."
          };
          reply(invalidIndexMessage[language]);
        }
      }
    });

  } catch (e) {
    console.error(e);
    const errorMessage = {
      SI: `🚨 නවතම ප්‍රවෘත්ති ලබා ගැනීමේදී දෝෂයක් ඇති විය: ${e.message}`,
      EN: `🚨 An error occurred while fetching the latest news: ${e.message}`
    };
    reply(errorMessage[language]);
  }
});
//=================================================================
/*
cmd({
  pattern: "esana",
  alias: ['newslist', 'listnews'],
  desc: "Get a list of recent news from Esana.",
  category: "news",
  react: '📋',
  filename: __filename
}, async (conn, m, { text, reply }) => {
  try {
      const config = await readEnv();
    const senderNumber = m.sender;
    const isGroup = m.isGroup || false;
    const language = config.LANGUAGE; // Language set either to 'SI' or 'EN'
    // Fetch the news list from the API
    const newsList = await api.list();

    // Multi-language support for the news list intro
    const listMessage = {
      SI: "*👩🏻‍🎨 BHASHI-MD ESANA ප්‍රවෘත්ති ලැයිස්තුව 🗞️*\n\n> ඔබ කියවීමට අවශ්‍ය ප්‍රවෘත්තියේ අංකය පිළිතුරු දෙන්න.\n",
      EN: "*👩🏻‍🎨 BHASHI-MD ESANA NEWS LIST 🗞️*\n\n> Reply with the number of the news you want to read.\n"
    };

    let messageContent = listMessage[language];
    newsList.results.forEach((news, index) => {
      messageContent += `*${index + 1}. ${news.title}*\n`;  // Use `title`
      messageContent += `*ID*: ${news.id}\n\n`;             // Use `id`
    });

    messageContent += `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;

    // Send the list message
    const sentMessage = await conn.sendMessage(m.chat, { text: messageContent }, { quoted: m });

    // React to the sent message with 📰 emoji
    await conn.sendMessage(m.chat, {
      react: {
        text: '📰',
        key: sentMessage.key
      }
    });

    // Wait for the user's reply
    conn.ev.on("messages.upsert", async (messageUpsert) => {
      const msg = messageUpsert.messages[0];
      if (!msg.message || !msg.message.extendedTextMessage) return;

      const userReply = msg.message.extendedTextMessage.text.trim();
      const messageContext = msg.message.extendedTextMessage.contextInfo;

      // Check if the reply is to the previously sent message
      if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
        const index = parseInt(userReply) - 1; // Convert to zero-based index

        // Validate index
        if (index < 0 || index >= newsList.results.length) {
          const invalidIndexMessage = {
            SI: "❗ වැරදි අංකයකි. කරුණාකර වලංගු අංකයක් සපයන්න.",
            EN: "❗ Invalid index number. Please reply with a valid index."
          };
          return await conn.sendMessage(m.chat, { text: invalidIndexMessage[language] }, { quoted: msg });
        }

        try {
          const newsID = newsList.results[index].id; // Get the news ID using the index

          // Fetch detailed news by ID
          const newsData = await api.news(newsID);
          const newsResults = newsData.results;

          // Multi-language support for news details
          const newsDetails = {
            SI: `*${newsResults.TITLE}*\n
📃 *දිනය*: ${newsResults.PUBLISHED || 'දිනය නොමැත'}
📃 *URL*: ${newsResults.URL || 'URL එක නොමැත'}
📃 *විස්තරය*: ${newsResults.DESCRIPTION || 'විස්තර නොමැත'}

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
            EN: `*${newsResults.TITLE}*\n
📃 *Date* : ${newsResults.PUBLISHED || 'No date available'}
📃 *URL* : ${newsResults.URL || 'No URL available'}
📃 *Description* : ${newsResults.DESCRIPTION || 'No description available'}

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
          };

          // Send cover image if available, otherwise send only text
          if (newsResults.COVER) {
              await conn.sendMessage(m.chat, { react: { text: "♻", key: msg.key } });
            await conn.sendMessage(m.chat, { image: { url: newsResults.COVER }, caption: newsDetails[language] }, { quoted: msg });
              await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
          } else {
              await conn.sendMessage(m.chat, { react: { text: "♻", key: msg.key } });
            await conn.sendMessage(m.chat, { text: newsDetails[language] }, { quoted: msg });
              await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
          }

        } catch (error) {
          console.log(error);
          await conn.sendMessage(m.chat, { text: `❗ Error fetching news: ${error.message}` }, { quoted: msg });
        }
      }
    });

  } catch (error) {
    console.log(error);
    const errorMessage = {
      SI: "❗ ප්‍රවෘත්ති ලැයිස්තුව ලබා ගැනීමේදී දෝෂයක් ඇතිවිය: ",
      EN: "❗ An error occurred while fetching the news list: "
    };
    m.reply(errorMessage[language] + error.message);
  }
});
*/
//=================================================================
cmd({
    pattern: "animenews",
    desc: "Get the latest anime news articles with an image.",
    react: "📰",
    category: "news",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const API_URL = 'https://newsapi.org/v2/everything?q=Anime%20News%20Today&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedAt&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8';

    const config = await readEnv();
    const lang = config.LANGUAGE ? config.LANGUAGE.toUpperCase() : 'EN'; // Fallback to 'EN' if not set

    // Define multilingual messages
    const messages = {
        noNewsFound: {
            SI: "🪄 මෙම විට පවතින පුවත් කිසිවක් සොයාගත නොහැක.",
            EN: "🪄 No anime news found at the moment."
        },
        errorFetching: {
            SI: "😔 දෝෂයක් ඇති විය: ",
            EN: "😔 An error occurred: "
        },
        randomNews: {
            SI: "📰 *${title}*\n📰 *මූලාශ්‍රය*: ${source}\n✍️ *කතුවරයා*: ${author}\n📅 *ප්‍රකාශිත දිනය*: ${published}\n🔗 *නැරඹුම් URL*: ${url}\n📝 *විස්තරය*: ${description}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
            EN: "📰 *${title}*\n📰 *𝖱𝖾𝖺𝖽 𝖬𝗈𝗋𝖾*: ${source}\n✍️ *𝖠𝗎𝗍𝗁𝗈𝗋*: ${author}\n📅 *𝖯𝗎𝖻𝗅𝗂𝗌𝗁𝖾𝖽*: ${published}\n🔗 *𝖫𝗂𝗇𝗄*: ${url}\n📝 *𝖲𝗎𝗆𝗆𝖺𝗋𝗒*: ${description}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
        }
    };

    try {
        const response = await fetch(API_URL);
        const newsData = await response.json();

        if (!newsData.articles || newsData.articles.length === 0) {
            return reply(messages.noNewsFound[lang]);
        }

        // Get a random article from the available results
        const randomIndex = Math.floor(Math.random() * newsData.articles.length);
        const news = newsData.articles[randomIndex];

        // Prepare the news message
        const newsMessage = messages.randomNews[lang]
            .replace('${title}', news.title)
            .replace('${source}', news.source.name || "Unknown")
            .replace('${author}', news.author || "Unknown")
            .replace('${published}', new Date(news.publishedAt).toLocaleDateString() || "N/A")
            .replace('${url}', news.url || "N/A")
            .replace('${description}', news.description || "No description available");

        // Send the news along with the image if available
        if (news.urlToImage) {
            await conn.sendMessage(from, {
                caption: newsMessage,
                image: { url: news.urlToImage }
            }, { quoted: mek });
        } else {
            await conn.sendMessage(from, { text: newsMessage }, { quoted: mek });
        }

    } catch (e) {
        console.log(e);
        reply(`${messages.errorFetching[lang]}${e.message}`);
    }
});
//=================================================================
cmd({
    pattern: "news2",
    desc: "Get a random news article with an image.",
    react: "📰",
    category: "news",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        const config = await readEnv();
const API_URL = 'https://api.polygon.io/v2/reference/news';
const API_KEY = 'Y4iTYoJANwppB8I3Bm4QVWdV5oXlvc45';
        const lang = config.LANGUAGE ? config.LANGUAGE.toUpperCase() : 'EN';

        // Define multilingual messages
        const messages = {
            blacklisted: {
                SI: "*🚫 ඔබ අසාදු ලේඛනගත කර ඇත. ප්‍රවේශය ප්‍රතික්ෂේප විය.*",
                EN: "*🚫 You are blacklisted. Access denied.*"
            },
            accessDenied: {
                SI: "*😢 ප්‍රවේශය ප්‍රතික්ෂේප විය. මෙම විධානය භාවිතා කිරීමට ඔබට අවසර නැත.🎁 බොට් මාදිලිය වෙනස් කරන්න!*",
                EN: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*"
            },
            noNewsFound: {
                SI: "🪄 මෙම විට පවතින පුවත් කිසිවක් සොයාගත නොහැක.",
                EN: "🪄 No news found at the moment."
            },
            errorFetching: {
                SI: "😔 දෝෂයක් ඇති විය: ",
                EN: "😔 An error occurred: "
            },
            randomNews: {
                SI: "📰 *${title}*\n📰 *මූලාශ්‍රය*: ${source}\n🔗 *මූලාශ්‍ර වෙබ් පිටුව*: ${homepage}\n✍️ *කතුවරයා*: ${author}\n📅 *ප්‍රකාශිත දිනය*: ${published}\n🔗 *ඇටිකලය URL*: ${url}\n📝 *විස්තරය*: ${description}\n🔑 *කීවර්ඩ්*: ${keywords}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
                EN: "📰 *${title}*\n📰 *𝖱𝖾𝖺𝖽 𝖬𝗈𝗋𝖾*: ${source}\n🔗 *𝖯𝗎𝖻𝗅𝗂𝗌𝗁𝖾𝖽*: ${homepage}\n✍️ *𝖠𝗎𝗍𝗁𝗈𝗋*: ${author}\n📅 * 𝖯𝗎𝖻𝗅𝗂𝗌𝗁𝖾𝖽 On*: ${published}\n🔗 *𝖫𝗂𝗇𝗄*: ${url}\n📝 *𝖲𝗎𝗆𝗆𝖺𝗋𝗒*: ${description}\n🔑 *𝖳𝖺𝗀𝗌*: ${keywords}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
            }
        };

        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        // Fetch news data
        const response = await fetch(`${API_URL}?apiKey=${API_KEY}`);
        const newsData = await response.json();

        if (!newsData.results || newsData.results.length === 0) {
            return reply(messages.noNewsFound[lang]);
        }

        // Get a random article
        const randomIndex = Math.floor(Math.random() * newsData.results.length);
        const news = newsData.results[randomIndex];

        // Prepare the news message
        const newsMessage = messages.randomNews[lang]
            .replace('${title}', news.title)
            .replace('${source}', news.publisher?.name || "N/A")
            .replace('${homepage}', news.publisher?.homepage_url || "N/A")
            .replace('${author}', news.author || "Unknown")
            .replace('${published}', news.published_utc || "N/A")
            .replace('${url}', news.article_url || "N/A")
            .replace('${description}', news.description || "No description available")
            .replace('${keywords}', news.keywords ? news.keywords.join(', ') : "None");

        // Send the news along with the image if available
        if (news.image_url) {
            await conn.sendMessage(from, {
                caption: newsMessage,
                image: { url: news.image_url }
            }, { quoted: mek });
        } else {
            await conn.sendMessage(from, { text: newsMessage }, { quoted: mek });
        }
    } catch (e) {
        console.log(e);
        const lang = config?.LANGUAGE?.toUpperCase() || 'EN';  // Ensure lang is defined in the catch block
        reply(`${messages.errorFetching[lang]}${e.message}`);
    }
});

//=================================================================

//=================================================================





//=====================- ANIME COMMANDS -==========================
//=================================================================
        cmd({
            pattern: "upcominganime",
            desc: "Fetch information about upcoming anime releases.",
            category: "anime",
            react: "📅",
            filename: __filename
        }, async (conn, mek, m, { from, args, reply }) => {
            const messages = {
                blacklisted: {
                    SI: "*🚫 ඔබ අසාදු ලේඛනගත කර ඇත. ප්‍රවේශය ප්‍රතික්ෂේප විය.*",
                    EN: "*🚫 You are blacklisted. Access denied.*"
                },
                accessDenied: {
                    SI: "*😢 ප්‍රවේශය ප්‍රතික්ෂේප විය. මෙම විධානය භාවිතා කිරීමට ඔබට අවසර නැත. 🎁 බොට් මාදිලිය වෙනස් කරන්න!*",
                    EN: "*😢 Access denied. You don't have permission to use this command. 🎁 Change Bot Mode!*"
                },
                noUpcomingAnime: {
                    SI: "😔 නවතම ඇනිමේ නිකුත් කිරීම් කිසිවක් හමු නොවීය.",
                    EN: "😔 No upcoming anime releases found."
                },
                upcomingAnimeTitle: {
                    SI: "乂 *නවතම ඇනිමේ නිකුත් කිරීම්*\n\n",
                    EN: "乂 ＵＰＣＯＭＩＮＧ ＡＮＩＭＥ ＲＥＬＥＡＳＥ\n\n"
                },
                errorFetching: {
                    SI: "😓 නවතම ඇනිමේ නිකුත් කිරීම් ලබා ගැනීමේ දෝෂයක් ඇති විය: ",
                    EN: "😓 Error fetching upcoming anime releases: "
                },
                animeDetails: {
                    SI: "📺 *ඇනිමේ විස්තර:*",
                    EN: "📺 *Anime Details:*"
                },
                watchTrailer: {
                    SI: "🎥 *ට්‍රේලර් බැලීමට සොයා ගන්න:*",
                    EN: "🎥 *Watch Trailer:*"
                }
            };

            try {
                const config = await readEnv();
                const senderNumber = m.sender;
                const isGroup = m.isGroup || false;
                const lang = (config.LANGUAGE && (config.LANGUAGE.toUpperCase() === 'SI' || config.LANGUAGE.toUpperCase() === 'EN')) ? config.LANGUAGE.toUpperCase() : 'EN';
                console.log("Current Language:", lang); // Debugging line

                // Fetch upcoming anime releases from the API
                const apiUrl = `https://api.jikan.moe/v4/seasons/upcoming`;
                const response = await axios.get(apiUrl);
                const data = response.data;
                if (!data.data || !data.data.length) {
                    return reply(messages.noUpcomingAnime[lang]);
                }

                // Format the details of upcoming anime
                let upcomingAnimeDetails = `${messages.upcomingAnimeTitle[lang]}`;
                for (const anime of data.data) {
                    const { titles, images, synopsis, trailer, url } = anime;

                    const title = titles.find(t => t.type === "Default")?.title || anime.title; // Get default title
                    const imageUrl = images.jpg.image_url || images.webp.image_url; // Use JPG or WEBP image
                    const trailerUrl = trailer.url || ''; // Use trailer URL if available

                    // Update to match the new format
                    upcomingAnimeDetails += `╭──────────●➤\n`;
                    upcomingAnimeDetails += `├ 📺 *${title}*\n`;
                    upcomingAnimeDetails += `├ 📜 𝖲𝗒𝗇𝗈𝗉𝗌𝗂𝗌 : ${synopsis}\n`;
                    upcomingAnimeDetails += `├ ⚙️ 𝖴𝗋𝗅 : ${url}\n`;
                    upcomingAnimeDetails += `├ 🗃️ 𝖶𝖺𝗍𝖼𝗁 𝖳𝗋𝖺𝗂𝗅𝖾𝗋 : ${trailerUrl ? trailerUrl : 'Not Available'}\n`;
                    upcomingAnimeDetails += `╰──────●➤\n\n`;
                }

                // Send the upcoming anime list
                await conn.sendMessage(from, { text: upcomingAnimeDetails }, { quoted: mek });
            } catch (e) {
                console.error(e);
                reply(`${messages.errorFetching[lang]}${e.message}`);
            }
        });

//=================================================================
cmd({
    pattern: "topanime",
    desc: "Fetch a list of top-rated anime based on user ratings.",
    category: "anime",
    react: "⭐",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
    // Define multilingual messages
    const messages = {
        blacklisted: {
            SI: "*🚫 ඔබ අසාදු ලේඛනගත කර ඇත. ප්‍රවේශය ප්‍රතික්ෂේප විය.*",
            EN: "*🚫 You are blacklisted. Access denied.*"
        },
        accessDenied: {
            SI: "*😢 ප්‍රවේශය ප්‍රතික්ෂේප විය. මෙම විධානය භාවිතා කිරීමට ඔබට අවසර නැත.🎁 බොට් මාදිලිය වෙනස් කරන්න!*",
            EN: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*"
        },
        noTopAnime: {
            SI: "😞 ඉහලින් අගය කළ ඇනිමේ සොයා ගැනීමේදී කිසිවක් හමු නොවීය.",
            EN: "😞 No top-rated anime found."
        },
        topAnimeTitle: {
            SI: "乂 *ඉහලින් අගය කළ ඇනිමේ*\n\n",
            EN: "乂 ＴＯＰ ＡＮＩＭＥ\n\n"
        },
        errorFetching: {
            SI: "😓 ඉහලින් අගය කළ ඇනිමේ ලබා ගැනීමේ දෝෂයක් ඇති විය: ",
            EN: "😓 Error fetching top-rated anime: "
        }
    };

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE.toUpperCase(); // Adjust to match your message object keys

        // Fetch top-rated anime from the API
        const apiUrl = `https://api.jikan.moe/v4/top/anime`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data.data || !data.data.length) {
            return reply(messages.noTopAnime[lang]);
        }

        // Format the list of top-rated anime with details
        const topAnimeList = data.data.map(anime => {
            const title = anime.title;
            const score = anime.score ? `${anime.score}` : "N/A";
            const members = anime.members ? `${anime.members}` : "N/A";
            const genres = anime.genres.map(g => `${g.name}`).join(", ");
            const synopsis = anime.synopsis ? `${anime.synopsis.length > 100 ? anime.synopsis.slice(0, 97) + '...' : anime.synopsis}` : " No synopsis available.";
            const link = anime.url;

            return `╭──────────●➤\n├ 📺 *Title:* ${title}\n├ ⭐ *Score:* ${score}\n├ 👥 *Members:* ${members}\n├ 🌀 *Genres:* ${genres}\n├ 📜 *Synopsis:* ${synopsis}\n├ 🔗 *Link:* ${link}\n╰──────●➤\n\n`;
        }).join('');

        const topAnimeDetails = `${messages.topAnimeTitle[lang]}${topAnimeList}\n\n${caption}`;

        // Send the top-rated anime list
        await conn.sendMessage(from, { text: topAnimeDetails }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`${messages.errorFetching[lang]}${e.message}`);
    }
});

//===============================================================
cmd({
    pattern: "anime",
    desc: "Fetch information about an anime.",
    category: "anime",
    react: "📺",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();

    // Define multilingual messages
    const messages = {
        blacklisted: {
            SI: "*🚫 ඔබ අසාදු ලේඛනගත කර ඇත. ප්‍රවේශය ප්‍රතික්ෂේප විය.*",
            EN: "*🚫 You are blacklisted. Access denied.*"
        },
        accessDenied: {
            SI: "*😢 ප්‍රවේශය ප්‍රතික්ෂේප විය. මෙම විධානය භාවිතා කිරීමට ඔබට අවසර නැත.🎁 බොට් මාදිලිය වෙනස් කරන්න!*",
            EN: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*"
        },
        noAnimeProvided: {
            SI: "📖 කරුණාකර ඇනිමේ නම සපයන්න.",
            EN: "📖 Please provide the name of the anime."
        },
        noAnimeFound: {
            SI: "😞 එම නමින් ඇනිමේ කවදාවත් හමු නොවීය.",
            EN: "😞 No anime found with that name."
        },
        animeInfoTitle: {
            SI: "📜 _*BHASHI-MD ඇනිමේ තොරතුරු*_ 📺",
            EN: "📜 _*BHASHI-MD ANIME INFORMATION*_ 📺"
        },
        errorFetching: {
            SI: "😔 ඇනිමේ තොරතුරු ලබා ගැනීමේ දෝෂයක් ඇති විය: ",
            EN: "😔 Error fetching anime information: "
        }
    };

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE.toUpperCase(); // Adjust to match your message object keys


        // Get the anime name from arguments
        const q = args.join(" ");
        if (!q) {
            return reply(messages.noAnimeProvided[lang]);
        }

        // Fetch anime information from the API
        const apiUrl = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(q)}&limit=1`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data.data.length) {
            return reply(messages.noAnimeFound[lang]);
        }

        // Extract anime details
        const anime = data.data[0];
        const trailerUrl = anime.trailer?.url || ""; // Get trailer URL if available
        const animeDetails = `${messages.animeInfoTitle[lang]}\n\n` +
            `📚 *Title:* _${anime.title}_\n` +
            `🎬 *Type:* _${anime.type}_\n` +
            `🎥 *Episodes:* _${anime.episodes || 'N/A'}_\n` +
            `⭐ *Score:* _${anime.score || 'N/A'}_\n` +
            `👥 *Members:* _${anime.members || 'N/A'}_\n` +
            `🧩 *Genres:* _${anime.genres.map(g => g.name).join(', ')}_\n` +
            `📜 *Synopsis:* _${anime.synopsis || 'N/A'}_\n` +
            (trailerUrl ? `📺 *Trailer:* _${trailerUrl}_\n` : "") +
            `🔗 *URL:* _${anime.url}_\n`;

        // Default image if not available
        const animeImage = anime.images?.jpg?.image_url || 'https://via.placeholder.com/300'; // Replace with ALIVE_IMG if defined

        // Send message with anime image and details
        await conn.sendMessage(from, { image: { url: animeImage }, caption: `${animeDetails}\n\n> ${mono}ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛${mono}` }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`${messages.errorFetching[lang]}${e.message}`);
    }
});
//================================================================
cmd({
    pattern: "topanimechar",
    desc: "Fetch top anime characters information.",
    category: "anime",
    react: "👤",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const config = await readEnv();

    // Define multilingual messages
    const messages = {
        blacklisted: {
            SI: "*🚫 ඔබ අසාදු ලේඛනගත කර ඇත. ප්‍රවේශය ප්‍රතික්ෂේප විය.*",
            EN: "*🚫 You are blacklisted. Access denied.*"
        },
        accessDenied: {
            SI: "*😢 ප්‍රවේශය ප්‍රතික්ෂේප විය. මෙම විධානය භාවිතා කිරීමට ඔබට අවසර නැත.🎁 බොට් මාදිලිය වෙනස් කරන්න!*",
            EN: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*"
        },
        errorFetching: {
            SI: "😔 ඇනිමේ චරිත තොරතුරු ලබා ගැනීමේ දෝෂයක් ඇති විය: ",
            EN: "😔 Error fetching anime character information: "
        }
    };

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE.toUpperCase(); // Adjust to match your message object keys

        // Fetch top anime characters information from the API
        const apiUrl = `https://api.jikan.moe/v4/top/characters`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data.data.length) {
            return reply(messages.errorFetching[lang] + "No data available.");
        }

        // Extract character details
        const characters = data.data.slice(0, 5); // Fetch top 5 characters
        let charDetails = `📜 _*BHASHI-MD TOP ANIME CHARACTERS*_ 👤\n\n`;
        characters.forEach((char, idx) => {
            const charInfo = `╭──────────●➤\n` +
                `├ 👤 *${idx + 1}. ${char.name}*\n` +
                `├ ⭐ *Favorites:* _${char.favorites || 'N/A'}_\n` +
                `├ 📝 *About:* _${char.about.substring(0, 500)}..._\n\n` +
                `├ 🔗 *More Info:* _${char.url}_\n` +
                `╰──────●➤\n\n`;
            charDetails += charInfo;
        });

        // Default image if not available
        const charImage = characters[0]?.images?.jpg?.image_url || 'https://via.placeholder.com/300';

        // Send message with top character image and details
        await conn.sendMessage(from, { image: { url: charImage }, caption: `${charDetails}\n\n${caption}` }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`${messages.errorFetching[lang]}${e.message}`);
    }
});

//================================================================
cmd({
    pattern: "topvoiceactors",
    desc: "Fetch detailed information about top anime voice actors.",
    category: "anime",
    react: "🎤",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const config = await readEnv();

    // Define multilingual messages
    const messages = {
        blacklisted: {
            SI: "*🚫 ඔබ අසාදු ලේඛනගත කර ඇත. ප්‍රවේශය ප්‍රතික්ෂේප විය.*",
            EN: "*🚫 You are blacklisted. Access denied.*"
        },
        accessDenied: {
            SI: "*😢 ප්‍රවේශය ප්‍රතික්ෂේප විය. මෙම විධානය භාවිතා කිරීමට ඔබට අවසර නැත.🎁 බොට් මාදිලිය වෙනස් කරන්න!*",
            EN: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*"
        },
        errorFetching: {
            SI: "😔 දෝෂයක් ඇති විය: ",
            EN: "😔 Error occurred: "
        },
        topVoiceActorsTitle: {
            SI: "🎤 _*BHASHI-MD ප්‍රමුඛතම කථානායකයන් විස්තර*_ 🎬",
            EN: "🎤 _*BHASHI-MD TOP VOICE ACTORS DETAILS*_ 🎬"
        }
    };

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE.toUpperCase(); // Adjust to match your message object keys

        // Fetch top voice actors from the API
        const apiUrl = `https://api.jikan.moe/v4/top/people`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Check if data exists
        if (!data.data || !data.data.length) {
            return reply(`${messages.errorFetching[lang]} No data found.`);
        }

        // Prepare the detailed voice actor information
        let details = `${messages.topVoiceActorsTitle[lang]}\n\n`;
        data.data.slice(0, 5).forEach((person, index) => {
            details += `╭──────────●➤\n`;
            details += `├ 🎤 *${index + 1}. ${person.name}*\n`;
            details += `├ 🔗 *More Info:* ${person.url}\n`;
            details += `├ 🎉 *Birthday:* ${new Date(person.birthday).toLocaleDateString()}\n`;
            details += `├ 💬 *Alternate Names:* ${person.alternate_names.join(", ") || "N/A"}\n`;
            details += `├ ⭐ *Favorites:* ${person.favorites.toLocaleString()}\n`;
            details += `├ 📖 *About:* ${person.about ? person.about.split('\n').slice(0, 2).join('\n') : "No information available."}\n\n`;
            details += `╰──────●➤\n`;
        });

        // Send the details to the user
        await conn.sendMessage(from, { text: details }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`${messages.errorFetching[lang]}${e.message}`);
    }
});

//===========================================================

cmd({
    pattern: "topmanga",
    desc: "Fetch detailed information about top manga.",
    category: "anime",
    react: "📚",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const config = await readEnv();

    // Define multilingual messages
    const messages = {
        blacklisted: {
            SI: "*🚫 ඔබ අසාදු ලේඛනගත කර ඇත. ප්‍රවේශය ප්‍රතික්ෂේප විය.*",
            EN: "*🚫 You are blacklisted. Access denied.*"
        },
        accessDenied: {
            SI: "*😢 ප්‍රවේශය ප්‍රතික්ෂේප විය. මෙම විධානය භාවිතා කිරීමට ඔබට අවසර නැත.🎁 බොට් මාදිලිය වෙනස් කරන්න!*",
            EN: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*"
        },
        errorFetching: {
            SI: "😔 දෝෂයක් ඇති විය: ",
            EN: "😔 Error occurred: "
        },
        topMangaTitle: {
            SI: "📚 _*BHASHI-MD ප්‍රමුඛතම මංගා විස්තර*_ 🎬",
            EN: "📚 _*BHASHI-MD TOP MANGA DETAILS*_ 🎬"
        }
    };

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE.toUpperCase(); // Adjust to match your message object keys

        // Fetch top manga from the API
        const apiUrl = `https://api.jikan.moe/v4/top/manga`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Check if data exists
        if (!data.data || !data.data.length) {
            return reply(`${messages.errorFetching[lang]} No data found.`);
        }

        // Prepare the detailed manga information
        let details = `${messages.topMangaTitle[lang]}\n\n`;
        data.data.slice(0, 5).forEach((manga, index) => {
            details += `╭──────────●➤\n`;
            details += `├ 📖 *${index + 1}. ${manga.title}*\n`;
            details += `├ 🔗 *More Info:* ${manga.url}\n`;
            details += `├ 📅 *Published:* ${manga.published.string}\n`;
            details += `├ ⭐ *Score:* ${manga.score} (by ${manga.scored_by.toLocaleString()} users)\n`;
            details += `├ 🎖️ *Rank:* ${manga.rank}\n`;
            details += `├ 🧑‍🤝‍🧑 *Popularity:* ${manga.popularity}\n`;
            details += `├ 📜 *Synopsis:* ${manga.synopsis ? manga.synopsis.split('\n').slice(0, 2).join('\n') : "No synopsis available."}\n`;
            details += `├ 📚 *Genres:* ${manga.genres.map(genre => genre.name).join(', ') || "N/A"}\n`;
            details += `├ 🏷️ *Themes:* ${manga.themes.map(theme => theme.name).join(', ') || "N/A"}\n`;
            details += `├ ✍️ *Authors:* ${manga.authors.map(author => author.name).join(', ') || "N/A"}\n`;
            details += `╰──────●➤\n`;
        });

        // Send the details to the user
        await conn.sendMessage(from, { text: details }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`${messages.errorFetching[lang]}${e.message}`);
    }
});
//================================================================






//====================- MOVIEW COMMAND -===========================
//=================================================================
//===============================================================

//=================================================================
//=================================================================
cmd({
    pattern: "trending",
    desc: "Get a list of trending movies.",
    category: "MOVIE",
    react: "🔥",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const apiKey = '76cb7f39'; // Replace with your OMDb API key
    const query = 'popular'; // Query term to simulate trending movies
    const apiUrl = `http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.Response === "False") {
            return reply("🚫 No trending movies found.");
        }

        const trendingMovies = data.Search
            .slice(0, 10) // Get top 10 results
            .map((movie, index) => `${index + 1}. *${movie.Title}* (${movie.Year})`)
            .join('\n');

        reply(`🔥 *Trending Movies* 🔥\n\n${trendingMovies}`);
    } catch (e) {
        console.error(e);
        reply(`🚫 Error fetching trending movies: ${e.message}`);
    }
});
//=================================================================

//=================================================================
cmd({
    pattern: "genres",
    desc: "Get a list of popular movie genres.",
    category: "MOVIE",
    react: "🎭",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const genres = [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Horror",
            "Science Fiction",
            "Fantasy",
            "Thriller",
            "Romance",
            "Mystery",
            "Animation",
            "Documentary"
        ];

        const genreList = genres.map((genre, index) => `${index + 1}. ${genre}`).join('\n');
        reply(`🎭 *Popular Movie Genres* 🎭\n\n${genreList}`);
    } catch (e) {
        console.error(e);
        reply(`🚫 Error: ${e.message}`);
    }
});

//=================================================================
cmd({
    pattern: "nowplaying",
    desc: "Get a list of movies currently playing in theaters.",
    category: "MOVIE",
    react: "🎥",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const apiKey = '76cb7f39';
    const apiUrl = `http://www.omdbapi.com/?s=now&apikey=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.Response === "False") {
            return reply("🚫 No currently playing movies found.");
        }

        const nowPlayingMovies = data.Search.map(movie => `🎥 *Title:* ${movie.Title} (${movie.Year})`).join('\n');
        reply(`🎥 *Now Playing in Theaters* 🎥\n\n${nowPlayingMovies}`);
    } catch (e) {
        console.error(e);
        reply(`🚫 Error: ${e.message}`);
    }
});
const readActivateDB = () => {
    // Create directory if it doesn't exist
    const dir = path.dirname(activatePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true }); // Recursively create directories
    }

    // Create file if it doesn't exist
    if (!fs.existsSync(activatePath)) {
        fs.writeFileSync(activatePath, JSON.stringify({ users: [], groups: [] }, null, 2), 'utf8');
    }

    return JSON.parse(fs.readFileSync(activatePath, 'utf8'));
};

const writeActivateDB = (data) => {
  const dir = path.dirname(activatePath);
  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true }); // Recursively create directories
  }

  fs.writeFileSync(activatePath, JSON.stringify(data, null, 2), 'utf8');
};

const storeUserOrGroup = (from, isGroup) => {
    const activatedData = readActivateDB();

    if (isGroup) {
        if (!activatedData.groups.includes(from)) {
            activatedData.groups.push(from); // Add group ID
        }
    } else {
        if (!activatedData.users.includes(from)) {
            activatedData.users.push(from); // Add user ID
        }
    }

    writeActivateDB(activatedData);
};
cmd({
  pattern: "activate",
  desc: "Activate bot for the current group or user.",
  category: "MOVIE",
  react: "✅",
  filename: __filename
}, async (conn, mek, m, { from, isGroup, isAdmin, reply,isOwner,isDev }) => {
  if (!isOwner && !isDev) return reply("❌ You do not have permission to use this command.");

  const activatedData = readActivateDB();
  const list = isGroup ? activatedData.groups : activatedData.users;

  if (list.includes(from)) {
      return reply("⚠️ Already activated!");
  }

  // Add to the respective list
  storeUserOrGroup(from, isGroup);

  reply("✅ Bot activated successfully!");
});

// .deactivate command
cmd({
  pattern: "deactivate",
  desc: "Deactivate bot for the current group or user.",
  category: "MOVIE",
  react: "❌",
  filename: __filename
}, async (conn, mek, m, { from, isGroup, isAdmin, reply,isOwner,isDev }) => {
  if (!isOwner && !isDev) return reply("❌ You do not have permission to use this command.");

  const activatedData = readActivateDB();
  const list = isGroup ? activatedData.groups : activatedData.users;

  const index = list.indexOf(from);
  if (index === -1) {
      return reply("⚠️ Bot is not activated here!");
  }

  // Remove from the respective list
  list.splice(index, 1);
  writeActivateDB(activatedData);

  reply("❌ Bot deactivated successfully!");
});
cmd({
  pattern: "listusers",
  desc: "List all stored user IDs.",
  category: "MOVIE",
  react: "📋",
  filename: __filename
}, async (conn, mek, m, { reply,isGroup }) => {
  const activatedData = readActivateDB();
  if (activatedData.users.length === 0) {
      return reply("⚠️ No user IDs stored yet.");
  }
  const userList = activatedData.users.join('\n');
  reply(`📋 Stored User IDs:\n\n${userList}`);
});

// .listgroups command
cmd({
  pattern: "listgroups",
  desc: "List all stored group IDs.",
  category: "MOVIE",
  react: "📋",
  filename: __filename
}, async (conn, mek, m, { reply }) => {
  const activatedData = readActivateDB();
  if (activatedData.groups.length === 0) {
      return reply("⚠️ No group IDs stored yet.");
  }
  const groupList = activatedData.groups.join('\n');
  reply(`📋 Stored Group IDs:\n\n${groupList}`);
});
cmd({
  pattern: "ytsmx",
  alias: ["ymx"],
  desc: "Search and download movies from YTS using Seedr",
  react: "🎬",
  category: "MOVIE",
  filename: __filename
}, async (conn, mek, m, { from, reply, args ,isGroup}) => {
  const activatedData = readActivateDB();
  const isActivated = isGroup
      ? activatedData.groups.includes(from)
      : activatedData.users.includes(from);

  if (!isActivated) {
      return reply("❌ Bot is not activated for this chat. Use `.activate` to enable it.");
  }
  try {
    const fullInput = args.join(' ') || "deadpool";
    const [query, targetJid] = fullInput.split('|').map(str => str.trim());
    const destinationJid = targetJid || from;

    if (targetJid && !targetJid.includes('@')) {
      return reply("❌ Invalid JID format. Use: query | JID (e.g., avatar | 123456789@g.us)");
    }

    await conn.sendMessage(from, { react: { text: "🔍", key: mek.key } });

    // Search for movies
    const searchResponse = await fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${encodeURIComponent(query)}`);
    const searchResults = await searchResponse.json();

    if (!searchResults.data?.movies?.length) {
      await conn.sendMessage(from, { react: { text: "❌", key: mek.key } });
      return reply("❌ No movies found for the query.");
    }

    const movies = searchResults.data.movies;
    let resultMessage = `╭──────────────────╮
 ▏ 🎞️ YT.MX Movies 🎞️  ▏
╰──────────────────╯
❒ 𝖱𝖾𝗎𝗊𝖾𝗌𝗍 : ${query}
❒ 𝖩𝗂𝖽 : ${destinationJid}
\n`;

    movies.forEach((movie, index) => {
      resultMessage += `🎬 *${index + 1}. ${movie.title}* (${movie.year})\n`;
      resultMessage += `⭐ 𝖱𝖺𝗍𝗂𝗇𝗀 : ${movie.rating}/10\n`;
      resultMessage += `⏱️ 𝖱𝗎𝗇𝗍𝗂𝗆𝖾 : ${movie.runtime} min\n`;
      resultMessage += `🎭 𝖦𝖾𝗇𝗋𝖾𝗌 : ${movie.genres.join(', ')}\n\n`;
    });

    resultMessage += `\n📌 ${jj}❲ 𝖨𝗇𝗌𝗍𝗋𝗎𝖼𝗍𝗂𝗈𝗇𝗌 ❳${jj}\n`;
    resultMessage += `> 𝖱𝖾𝗉𝗅𝗒 𝗐𝗂𝗍𝗁 𝗆𝗈𝗏𝗂𝖾 𝗇𝗎𝗆𝖻𝖾𝗋 (1-${movies.length}] 𝖿𝗈𝗋 𝖣𝖾𝗍𝖺𝗂𝗅𝗌\n`;
    resultMessage += `> 𝖳𝗒𝗉𝖾 '𝖽𝗈𝗇𝖾' 𝗍𝗈 𝖾𝗇𝖽 𝗌𝖾𝖺𝗋𝖼𝗁\n`;
    if (targetJid) {
      resultMessage += `> 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 𝗐𝗂𝗅𝗅 𝖻𝖾 𝗌𝖾𝗇𝗍 𝗍𝗈 : ${targetJid}\n`;
    }

    const sentMessage = await conn.sendMessage(from, {
      image: { url: botimg2 },
      caption: resultMessage,
      contextInfo: {
        externalAdReply: {
          title: "YTS Movies Search",
          body: `Found ${movies.length} results`,
          thumbnailUrl: movies[0].small_cover_image,
          sourceUrl: "https://yts.mx",
          mediaType: 1
        }
      }
    }, { quoted: mek });

    const handleUserReply = async (messageUpsert) => {
      const msg = messageUpsert.messages[0];
      if (!msg.message?.extendedTextMessage) return;

      const userReply = msg.message.extendedTextMessage.text.trim().toLowerCase();
      const messageContext = msg.message.extendedTextMessage.contextInfo;

      if (messageContext?.stanzaId !== sentMessage.key.id) return;

      if (userReply === 'done') {
        conn.ev.off("messages.upsert", handleUserReply);
        await conn.sendMessage(from, { react: { text: "✅", key: msg.key } });
        return reply("Thank you for using YTS search. Search ended.");
      }

      const movieIndex = parseInt(userReply) - 1;

      if (movieIndex >= 0 && movieIndex < movies.length) {
        await conn.sendMessage(from, { react: { text: "🔄", key: msg.key } });
        const selectedMovie = movies[movieIndex];

        let detailsMessage = `🌟 *${selectedMovie.title}* (${selectedMovie.year})\n\n`;
        detailsMessage += `⭐ *𝖱𝖺𝗍𝗂𝗇𝗀 :* ${selectedMovie.rating}/10\n`;
        detailsMessage += `⏱️ *𝖱𝗎𝗇𝗍𝗂𝗆𝖾 :* ${selectedMovie.runtime} minutes\n`;
        detailsMessage += `🎭 *𝖦𝖾𝗇𝗋𝖾𝗌 :* ${selectedMovie.genres.join(', ')}\n`;
        if (selectedMovie.synopsis) {
          detailsMessage += `📝 *𝖲𝗒𝗇𝗈𝗉𝗌𝗂𝗌 :* ${selectedMovie.synopsis}\n`;
        }
        detailsMessage += `\n🔽 *𝖠𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝗌*\n`;

        selectedMovie.torrents.forEach((torrent, index) => {
          detailsMessage += `${index + 1}. 𝖰𝗎𝖺𝗅𝗂𝗍𝗒 : ${torrent.quality} ${torrent.type}\n`;
          detailsMessage += `   💾 𝖲𝗂𝗓𝖾 : ${torrent.size}\n`;
          detailsMessage += `   🎵 𝖠𝗎𝖽𝗂𝗈 : ${torrent.audio_channels}\n`;
          detailsMessage += `   🎥 𝖢𝗈𝖽𝖾𝖼 : ${torrent.video_codec}\n\n`;
        });

        detailsMessage += `\n📌 𝖱𝖾𝗉𝗅𝗒 𝗐𝗂𝗍𝗁 𝗊𝗎𝖺𝗅𝗂𝗍𝗒 𝗇𝗎𝗆𝖻𝖾𝗋 𝗍𝗈 𝖽𝗈𝗐𝗇𝗅𝗈𝖺𝖽`;

        const detailsMessageSent = await conn.sendMessage(from, {
          image: { url: selectedMovie.large_cover_image },
          caption: detailsMessage,
          contextInfo: {
            externalAdReply: {
              title: selectedMovie.title,
              body: `${selectedMovie.year} | ${selectedMovie.genres.join(', ')}`,
              thumbnailUrl: selectedMovie.medium_cover_image,
              sourceUrl: selectedMovie.url,
              mediaType: 1
            }
          }
        }, { quoted: msg });

        const handleQualitySelection = async (qualityMsgUpsert) => {
          const qualityMsg = qualityMsgUpsert.messages[0];
          if (!qualityMsg.message?.extendedTextMessage) return;

          const qualityReply = qualityMsg.message.extendedTextMessage.text.trim();
          const qualityContext = qualityMsg.message.extendedTextMessage.contextInfo;

          if (qualityContext?.stanzaId !== detailsMessageSent.key.id) return;

          const qualityIndex = parseInt(qualityReply) - 1;

          if (qualityIndex >= 0 && qualityIndex < selectedMovie.torrents.length) {
            const selectedQuality = selectedMovie.torrents[qualityIndex];

            try {
              await conn.sendMessage(from, { react: { text: "🔄", key: qualityMsg.key } });

              // Initialize Seedr
              const seedr = new Seedr();
              await seedr.login("vishwamihi@gmail.com", "Vishwa@2022");

              // Upload magnet to Seedr
              await reply(`📤 *Uploading to Seedr...*\n🎥 Quality: ${selectedQuality.quality}\n💾 Size: ${selectedQuality.size}`);

              const magnet = await seedr.addMagnet(`magnet:?xt=urn:btih:${selectedQuality.hash}`);

              if (magnet.code === 400 || magnet.result !== true) {
                throw new Error("Failed to add magnet to Seedr");
              }

              // Wait for video processing
              let contents = [];
              do {
                contents = await seedr.getVideos();
                await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds between checks
              } while (contents.length === 0);

              // Get download link
              const file = await seedr.getFile(contents[0][0].id);
              const downloadLink = file.url;

              // Send movie details to destination
              await conn.sendMessage(destinationJid, {
                image: { url: selectedMovie.large_cover_image },
                caption: `🎬 *${selectedMovie.title}* (${selectedMovie.year})\n\n⭐ Rating: ${selectedMovie.rating}/10\n🎭 Genres: ${selectedMovie.genres.join(', ')}\n⏱️ Runtime: ${selectedMovie.runtime} min`,
              });
              const imageResponse = await axios.get(selectedMovie.large_cover_image, { responseType: 'arraybuffer' });
              const imageBuffer = await sharp(imageResponse.data)
              .resize(320, 180) // Adjust dimensions as needed
              .jpeg({ quality: 90 }) // Adjust quality as needed
              .toBuffer();
              // Send the movie file
              await conn.sendMessage(destinationJid, {
                document: { url: downloadLink },
                mimetype: 'video/mp4',
                fileName: `${selectedMovie.title.replace(/[^a-zA-Z0-9]/g, '_')}_${selectedQuality.quality}.mp4`,
                jpegThumbnail:imageBuffer,
                caption: `🎬 *${selectedMovie.title}*\n📊 Quality: ${selectedQuality.quality}\n💾 Size: ${selectedQuality.size}`
              });

              // Clean up Seedr
              await seedr.deleteFolder(contents[0][0].fid);

              await reply("✅ Download completed and sent!");
              if (destinationJid !== from) {
                await conn.sendMessage(from, {
                  text: `✅ Download completed and sent to ${destinationJid}!`
                });
              }

              conn.ev.off("messages.upsert", handleQualitySelection);
            } catch (error) {
              console.error(`Download error:`, error);
              reply(`❌ Download failed: ${error.message}`);
            }
          } else {
            reply(`❌ Invalid quality number. Choose between 1 and ${selectedMovie.torrents.length}`);
          }
        };

        conn.ev.on("messages.upsert", handleQualitySelection);
      } else {
        reply(`❌ Invalid movie number. Choose between 1 and ${movies.length}`);
      }
    };

    conn.ev.on("messages.upsert", handleUserReply);

  } catch (error) {
    console.error(error);
    reply(`❌ Error: ${error.message}`);
  }
});
cmd({
  pattern: "firemovie",
  alias: ["fm"],
  desc: "Search and download movies from FireMovie with Sinhala subtitles",
  react: "🎬",
  category: "MOVIE",
  filename: __filename
}, async (conn, mek, m, { from, reply, args,isGroup }) => {
  const activatedData = readActivateDB();
  const isActivated = isGroup
      ? activatedData.groups.includes(from)
      : activatedData.users.includes(from);

  if (!isActivated) {
      return reply("❌ Bot is not activated for this chat. Use `.activate` to enable it.");
  }
  try {
    const fullInput = args.join(' ') || "deadpool";
    const [query, targetJid] = fullInput.split('|').map(str => str.trim());
    const destinationJid = targetJid || from;

    if (targetJid && !targetJid.includes('@')) {
      return reply("❌ Invalid JID format. Use: query | JID (e.g., deadpool | 123456789@g.us)");
    }

    await conn.sendMessage(from, { react: { text: "🔍", key: mek.key } });

    // Search for movies
    const searchResponse = await fetch(`https://dark-yasiya-api.site/movie/firemovie/search?text=${encodeURIComponent(query)}`);
    const searchResults = await searchResponse.json();

    if (!searchResults.status || !searchResults.result?.data?.length) {
      await conn.sendMessage(from, { react: { text: "❌", key: mek.key } });
      return reply("❌ No movies found for the query.");
    }

    const movies = searchResults.result.data;
    let resultMessage = `╭───────────────────╮
 ▏ 🎞️ FireMovies Movies 🎞️  ▏
╰───────────────────╯
❒ 𝖱𝖾𝗎𝗊𝖾𝗌𝗍 : ${query}
❒ 𝖩𝗂𝖽 :${destinationJid}\n\n`;

    movies.forEach((movie, index) => {
      resultMessage += `🎬 *${index + 1}. ${movie.title}*\n`;
      if (movie.year) resultMessage += `📅 ${movie.year} | `;
      if (movie.type) resultMessage += `📽️ ${movie.type}\n`;
      if (movie.description) resultMessage += `📝 ${movie.description}\n`;
      resultMessage += '\n';
    });

    resultMessage += `\n📌 ${jj}❲ 𝖨𝗇𝗌𝗍𝗋𝗎𝖼𝗍𝗂𝗈𝗇𝗌 ❳${jj}\n`;
    resultMessage += `> 𝖱𝖾𝗉𝗅𝗒 𝗐𝗂𝗍𝗁 𝗆𝗈𝗏𝗂𝖾 𝗇𝗎𝗆𝖻𝖾𝗋 (1-${movies.length}] 𝖿𝗈𝗋 𝖣𝖾𝗍𝖺𝗂𝗅𝗌\n`;
    resultMessage += `> 𝖳𝗒𝗉𝖾 '𝖽𝗈𝗇𝖾' 𝗍𝗈 𝖾𝗇𝖽 𝗌𝖾𝖺𝗋𝖼𝗁\n`;
    if (targetJid) {
      resultMessage += `> 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 𝗐𝗂𝗅𝗅 𝖻𝖾 𝗌𝖾𝗇𝗍 𝗍𝗈 : ${targetJid}\n`;
    }

    const sentMessage = await conn.sendMessage(from, {
      image: { url: botimg2 },
      caption: resultMessage,
      contextInfo: {
        externalAdReply: {
          title: "FireMovie Search",
          body: `Found ${movies.length} results`,
          thumbnailUrl: movies[0].image,
          sourceUrl: "https://firemovieshub.com",
          mediaType: 1
        }
      }
    }, { quoted: mek });

    const handleUserReply = async (messageUpsert) => {
      const msg = messageUpsert.messages[0];
      if (!msg.message?.extendedTextMessage) return;

      const userReply = msg.message.extendedTextMessage.text.trim().toLowerCase();
      const messageContext = msg.message.extendedTextMessage.contextInfo;

      if (messageContext?.stanzaId !== sentMessage.key.id) return;

      if (userReply === 'done') {
        conn.ev.off("messages.upsert", handleUserReply);
        await conn.sendMessage(from, { react: { text: "✅", key: msg.key } });
        return reply("Thank you for using FireMovie search. Search ended.");
      }

      const movieIndex = parseInt(userReply) - 1;

      if (movieIndex >= 0 && movieIndex < movies.length) {
        await conn.sendMessage(from, { react: { text: "🔄", key: msg.key } });
        const selectedMovie = movies[movieIndex];

        const movieInfoResponse = await fetch(`https://dark-yasiya-api.site/movie/firemovie/movie?url=${encodeURIComponent(selectedMovie.link)}`);
        const movieInfo = await movieInfoResponse.json();

        if (!movieInfo.status || !movieInfo.result?.data) {
          return reply("❌ Error fetching movie details.");
        }

        const details = movieInfo.result.data;
        let detailsMessage = `🌟 *${details.title}*\n\n`;
        detailsMessage += `📅 *𝖱𝖾𝗅𝖾𝖺𝗌𝖾 𝖣𝖺𝗍𝖾 :* ${details.date || 'N/A'}\n`;
        detailsMessage += `⏱️ *𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇 :* ${details.duration || 'N/A'}\n`;
        detailsMessage += `🎭 *𝖢𝖺𝗍𝖾𝗀𝗈𝗋𝗂𝖾𝗌 :* ${details.category.join(', ') || 'N/A'}\n`;
        detailsMessage += `👨‍💼 *𝖣𝗂𝗋𝖾𝖼𝗍𝗈𝗋 :* ${details.director || 'N/A'}\n`;
        detailsMessage += `⭐ *𝖳𝖬𝖣𝖡 𝖱𝖺𝗍𝗂𝗇𝗀 :* ${details.tmdbRate || 'N/A'}\n\n`;
        detailsMessage += `👥 *𝖢𝖺𝗌𝗍 :*\n${details.cast.slice(0, 5).map(actor => `- ${actor.name}`).join('\n')}\n\n`;
        detailsMessage += `🔽 *𝖠𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝗌*\n`;

        details.dl_links.forEach((link, index) => {
          detailsMessage += `${index + 1}. ${link.quality} - ${link.size}\n`;
        });

        detailsMessage += `\n📌 𝖱𝖾𝗉𝗅𝗒 𝗐𝗂𝗍𝗁 𝗊𝗎𝖺𝗅𝗂𝗍𝗒 𝗇𝗎𝗆𝖻𝖾𝗋 𝗍𝗈 𝖽𝗈𝗐𝗇𝗅𝗈𝖺𝖽`;

        const detailsMessageSent = await conn.sendMessage(from, {
          image: { url: details.mainImage },
          caption: detailsMessage,
          contextInfo: {
            externalAdReply: {
              title: details.title,
              body: `${details.duration} | ${details.category.join(', ')}`,
              thumbnailUrl: details.image,
              sourceUrl: details.movie_link,
              mediaType: 1
            }
          }
        }, { quoted: msg });

        const handleQualitySelection = async (qualityMsgUpsert) => {
          const qualityMsg = qualityMsgUpsert.messages[0];
          if (!qualityMsg.message?.extendedTextMessage) return;

          const qualityReply = qualityMsg.message.extendedTextMessage.text.trim();
          const qualityContext = qualityMsg.message.extendedTextMessage.contextInfo;

          if (qualityContext?.stanzaId !== detailsMessageSent.key.id) return;

          const qualityIndex = parseInt(qualityReply) - 1;

          if (qualityIndex >= 0 && qualityIndex < details.dl_links.length) {
            const selectedQuality = details.dl_links[qualityIndex];

            try {
              await conn.sendMessage(from, { react: { text: "🔄", key: qualityMsg.key } });
              await reply(`📥 *Downloading ${selectedQuality.quality}...*\n💾 *Size:* ${selectedQuality.size}`);

              // Send movie details to destination
              if (destinationJid !== from) {
                await conn.sendMessage(destinationJid, {
                  image: { url: details.mainImage },
                  caption: `🎬 *${details.title}*\n\n📅 *Release:* ${details.date}\n⏱️ *Duration:* ${details.duration}\n🎭 *Categories:* ${details.category.join(', ')}\n⭐ *TMDB:* ${details.tmdbRate}\n\n*💗 ${mono}Follow Us${mono} :* https://whatsapp.com/channel/0029VaSaZd5CBtxGawmSph1k\n\n> ${footer}`,
                  contextInfo: {
                    externalAdReply: {
                      title: details.title,
                      body: details.director,
                      thumbnailUrl: details.image,
                      sourceUrl: details.movie_link,
                      mediaType: 1,
                    },
                  },
                });
              }

              const imageResponse = await axios.get(details.mainImage, { responseType: 'arraybuffer' });
              const imageBuffer = await sharp(imageResponse.data)
              .resize(320, 180) // Adjust dimensions as needed
              .jpeg({ quality: 90 }) // Adjust quality as needed
              .toBuffer();
              await conn.sendMessage(destinationJid, {
                document: { url: selectedQuality.link },
                mimetype: 'video/mp4',
                jpegThumbnail:imageBuffer || botimg2,
                fileName: `${details.title.replace(/[^a-zA-Z0-9]/g, '_')}_${selectedQuality.quality}.mp4`,
                caption: `🎬 *${details.title}*\n📊 *𝖰𝗎𝖺𝗅𝗂𝗍𝗒 :* ${selectedQuality.quality}\n💾 *𝖲𝗂𝗓𝖾 :* ${selectedQuality.size}`
              });

              await reply("✅ Download completed and sent!");
              if (destinationJid !== from) {
                await conn.sendMessage(from, {
                  text: `✅ Download completed and sent to ${destinationJid}!`
                });
              }

            } catch (error) {
              console.error(`Download error:`, error);
              reply(`❌ Download failed: ${error.message}`);
            }
          } else {
            reply(`❌ Invalid quality number. Choose between 1 and ${details.dl_links.length}`);
          }
        };

        conn.ev.on("messages.upsert", handleQualitySelection);
      } else {
        reply(`❌ Invalid movie number. Choose between 1 and ${movies.length}`);
      }
    };

    conn.ev.on("messages.upsert", handleUserReply);

  } catch (error) {
    console.error(error);
    reply(`❌ Error: ${error.message}`);
  }
});
cmd({
  pattern: "cinetvshow",
  alias: ["cinetv", "cstv"],
  desc: "Search and download TV series episodes from CineSubz",
  react: "📺",
  category: "MOVIE",
  filename: __filename
}, async (conn, mek, m, { from, reply, args,isGroup }) => {
  const activatedData = readActivateDB();
  const isActivated = isGroup
      ? activatedData.groups.includes(from)
      : activatedData.users.includes(from);

  if (!isActivated) {
      return reply("❌ Bot is not activated for this chat. Use `.activate` to enable it.");
  }
  const baseApiUrl = Buffer.from('aHR0cHM6Ly9tdi5hc2l0aGEudXMua2cvYXBpL2NpbmVzdWJ6', 'base64').toString();
  const apiKey = Buffer.from('YXNpdGhhMTA4', 'base64').toString();
  try {
    const fullInput = args.join(' ') || "the walking dead";
    const [query, targetJid] = fullInput.split('|').map(str => str.trim());
    const destinationJid = targetJid || from;
    const MAX_RETRIES = 3;
    const RETRY_DELAY = 5000;

    if (targetJid && !targetJid.includes('@')) {
      return reply("❌ Invalid JID format. Use: query | JID");
    }

    await conn.sendMessage(from, { react: { text: "🔍", key: mek.key } });

    const searchResponse = await fetch(`${baseApiUrl}/search?q=${encodeURIComponent(query)}&apikey=${apiKey}`);
    const searchResults = await searchResponse.json();

    const tvShows = searchResults.data?.data?.data?.filter(show => show.type?.toLowerCase().includes('tv')) || [];

    if (!tvShows.length) {
      await conn.sendMessage(from, { react: { text: "❌", key: mek.key } });
      return reply("❌ No TV shows found.");
    }

    let resultMessage = `╭────────────────────╮
 ▏ 🎞️ 𝖢𝗂𝗇𝖾𝖲𝗎𝖻𝗓 𝖳𝗏 𝖲𝗁𝗈𝗐𝗌 🎞️  ▏
╰────────────────────╯
❒ 𝖱𝖾𝗎𝗊𝖾𝗌𝗍 : ${query}
❒ 𝖩𝗂𝖽 : ${destinationJid}
\n\n`;
    tvShows.forEach((show, index) => {
      resultMessage += `📺 *${index + 1}. ${show.title}*\n`;
      if (show.year) resultMessage += `📅 ${show.year} | `;
      if (show.rating) resultMessage += `⭐ ${show.rating}\n`;
      resultMessage += '\n';
    });

    resultMessage += `\n📌 ${jj}❲ 𝖨𝗇𝗌𝗍𝗋𝗎𝖼𝗍𝗂𝗈𝗇𝗌 ❳${jj}\n`;
    resultMessage += `> Reply with show number (1-${tvShows.length})\n`;
    resultMessage += `> Format: [number] | [quality] (e.g., "1 | 720p")\n`;
    resultMessage += `> For batch: "S1ALL | 1080p"\n`;
    resultMessage += `> Default quality: 480p\n`;
    resultMessage += `> Type 'done' to end search\n`;
    resultMessage += `\n> ${footer}`;

    const sentMessage = await conn.sendMessage(from, {
      image: { url: botimg2 },
      caption: resultMessage,
      contextInfo: {
        externalAdReply: {
          title: footer,
          body: `Found ${tvShows.length} shows`,
          thumbnailUrl: tvShows[0]?.imageSrc,
          sourceUrl: 'https://cinesubz.co',
          mediaType: 1
        }
      }
    }, { quoted: mek });

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const handleShowSelection = async (messageUpsert) => {
      const msg = messageUpsert.messages[0];
      if (!msg.message?.extendedTextMessage) return;

      const userReply = msg.message.extendedTextMessage.text.trim();
      const messageContext = msg.message.extendedTextMessage.contextInfo;

      if (messageContext?.stanzaId !== sentMessage.key.id) return;

      if (userReply.toLowerCase() === 'done') {
        conn.ev.off("messages.upsert", handleShowSelection);
        await conn.sendMessage(from, { react: { text: "✅", key: msg.key } });
        return reply("Search ended.");
      }

      const [selection, quality = '480p'] = userReply.split('|').map(str => str.trim());
      const showIndex = parseInt(selection) - 1;

      if (showIndex >= 0 && showIndex < tvShows.length) {
        await conn.sendMessage(from, { react: { text: "🔄", key: msg.key } });
        const selectedShow = tvShows[showIndex];

        const tvShowResponse = await fetch(`${baseApiUrl}/tvshow?url=${encodeURIComponent(selectedShow.link)}&apikey=${apiKey}`);
        const tvShowInfo = await tvShowResponse.json();

        if (!tvShowInfo.data?.data) {
          return reply("❌ Error fetching show details.");
        }

        const show = tvShowInfo.data.data;
        let seasonMessages = `🌟 *${show.mainDetails.maintitle}*\n\n`;
        seasonMessages += `📅 *𝖱𝖾𝗅𝖾𝖺𝗌𝖾𝖽 :* ${show.mainDetails.dateCreated || 'N/A'}\n`;
        seasonMessages += `🎭 *𝖦𝖾𝗇𝗋𝖾𝗌 :* ${show.mainDetails.genres.join(', ') || 'N/A'}\n`;
        seasonMessages += `⭐ *𝖱𝖺𝗍𝗂𝗇𝗀 :* ${show.mainDetails.rating.value} (${show.mainDetails.rating.count} votes)\n\n`;
        seasonMessages += `📺 ${jj}❲ 𝖠𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝖲𝖾𝗌𝗌𝗂𝗈𝗇 & 𝖤𝗉𝗂𝗌𝗈𝖽𝖾𝗌 ❳${jj}\n`;

        show.episodesDetails.forEach((season, sIndex) => {
          seasonMessages += `╭───────────────❯❯❯\n`;
          seasonMessages += `├❒ 🎥 *Season ${season.season.number}*\n`;
          season.episodes.forEach((ep, eIndex) => {
            seasonMessages += ` ▏ ${ep.number} - ${ep.title}\n`;
          });
          seasonMessages += '╰───────❯❯❯❯\n';
        });

        let seasonMessage = `🌟 *${show.mainDetails.maintitle}*\n\n`;
        seasonMessage += `📅 *𝖱𝖾𝗅𝖾𝖺𝗌𝖾𝖽 :* ${show.mainDetails.dateCreated || 'N/A'}\n`;
        seasonMessage += `🎭 *𝖦𝖾𝗇𝗋𝖾𝗌 :* ${show.mainDetails.genres.join(', ') || 'N/A'}\n`;
        seasonMessage += `⭐ *𝖱𝖺𝗍𝗂𝗇𝗀 :* ${show.mainDetails.rating.value} (${show.mainDetails.rating.count} votes)\n\n`;
        seasonMessage += `📺 ${jj}❲ 𝖠𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝖲𝖾𝗌𝗌𝗂𝗈𝗇 & 𝖤𝗉𝗂𝗌𝗈𝖽𝖾𝗌 ❳${jj}\n`;

        show.episodesDetails.forEach((season, sIndex) => {
          seasonMessage += `╭───────────────❯❯❯\n`;
          seasonMessage += `├❒ 🎥 *Season ${season.season.number}*\n`;
          season.episodes.forEach((ep, eIndex) => {
            seasonMessage += ` ▏ ${ep.number} - ${ep.title}\n`;
          });
          seasonMessage += '╰───────❯❯❯❯\n';
        });

        seasonMessage += `\n📌 ${jj}❲ 𝖨𝗇𝗌𝗍𝗋𝗎𝖼𝗍𝗂𝗈𝗇𝗌 ❳${jj}\n`;
        seasonMessage += `> • 𝖲𝖾𝖺𝗌𝗈𝗇 - 𝖤𝗉𝗂𝗌𝗈𝖽𝖾 | 𝖰𝗎𝖺𝗅𝗂𝗍𝗒  ( 1-2 | 720p )\n`;
        seasonMessage += `> • 𝖲1𝖠𝖫𝖫 | 𝖰𝗎𝖺𝗅𝗂𝗍𝗒  ( S1ALL | 1080p )\n`;
        seasonMessage += `> • 𝖣𝖾𝖿𝖺𝗎𝗅𝗍 𝖰𝗎𝖺𝗅𝗂𝗍𝗒 : ${quality}\n`;

        const seasonMsg = await conn.sendMessage(from, {
          image: { url: show.mainDetails.imageUrl },
          caption: seasonMessage,
          contextInfo: {
            externalAdReply: {
              title: footer,
              body: slogan,
              thumbnailUrl: botimg2,
              sourceUrl: 'https://bhashi-md.netlify.app',
              mediaType: 1
            }
          }
        }, { quoted: msg });

        if (destinationJid !== from) {
            await conn.sendMessage(destinationJid, {
              image: { url: show.mainDetails.imageUrl },
              caption: seasonMessages,
              contextInfo: {
                externalAdReply: {
                  title: footer,
                  body: slogan,
                  thumbnailUrl: botimg2,
                  sourceUrl: 'https://bhashi-md.netlify.app',
                  mediaType: 1,
                },
              },
            });
          }

        const downloadEpisode = async (seasonNum, epNum, targetQuality, totalEps = 1) => {
          const selectedSeason = show.episodesDetails[seasonNum - 1];
          if (!selectedSeason || !selectedSeason.episodes[epNum - 1]) {
            return reply("❌ Invalid season or episode number");
          }

          const episode = selectedSeason.episodes[epNum - 1];
          let attempts = 0;
          let success = false;

          while (attempts < MAX_RETRIES && !success) {
            try {
              attempts++;
              if (destinationJid !== from) {
                await reply(`📥 *Fetching S${seasonNum}E${epNum} (${targetQuality})*\n🔄 Attempt ${attempts}/${MAX_RETRIES}\n📊 *Progress:* ${epNum}/${totalEps}`);
              }
             
              const episodeResponse = await fetch(`${baseApiUrl}/episode?url=${encodeURIComponent(episode.url)}&apikey=${apiKey}`);
              const episodeInfo = await episodeResponse.json();

              if (!episodeInfo.data?.data) {
                throw new Error("Error fetching episode details");
              }

              const epDetails = episodeInfo.data.data;
              const availableQualities = epDetails.dllinks.directDownloadLinks;
              const imageResponse = await axios.get(epDetails.imageUrls[0], { responseType: 'arraybuffer' });
              const imageBuffer = await sharp(imageResponse.data)
                .resize(320, 180) // Adjust dimensions as needed
                .jpeg({ quality: 90 }) // Adjust quality as needed
                .toBuffer();

              const selectedQuality = availableQualities.find(q => q.quality.toLowerCase().includes(targetQuality.toLowerCase())) 
                || availableQualities[0];

                const downloadResponse = await fetch(`${baseApiUrl}/download?url=${encodeURIComponent(selectedQuality.link)}&apikey=${apiKey}`);
              const downloadInfo = await downloadResponse.json();

              let downloadLink = downloadInfo.data?.data?.find(link => link.type === "direct")?.href;

              if (!downloadLink) {
                throw new Error("No direct download link found");
              }

              await conn.sendMessage(destinationJid, {
                document: { url: downloadLink },
                mimetype: 'video/mp4',
                jpegThumbnail: imageBuffer|| botimg2,
                fileName: `${show.mainDetails.maintitle}_S${seasonNum}E${epNum}_${selectedQuality.quality}.mp4`,
                caption: `📺 *${show.mainDetails.maintitle}*\n🎬 *S${seasonNum}E${epNum}:* ${episode.title}\n📊 *Quality:* ${selectedQuality.quality}\n💾 *Size:* ${selectedQuality.size}\n\n> ${footer}`
              });

              success = true;
            } catch (error) {
              console.error(`Attempt ${attempts} failed:`, error);

              if (attempts < MAX_RETRIES) {
                await reply(`⚠️ Attempt ${attempts} failed. Retrying in 5 seconds...`);
                await sleep(RETRY_DELAY);
              } else {
                await reply(`❌ Failed to download S${seasonNum}E${epNum} after ${MAX_RETRIES} attempts. Skipping...`);
                return false;
              }
            }
          }

          return success;
        };
        const handleEpisodeSelection = async (epMsgUpsert) => {
          const epMsg = epMsgUpsert.messages[0];
          if (!epMsg.message?.extendedTextMessage) return;

          const epReply = epMsg.message.extendedTextMessage.text.trim();
          const epContext = epMsg.message.extendedTextMessage.contextInfo;

          if (epContext?.stanzaId !== seasonMsg.key.id) return;

          try {
            await conn.sendMessage(from, { react: { text: "🔄", key: epMsg.key } });

            const [selection, episodeQuality = quality] = epReply.split('|').map(str => str.trim());
            const upperSelection = selection.toUpperCase();

            if (upperSelection.match(/S\d+ALL/)) {
              const seasonNum = parseInt(upperSelection.match(/S(\d+)ALL/)[1]);
              const selectedSeason = show.episodesDetails[seasonNum - 1];

              if (!selectedSeason) {
                return reply(`${jj}❌ Invalid season number${jj}`);
              }

              const totalEpisodes = selectedSeason.episodes.length;
              let successfulDownloads = 0;

              reply(`${jj}🔄 Starting Batch Download of Season ${seasonNum} (${totalEpisodes} episodes) in ${episodeQuality}${jj}`);

              for (let epNum = 1; epNum <= totalEpisodes; epNum++) {
                const success = await downloadEpisode(seasonNum, epNum, episodeQuality, totalEpisodes);
                if (success) successfulDownloads++;
              }

              await reply(`${jj}✅ Season ${seasonNum} download completed!\n📊 Successfully downloaded: ${successfulDownloads}/${totalEpisodes} episodes${jj}`);

              if (successfulDownloads < totalEpisodes) {
                await reply(`⚠️ Some episodes failed to download. You may want to retry those episodes individually.`);
              }

              await conn.sendMessage(destinationJid, {
                text: `${jj}✅ Season ${seasonNum} upload completed! (${successfulDownloads}/${totalEpisodes} episodes)${jj}`
              });
            } else {
              const [seasonNum, epNum] = selection.split('-').map(num => parseInt(num));
              const success = await downloadEpisode(seasonNum, epNum, episodeQuality);

              if (success) {
                await reply(`${jj}✅ Successfully Uploaded${jj}`);
              }
            }

            if (destinationJid !== from) {
              await conn.sendMessage(from, {
                text: `${jj}✅ Download(s) sent to: ${destinationJid}!${jj}`
              });
            }
          } catch (error) {
            console.error(error);
            reply(`❌ Download failed`);
          }
        };

        conn.ev.on("messages.upsert", handleEpisodeSelection);
      } else {
        reply(`❌ Invalid show number. Choose between 1 and ${tvShows.length}`);
      }
    };

    conn.ev.on("messages.upsert", handleShowSelection);

  } catch (error) {
    console.error(error);
    reply(`❌ Error`);
  }
});
cmd({
  pattern: "cinesubz",
  alias: ["cs2"],
  desc: "Search and download movies from CineSubz with direct scraping support",
  react: "🎬",
  category: "MOVIE",
  filename: __filename
}, async (conn, mek, m, { from, reply, args, isGroup }) => {
    const API_BASE = Buffer.from('aHR0cHM6Ly9tdi5hc2l0aGEudXMua2c=', 'base64').toString();
const API_KEY = Buffer.from('YXNpdGhhMTA4', 'base64').toString();
const SITE_URL = Buffer.from('aHR0cHM6Ly9jaW5lc3Viei5jbw==', 'base64').toString();
  const activatedData = readActivateDB();
  const isActivated = isGroup
    ? activatedData.groups.includes(from)
    : activatedData.users.includes(from);

  if (!isActivated) {
    return reply("❌ Bot is not activated for this chat. Use `.activate` to enable it.");
  }

  try {
    const fullInput = args.join(' ') || "mission impossible";
    const [query, targetJid] = fullInput.split('|').map(str => str.trim());
    const destinationJid = targetJid || from;

    if (targetJid && !targetJid.includes('@')) {
      return reply("❌ Invalid JID format. Use: query | JID (e.g., avatar | 123456789@g.us)");
    }

    await conn.sendMessage(from, { react: { text: "🔍", key: mek.key } });

    const searchResponse = await fetch(`${API_BASE}/api/cinesubz/search?q=${encodeURIComponent(query)}&apikey=${API_KEY}`);
    const searchResults = await searchResponse.json();

    if (!searchResults.data?.data?.data || searchResults.data.data.data.length === 0) {
      await conn.sendMessage(from, { react: { text: "❌", key: mek.key } });
      return reply("❌ No movies found for the query.");
    }

    const movies = searchResults.data.data.data;
    let resultMessage = `╭───────────────────╮
▏ 🎞️ 𝖢𝗂𝗇𝖾𝖲𝗎𝖻𝗓 Movies 🎞️  ▏
╰───────────────────╯
❒ 𝖱𝖾𝗎𝗊𝖾𝗌𝗍 : ${query}
❒ 𝖩𝗂𝖽 : ${destinationJid}\n\n`;

    movies.forEach((movie, index) => {
      resultMessage += `🎬 *${index + 1}. ${movie.title}*\n`;
      if (movie.year) resultMessage += `📅 ${movie.year} | `;
      if (movie.rating) resultMessage += `⭐ ${movie.rating} | `;
      if (movie.type) resultMessage += `📽️ ${movie.type}\n`;
      resultMessage += '\n';
    });

    resultMessage += `\n📌 ${jj}❲ 𝖨𝗇𝗌𝗍𝗋𝗎𝖼𝗍𝗂𝗈𝗇𝗌 ❳${jj}\n`;
    resultMessage += `> Reply with movie number (1-${movies.length}) for details\n`;
    resultMessage += `> Type 'done' to end search\n`;
    if (targetJid) {
      resultMessage += `> Download will be sent to: ${targetJid}\n`;
    }
    resultMessage += `\n> ${footer}`;

    const thumbnailUrl = movies[0]?.imageSrc || 'https://i.ibb.co/2jNJs5q/94d829c1-de36-4b7f-9d4d-f0566c361b61-1.jpg';

    const sentMessage = await conn.sendMessage(from, {
      image: { url: botimg2 },
      caption: resultMessage,
      contextInfo: {
        externalAdReply: {
          title: footer,
          body: `Found ${movies.length} results`,
          thumbnailUrl: thumbnailUrl,
          sourceUrl: SITE_URL,
          mediaType: 1
        }
      }
    }, { quoted: mek });

    const handleUserReply = async (messageUpsert) => {
      const msg = messageUpsert.messages[0];
      if (!msg.message?.extendedTextMessage) return;

      const userReply = msg.message.extendedTextMessage.text.trim().toLowerCase();
      const messageContext = msg.message.extendedTextMessage.contextInfo;

      if (messageContext?.stanzaId !== sentMessage.key.id) return;

      if (userReply === 'done') {
        conn.ev.off("messages.upsert", handleUserReply);
        await conn.sendMessage(from, { react: { text: "✅", key: msg.key } });
        return reply("Thank you for using CineSubz search. Search ended.");
      }

      const movieIndex = parseInt(userReply) - 1;

      if (movieIndex >= 0 && movieIndex < movies.length) {
        await conn.sendMessage(from, { react: { text: "🔄", key: msg.key } });
        const selectedMovie = movies[movieIndex];

        const movieInfoResponse = await fetch(`${API_BASE}/api/cinesubz/movie?url=${encodeURIComponent(selectedMovie.link)}&apikey=${API_KEY}`);
        const movieInfo = await movieInfoResponse.json();

        if (!movieInfo.data?.data) {
          return reply("❌ Error fetching movie details.");
        }

        const details = movieInfo.data.data;
        let detailsd = `🌟 *${details.mainDetails.maintitle}*\n\n`;
        detailsd += `📅 *Release Date:* ${details.mainDetails.dateCreated || 'N/A'}\n`;
        detailsd += `🌍 *Country:* ${details.mainDetails.country || 'N/A'}\n`;
        detailsd += `⏱️ *Runtime:* ${details.mainDetails.runtime || 'N/A'}\n`;
        detailsd += `🎭 *Genres:* ${details.mainDetails.genres.join(', ') || 'N/A'}\n`;
        detailsd += `⭐ *Rating:* ${details.mainDetails.rating.value} (${details.mainDetails.rating.count} votes)\n\n*💗 ${mono}Follow Us${mono} :* https://whatsapp.com/channel/0029VaSaZd5CBtxGawmSph1k\n\n> ${footer}`;

        let detailsMessage = `🌟 *${details.mainDetails.maintitle}*\n\n`;
        detailsMessage += `📅 *Release Date:* ${details.mainDetails.dateCreated || 'N/A'}\n`;
        detailsMessage += `🌍 *Country:* ${details.mainDetails.country || 'N/A'}\n`;
        detailsMessage += `⏱️ *Runtime:* ${details.mainDetails.runtime || 'N/A'}\n`;
        detailsMessage += `🎭 *Genres:* ${details.mainDetails.genres.join(', ') || 'N/A'}\n`;
        detailsMessage += `⭐ *Rating:* ${details.mainDetails.rating.value} (${details.mainDetails.rating.count} votes)\n\n`;
        detailsMessage += `🔽 *Download Options:*\n`;

        details.dllinks.directDownloadLinks.forEach((link, index) => {
          detailsMessage += `${index + 1}. ${link.quality} - ${link.size}\n`;
        });

        detailsMessage += `\n📌 Reply with quality number to download`;

        const detailsMessageSent = await conn.sendMessage(from, {
          image: { url: details.mainDetails.imageUrl },
          caption: detailsMessage,
          contextInfo: {
            externalAdReply: {
              title: footer,
              body: slogan,
              thumbnailUrl: botimg2,
              sourceUrl: 'https://bhashi-md.netlify.app',
              mediaType: 1,
            }
          }
        }, { quoted: msg });

        const handleQualitySelection = async (qualityMsgUpsert) => {
          const qualityMsg = qualityMsgUpsert.messages[0];
          if (!qualityMsg.message?.extendedTextMessage) return;

          const qualityReply = qualityMsg.message.extendedTextMessage.text.trim();
          const qualityContext = qualityMsg.message.extendedTextMessage.contextInfo;

          if (qualityContext?.stanzaId !== detailsMessageSent.key.id) return;

          const qualityIndex = parseInt(qualityReply) - 1;

          if (qualityIndex >= 0 && qualityIndex < details.dllinks.directDownloadLinks.length) {
            const selectedQuality = details.dllinks.directDownloadLinks[qualityIndex];

            try {
              await conn.sendMessage(from, { react: { text: "🔄", key: qualityMsg.key } });
              await reply(`📥 *Fetching ${selectedQuality.quality}...*\n💾 *Size:* ${selectedQuality.size}`);

              const downloadResponse = await fetch(`${API_BASE}/api/cinesubz/download?url=${encodeURIComponent(selectedQuality.link)}&apikey=${API_KEY}`);
              const downloadInfo = await downloadResponse.json();

              if (!downloadInfo.data?.data || downloadInfo.data.data.length === 0) {
                throw new Error("Failed to get download links");
              }

              let downloadLink = downloadInfo.data.data.find(link => link.type === "direct")?.href;
              if (!downloadLink) {
                downloadLink = downloadInfo.data.data.find(link => link.type === "gdrive")?.href;
              }

              if (!downloadLink) {
                throw new Error("No valid download links found");
              }

              if (destinationJid !== from) {
                await conn.sendMessage(destinationJid, {
                  image: { url: details.mainDetails.imageUrl },
                  caption: detailsd,
                  contextInfo: {
                    externalAdReply: {
                      title: footer,
                      body: slogan,
                      thumbnailUrl: botimg2,
                      sourceUrl: 'https://bhashi-md.netlify.app',
                      mediaType: 1,
                    },
                  },
                });
              }

              const bufimgs = details.mainDetails.imageUrl;
              const response = await fetch(bufimgs);
              if (!response.ok) {
                throw new Error(`Failed to fetch image: ${response.statusText}`);
              }
              const imageResponse = await axios.get(details.mainDetails.imageUrl, { responseType: 'arraybuffer' });
const imageBuffer = await sharp(imageResponse.data)
  .resize(320, 180) // Adjust dimensions as needed
  .jpeg({ quality: 90 }) // Adjust quality as needed
  .toBuffer();

              await conn.sendMessage(destinationJid, {
                document: { url: downloadLink },
                mimetype: 'video/mp4',
                fileName: `${details.mainDetails.maintitle.replace(/[^a-zA-Z0-9]/g, '_')}_${selectedQuality.quality}.mp4`,
                jpegThumbnail: imageBuffer || botimg2,
                caption: `🎬 *${details.mainDetails.maintitle}*\n📊 *Quality:* ${selectedQuality.quality}\n💾 *Size:* ${selectedQuality.size}\n\n> ${footer}`
              });

              await reply("✅ Download completed and sent!");
              if (destinationJid !== from) {
                await conn.sendMessage(from, {
                  text: `✅ Download completed and sent to ${destinationJid}!`
                });
              }

              conn.ev.off("messages.upsert", handleQualitySelection);
            } catch (error) {
              console.error(`Download error:`, error);
              reply(`❌ Download failed`);
            }
          } else {
            reply(`❌ Invalid quality number. Choose between 1 and ${details.dllinks.directDownloadLinks.length}`);
          }
        };

        conn.ev.on("messages.upsert", handleQualitySelection);
      } else {
        reply(`❌ Invalid movie number. Choose between 1 and ${movies.length}`);
      }
    };

    conn.ev.on("messages.upsert", handleUserReply);

  } catch (error) {
    console.error(error);
    reply(`❌ Error`);
  }
});
 cmd({
  pattern: "sinhalasub",
  alias: ["s2"],
  desc: "Search and download Sinhala subtitled movies",
  react: "🎬",
  category: "MOVIE",
  filename: __filename
}, async (conn, mek, m, { from, reply, args, isGroup }) => {
    const API_BASE = Buffer.from('aHR0cHM6Ly93d3cuZGFyay15YXNpeWEtYXBpLnNpdGU=', 'base64').toString();
const MOVIE_SITE = Buffer.from('aHR0cHM6Ly9zaW5oYWxhc3ViLmxr', 'base64').toString();
  const activatedData = readActivateDB();
  const isActivated = isGroup
    ? activatedData.groups.includes(from)
    : activatedData.users.includes(from);

  if (!isActivated) {
    return reply("❌ Bot is not activated for this chat. Use `.activate` to enable it.");
  }

  try {
    const fullInput = args.join(' ') || "deadpool";
    const [query, targetJid] = fullInput.split('|').map(str => str.trim());
    const destinationJid = targetJid || from;

    await conn.sendMessage(from, { react: { text: "🔍", key: mek.key } });

    const searchResponse = await fetch(`${API_BASE}/movie/sinhalasub/search?text=${encodeURIComponent(query)}`);
    const searchData = await searchResponse.json();

    if (!searchData.status || !searchData.result.data.length) {
      await conn.sendMessage(from, { react: { text: "❌", key: mek.key } });
      return reply("❌ No movies found!");
    }

    let resultMessage = `╭━━━━━━━━━━━━━━━━━╮
┃  *🎬 MOVIE SEARCH*  
┃━━━━━━━━━━━━━━━━━╯
┃ 🔍 Query: ${query}
╰━━━━━━━━━━━━━━━━━━╯\n\n`;

    searchData.result.data.forEach((movie, index) => {
      resultMessage += `╭───『 *${index + 1}* 』───╮\n`;
      resultMessage += `┃ 🎥 ${movie.title}\n`;
      resultMessage += `┃ ⭐ ${movie.imdb}\n`;
      resultMessage += `┃ 📅 ${movie.year}\n`;
      resultMessage += `╰─────────────────╯\n\n`;
    });

    resultMessage += `╭━━━━━━━━━━━━━━━╮
┃ 📌 *INSTRUCTIONS* 
┃━━━━━━━━━━━━━━━╯
┃ Reply with number
┃ (1-${searchData.result.data.length})
╰━━━━━━━━━━━━━━━╯`;

    const sentMessage = await conn.sendMessage(from, {
      image: { url: searchData.result.data[0].image },
      caption: resultMessage,
      contextInfo: {
        externalAdReply: {
          title: footer,
          body: slogan,
          thumbnailUrl: mvimg,
          sourceUrl: MOVIE_SITE,
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: mek });

    const handleUserReply = async (messageUpsert) => {
      const msg = messageUpsert.messages[0];
      if (!msg.message?.extendedTextMessage) return;

      const userReply = msg.message.extendedTextMessage.text.trim();
      const messageContext = msg.message.extendedTextMessage.contextInfo;

      if (messageContext?.stanzaId === sentMessage.key.id) {
        const movieIndex = parseInt(userReply) - 1;

        if (movieIndex >= 0 && movieIndex < searchData.result.data.length) {
          await conn.sendMessage(from, { react: { text: "⏳", key: msg.key } });

          const movieUrl = searchData.result.data[movieIndex].link;
          const movieResponse = await fetch(`${API_BASE}/movie/sinhalasub/movie?url=${movieUrl}`);
          const movieData = await movieResponse.json();

          if (!movieData.status) {
            return reply("❌ Failed to get movie details!");
          }

          const movie = movieData.result.data;
          const pixeldrainLinks = movie.dl_links.filter(link => link.link.includes('pixeldrain.com'));

          if (pixeldrainLinks.length === 0) {
            return reply("❌ No Pixeldrain download links available!");
          }

          let details = `╭━━━『 *MOVIE DETAILS* 』━━━╮\n`;
          details += `┃ 🎬 *${movie.title}*\n`;
          details += `┃━━━━━━━━━━━━━━━━━━╯\n`;
          details += `┃ 📅 *Release:* ${movie.date}\n`;
          details += `┃ ⭐ *IMDB:* ${movie.imdbRate}\n`;
          details += `┃ ⏱️ *Runtime:* ${movie.runtime}\n`;
          details += `┃ 🎭 *Category:* ${movie.category.join(', ')}\n`;
          details += `┃ 👨‍💼 *Director:* ${movie.director}\n`;
          details += `╰━━━━━━━━━━━━━━━━━━━╯\n\nhttps://youtu.be/Fibdop2CONI?feature=shared\n\n${footer}`;

          let detailsMessage = details;
          detailsMessage += `╭━━━『 *DOWNLOAD OPTIONS* 』━━╮\n`;
          pixeldrainLinks.forEach((link, index) => {
            detailsMessage += `┃ *${index + 1}.* ${link.quality}\n`;
            detailsMessage += `┃    💾 Size: ${link.size}\n`;
            if (index < pixeldrainLinks.length - 1) {
              detailsMessage += `┃────────────────────\n`;
            }
          });
          detailsMessage += `╰━━━━━━━━━━━━━━━━━━━━╯\n\n`;

          detailsMessage += `╭━━━『 *INSTRUCTIONS* 』━━━╮
┃ Reply with quality number
┃ to start download
╰━━━━━━━━━━━━━━━━━━━╯\n\n${footer}`;

          const detailsMsg = await conn.sendMessage(from, {
            image: { url: movie.image },
            caption: detailsMessage
          }, { quoted: msg });

          const imageResponse = await axios.get(movie.image, { responseType: 'arraybuffer' });
          const imageBuffer = await sharp(imageResponse.data)
  .resize(320, 180) // Adjust dimensions as needed
  .jpeg({ quality: 90 }) // Adjust quality as needed
  .toBuffer();

          const handleQualitySelection = async (qualityMsgUpsert) => {
            const qualityMsg = qualityMsgUpsert.messages[0];
            if (!qualityMsg.message?.extendedTextMessage) return;

            const qualityReply = qualityMsg.message.extendedTextMessage.text.trim();
            const qualityContext = qualityMsg.message.extendedTextMessage.contextInfo;

            if (qualityContext?.stanzaId === detailsMsg.key.id) {
              const qualityIndex = parseInt(qualityReply) - 1;

              if (qualityIndex >= 0 && qualityIndex < pixeldrainLinks.length) {
                const selectedQuality = pixeldrainLinks[qualityIndex];

                try {
                  await conn.sendMessage(from, { react: { text: "📥", key: qualityMsg.key } });

                  const fileId = selectedQuality.link.split('/').pop();
                  const dlResponse = await fetch(`${API_BASE}/download/pixeldrain?url=https://pixeldrain.com/api/file/${fileId}`);
                  const dlData = await dlResponse.json();

                  if (destinationJid !== from) {
                    await conn.sendMessage(destinationJid, {
                      image: { url: movie.images[0] },
                      caption: details,
                      contextInfo: {
                        externalAdReply: {
                          title: footer,
                          body: slogan,
                          thumbnailUrl: botimg2,
                          sourceUrl: 'https://bhashi-md.netlify.app',
                          mediaType: 1,
                          renderLargerThumbnail: false,
                        },
                      },
                    });
                  }

                  if (dlData.status && dlData.result.dl_link) {
                    await conn.sendMessage(destinationJid, {
                      document: { url: dlData.result.dl_link },
                      mimetype: "video/mp4",
                      fileName: `${movie.title} [${selectedQuality.quality}].mp4`,
                      jpegThumbnail: imageBuffer,
                      caption: `╭━━━『 *DOWNLOAD COMPLETE* 』━━╮
┃ 🎬 ${movie.title}
┃ 📊 ${selectedQuality.quality}
┃ 💾 ${selectedQuality.size}
╰━━━━━━━━━━━━━━━━━━━╯\n\n${footer}`
                    });

                    await conn.sendMessage(from, { react: { text: "✅", key: qualityMsg.key } });
                  } else {
                    throw new Error("Failed to get download link");
                  }

                  conn.ev.off("messages.upsert", handleQualitySelection);
                } catch (error) {
                  console.error(error);
                  reply("❌ Download failed!");
                }
              }
            }
          };

          conn.ev.on("messages.upsert", handleQualitySelection);
        }
      }
    };

    conn.ev.on("messages.upsert", handleUserReply);

  } catch (error) {
    console.error(error);
    reply("❌ An error occurred!");
  }
});
//=================================================================
cmd({
    pattern: "toprated",
    desc: "Get a list of top-rated movies.",
    category: "MOVIE",
    react: "⭐",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const apiKey = '76cb7f39';
    const apiUrl = `http://www.omdbapi.com/?s=top&apikey=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.Response === "False") {
            return reply("🚫 No top-rated movies found.");
        }

        const topMovies = data.Search.map(movie => `⭐ *Title:* ${movie.Title} (${movie.Year})`).join('\n');
        reply(`⭐ *Top Rated Movies* ⭐\n\n${topMovies}`);
    } catch (e) {
        console.error(e);
        reply(`🚫 Error: ${e.message}`);
    }
});

//=================================================================
cmd({
    pattern: "newreleases",
    desc: "Get information about the latest movie releases.",
    category: "MOVIE",
    react: "🎬",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const apiKey = '76cb7f39'; // Replace with your OMDb API key
    const apiUrl = `http://www.omdbapi.com/?s=new&apikey=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.Response === "False") {
            return reply("🚫 No new releases found.");
        }

        let movieList = data.Search.map(movie => `🎥 *Title:* ${movie.Title} (${movie.Year})`).join('\n\n');
        reply(`🎬 *New Releases* 🎬\n\n${movieList}`);
    } catch (e) {
        console.error(e);
        reply(`🚫 Error: ${e.message}`);
    }
});

//=================================================================
cmd({
    pattern: "popularmovies",
    desc: "Get popular movies.",
    category: "MOVIE",
    react: "🎥",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const apiKey = '76cb7f39';  // Replace with your OMDb API key
    const apiUrl = `http://www.omdbapi.com/?s=popular&apikey=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.Response === "False") {
            return reply("🚫 No popular movies found.");
        }

        const randomMovie = data.Search[Math.floor(Math.random() * data.Search.length)];
        const movieInfo = `
🎥 *Popular Movie Recommendation* 🎬
🎥 *Title:* ${randomMovie.Title}
🌏 *Year:* ${randomMovie.Year}
`;

        const imageUrl = randomMovie.Poster !== 'N/A' ? randomMovie.Poster : 'https://via.placeholder.com/500x750';

        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `${movieInfo}\nEnjoy your movie!`
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`🚫 Error: ${e.message}`);
    }
});

//=================================================================
cmd({
    pattern: "randommovie",
    desc: "Get a random movie recommendation.",
    category: "MOVIE",
    react: "🎲",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
    // Define multilingual messages
    const messages = {
        accessDenied: {
            SI: "*😢 ප්‍රවේශය ප්‍රතික්ෂේප විය. මෙම විධානය භාවිතා කිරීමට ඔබට අවසර නැත.🎁 බොට් මාදිලිය වෙනස් කරන්න!*",
            EN: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*"
        },
        blacklisted: {
            SI: "*🚫 ඔබ අසාදු ලේඛනගත කර ඇත. ප්‍රවේශය ප්‍රතික්ෂේප විය.*",
            EN: "*🚫 You are blacklisted. Access denied.*"
        },
        noMoviesFound: {
            SI: "🚫 කිසිදු චිත්‍රපටයක් සොයා ගැනිය නොහැකි විය.",
            EN: "🚫 No movies found for the random recommendation."
        },
        randomMovieHeader: {
            SI: "🎥 *රැඳී සිටින චිත්‍රපටය* 🎬\n",
            EN: "🎥 *Random Movie Recommendation* 🎬\n"
        },
        movieTitle: {
            SI: "🎥 *මාතෘකාව:* ",
            EN: "🎥 *Title:* "
        },
        movieYear: {
            SI: "🌏 *වසර:* ",
            EN: "🌏 *Year:* "
        },
        fetchError: {
            SI: "🚫 දෝෂයක් ඇති විය: ",
            EN: "🚫 An error occurred: "
        }
    };

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE.toUpperCase(); // Adjust to match your message object keys


        const apiUrl = `http://www.omdbapi.com/?s=random&apikey=76cb7f39`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.Response === "False") {
            return reply(messages.noMoviesFound[lang]);
        }

        const randomMovie = data.Search[Math.floor(Math.random() * data.Search.length)];
        const randomMovieInfo = `
${messages.randomMovieHeader[lang]}
${messages.movieTitle[lang]}${randomMovie.Title}
${messages.movieYear[lang]}${randomMovie.Year}
`;

        const imageUrl = randomMovie.Poster && randomMovie.Poster !== 'N/A' ? randomMovie.Poster : config.ALIVE_IMG;

        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `${randomMovieInfo}\n${mono}ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛${mono}`
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`${messages.fetchError[lang]}${e.message} 😓`);
    }
});
//=================================================================
cmd({
    pattern: "movie",
    desc: "Fetch detailed information about a movie.",
    category: "MOVIE",
    react: "🎬",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
    // Define multilingual messages
    const messages = {
        accessDenied: {
            SI: "*😢 ප්‍රවේශය ප්‍රතික්ෂේප විය. මෙම විධානය භාවිතා කිරීමට ඔබට අවසර නැත.🎁 බොට් මාදිලිය වෙනස් කරන්න!*",
            EN: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*"
        },
        blacklisted: {
            SI: "*🚫 ඔබ අසාදු ලේඛනගත කර ඇත. ප්‍රවේශය ප්‍රතික්ෂේප විය.*",
            EN: "*🚫 You are blacklisted. Access denied.*"
        },
        noMovieName: {
            SI: "📽️ කරුණාකර චිත්‍රපටයේ නම ලබා දෙන්න.",
            EN: "📽️ Please provide the name of the movie."
        },
        movieNotFound: {
            SI: "🚫 චිත්‍රපටය හමු නොවීය.",
            EN: "🚫 Movie not found."
        },
        movieDetails: {
            SI: (data) => `
*☘️ ${data.Title} (${data.Year})*

📆 *අවසන් වූ දිනය:* ${data.Released}
⏳ *කාලය:* ${data.Runtime}
🎭 *වර්ගය:* ${data.Genre}
🎬 *අධ්‍යක්ෂ:* ${data.Director || 'N/A'}
💁‍♀️ *රංගන ශිල්පීන්:* ${data.Actors}
📡 *භාෂාව:* ${data.Language}
🇺🇸 *රට:* ${data.Country}
🏆 *සම්මාන:* ${data.Awards || 'N/A'}
⭐ *IMDb වර්ගය:* ${data.imdbRating || 'N/A'}
            `,
            EN: (data) => `
*☘️ ${data.Title} (${data.Year})*

📆 *Released:* ${data.Released}
⏳ *Runtime:* ${data.Runtime}
🎭 *Genre:* ${data.Genre}
🎬 *Director:* ${data.Director || 'N/A'}
💁‍♀️ *Actors:* ${data.Actors}
📡 *Language:* ${data.Language}
🇺🇸 *Country:* ${data.Country}
🏆 *Awards:* ${data.Awards || 'N/A'}
⭐ *IMDb Rating:* ${data.imdbRating || 'N/A'}
            `
        },
        fetchError: {
            SI: "❌ දෝෂයක් ඇති විය: ",
            EN: "❌ Error: "
        }
    };

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE.toUpperCase(); // Adjust to match your message object keys

        // Ensure movie name is provided
        const movieName = args.join(" ");
        if (!movieName) {
            return reply(messages.noMovieName[lang]);
        }

        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=76cb7f39`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.Response === "False") {
            return reply(messages.movieNotFound[lang]);
        }

        // Constructing the movie details message using a function
        const movieInfo = messages.movieDetails[lang](data);

        const imageUrl = data.Poster && data.Poster !== 'N/A' ? data.Poster : config.ALIVE_IMG;

        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `${movieInfo}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`${messages.fetchError[lang]}${e.message}`);
    }
});

//=================================================================
cmd({
  pattern: "dl2",
  alias: ["dlf", "fastdl"],
  desc: "Download files from direct links. Can send to specific JID using |",
  category: "MOVIE",
  react: "📥",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

  // Split input to get URL and target JID
  const fullInput = args.join(" ");
  const [url, targetJid] = fullInput.split('|').map(str => str.trim());
  const destinationJid = targetJid || from;

  if (!url) {
      await m.react("❌");
      return reply("*Please provide a valid download link*\n\n*Usage:*\n*.dl2 [url]*\n*.dl2 [url] | [jid]*\n\n*Example:*\n*.dl2 https://example.com/file.pdf*\n*.dl2 https://example.com/file.pdf | 1234567890@g.us*");
  }

  // Validate JID if provided
  if (targetJid && !targetJid.includes('@')) {
      await m.react("❌");
      return reply("❌ Invalid JID format. Use: url | JID (e.g., https://example.com/file.pdf | 123456789@g.us)");
  }

  try {
      // Send initial processing message
      await m.react("⏳");
      await reply(`*⏳ Processing your download request...*${targetJid ? `\n*🎯 Sending to:* ${targetJid}` : ''}`);

      // Configure headers for the request
      const headers = {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive'
      };

      // First make a HEAD request to get content type and size
      const headResponse = await axios.head(url, { headers });
      const contentType = headResponse.headers['content-type'] || 'application/octet-stream';
      const contentDisposition = headResponse.headers['content-disposition'];

      // Extract filename from content-disposition, URL, or generate one
      let fileName = '';
      if (contentDisposition) {
          const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
          if (matches && matches[1]) {
              fileName = matches[1].replace(/['"]/g, '');
          }
      }

      // If no filename from content-disposition, try to get from URL
      if (!fileName) {
          const urlParts = url.split('/');
          fileName = urlParts[urlParts.length - 1].split('?')[0]; // Remove query parameters
          fileName = decodeURIComponent(fileName); // Decode URL-encoded characters
          fileName = fileName.replace(/[/\\?%*:|"<>]/g, '-'); // Remove invalid characters
      }

      // If still no filename, generate one
      if (!fileName || fileName === '') {
          fileName = 'downloaded_file';
      }

      // Add appropriate extension based on content type if filename doesn't have one
      if (!fileName.includes('.')) {
          const ext = getExtensionFromMimeType(contentType);
          fileName = `${fileName}.${ext}`;
      }

      // Download and send file
      await conn.sendMessage(destinationJid, {
          document: { url: url },
          fileName: fileName,
          mimetype: contentType,
          caption: `*📁 File:* ${fileName}${targetJid ? '\n*📤 Forwarded by:* ' + pushname : '\n*💫 Downloaded by:* ' + pushname}\n\n*> ${footer}`
      }, { quoted: m });

      // React to success
      await m.react("✅");

      // If sent to different JID, notify sender
      if (targetJid) {
          await reply(`*✅ File sent successfully to:* ${targetJid}`);
      }

  } catch (error) {
      console.error("Error in dl2 command:", error);
      await reply("❌ Failed to download file. Please make sure the link is valid and accessible.");
      await m.react("❌");
  }
});

// Helper function to get file extension from MIME type
function getExtensionFromMimeType(mimeType) {
  const mimeToExt = {
      'application/pdf': 'pdf',
      'application/msword': 'doc',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
      'application/vnd.ms-excel': 'xls',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
      'application/vnd.ms-powerpoint': 'ppt',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
      'application/zip': 'zip',
      'application/x-rar-compressed': 'rar',
      'application/x-7z-compressed': '7z',
      'video/mp4': 'mp4',
      'video/x-matroska': 'mkv',
      'video/x-msvideo': 'avi',
      'audio/mpeg': 'mp3',
      'audio/wav': 'wav',
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/gif': 'gif',
      'image/webp': 'webp',
      'text/plain': 'txt',
      'text/csv': 'csv',
      'application/json': 'json',
      'application/vnd.android.package-archive': 'apk'
  };

  return mimeToExt[mimeType] || 'bin';
}
//================================================================
cmd({
  pattern: "dl",
  alias: ["direct", "file"],
  desc: "Send any type of file directly. Can send to specific JID using |",
  category: "MOVIE",
  react: "🎥",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

  // Split input to get URL and target JID
  const fullInput = args.join(" ");
  const [url, targetJid] = fullInput.split('|').map(str => str.trim());
  const destinationJid = targetJid || from;

  if (!url) {
      await m.react("❌");
      return reply("*Please provide a direct file URL*\n\n*Usage:*\n*.dl [url]*\n*.dl [url] | [jid]*\n\n*Example:*\n*.dl https://example.com/file.pdf*\n*.dl https://example.com/file.pdf | 1234567890@g.us*");
  }

  // Validate JID if provided
  if (targetJid && !targetJid.includes('@')) {
      await m.react("❌");
      return reply("❌ Invalid JID format. Use: url | JID (e.g., https://example.com/file.pdf | 123456789@g.us)");
  }

  try {
      // Send initial processing message
      await m.react("⏳");
      await reply(`*⏳ Processing your request...*${targetJid ? `\n*🎯 Sending to:* ${targetJid}` : ''}`);

      // Detect file type from URL
      const fileType = getFileTypeFromUrl(url);
      const fileName = getFileNameFromUrl(url);

      // Download and send file
      await conn.sendMessage(destinationJid, {
          document: { url: url },
          fileName: fileName,
          mimetype: fileType,
          caption: `*📁 File :* ${fileName}${targetJid ? '\n*📤 Forwarded by:* ' + pushname : ''}\n\n> ${footer}`
      }, { quoted: m });

      // React to success
      await m.react("✅");

      // If sent to different JID, notify sender
      if (targetJid) {
          await reply(`*✅ File sent successfully to:* ${targetJid}`);
      }

  } catch (error) {
      console.error("Error in dl command:", error);
      await reply("❌ Failed to process file. Please ensure the URL is valid and accessible.");
      await m.react("❌");
  }
});

// Helper function to get file type from URL
function getFileTypeFromUrl(url) {
  const extension = url.split('.').pop().toLowerCase();
  const mimeTypes = {
      'pdf': 'application/pdf',
      'doc': 'application/msword',
      'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'xls': 'application/vnd.ms-excel',
      'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'ppt': 'application/vnd.ms-powerpoint',
      'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'zip': 'application/zip',
      'rar': 'application/x-rar-compressed',
      '7z': 'application/x-7z-compressed',
      'mp4': 'video/mp4',
      'mkv': 'video/x-matroska',
      'avi': 'video/x-msvideo',
      'mp3': 'audio/mpeg',
      'wav': 'audio/wav',
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'webp': 'image/webp',
      'txt': 'text/plain',
      'csv': 'text/csv',
      'json': 'application/json',
      'apk': 'application/vnd.android.package-archive'
  };
  return mimeTypes[extension] || 'application/octet-stream';
}

// Helper function to get filename from URL
function getFileNameFromUrl(url) {
  try {
      const urlParts = url.split('/');
      let fileName = urlParts[urlParts.length - 1];
      // Remove query parameters if present
      fileName = fileName.split('?')[0];
      // Decode URL-encoded characters
      fileName = decodeURIComponent(fileName);
      // Replace invalid filename characters
      fileName = fileName.replace(/[/\\?%*:|"<>]/g, '-');
      return fileName || 'downloaded_file';
  } catch (error) {
      return 'downloaded_file';
  }
}
//=================================================================





//=========================- LOGO COMMAND ========================
//================================================================
cmd({
    pattern: 'funplaylogo',
    desc: 'Generate a Fun and Play-themed logo',
    category: 'logo',
    react: '🎉',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("🎉 Please provide the text for the Fun and Play Logo, e.g., *!funplaylogo YourText*");
        }

        // API URL for generating the Fun and Play text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=fun-and-play-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Fun and Play Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Fun and Play logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Fun and Play Logo:", error.message);
        reply("❌ Failed to create Fun and Play Logo. Try again later.");
    }
});

//=================================================================
cmd({
    pattern: 'wildlogo',
    desc: 'Generate a Design-Wild-themed logo',
    category: 'logo',
    react: '🦁',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("🦁 Please provide the text for the Wild Logo, e.g., *!wildlogo YourText*");
        }

        // API URL for generating the Design-Wild text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=wild-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Wild Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Wild logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Wild Logo:", error.message);
        reply("❌ Failed to create Wild Logo. Try again later.");
    }
});

//=================================================================
cmd({
    pattern: 'popsiclelogo',
    desc: 'Generate a Design-Popsicle-themed logo',
    category: 'logo',
    react: '🍧',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("🍧 Please provide the text for the Popsicle Logo, e.g., *!popsiclelogo YourText*");
        }

        // API URL for generating the Design-Popsicle text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=popsicle-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Popsicle Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Popsicle logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Popsicle Logo:", error.message);
        reply("❌ Failed to create Popsicle Logo. Try again later.");
    }
});

//=================================================================
cmd({
    pattern: 'silverlogo',
    desc: 'Generate a Design-Silver-themed logo',
    category: 'logo',
    react: '✨',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("✨ Please provide the text for the Silver Logo, e.g., *!silverlogo YourText*");
        }

        // API URL for generating the Design-Silver text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=silver-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Silver Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Silver logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Silver Logo:", error.message);
        reply("❌ Failed to create Silver Logo. Try again later.");
    }
});

//=================================================================
cmd({
    pattern: 'romanlogo',
    desc: 'Generate a Design-Roman-themed logo',
    category: 'logo',
    react: '🏛️',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("🏛️ Please provide the text for the Roman Logo, e.g., *!romanlogo YourText*");
        }

        // API URL for generating the Design-Roman text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=roman-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Roman Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Roman logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}*`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Roman Logo:", error.message);
        reply("❌ Failed to create Roman Logo. Try again later.");
    }
});

//=================================================================
cmd({
    pattern: 'craftslogo',
    desc: 'Generate a Design-Crafts-themed logo',
    category: 'logo',
    react: '🎨',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("🎨 Please provide the text for the Crafts Logo, e.g., *!craftslogo YourText*");
        }

        // API URL for generating the Design-Crafts text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=crafts-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Crafts Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Crafts logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Crafts Logo:", error.message);
        reply("❌ Failed to create Crafts Logo. Try again later.");
    }
});

//=================================================================
cmd({
    pattern: 'ampedlogo',
    desc: 'Generate a Design-Amped-themed logo',
    category: 'logo',
    react: '⚡',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("⚡ Please provide the text for the Amped Logo, e.g., *!ampedlogo YourText*");
        }

        // API URL for generating the Design-Amped text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=amped-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Amped Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Amped logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Amped Logo:", error.message);
        reply("❌ Failed to create Amped Logo. Try again later.");
    }
});

//=================================================================
cmd({
    pattern: 'runnerlogo',
    desc: 'Generate a Fortune-themed logo',
    category: 'logo',
    react: '🌟',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("🌟 Please provide the text for the Fortune Logo, e.g., *!fortunelogo YourText*");
        }

        // API URL for generating the Fortune text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=fortune-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Fortune Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Fortune logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Fortune Logo:", error.message);
        reply("❌ Failed to create Fortune Logo. Try again later.");
    }
});

//=================================================================
cmd({
    pattern: 'waterlogo',
    desc: 'Generate a Water-themed logo',
    category: 'logo',
    react: '💧',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("💧 Please provide the text for the Water Logo, e.g., *!waterlogo YourText*");
        }

        // API URL for generating the Water text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=water-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Water Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Water logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Water Logo:", error.message);
        reply("❌ Failed to create Water Logo. Try again later.");
    }
});

//=================================================================
cmd({
    pattern: 'runnerlogo',
    desc: 'Generate a Runner-themed logo',
    category: 'logo',
    react: '🏃',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("🏃 Please provide the text for the Runner Logo, e.g., *!runnerlogo YourText*");
        }

        // API URL for generating the Runner text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=runner-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Runner Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Runner logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Runner Logo:", error.message);
        reply("❌ Failed to create Runner Logo. Try again later.");
    }
});

//===============================================================
cmd({
    pattern: 'blackbirdlogo',
    desc: 'Generate a Blackbird-themed logo',
    category: 'logo',
    react: '🖤',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("🖤 Please provide the text for the Blackbird Logo, e.g., *!blackbirdlogo YourText*");
        }

        // API URL for generating the Blackbird text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=blackbird-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Blackbird Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Blackbird logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Blackbird Logo:", error.message);
        reply("❌ Failed to create Blackbird Logo. Try again later.");
    }
});

//=================================================================
cmd({
    pattern: 'fluffylogo',
    desc: 'Generate a Fluffy-themed logo',
    category: 'logo',
    react: '🦄',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("🦄 Please provide the text for the Fluffy Logo, e.g., *!fluffylogo YourText*");
        }

        // API URL for generating the Fluffy text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=fluffy-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Fluffy Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Fluffy logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Fluffy Logo:", error.message);
        reply("❌ Failed to create Fluffy Logo. Try again later.");
    }
});

//=================================================================
cmd({
    pattern: 'smurflogo',
    desc: 'Generate a Smurfs-themed logo',
    category: 'logo',
    react: '💙',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("💙 Please provide the text for the Smurfs Logo, e.g., *!smurflogo YourText*");
        }

        // API URL for generating the Smurfs text logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=smurfs-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Smurfs Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Smurfs logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Smurfs Logo:", error.message);
        reply("❌ Failed to create Smurfs Logo. Try again later.");
    }
});

//================================================================

//=================================================================
cmd({
    pattern: 'comicslogo',
    desc: 'Generate a Comics-themed logo',
    category: 'logo',
    react: '🎨',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("🎨 Please provide the text for the Comics Logo, e.g., *!comicslogo YourText*");
        }

        // API URL for generating the logo in Comics style
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=comics-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML response
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Comics Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated Comics logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Comics Logo:", error.message);
        reply("❌ Failed to create Comics Logo. Try again later.");
    }
});
//================================================================
cmd({
    pattern: 'neonlogo',
    desc: 'Generate a Neon-themed logo',
    category: 'logo',
    react: '✨',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("✨ Please provide the text for the Neon Logo, e.g., *!neonlogo YourText*");
        }

        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=neon-logo&text=${encodeURIComponent(text)}`;

        // Fetch the HTML response from FlamingText
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the correct image URL from the HTML
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Neon Logo. Please try again later.");
        }

        // Fetch the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated logo
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Neon Logo:", error.message);
        reply("❌ Failed to create Neon Logo. Try again later.");
    }
});

//================================================================
cmd({
    pattern: 'glowlogo',
    desc: 'Generate a Glow-themed logo',
    category: 'logo',
    react: '💡',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("💡 Please provide the text for the Glow Logo, e.g., *!glowlogo YourText*");
        }

        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=glow-logo&text=${encodeURIComponent(text)}`;

        // Fetch HTML from FlamingText
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the correct image URL from the HTML
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Glow Logo. Please try again later.");
        }

        // Fetch the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the generated logo
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Glow Logo:", error.message);
        reply("❌ Failed to create Glow Logo. Try again later.");
    }
});
//=================================================================
cmd({
    pattern: 'firelogo',
    desc: 'Generate a Fire-themed logo',
    category: 'logo',
    react: '🔥',
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    try {
        const text = args.join(' ');

        if (!text) {
            return reply("🔥 Please provide the text for the Fire Logo, e.g., *!firelogo YourText*");
        }

        // URL for generating the logo
        const logoGenUrl = `https://flamingtext.com/net-fu/proxy_form.cgi?script=flame-logo&text=${encodeURIComponent(text)}&fontname=nosifer&fillTextType=gradient`;

        // Fetch the HTML content of the FlamingText result page
        const htmlResponse = await axios.get(logoGenUrl);
        const $ = cheerio.load(htmlResponse.data);

        // Extract the temporary image URL from the HTML
        const imageUrl = $('div.ft-result-logo-image-wrapper a.ft-result-img img.logoImage').attr('src');

        if (!imageUrl) {
            return reply("❌ Failed to retrieve the Fire Logo. Please try again later.");
        }

        // Download the image as a buffer
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(imageResponse.data, 'binary');

        // Send the logo to the user
        await conn.sendMessage(from, {
            image: buffer,
            caption: `${caption}`,
        }, { quoted: mek });
    } catch (error) {
        console.error("Error generating Fire Logo:", error.message);
        reply("❌ Failed to create Fire Logo. Try again later.");
    }
});
//=================================================================
cmd({
  pattern: "pikachu",
  desc: "Creates a surprised Pikachu meme with custom text.",
  react: "⚡",
  category: "logo",
  filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
  // Define language preference (SI for Sinhala, EN for English)
  const language = config.LANGUAGE; // Ensure this is set to either 'SI' or 'EN'

  // Check if text input is provided
  if (args.length < 1) {
      const noTextMsg = {
          SI: "*♻ කරුණාකර Pikachu මැදුර සඳහා පෙළ ලබා දෙන්න. උදා: !pikachu හෙලෝ එහිදී*",
          EN: "*♻ Please provide text for the Pikachu meme. Example: !pikachu Hello there*"
      };
      return reply(noTextMsg[language]);
  }

  const text = args.join(" ");

  try {
      const senderNumber = m.sender;
      const isGroup = m.isGroup || false;

      const errorMsg = {
          SI: "*😢 ප්‍රවේශය ප්‍රතික්ෂේප කරයි. ඔබට මෙම විශේෂණය භාවිතා කිරීමට අවසර නොමැත.🎁 බොට් ආකාරය වෙනස් කරන්න!*",
          EN: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*"
      };

      // Fetch the Pikachu meme image from the API
      const imageUrl = `https://api.popcat.xyz/pikachu?text=${encodeURIComponent(text)}`;
      let response = await fetch(imageUrl);
      let buffer = await response.buffer();

      // Prepare the message caption
      let caption = {
          SI: `*⚡ මෙන්න ඔබේ සැමවිටම Pikachu මැදුර*\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
          EN: `*⚡ Here's your surprised Pikachu meme*\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
      };

      // Send the Pikachu meme image with caption
      await conn.sendMessage(from, { image: buffer, caption: `${caption}` }, { quoted: mek });
  } catch (e) {
      console.log(e);
      const errorResponse = {
          SI: "සියලුම දෝෂයක් සිදුවීය: " + e.message,
          EN: "An error occurred: " + e.message
      };
      reply(errorResponse[language]);
  }
});
//======================================================================================================================
cmd({
  pattern: "caution",
  desc: "Creates a caution sign with custom text.",
  react: "⚠️",
  category: "logo",
  filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
  // Define language preference (SI for Sinhala, EN for English)
  const language = config.LANGUAGE; // Ensure this is set to either 'SI' or 'EN'

  // Check if text input is provided
  if (args.length < 1) {
      const noTextMsg = {
          SI: "*♻ කරුණාකර අවධානයේ ලකුණු සඳහා පෙළ ලබා දෙන්න. උදාහරණය: !caution ඔබේ පියවර පරීක්ෂා කරන්න*",
          EN: "*♻ Please provide text for the caution sign. Example: !caution Watch your step*"
      };
      return reply(noTextMsg[language]);
  }

  const text = args.join(" ");

  try {
      const senderNumber = m.sender;
      const isGroup = m.isGroup || false;


      const errorMsg = {
          SI: "😢 ප්‍රවේශය ප්‍රතික්ෂේප කරයි. ඔබට මෙම විශේෂණය භාවිතා කිරීමට අවසර නොමැත.🎁 බොට් ආකාරය වෙනස් කරන්න!",
          EN: "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!"
      };

      // Fetch the caution sign image from the API
      const imageUrl = `https://api.popcat.xyz/caution?text=${encodeURIComponent(text)}`;
      let response = await fetch(imageUrl);
      let buffer = await response.buffer();

      // Prepare the message caption
      const caption = {
          SI: `⚠️ අවධානය: \n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
          EN: `⚠️ Caution: \n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
      };

      // Send the caution sign image with caption
      await conn.sendMessage(from, { image: buffer, caption: `${caption}` }, { quoted: mek });
  } catch (e) {
      console.log(e);
      const errorResponse = {
          SI: `ආපසු ගැනීමක් සිදුවුණි: ${e.message}`,
          EN: `An error occurred: ${e.message}`
      };
      reply(errorResponse[language]);
  }
});


//=================================================================
cmd({
  pattern: "drake",
  desc: "Creates a Drake meme with custom text.",
  react: "🎵",
  category: "logo",
  filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
  // Define language preference (SI for Sinhala, EN for English)
  const language = config.LANGUAGE; // Ensure this is set to either 'SI' or 'EN'

  // Check if both text inputs are provided
  if (args.length < 2) {
      const noTextMsg = {
          SI: "*♻ කරුණාකර Drake meme සඳහා '|' සමඟ වෙන් කරන ලද පෙළ දෙකක් ලබා දෙන්න. උදාහරණය: !drake පෙළ 1 | පෙළ 2*",
          EN: "*♻ Please provide two texts separated by '|' for the Drake meme. Example: !drake Text 1 | Text 2*"
      };
      return reply(noTextMsg[language]);
  }

  const fullText = args.join(" ");
  const [text1, text2] = fullText.split("|").map(text => text.trim());

  if (!text1 || !text2) {
      const missingTextMsg = {
          SI: "*♻ කරුණාකර '|' සමඟ වෙන් කරන ලද පෙළ දෙකක් ලබා දෙන්න.*",
          EN: "*♻ Please provide both texts separated by '|' for the Drake meme.*"
      };
      return reply(missingTextMsg[language]);
  }

  try {
      const senderNumber = m.sender;
      const isGroup = m.isGroup || false;

      const errorMsg = {
          SI: "😢 ප්‍රවේශය ප්‍රතික්ෂේප කරයි. ඔබට මෙම විශේෂණය භාවිතා කිරීමට අවසර නොමැත.🎁 බොට් ආකාරය වෙනස් කරන්න!",
          EN: "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!"
      };

      // Fetch the Drake meme image from the API
      const imageUrl = `https://api.popcat.xyz/drake?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
      let response = await fetch(imageUrl);
      let buffer = await response.buffer();

      // Prepare the message caption
      const caption = {
          SI: `🎵 මෙය ඔබේ Drake meme යි:\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
          EN: `🎵 Here's your Drake meme:\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
      };

      // Send the Drake meme image with caption
      await conn.sendMessage(from, { image: buffer, caption: `${caption}` }, { quoted: mek });
  } catch (e) {
      console.log(e);
      const errorResponse = {
          SI: `ආපසු ගැනීමක් සිදුවුණි: ${e.message}`,
          EN: `An error occurred: ${e.message}`
      };
      reply(errorResponse[language]);
  }
});


//======================================================================================================================
cmd({
  pattern: "pooh",
  desc: "Creates a Tuxedo Winnie the Pooh meme with custom text.",
  react: "🐻",
  category: "logo",
  filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
  // Define language preference (SI for Sinhala, EN for English)
  const language = config.LANGUAGE; // Ensure this is set to either 'SI' or 'EN'

  // Check if both text inputs are provided
  if (args.length < 2) {
      const noTextMsg = {
          SI: "*♻ කරුණාකර Pooh meme සඳහා '|' සමඟ වෙන් කරන ලද පෙළ දෙකක් ලබා දෙන්න. උදාහරණය: !pooh පෙළ 1 | පෙළ 2*",
          EN: "*♻ Please provide two texts separated by '|' for the Pooh meme. Example: !pooh Text 1 | Text 2*"
      };
      return reply(noTextMsg[language]);
  }

  const fullText = args.join(" ");
  const [text1, text2] = fullText.split("|").map(text => text.trim());

  if (!text1 || !text2) {
      const missingTextMsg = {
          SI: "*♻ කරුණාකර '|' සමඟ වෙන් කරන ලද පෙළ දෙකක් ලබා දෙන්න.*",
          EN: "*♻ Please provide both texts separated by '|' for the Pooh meme.*"
      };
      return reply(missingTextMsg[language]);
  }

  try {
      const senderNumber = m.sender;
      const isGroup = m.isGroup || false;
      const errorMsg = {
          SI: "😢 ප්‍රවේශය ප්‍රතික්ෂේප කරයි. ඔබට මෙම විශේෂණය භාවිතා කිරීමට අවසර නොමැත.🎁 බොට් ආකාරය වෙනස් කරන්න!",
          EN: "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!"
      };


      // Fetch the Pooh meme image from the API
      const imageUrl = `https://api.popcat.xyz/pooh?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
      let response = await fetch(imageUrl);
      let buffer = await response.buffer();

      // Prepare the message caption
      const caption = {
          SI: `🐻 මෙය ඔබේ Tuxedo Pooh meme යි:\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
          EN: `🐻 Here's your Tuxedo Pooh meme:\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
      };

      // Send the Pooh meme image with caption
      await conn.sendMessage(from, { image: buffer, caption: `${caption}` }, { quoted: mek });
  } catch (e) {
      console.log(e);
      const errorResponse = {
          SI: `ආපසු ගැනීමක් සිදුවුණි: ${e.message}`,
          EN: `An error occurred: ${e.message}`
      };
      reply(errorResponse[language]);
  }
});

//======================================================================================================================
cmd({
  pattern: "sadcat",
  desc: "Fetches a 'Sad Cat' image with custom text.",
  react: "😿",
  category: "logo",
  filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
  // Define language preference (SI for Sinhala, EN for English)
  const language = config.LANGUAGE; // Ensure this is set to either 'SI' or 'EN'

  // Check if text is provided
  if (!args.join(" ")) {
      const noTextMsg = {
          SI: "*♻ කරුණාකර Sad Cat පින්තූරය සඳහා පෙළ ලබා දෙන්න.*",
          EN: "*♻ Please provide the text for the Sad Cat image.*"
      };
      return reply(noTextMsg[language]);
  }

  const text = args.join(" ");
  try {
      const senderNumber = m.sender;
      const isGroup = m.isGroup || false;
      const errorMsg = {
          SI: "😢 ප්‍රවේශය ප්‍රතික්ෂේප කරයි. ඔබට මෙම විශේෂණය භාවිතා කිරීමට අවසර නොමැත.🎁 බොට් ආකාරය වෙනස් කරන්න!",
          EN: "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!"
      };
      // Fetch the Sad Cat image from the API
      const imageUrl = `https://api.popcat.xyz/sadcat?text=${encodeURIComponent(text)}`;
      let response = await fetch(imageUrl);
      let buffer = await response.buffer();

      // Prepare the message caption
      const caption = {
          SI: `😿 ඔබේ පෙළ සමඟ Sad Cat පින්තූරය මෙහි යුත්කම:\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
          EN: `😿 Here is the Sad Cat image with your text:\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
      };

      // Send the Sad Cat image with caption
      await conn.sendMessage(from, { image: buffer, caption: `${caption}` }, { quoted: mek });
  } catch (e) {
      console.log(e);
      const errorResponse = {
          SI: `ආපසු ගැනීමක් සිදුවුණි: ${e.message}`,
          EN: `An error occurred: ${e.message}`
      };
      reply(errorResponse[language]);
  }
});


//======================================================================================================================
cmd({
  pattern: "oogway",
  desc: "Fetches an 'Oogway' image with custom text.",
  react: "🐢",
  category: "logo",
  filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
  // Define language preference (SI for Sinhala, EN for English)
  const language = config.LANGUAGE; // Ensure this is set to either 'SI' or 'EN'

  // Check if text is provided
  if (!args.join(" ")) {
      const noTextMsg = {
          SI: "*♻ කරුණාකර Oogway පින්තූරය සඳහා පෙළ ලබා දෙන්න.*",
          EN: "*♻ Please provide the text for the Oogway image.*"
      };
      return reply(noTextMsg[language]);
  }

  const text = args.join(" ");
  try {
      const senderNumber = m.sender;
      const isGroup = m.isGroup || false;

      const errorMsg = {
          SI: "😢 ප්‍රවේශය ප්‍රතික්ෂේප කරයි. ඔබට මෙම විශේෂණය භාවිතා කිරීමට අවසර නොමැත.🎁 බොට් ආකාරය වෙනස් කරන්න!",
          EN: "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!"
      };
      // Fetch the Oogway image from the API
      const imageUrl = `https://api.popcat.xyz/oogway?text=${encodeURIComponent(text)}`;
      let response = await fetch(imageUrl);
      let buffer = await response.buffer();


      // Send the Oogway image with caption
      await conn.sendMessage(from, { image: buffer, caption: `${caption}` }, { quoted: mek });
  } catch (e) {
      console.log(e);
      const errorResponse = {
          SI: `ආපසු ගැනීමක් සිදුවුණි: ${e.message}`,
          EN: `An error occurred: ${e.message}`
      };
      reply(errorResponse[language]);
  }
});
//=======================-USEFUL-COMMANDS-=========================
//================================================================
cmd({
    pattern: "removebg",
    react: "🖼️",
    alias: ["rmbg", "backgroundremove"],
    category: "useful",
    use: ".removebg <quoted image>",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Check if the quoted message contains an image
        const isQuotedImage = quoted ? (quoted.type === 'imageMessage' || (quoted.type === 'viewOnceMessage' && quoted.msg.type === 'imageMessage')) : false;

        if (!isQuotedImage) {
            return reply("❌ Please quote an image to remove its background.");
        }

        // Download the quoted image
        const imageBuffer = await quoted.download();

        if (!imageBuffer) {
            return reply("❌ Failed to download the image. Please try again.");
        }

        // Save the image to a temporary file
        const tempFilePath = path.join(__dirname, getRandom('.jpg'));
        await fs.promises.writeFile(tempFilePath, imageBuffer);

        // Upload the image to ImgBB
        const imgbbResponse = await image2url(tempFilePath);

        if (!imgbbResponse.result || !imgbbResponse.result.url) {
            throw new Error("Failed to upload the image to ImgBB.");
        }

        const uploadedImageUrl = imgbbResponse.result.url;

        // Remove the background using the removebg API
        const removeBgApiUrl = `https://api.nyxs.pw/tools/removebg?url=${encodeURIComponent(uploadedImageUrl)}`;
        const removeBgResponse = await axios.get(removeBgApiUrl);

        if (!removeBgResponse.data || !removeBgResponse.data.result) {
            throw new Error("Failed to remove the background.");
        }

        const bgRemovedImageUrl = removeBgResponse.data.result;

        // Send the processed image back to the user
        await conn.sendMessage(
            from,
            { image: { url: bgRemovedImageUrl }, caption: `${caption}` },
            { quoted: mek }
        );

        // Clean up the temporary file
        await fs.promises.unlink(tempFilePath);
    } catch (e) {
        reply("🚫 An error occurred while processing the image. Please try again.");
        console.error(e);
    }
});
//=================================================================
cmd({
    pattern: "ss",
    desc: "Capture a screenshot of the provided website URL",
    react: "📸",
    alias: ["screenshot", "webss"],
    category: "useful",
    use: '.ss <URL>',
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply, args }) => {
    const config = await readEnv();
    const language = config.LANGUAGE || 'EN'; // Set default language to 'EN'

    try {
        // Combine the arguments to form the full URL
        const url = args.join(" ");

        if (!url) {
            const noUrlMessage = {
                SI: "❌ කරුණාකර URL එකක් සපයන්න.",
                EN: "❌ Please provide a URL."
            };
            return reply(noUrlMessage[language]);
        }

        // Prompt the user to reply with 1 (mobile view) or 2 (desktop view)

        const sentMessage = await conn.sendMessage(from, { text: `乂 ＳＣＲＥＥＮＳＨＯＴ

╭───────────➤
├ 📱 1️⃣ ➩ 𝖬𝗈𝖻𝗂𝗅𝖾 𝖵𝗂𝖾𝗐 
├ 🖥️ 2️⃣ ➩ 𝖣𝖾𝗌𝗄𝗍𝗈𝗉 𝖵𝗂𝖾𝗐
╰──────➤

> 🙌 𝖱𝖾𝗉𝗅𝗒 𝖶𝗂𝗍𝗁 𝖸𝗈𝗎𝗋 𝖢𝗁𝗈𝗂𝖼𝖾💗` }, { quoted: mek });

        // Wait for user reply
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text.trim() : null;
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                let viewType = "";

                // Determine view type based on user reply
                switch (userReply) {
                    case "1":
                        await conn.sendMessage(from, { react: { text: "🔁", key: msg.key } });
                        viewType = "hp"; // Mobile view
                         await conn.sendMessage(from, { react: { text: "✅", key: msg.key } });
                        break;
                    case "2":
                         await conn.sendMessage(from, { react: { text: "🔁", key: msg.key } });
                        viewType = "web"; // Desktop view
                         await conn.sendMessage(from, { react: { text: "✅", key: msg.key } });
                        break;
                    default:
                        const invalidOptionMessage = {
                            SI: "❌ නිවැරදි විකල්පයක් තෝරන්න: 1 හෝ 2.",
                            EN: "❌ Please select a valid option: 1 or 2."
                        };
                        return reply(invalidOptionMessage[language]);
                }

                try {
                    // Capture screenshot with selected view type
                    const screenshotUrl = await captureScreenshot(url, viewType);

                    // Send the screenshot image
                    await conn.sendMessage(from, { image: { url: screenshotUrl } }, { quoted: mek });

                } catch (e) {
                    const errorMessage = {
                        SI: "🚫 දෝෂයක් සිදු විය!",
                        EN: "🚫 An error occurred!"
                    };
                    reply(errorMessage[language]);
                    console.log(e);
                }
            }
        });

    } catch (e) {
        const errorMessage = {
            SI: "🚫 දෝෂයක් සිදු විය!",
            EN: "🚫 An error occurred!"
        };
        reply(errorMessage[language]);
        console.log(e);
    }
});

// Function to capture the screenshot using the API
async function captureScreenshot(url, tampilan) {
    try {
        const response = await axios.get(`https://api.nyxs.pw/tools/ssweb?url=${encodeURIComponent(url)}&tampilan=${tampilan}`);

        if (response.data && response.data.result) {
            return response.data.result; // Return the screenshot image URL
        } else {
            throw new Error('Failed to get screenshot');
        }
    } catch (error) {
        console.error('Error capturing screenshot:', error.message);
        throw new Error('Screenshot capture failed');
    }
}


//=================================================================
cmd({
    pattern: 'newpaste',
    desc: 'Creates a new paste on Pastebin and returns the URL.',
    category: 'useful',
    react: '📄',
    filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
    try {
        const config = await readEnv();
        const PASTEBIN_API_KEY =`uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn`
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const language = config.LANGUAGE; // Language set either to 'SI' or 'EN'
        const pasteContent = args.join(' ');

        if (!pasteContent) {
            const noContentMessage = {
                SI: '📝 කරුණාකර paste එක සඳහා අන්තර්ගතයක් ලබා දෙන්න. උදාහරණයක්: `.newpaste මෙය මගේ නව paste අන්තර්ගතය වේ`',
                EN: '📝 Please provide some content for the paste. Example: `.newpaste This is my new paste content`'
            };
            return reply(noContentMessage[language]);
        }

        const pastebinUrl = 'https://pastebin.com/api/api_post.php';
        const pastebinParams = new URLSearchParams();
        pastebinParams.append('api_dev_key', PASTEBIN_API_KEY);
        pastebinParams.append('api_option', 'paste');
        pastebinParams.append('api_paste_code', pasteContent);
        pastebinParams.append('api_paste_private', 1);  
        pastebinParams.append('api_paste_expire_date', '10M');  
        pastebinParams.append('api_paste_name', 'New Paste');

        const response = await axios.post(pastebinUrl, pastebinParams);
        const pasteUrl = response.data;

        const successMessage = {
            SI: `📄 *ඔබගේ paste එක නිර්මාණය කර ඇත:* ${pasteUrl}\n\n${caption}`,
            EN: `📄 *Your paste has been created:* ${pasteUrl}\n\n${caption}`
        };

        if (pasteUrl.startsWith('https://')) {
            reply(successMessage[language]);
        } else {
            const errorMessage = {
                SI: `⚠️ paste එක නිර්මාණය කිරීමට අසාර්ථකයි. දෝෂය: ${pasteUrl}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
                EN: `⚠️ Failed to create paste. Error: ${pasteUrl}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
            };
            reply(errorMessage[language]);
        }
    } catch (error) {
        console.error('Error creating Pastebin paste:', error);
        const errorResponse = {
            SI: '⚠️ paste එක නිර්මාණය කිරීමේදී දෝෂයක් සිදු විය.',
            EN: '⚠️ An error occurred while creating the paste.'
        };
        reply(errorResponse[language]);
    }
});
//======================================================================================================================

cmd({
    pattern: 'getpaste',
    desc: 'Fetches the raw content of a Pastebin paste using its URL or key.',
    category: 'useful',
    react: '📄',
    filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
    try {
        const config = await readEnv();
        const PASTEBIN_API_KEY = `uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn` 
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const language = config.LANGUAGE; // Language set either to 'SI' or 'EN'
        const pasteUrl = args[0];
        if (!pasteUrl) {
            const noUrlProvidedMessage = {
                SI: '🔍 කරුණාකර Pastebin URL එකක් හෝ යතුරක් ලබා දෙන්න. උදාහරණයක්: `.getpaste https://pastebin.com/abcdefg`',
                EN: '🔍 Please provide a Pastebin URL or key. Example: `.getpaste https://pastebin.com/abcdefg`'
            };
            return reply(noUrlProvidedMessage[language]);
        }

        const pasteKey = pasteUrl.split('/').pop();
        const rawPastebinUrl = `https://pastebin.com/raw/${pasteKey}`;

        const response = await axios.get(rawPastebinUrl);
        const pasteContent = response.data;

        const pasteContentMessage = {
            SI: `📄 *Pastebin අන්තර්ගතය*:\n\n\`\`\`${pasteContent}\`\`\`\n\n${caption}`,
            EN: `📄 *Pastebin Content*:\n\n\`\`\`${pasteContent}\`\`\`\n\n${caption}`
        };

        reply(pasteContentMessage[language]);
    } catch (error) {
        console.error('Error retrieving Pastebin content:', error);
        const errorMessage = {
            SI: '⚠️ Pastebin අන්තර්ගතය ලබා ගැනීමේදී දෝෂයක් සිදු විය.',
            EN: '⚠️ An error occurred while retrieving the paste content.'
        };
        reply(errorMessage[language]);
    }
});
//=================================================================
const cybersecurityTips = {
    EN: [
        "Use a unique password for each of your accounts.",
        "Enable two-factor authentication (2FA) whenever possible.",
        "Keep your software and operating systems up to date.",
        "Be cautious when clicking on links in emails or messages.",
        "Use reputable antivirus software and keep it updated.",
        "Avoid using public Wi-Fi networks for sensitive transactions.",
        "Regularly back up your important data.",
        "Use a VPN when connecting to public networks.",
        "Be wary of phishing attempts in emails or messages.",
        "Don't share sensitive information on social media.",
        "Use encrypted messaging apps for sensitive communications.",
        "Regularly check your accounts for any suspicious activity.",
        "Use a password manager to generate and store strong passwords.",
        "Be cautious when downloading attachments from unknown sources.",
        "Enable automatic updates for your software and apps.",
        "Use privacy settings on your social media accounts.",
        "Avoid using easily guessable information in your passwords.",
        "Be careful what you plug into your devices (e.g., unknown USB drives).",
        "Use secure and encrypted cloud services for storing sensitive data.",
        "Educate yourself about current cybersecurity threats and best practices."
    ],
    SI: [
        "ඔබේ ගිණුම් සඳහා නිශ්චිත මුරපදයක් භාවිතා කරන්න.",
        "සමීපකාලයේ අවශ්‍ය නම් කටුසූර සහතිකය (2FA) සක්‍රිය කරන්න.",
        "ඔබේ මෘදුකාංග සහ මෙහෙයුම් me�ද්ධති යාවත්කාලීනව තබා ගන්න.",
        "ඊමේල් හෝ පණිවිඩ වලට සබැඳි පිළිබඳ වාසනාවන් ඇතුළත් වන විට සැකයක් දරන්න.",
        "හොඳම විරුස නිරාකරණ මෘදුකාංගයක් භාවිතා කරන්න.",
        "සංවේදී ගනුදෙනු සඳහා පොදු Wi-Fi ජාල භාවිතා කිරීමේදී වියෝජන වන්න.",
        "ඔබේ වැදගත් දත්ත පසුබැසීමේදී යාවත්කාලීනව තබා ගන්න.",
        "පොදු ජාල සම්බන්ධ වූ විට VPN එකක් භාවිතා කරන්න.",
        "ඊමේල් හෝ පණිවිඩ වලින් අපූරු ව්‍යාපෘති සඳහා අවධානයෙන් ඉන්න.",
        "සමාජ මාධ්‍යවල සංවේදී තොරතුරු බෙදා ගැනීමට එන්න.",
        "සංවේදී සන්නිවේදන සඳහා සංකේතිත පණිවිඩ යෙදුම් භාවිතා කරන්න.",
        "අසාමාන්‍ය ක්‍රියාවන් සඳහා ඔබේ ගිණුම් පරීක්ෂා කරන්න.",
        "ඉහල මුරපද ප්‍රධානකරුවන් නිර්මාණය කිරීමට සහ රැඳවීමට මුරපද කළමනාකරු භාවිතා කරන්න.",
        "නොදන්නා සම්පත් වලින් සහිත පිටු අයැදුම් ප්‍රවේශය කරන්නේ නැත.",
        "ඔබේ මෘදුකාංග සහ යෙදුම් සඳහා ස්වයංක්‍රීය යාවත්කාලීන කිරීම සක්‍රිය කරන්න.",
        "ඔබේ සමාජ මාධ්‍ය ගිණුම් සඳහා පෞද්ගලිකත්වය සැකසුම් භාවිතා කරන්න.",
        "මුරපද වලදී පහසුවෙන් සොයා ගත හැකි තොරතුරු භාවිතා කිරීමෙන් වළකින.",
        "ඔබේ උපකරණ වලට දාන්නා බවට අවධානයක් දියත් කරන්න (උදා: නොදන්නා USB රථ යාත්‍රා).",
        "සංවේදී දත්ත ගබඩා කිරීමට ආරක්ෂිත සහ සංකේතිත කලාප සේවා භාවිතා කරන්න.",
        "වත්මන් කාණ්ඩාංක ආරක්ෂිත බලපෑම් පිළිබඳ වාසනාවන් සොයා බලන්න."
    ]
};

cmd({
    pattern: "cybertips",
    alias: ["hackertips"],
    desc: "Get random cybersecurity tips.",
    category: "useful",
    react: "🛡️",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const config = await readEnv();
        const lang = config.LANGUAGE || 'EN'; // Get the language preference
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        // Multi-language messages
        const accessDeniedText = lang === 'SI' ? "*🚫 ඔබ කළු ලැයිස්තුවේ නාමාවලියට ගිහින් ඇත. ඇතුලත් වීමට අවසර නැහැ.*" : "*🚫 You are blacklisted. Access denied.*";
        const accessDeniedGeneral = lang === 'SI' ? "*😢 අයිතිකාරකම ලබා ගැනීමට ඔබට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!*" : "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*";
        const tipsHeader = lang === 'SI' ? "🛡️ *සයිබර් ආරක්ෂිත උපදෙස්* 🛡️" : "🛡️ *Cybersecurity Tips* 🛡️";
        const tipsIntro = lang === 'SI' ? "> අන්තර්ජාලයේ ආරක්ෂිත වීම සඳහා මෙම වැදගත් උපදෙස් අනුගමනය කරන්න:" : "> Stay safe online with these important tips:";
        const tipsFooter = lang === 'SI' ? "> 🔐 සෙවණැති: ඔබේ අන්තර්ජාල ආරක්ෂාව ඔබගේ අත් හිමිකම් යටතේය!" : "> 🔐 Remember: Your online security is in your hands!";
        const repeatTips = lang === 'SI' ? "> තවත් උපදෙස් ගන්න? නැවත .cybertips විධානය භාවිතා කරන්න!" : "> Want more tips? Just use the .cybertips command again!";


        // Shuffle the tips array for the selected language
        const shuffled = cybersecurityTips[lang].sort(() => 0.5 - Math.random());

        // Select 5 random tips
        const selectedTips = shuffled.slice(0, 5);

        const tipsMessage = `
${tipsHeader}

${tipsIntro}

${selectedTips.map((tip, index) => `${index + 1}. ${tip}`).join('\n\n')}

${tipsFooter}

${repeatTips}

${caption}
        `.trim();

        await conn.sendMessage(from, { text: tipsMessage }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`🚫 An error occurred: ${e.message}`);
    }
});
//=================================================================
cmd({
    pattern: "gpass",
    alias: ["generatepassword"],
    desc: "Generate a strong password.",
    category: "useful",
    react: "🔐",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        const config = await readEnv();
        const lang = config.LANGUAGE || 'EN'; // Get the language preference
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        // Multi-language messages
        const accessDeniedText = lang === 'SI' ? "*🚫 ඔබ කළු ලැයිස්තුවේ නාමාවලියට ගිහින් ඇත. ඇතුලත් වීමට අවසර නැහැ.*" : "*🚫 You are blacklisted. Access denied.*";
        const accessDeniedGeneral = lang === 'SI' ? "*😢 අයිතිකාරකම ලබා ගැනීමට ඔබට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!*" : "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*";
        const invalidLengthMsg = lang === 'SI' ? "*♻ කරුණාකර මුරපදය සඳහා සත්‍ය දිගක් ලබා දෙන්න (අවම වශයෙන් අක්ෂර 8ක්).*" : "*♻ Please provide a valid length for the password (minimum 8 characters).*";
        const passwordMessageHeader = lang === 'SI' ? "🔐 *ඔබේ ශක්තිමත් මුරපදය* 🔐\n\n" : "🔐 *Your Strong Password* 🔐\n\n";
        const generateAnotherPrompt = lang === 'SI' ? "1 | *තවත් එකක් නිර්මාණය කරන්න*" : "1 | *Generate Another one*";
        const newPasswordHeader = lang === 'SI' ? "🔐 *මෙන්න ඔබගේ නව මුරපදය:* \n\n" : "🔐 *Here's your new password:* \n\n";


        const length = args[0] ? parseInt(args[0]) : 12; // Default length is 12 if not provided
        if (isNaN(length) || length < 8) {
            return reply(invalidLengthMsg);
        }

        const generatePassword = (len) => {
            const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
            let password = '';
            for (let i = 0; i < len; i++) {
                const randomIndex = crypto.randomInt(0, charset.length);
                password += charset[randomIndex];
            }
            return password;
        };

        const password = generatePassword(length);
        const message = `${passwordMessageHeader}${generateAnotherPrompt}\n\n${caption}`;

        // Send initial notification message
        const sentMessage = await conn.sendMessage(from, { text: message }, { quoted: mek });

        // Send the password in a separate message
        await conn.sendMessage(from, { text: password }, { quoted: mek });

        // Store the sent message for context


        // Wait for a reply
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply matches the "Generate Another one" prompt
            if (messageContext && messageContext.stanzaId === sentMessage.key.id && userReply === "1") {
                const newPassword = generatePassword(length);
                await conn.sendMessage(from, { text: `${newPasswordHeader}${newPassword}` }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        const errorMsg = lang === 'SI' ? `❌ මුරපදය නිර්මාණය කිරීමට දෝෂයක් ඇති වී ඇත: ${e.message}` : `❌ Error generating password: ${e.message}`;
        reply(errorMsg);
    }
});
//================================================================
cmd({
    pattern: "tempmail",
    desc: "Generate a temporary email address.",
    category: "useful",
    react: "✉️",
    filename: __filename
}, async (conn, mek, m, { from, quoted, isCmd, command, isGroup, sender, senderNumber, reply }) => {
    try {
        const config = await readEnv();
        const lang = config.LANGUAGE || 'EN'; // Get the language preference
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        // Multi-language messages
        const accessDeniedText = lang === 'SI' ? "*🚫 ඔබ කළු ලැයිස්තුවේ නාමාවලියට ගිහින් ඇත. ඇතුලත් වීමට අවසර නැහැ.*" : "*🚫 You are blacklisted. Access denied.*";
        const accessDeniedGeneral = lang === 'SI' ? "*😢 අයිතිකාරකම ලබා ගැනීමට ඔබට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!*" : "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*";
        const emailGenerationError = lang === 'SI' ? "❌ දෝෂයක්: කාලික ඊ-තැපැල් එකක් සාදන්න නොහැක. කරුණාකර පසුව නැවත උත්සාහ කරන්න." : "Error: Unable to generate a temporary email. Please try again later.";


        // API URL to generate a random temporary email
        const url = `https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1`;

        // Fetch the temporary email from 1secmail API
        const response = await axios.get(url);
        const data = response.data;

        // Check if an email was successfully generated
        if (!data || data.length === 0) {
            return reply(emailGenerationError);
        }

        const tempEmail = data[0]; // Extract the first generated email
         const tempEmailMessage = lang === 'SI' ? `✉️ *කාලික ඊ-තැපැල් සාදන ලදි*\n\n📧 ඊ-තැපැල්: ${tempEmail}` : `✉️ *Temporary Email Generated*\n\n📧 Email: ${tempEmail}`;
        // Send the generated temporary email to the user
        reply(tempEmailMessage);

    } catch (e) {
        console.error(e);
        const errorMsg = lang === 'SI' ? `❌ දෝෂයකි: ${e.message}` : `Error: ${e.message}`;
        reply(errorMsg);
    }
});
//======================================================================================================================
cmd({
    pattern: "checkmail",
    desc: "Check inbox of a temporary email address.",
    category: "useful",
    react: "📬",
    filename: __filename
}, async (conn, mek, m, { from, quoted, isCmd, command, args, q, isGroup, sender, senderNumber, reply }) => {
    try {
        const config = await readEnv();
        const lang = config.LANGUAGE || 'EN'; // Get the language preference
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
         const tempEmail = q || ''; // The email should be provided as an argument (e.g., .checkmail user@example.com)
        // Multi-language messages
        const accessDeniedText = lang === 'SI' ? "*🚫 ඔබ කළු ලැයිස්තුවේ නාමාවලියට ගිහින් ඇත. ඇතුලත් වීමට අවසර නැහැ.*" : "*🚫 You are blacklisted. Access denied.*";
        const accessDeniedGeneral = lang === 'SI' ? "*😢 අයිතිකාරකම ලබා ගැනීමට ඔබට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!*" : "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*";
        const noEmailMsg = lang === 'SI' ? "*♻ කරුණාකර පරීක්ෂා කිරීමට කාලික ඊ-තැපැල් ලිපිනයක් ලබා දෙන්න. උදා: `.checkmail user@example.com`*" : "*♻ Please provide a temporary email address to check. Example: `.checkmail user@example.com`*";
        const invalidEmailFormat = lang === 'SI' ? "ඊ-තැපැල් ආකෘතිය වලංගු නොවේ. කරුණාකර වාසනාවන් භාවිතා කරන්න." : "Invalid email format. Please provide a valid temporary email address.";
        const noMessagesFound = lang === 'SI' ? `📬 ${tempEmail} සඳහා කිසිදු පණිවිඩයක් නැත.` : `📬 No messages found for the email: ${tempEmail}`;
        const inboxHeader = lang === 'SI' ? `📬 *${tempEmail} සඳහා ගබඩා:*` : `📬 *Inbox for ${tempEmail}:*`;
        const messageDetails = (i, from, subject, date) => {
            return lang === 'SI' 
                ? `📩 *පණිවිඩය ${i + 1}*\n📧 *අවසරය*: ${from}\n📜 *මාතෘකාව*: ${subject}\n🕒 *දිනය*: ${date}\n💬 \`.readmail ${id}\` භාවිතා කර ඉංගිතය පියවර කරන්න.\n\n`
                : `📩 *Message ${i + 1}*\n📧 *From*: ${from}\n📜 *Subject*: ${subject}\n🕒 *Date*: ${date}\n💬 Use \`.readmail ${id}\` to read the full message.\n\n`;
        };

        // Validate email input

        if (!tempEmail) {
            return reply(noEmailMsg);
        }

        // Split the email into login and domain parts
        const [login, domain] = tempEmail.split('@');
        if (!login || !domain) {
            return reply(invalidEmailFormat);
        }

        // API URL to check messages for the temporary email
        const url = `https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`;

        // Fetch the messages from 1secmail API
        const response = await axios.get(url);
        const messages = response.data;

        // Check if there are any messages
        if (!messages || messages.length === 0) {
            return reply(noMessagesFound);
        }

        // Construct the message list to send
        let inboxInfo = `${inboxHeader}\n\n`;
        for (let i = 0; i < messages.length; i++) {
            const { id, from, subject, date } = messages[i];
            inboxInfo += messageDetails(i, from, subject, date);
        }

        // Send the inbox information
        await conn.sendMessage(from, { 
            text: inboxInfo,
            footer: '> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ'
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        const errorMsg = lang === 'SI' ? `❌ දෝෂයකි: ${e.message}` : `Error: ${e.message}`;
        reply(errorMsg);
    }
});
//================================================================
cmd({
    pattern: "weather",
    alias: ["weatherinfo"],
    desc: "🌤 Get weather information for a location",
    react: "🌤",
    category: "useful",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;


        if (!q) {
            return reply(config.LANGUAGE === 'SI' 
              ? "❗ කරුණාකර නගරයේ නම ලබාදෙන්න. භාවිතය: .weather [නගරය]" 
              : "❗ Please provide a city name. Usage: .weather [city name]");
        }

        const apiKey = config.OPENWEATHER_API_KEY; // Assuming you've added this to your config file

        const city = encodeURIComponent(q);
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d61a72574c11c4f36173b627f8cb177&units=metric`;
        const response = await axios.get(url);
        const data = response.data;

        const weatherSI = `
🌍 *${data.name}, ${data.sys.country} සඳහා කාලගුණ තොරතුරු* 🌍
[ *BHASHI-MD සෙවීම් එන්ජිම* ]

🌡️ *උෂ්ණත්වය*: ${data.main.temp}°C
🤷‍♀️ *විදිනය*: ${data.main.feels_like}°C
🚨 *අවම උෂ්ණත්වය*: ${data.main.temp_min}°C
🌝 *උච්චතම උෂ්ණත්වය*: ${data.main.temp_max}°C
💧 *උෂ්ණතාවය*: ${data.main.humidity}%
☁️ *කාලගුණය*: ${data.weather[0].main}
🌫️ *විස්තරය*: ${data.weather[0].description}
💨 *සුළගේ වේගය*: ${data.wind.speed} මීටර්/තත්.
🔽 *පීඩනය*: ${data.main.pressure} hPa

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
        `.trim();

        const weatherEN = `
🌍 *Weather Information for ${data.name}, ${data.sys.country}* 🌍
[ *BHASHI-MD SEARCH ENGINE* ]

🌡️ *Temperature*: ${data.main.temp}°C
🤷‍♀️ *Feels Like*: ${data.main.feels_like}°C
🚨 *Min Temp*: ${data.main.temp_min}°C
🌝 *Max Temp*: ${data.main.temp_max}°C
💧 *Humidity*: ${data.main.humidity}%
☁️ *Weather*: ${data.weather[0].main}
🌫️ *Description*: ${data.weather[0].description}
💨 *Wind Speed*: ${data.wind.speed} m/s
🔽 *Pressure*: ${data.main.pressure} hPa

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
        `.trim();

        return reply(config.LANGUAGE === 'SI' ? weatherSI : weatherEN);
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 404) {
            return reply(config.LANGUAGE === 'SI' 
              ? "🚫 නගරය සොයාගත නොහැක. කරුණාකර අකුරු පරීක්ෂා කර නැවත උත්සාහ කරන්න." 
              : "🚫 City not found. Please check the spelling and try again.");
        }
        return reply(config.LANGUAGE === 'SI' 
          ? "⚠️ කාලගුණ තොරතුරු ලබා ගැනීමේදී දෝෂයක් ඇති විය. කරුණාකර පසුව නැවත උත්සාහ කරන්න." 
          : "⚠️ An error occurred while fetching the weather information. Please try again later.");
    }
});
//=================================================================
//=================================================================
cmd({
    pattern: "whois",
    desc: "Perform WHOIS lookup on a domain or IP",
    category: "useful",
    react: "📄",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, reply }) => {
    const config = await readEnv();
    // Define multilingual messages
    const messages = {
        noTarget: {
            SI: "කරුණාකර WHOIS සොයා ගැනීම සඳහා ඕනෑමโดමයින් හෝ IP එකක් ලබා දෙන්න.",
            EN: "Please provide a domain or IP for the WHOIS lookup."
        },
        blacklisted: {
            SI: "*🚫 ඔබ අසාදු ලේඛනගත කර ඇත. ප්‍රවේශය ප්‍රතික්ෂේප විය.*",
            EN: "*🚫 You are blacklisted. Access denied.*"
        },
        accessDenied: {
            SI: "*😢 ප්‍රවේශය ප්‍රතික්ෂේප විය. මෙම විධානය භාවිතා කිරීමට ඔබට අවසර නැත.🎁 බොට් මාදිලිය වෙනස් කරන්න!*",
            EN: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*"
        },
        lookupFailed: {
            SI: "❌ WHOIS සොයා ගැනීම අසාර්ථක විය: ",
            EN: "❌ WHOIS lookup failed: "
        },
        footer: {
            SI: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
            EN: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        },
        error: {
            SI: "🚫 දෝෂයක් ඇති විය: ",
            EN: "🚫 An error occurred: "
        }
    };

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE.toUpperCase(); // Adjust to match your message object keys

        const target = args[0];
        if (!target) return reply(messages.noTarget[lang]);

        whois.lookup(target, (err, data) => {
            if (err) {
                return reply(`${messages.lookupFailed[lang]}${err.message}`);
            }
            reply(`*📄 WHOIS Lookup for ${target} 📄*\n\n${data}\n\n${messages.footer[lang]}`);
        });
    } catch (e) {
        console.log(e);
        reply(`${e.message}`);
    }
});
//================================================================
cmd({
    pattern: "ipgeo",
    desc: "Get geolocation information for an IP address",
    category: "useful",
    react: "🌐",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, reply }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const language = config.LANGUAGE || 'EN'; // Default to EN if not defined

        // Check if an IP address was provided
        if (args.length === 0) {
            const noIpMessage = {
                SI: "❌ කරුණාකර IP ලිපිනයක් ලබා දෙන්න. උදාහරණයක්: `.ipgeo 104.18.35.46`",
                EN: "❌ Please provide an IP address. Example: `.ipgeo 104.18.35.46`"
            };
            return reply(noIpMessage[language]);
        }

        const ipAddress = args[0];

        // Perform geolocation lookup using the public API (ipwhois.io)
        const apiUrl = `https://ipwhois.app/json/${ipAddress}`;
        const response = await axios.get(apiUrl);

        const data = response.data;

        // Check if the API call was successful
        if (!data.success) {
            const apiErrorMessage = {
                SI: `❌ IP ලිපිනය lookup අසාර්ථකයි: ${data.message}`,
                EN: `❌ IP address lookup failed: ${data.message}`
            };
            return reply(apiErrorMessage[language]);
        }

        const {
            ip,
            city,
            region,
            country,
            country_flag,
            isp,
            postal,
            timezone,
            latitude,
            longitude
        } = data;

        const loc = `${latitude}, ${longitude}`;
        const resultMessage = {
            SI: `
*乂 IP ලිපිනයේ තොරතුරු*

> 🔗 IP ලිපිනය: *${ip}*
> 🌆 නගරය: *${city}*
> 🗺️ ප්‍රදේශය: *${region}*
> 🌍 රාජ්‍යය: *${country}*
> 📡 ස්ථානය: *${loc}*
> 🏢 සංවිධානය: *${isp}*
> 📮 තැපැල් කේතය: *${postal}*
> ⏰ වේලාව: *${timezone}*`,
            EN: `乂 ＩＰ  ＡＤＤＲＥＳＳ  ＩＮＦＯ

> 🔗 𝖨𝗉 𝖠𝖽𝖽𝗋𝖾𝗌𝗌: *${ip}*
> 🌆 𝖢𝗂𝗍𝗒: *${city}*
> 🗺️ 𝖱𝖾𝗀𝗂𝗈𝗇: *${region}*
> 🌍 𝖢𝗈𝗎𝗇𝗍𝗋𝗒: *${country}*
> 📡 𝖫𝗈𝖼𝖺𝗍𝗂𝗈𝗇: *${loc}*
> 🏢 𝖮𝗋𝗀𝖺𝗇𝗂𝗓𝖺𝗍𝗂𝗈𝗇: *${isp}*
> 📮 𝖯𝗈𝗌𝗍𝖺𝗅 𝖢𝗈𝖽𝖾: *${postal}*
> ⏰ 𝖳𝗂𝗆𝖾 𝖹𝗈𝗇𝖾: *${timezone}*`
        };
        await conn.sendMessage(from, { image: { url: country_flag }, caption: resultMessage[language] }, { quoted: mek });

    } catch (e) {
        console.log(e);
        const errorMessage = {
            SI: `🚫 දෝෂයක් සිදු විය: ${e.message}`,
            EN: `🚫 An error occurred: ${e.message}`
        };
        reply(errorMessage[language]);
    }
});

//=================================================================
cmd({
    pattern: "userinfo",
    desc: "Get detailed information about the quoted user or sender.",
    category: "useful",
    react: "🧑‍💻",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, botNumber, pushname, isBotAdmins, reply }) => {
    try {
        // Load configuration and determine language
        const config = await readEnv();
        const language = config.LANGUAGE || 'EN';

        // Determine if user information should be fetched for the quoted user or the sender
        const targetUser = m.quoted ? m.quoted.sender : sender;
        const targetJid = targetUser; 
        const phoneNumber = targetJid.split('@')[0];
        const userName = m.quoted?.pushName || pushname || 'Not Available';

        // Fetch privacy settings for the target user
        const privacySettings = await conn.fetchPrivacySettings(true, targetJid);
        console.log("Privacy settings for target user:", privacySettings);

        // Fetch user profile picture based on privacy settings
        let userProfilePic = 'Not Available';
        if (privacySettings.profile === 'all' || privacySettings.profile === 'contacts') {
            try {
                userProfilePic = await conn.getProfilePicture(targetJid) || 'Not Available';
            } catch (error) {
                console.error("Error retrieving profile picture:", error);
                userProfilePic = 'Error retrieving picture.';
            }
        }

        // Handle last seen visibility based on privacy settings
        const lastSeen = privacySettings.last === 'all' ? m.lastSeen || 'Not Available' : 'Hidden';

        // Group-specific data
        let isAdmin = 'N/A';
        let joinDate = 'N/A';

        if (isGroup) {
            const groupMetadata = await conn.groupMetadata(from).catch(() => null);
            if (groupMetadata) {
                const participant = groupMetadata.participants.find(p => p.id === targetJid);
                isAdmin = participant && participant.admin ? 'Yes' : 'No';
                joinDate = participant ? participant.created : 'N/A';
            }
        }

        // Default disappearing mode
        const defaultDisappearingMode = privacySettings.defaultDisappearingMode !== undefined
            ? `${privacySettings.defaultDisappearingMode} seconds`
            : 'Not Set';

        // Prepare user information
        const userInfo = {
            SI: `👤 *පරිශීලක විස්තර*:\n\n📞 *දුරකථන අංකය*: ${phoneNumber}\n👤 *පෙන්වන නාමය*: ${userName}\n👑 *නායකයෙකු*: ${isAdmin}\n📷 *Profile Picture*: ${userProfilePic}\n🕒 *අවසන් දැක්ම*: ${lastSeen}\n📅 *එක්වූ දිනය*: ${joinDate}\n\n🔒 *පෞද්ගලිකත්ව තත්වය*:\n\n1️⃣ *Last Seen*: ${privacySettings.last}\n2️⃣ *Online*: ${privacySettings.online}\n3️⃣ *Profile Picture*: ${privacySettings.profile}\n4️⃣ *Status*: ${privacySettings.status}\n5️⃣ *Read Receipts*: ${privacySettings.readreceipts}\n6️⃣ *Groups*: ${privacySettings.groupadd}\n7️⃣ *Disappearing Mode*: ${defaultDisappearingMode}`,
            EN: `👤 *User Information*:\n\n📞 *Phone Number*: ${phoneNumber}\n👤 *Display Name*: ${userName}\n👑 *Admin*: ${isAdmin}\n📷 *Profile Picture*: ${userProfilePic}\n🕒 *Last Seen*: ${lastSeen}\n📅 *Join Date*: ${joinDate}\n\n🔒 *Privacy Settings*:\n\n1️⃣ *Last Seen*: ${privacySettings.last}\n2️⃣ *Online*: ${privacySettings.online}\n3️⃣ *Profile Picture*: ${privacySettings.profile}\n4️⃣ *Status*: ${privacySettings.status}\n5️⃣ *Read Receipts*: ${privacySettings.readreceipts}\n6️⃣ *Groups*: ${privacySettings.groupadd}\n7️⃣ *Disappearing Mode*: ${defaultDisappearingMode}`
        };

        // Send the user information to the chat
        await conn.sendMessage(from, {
            text: userInfo[language],
            footer: `> ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ-ʙᴏᴛ`
        });

    } catch (e) {
        console.error(e);
        const errorMessage = {
            SI: `🚫 දෝෂයක් සිදු විය: ${e.message}`,
            EN: `🚫 An error occurred: ${e.message}`
        };
        reply(errorMessage[language]);
    }
});

//=================================================================
cmd({
    pattern: "checkpw",
    alias: ["checkpassword"],
    desc: "Check password strength and provide improvement suggestions.",
    category: "useful",
    react: "🔒",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, reply }) => {
    try {
        // Load environment configuration
        const config = await readEnv();
        const language = config.LANGUAGE || "EN"; // Fallback to "EN" if LANGUAGE is not defined

        // Check if a password was provided
        if (!q) {
            const noPasswordMessage = {
                SI: "❌ කරුණාකර පරීක්ෂා කිරීමට මුරපදයක් ලබා දෙන්න. භාවිතය: `.checkpw YourPasswordHere`",
                EN: "❌ Please provide a password to check. Usage: `.checkpw YourPasswordHere`"
            };
            return reply(noPasswordMessage[language]);
        }

        // Analyze password strength using zxcvbn
        const result = zxcvbn(q);

        const strengthLevels = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
        const strength = strengthLevels[result.score];
        const crackTime = result.crack_times_display.offline_fast_hashing_1e10_per_second;

        const suggestions = result.feedback.suggestions.length > 0 
            ? result.feedback.suggestions.join("\n") 
            : "No specific suggestions.";

        const tips = result.feedback.warning || "Your password is good, but longer passwords are always better.";

        const resultMessage = {
            SI: `
🔒 *මුරපද බලය පරීක්ෂාව* 🔒

🚨 _බලය:_ ${strength}
👾 _උදාහරණ අත්හැරීමේ කාලය:_ *${crackTime}*

🚀 _සुधාරන යෝජනා:_
${suggestions}

🔑 *සාරාංශ උපදෙස්:*
${tips}

*⚠️ සටහන: ඔබේ සැබෑ මුරපද nunca ෙනෙලා එපා. මෙම මෙවලම අධ්‍යාපනික අරමුණු සඳහා පමණක් වේ.*

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
            EN: `
🔒 *Password Strength Check* 🔒

🚨 _Strength:_ ${strength}
👾 _Estimated crack time:_ *${crackTime}*

🚀 _Improvement Suggestions:_
${suggestions}

🔑 *General Tips:*
${tips}

*⚠️ Note: Never share your real passwords. This tool is for educational purposes only.*

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        };

        await conn.sendMessage(from, { text: resultMessage[language] }, { quoted: mek });
    } catch (e) {
        console.error(e);
        const errorMessage = {
            SI: `🚫 දෝෂයක් සිදු විය: ${e.message}`,
            EN: `🚫 An error occurred: ${e.message}`
        };
        reply(`${e.message}`);
    }
});
//=================================================================

cmd({
  pattern: "countdown",
  desc: "Set a countdown timer with a custom message.",
  category: "useful",
  react: "⏲️",
  filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
  try {
      const config = await readEnv();
    const senderNumber = m.sender;
    const isGroup = m.isGroup || false;
    const lang = config.LANGUAGE || 'EN'; // Get the language preference

    // Multi-language messages
    const accessDeniedText = lang === 'SI' ? "*🚫 ඔබ කළු ලැයිස්තුවේ නාමාවලියට ගිහින් ඇත. ඇතුලත් වීමට අවසර නැහැ.*" : "*🚫 You are blacklisted. Access denied.*";
    const accessDeniedGeneral = lang === 'SI' ? "*😢 අයිතිකාරකම ලබා ගැනීමට ඔබට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!*" : "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*";
    const usageText = lang === 'SI' ? "❌ **භාවිතය:** `!countdown [දෙසකීතයක්] [පණිවිඩය]`\nඋදාහරණය: `!countdown 10 වාසියක් ගන්න!`" : "❌ **Usage:** `!countdown [time in seconds] [message]`\nExample: `!countdown 10 Take a break!`";
    const invalidSecondsText = lang === 'SI' ? "❌ **දෝෂයක්:** කරුණාකර 0 ට වැඩි සත්‍ය කාලයක් ලබා දෙන්න." : "❌ **Error:** Please provide a valid number of seconds greater than 0.";

    if (args.length < 2) {
        return reply(usageText);
    }

    const seconds = parseInt(args[0]);
    const message = args.slice(1).join(' ');

    if (isNaN(seconds) || seconds <= 0) {
        return reply(invalidSecondsText);
    }

    const countdownSetText = lang === 'SI' 
      ? `🕰️ *ගණනාව ස්ථාපිත කර ඇත!*\n⏳ *කාලය:* ${seconds} සෙක්කන්ඩ්\n📝 *පණිවිඩය:* ${message}\n\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ` 
      : `🕰️ *Countdown Set!*\n⏳ *Time:* ${seconds} seconds\n📝 *Message:* ${message}\n\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;

    reply(countdownSetText);

    // Move the definition of timeUpText here, after initializing message
    const timeUpText = lang === 'SI' 
      ? `🚨 *කාලය ඉක්මවා ගියා!* \n_${message}_\n` 
      : `🚨 *Time's Up!*\n_${message}_\n`;

    setTimeout(() => {
        conn.sendMessage(from, { text: timeUpText });
    }, seconds * 1000);

  } catch (e) {
    console.error(e);
    reply("❌ **Error:** An unexpected error occurred while setting the countdown timer.");
  }
});
//=================================================================
cmd({
    pattern: "dnslook",
    alias: ["dns", "dnslookup"],
    desc: "Perform DNS lookup on a domain",
    category: "useful",
    react: "🌐",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, reply }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const language = config.LANGUAGE || "EN"; // Language set either to 'SI' or 'EN'

        // Check if a domain was provided
        if (args.length === 0) {
            const noDomainMessage = {
                SI: "❌ කරුණාකර ලිපිනයක් ලබා දෙන්න. උදාහරණයක්: `.dnslook example.com`",
                EN: "❌ Please provide a domain to lookup. Example: `.dnslook example.com`"
            };
            return reply(noDomainMessage[language]);
        }

        const domain = args[0];

        // Perform DNS lookup using the alternative API (https://api64.ipify.org or similar public APIs)
        const axios = require('axios');
        const apiUrl = `https://dns.google/resolve`;

        const response = await axios.get(apiUrl, {
            params: {
                name: domain,
                type: "A" // Looking for A records (IP addresses)
            }
        });

        const data = response.data;

        // Log API response to verify structure
        console.log(data);

        // Check for valid DNS response
        if (data.Status === 0 && data.Answer) {
            const ipAddresses = data.Answer.map((record) => record.data).join(", ");

            const resultMessage = {
                SI: `
🌐 *${domain}* සඳහා DNS Lookup

🔗 IP ලිපිනය: *${ipAddresses}*

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
                EN: `
🌐 DNS Lookup for *${domain}*

🔗 IP Address: *${ipAddresses}*

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
            };

            await conn.sendMessage(from, { text: resultMessage[language] }, { quoted: mek });
        } else {
            const lookupFailedMessage = {
                SI: `❌ DNS Lookup අසාර්ථකයි. කරුණාකර ලිපිනය හෝ API පිළිවෙල සත්‍යාපනය කරන්න.`,
                EN: `❌ DNS Lookup failed. Please verify the domain or API response.`
            };
            reply(lookupFailedMessage[language]);
        }
    } catch (e) {
        console.error(e);
        const errorMessage = {
            SI: `🚫 දෝෂයක් සිදු විය: ${e.message}`,
            EN: `🚫 An error occurred: ${e.message}`
        };
        reply(errorMessage[language]);
    }
});

//=================================================================
cmd({
    pattern: "jid",
    desc: "Get the JID of the chat.",
    category: "useful",
    react: "🔍",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const language = config.LANGUAGE; // Language set either to 'SI' or 'EN'
        // Retrieve the JID of the chat
        const chatJid = from;

        // Construct the JID response message
        const jidResponse = {
            SI: `📍 සංවාදයේ JID: ${chatJid}`,
            EN: `📍 Chat JID: ${chatJid}`
        };

        // Send the JID response
        await conn.sendMessage(from, { 
            text: jidResponse[language],
            footer: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        });

    } catch (e) {
        console.error(e);
        const errorMessage = {
            SI: `🚫 දෝෂයක් සිදු විය: ${e.message}`,
            EN: `🚫 An error occurred: ${e.message}`
        };
        reply(errorMessage[language]);
    }
});
//=================================================================
cmd({
    pattern: "send",
    desc: "Send a message to multiple JIDs",
    category: "useful",
    react: "📨",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Extract JIDs and message from arguments
        if (args.length < 2) {
            return reply("Please specify JIDs and a message in the format: `.send jid1,jid2,... message`.");
        }

        // Split JIDs and extract message
        const jids = args[0].split(",").map(j => j.trim() + "@s.whatsapp.net");
        const message = args.slice(1).join(" ").trim();

        if (jids.length === 0 || !message) {
            return reply("Please provide valid JIDs and a message.");
        }

        // Send the message to each JID
        for (let jid of jids) {
            await conn.sendMessage(jid, { text: message });
        }

        // React to the original command message to confirm success
        await conn.sendMessage(m.key.remoteJid, { react: { text: "📨", key: mek.key } });

    } catch (e) {
        console.error("Error sending message:", e);
        reply("An error occurred while sending the message.");
    }
});
//=================================================================

cmd({
    pattern: "solve",
    alias: ["mathsolve"],
    desc: "🔢 Solve mathematical expressions.",
    react: "🔢",
    category: "useful",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    const config = await readEnv();
    const langConfig = {
        EN: {
            accessDenied: "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!",
            blacklisted: "🚫 You are blacklisted. Access denied.",
            invalidAmount: "Please provide a valid amount.",
            conversionUsage: "Usage: .convert <amount> <from_currency> <to_currency>",
            conversionRateNotFound: (currency) => `Conversion rate for ${currency} not found.`,
            conversionInfo: (amount, fromCurrency, convertedAmount, toCurrency, rate) =>
                `💸_*Currency Conversion*_💸\n\n💵 *Amount*: ${amount} ${fromCurrency}\n🔄 *Converted Amount*: ${convertedAmount} ${toCurrency}\n📈 *Exchange Rate*: 1 ${fromCurrency} = ${rate} ${toCurrency}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
            mathExpression: (expression) => `📊 *Math Expression:* ${expression}`,
            mathResult: (result) => `✅ *Result:* ${result}`,
            invalidMathExpression: "❌ Invalid mathematical expression. Please check your input and try again.",
            errorFetchingData: (message) => `Error fetching data: ${message}`,
        },
        SI: {
            accessDenied: "😢 ඔබට මෙම විධානය භාවිතා කිරීමට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!",
            blacklisted: "🚫 ඔබට මාරු කර ඇත. ප්‍රවේශය ප්‍රහාර කලා.",
            invalidAmount: "කරුණාකර වලංගු මුදලක් ලබා දෙන්න.",
            conversionUsage: "භාවිතය: .convert <මුදල> <from_currency> <to_currency>",
            conversionRateNotFound: (currency) => `${currency} සඳහා මාරු අනුපාතය සොයා ගත නොහැක.`,
            conversionInfo: (amount, fromCurrency, convertedAmount, toCurrency, rate) =>
                `💸_*මුදල් මාරු*_💸\n\n💵 *මුදල*: ${amount} ${fromCurrency}\n🔄 *මාරු කරන ලද මුදල*: ${convertedAmount} ${toCurrency}\n📈 *මාරු අනුපාතය*: 1 ${fromCurrency} = ${rate} ${toCurrency}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
            mathExpression: (expression) => `📊 *ගණිත ප්‍රකාශය:* ${expression}`,
            mathResult: (result) => `✅ *ප්‍රතිඵල:* ${result}`,
            invalidMathExpression: "❌ වැරදි ගණිත ප්‍රකාශය. කරුණාකර ඔබගේ ඇතුලත්කිරීම් පරීක්ෂා කරන්න සහ නැවත උත්සාහ කරන්න.",
            errorFetchingData: (message) => `දත්ත ලබා ගැනීමට ඇති දෝෂය: ${message}`,
        },
    };

    const lang = config.LANGUAGE || 'EN'; // Set language preference
    const language = langConfig[lang];

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;



        // Evaluate the mathematical expression
        let result = math.evaluate(q); // Make sure `q` contains a valid expression

        // Prepare response with the solved result
        const response = `
${language.mathExpression(q)}
${language.mathResult(result)}

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
        `;

        // Send the result to the user
        return conn.sendMessage(from, { text: response }, { quoted: mek });

    } catch (e) {
        console.error(e);

        // Generic error message
        return reply(language.errorFetchingData(e.message));
    }
});
//==================================================================
cmd({
    pattern: "apod",
    desc: "Get NASA's Astronomy Picture of the Day",
    category: "useful",
    react: "🌠",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    const config = await readEnv();
    // Define language preference (SI for Sinhala, EN for English)
    const language = config.LANGUAGE; // Ensure this is set to either 'SI' or 'EN'

    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const data = await response.json();

        const replyText = {
            SI: `🌠 *${data.title}*\n\n${data.explanation}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
            EN: `🌠 *${data.title}*\n\n${data.explanation}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        };

        await conn.sendMessage(m.chat, { image: { url: data.url }, caption: replyText[language] });
    } catch (error) {
        console.error(error);
        const errorMsg = {
            SI: "⚠️ අන්තර්ගතයේ දෝෂයක් සිදුවිණි.",
            EN: "⚠️ An error occurred while fetching the Astronomy Picture of the Day."
        };
        await reply(errorMsg[language]);
    }
});
//====================================================================
cmd({
    pattern: "wa",
    desc: "Generate a WhatsApp link with a custom message for the quoted user.",
    category: "useful",
    react: "🔗",
    filename: __filename
}, async (conn, mek, m, { from, reply, quoted, text }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const language = config.LANGUAGE; // Language set either to 'SI' or 'EN'

        // Check if a message was quoted
        if (!quoted) {
            const noQuoteMessage = {
                SI: "❌ කරුණාකර රුකන පණිවුඩයක් පිළිතුරු කරන්න.",
                EN: "❌ Please reply to a message to generate a WhatsApp link for that user."
            };
            return reply(noQuoteMessage[language]);
        }

        // Default message if none provided
        const defaultMessage = {
            SI: 'ආයුබෝවන්!',
            EN: 'Hello!'
        };
        const message = (text && text.trim()) ? text.trim() : defaultMessage[language];

        // Extract the quoted user's phone number (assuming it's in E.164 format, i.e., with country code)
        const quotedJid = quoted.sender;
        const phoneNumber = quotedJid.split('@')[0]; // Extract the phone number part from the quoted JID

        // Construct the wa.me link with the message
        const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Send the response with the wa.me link
        const responseMessage = {
            SI: `🔗 *පුද්ගලයාගේ WhatsApp ලින්ක්:* ${waLink}`,
            EN: `🔗 *WhatsApp Link for quoted user:* ${waLink}`
        };

        await conn.sendMessage(from, { 
            text: responseMessage[language],
            footer: `> ${mono}ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛${mono}`,
            contextInfo: {
              externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powerd By Dark Hackers Zone Team. Enjoi Now Bhashi Project.',
                  thumbnailUrl: botimg2,
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                  mediaType: 1,
                  renderLargerThumbnail: false
              }
            }
        });

    } catch (e) {
        console.error(e);
        const errorMessage = {
            SI: `🚫 දෝෂයක් සිදු විය: ${e.message}`,
            EN: `🚫 An error occurred: ${e.message}`
        };
        reply(errorMessage[language]);
    }
});
//=================================================================
cmd({
    pattern: "randomuser",
    desc: "Generate a random user profile.",
    react: "👤",
    category: "useful",
    filename: __filename
},
async (conn, mek, m, { reply,from }) => {
    try {
        const response = await fetchJson("https://randomuser.me/api/");
        const user = response.results[0];

        // Extracting user details
        const name = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const phone = user.phone || "Not Available";
        const gender = user.gender.charAt(0).toUpperCase() + user.gender.slice(1); // Capitalizing the first letter
        const dob = new Date(user.dob.date).toLocaleDateString(); // Formatting date of birth
        const location = `${user.location.city}, ${user.location.country}`;
        const avatar = user.picture.large;

        // Formatting the reply message
        const replyMessage = `乂 ＲＡＮＤＯＭ ＵＳＥＲ ＩＮＦＯ\n
👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
⚥ Gender: ${gender}
🎂 Date of Birth: ${dob}
🌍 Location: ${location}

Want another user? Just type *.randomuser* again!`;

        await conn.sendMessage(from, { 
            text: replyMessage,
          contextInfo: {
              externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powerd By Dark Hackers Zone Team. Enjoi Now Bhashi Project.',
                  thumbnailUrl: avatar,
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                  mediaType: 1,
                  renderLargerThumbnail: true
              }
            }
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply("Could not fetch a random user. Please try again.");
    }
});
//=================================================================
cmd({
    pattern: "wordoftheday",
    desc: "Get a random word of the day with its meaning, part of speech, and more.",
    react: "📚",
    category: "useful",
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {
        // Fetch a random word
        const response = await fetchJson("https://random-word-api.herokuapp.com/word?number=1");
        const word = response[0];

        // Fetch detailed information of the word
        const meaningResponse = await fetchJson(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        // Check if the word has a meaning and other details
        if (meaningResponse && meaningResponse[0] && meaningResponse[0].meanings && meaningResponse[0].meanings.length > 0) {
            const meaning = meaningResponse[0].meanings[0].definitions[0].definition;
            const partOfSpeech = meaningResponse[0].meanings[0].partOfSpeech;
            const synonyms = meaningResponse[0].meanings[0].synonyms ? meaningResponse[0].meanings[0].synonyms.join(", ") : "No synonyms found";
            const example = meaningResponse[0].meanings[0].definitions[0].example || "No example available.";

            reply(`乂 ＷＯＲＤ ＯＦ ＴＨＥ ＤＡＹ 🌟:

> 📘*Word:* *${word}* 
> 🏷️*Part of Speech:* ${partOfSpeech} 
> 💡*Meaning:* ${meaning} 
> 🔄*Synonyms:* ${synonyms} 
> 🗣️*Example Usage:* "${example}" 

Stay curious and keep learning! 📖✨
`);
        } else {
            reply(` Not found 😞`);
        }
    } catch (e) {
        console.log(e);
        reply("Could not fetch the word of the day. Please try again later. 🙁");
    }
});

//================================================================
cmd({
    pattern: "affirmation",
    desc: "Get a daily affirmation.",
    react: "💖",
    category: "useful",
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {
        const affirmationData = await fetchJson("https://www.affirmations.dev/");

        // Enhanced response with better formatting and emojis
        reply(`💖 *Daily Affirmation:*  
> ✨ "${affirmationData.affirmation}" ✨  
> 💫 Believe in yourself and make today amazing! 🌟
`);
    } catch (e) {
        console.log(e);
        reply("Could not fetch an affirmation right now. Please try again later. 🙏");
    }
});
//=============================================================
cmd({
    pattern: "recipe",
    desc: "Get a random recipe.",
    react: "🍽️",
    category: "useful",
    filename: __filename
},
async (conn, mek, m, { reply }) => {
    try {
        const response = await fetchJson("https://www.themealdb.com/api/json/v1/1/random.php");
        const meal = response.meals[0];

        const replyMessage = `乂 ＲＡＮＤＯＭ  ＲＥＣＩＰＥ
*Recipe: ${meal.strMeal}*
🍳 Instructions: ${meal.strInstructions}

🥗 Ingredients:
${Object.keys(meal)
    .filter(key => key.startsWith('strIngredient') && meal[key])
    .map(key => `- ${meal[key]}`)
    .join('\n')}

🍴 Enjoy your meal!`;

        reply(replyMessage);
    } catch (e) {
        console.log(e);
        reply("Could not fetch a recipe. Please try again.");
    }
});
//============================================================
cmd({
    pattern: "holidays",
    desc: "Get public holidays for a specific year (e.g. 2023) and country (e.g. US).",
    react: "🎉",
    category: "useful",
    filename: __filename
},
async (conn, mek, m, { reply, args }) => {
    const country = args[0] || "US";
    const year = args[1] || new Date().getFullYear();

    try {
        const response = await fetchJson(`https://date.nager.at/api/v2/publicholidays/${year}/${country}`);
        if (response.length === 0) return reply(`🎉 *No holidays found for ${country} in ${year}.*`);

        const holidays = response.map(holiday => {
            return `📅 *${holiday.date}* - ${holiday.localName}`;
        }).join('\n');

        reply(`🎉 *Public Holidays in ${country} for ${year}:* 🎉\n\n${holidays}\n\nMake sure to mark your calendar! 📆✨`);
    } catch (e) {
        console.log(e);
        reply("😞 Could not fetch holidays. Please try again later.");
    }
});

//=================================================================
cmd({
    pattern: "readmore",
    desc: "Readmore message",
    category: "useful",
    react: "📝",
    filename: __filename
}, async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, sender
}) => {
    try {
        // Get the message text after the command (.readmore text)
        let readmoreText = q ? q : "No text provided"; 

        // Define the gap to create the "read more" effect (with special characters)
        let readmore = "\u200B".repeat(4000); // This creates a large gap between text

        // Full message to send
        let replyText = `${readmore}${readmoreText}`;

        // Send the message with the "Readmore" functionality
        await conn.sendMessage(from, { text: replyText }, { quoted: mek });

        // React to the message
        await conn.sendMessage(from, { react: { text: "📝", key: mek.key } });

    } catch (e) {
        console.log(e);
        reply(`Error: Something went wrong while sending the message. Please try again.`);
    }
});
//=================================================================
cmd({
    pattern: "binance",
    desc: "Get current cryptocurrency prices from Binance",
    category: "useful",
    react: "📊",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, reply }) => {
    try {
        const config = await readEnv();

        if (args.length === 0) {
            return reply(config.LANGUAGE === 'SI' 
              ? "❌ කරුණාකර ක්‍රිප්ටෝකරන්සි සංකේතය ප්‍රදානය කරන්න. උදාහරණයක්: .binance BTC හෝ .binance ETHUSDT" 
              : "❌ Please specify a cryptocurrency symbol. Example: .binance BTC or .binance ETHUSDT");
        }

        const symbol = args[0].toUpperCase();
        let pair = symbol;
        if (!symbol.endsWith('USDT')) {
            pair = symbol + 'USDT';
        }

        const response = await axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${pair}`);

        if (response.data) {
            const data = response.data;
            const priceMessageSI = `
📊 *Binance මිල තොරතුරු ${symbol} සඳහා* 📊

💰 වර්තමාන මිල: $${parseFloat(data.lastPrice).toFixed(2)}
📈 24h වෙනස: ${parseFloat(data.priceChange).toFixed(2)} (${parseFloat(data.priceChangePercent).toFixed(2)}%)
🔼 24h උච්චතම: $${parseFloat(data.highPrice).toFixed(2)}
🔽 24h පහතම: $${parseFloat(data.lowPrice).toFixed(2)}
📊 24h පරිමාව: ${parseFloat(data.volume).toFixed(2)} ${symbol}

💹 *වෙළඳපොළ කාර්යය*
• ආරම්භක මිල: $${parseFloat(data.openPrice).toFixed(2)}
• වසා දැමූ මිල: $${parseFloat(data.prevClosePrice).toFixed(2)}
• සාපේක්ෂ සාමාන්‍ය: $${parseFloat(data.weightedAvgPrice).toFixed(2)}

🔄 අවසන් යාවත්කාලීන කිරීම: ${new Date().toLocaleString()}

තවත් ක්‍රිප්ටෝකරන්සි එකක් පරීක්ෂා කිරීමට? .binance [SYMBOL] භාවිතා කරන්න

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
            `.trim();

            const priceMessageEN = `
📊 *Binance Price Info for ${symbol}* 📊

💰 Current Price: $${parseFloat(data.lastPrice).toFixed(2)}
📈 24h Change: ${parseFloat(data.priceChange).toFixed(2)} (${parseFloat(data.priceChangePercent).toFixed(2)}%)
🔼 24h High: $${parseFloat(data.highPrice).toFixed(2)}
🔽 24h Low: $${parseFloat(data.lowPrice).toFixed(2)}
📊 24h Volume: ${parseFloat(data.volume).toFixed(2)} ${symbol}

💹 *Market Activity*
• Open Price: $${parseFloat(data.openPrice).toFixed(2)}
• Close Price: $${parseFloat(data.prevClosePrice).toFixed(2)}
• Weighted Avg: $${parseFloat(data.weightedAvgPrice).toFixed(2)}

🔄 Last updated: ${new Date().toLocaleString()}

Want to check another crypto? Just use .binance [SYMBOL]

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
            `.trim();

            await conn.sendMessage(from, { text: config.LANGUAGE === 'SI' ? priceMessageSI : priceMessageEN }, { quoted: mek });
        } else {
            reply(config.LANGUAGE === 'SI' 
              ? `❌ ${symbol} සඳහා දත්ත ලබා ගැනීමට අසමත් විය. නිවැරදි සංකේතයක් ඇතුලත් කර ඇති බවට වග බලා ගන්න.` 
              : `❌ Failed to fetch data for ${symbol}. Make sure you've entered a valid symbol.`);
        }
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 400) {
            reply(config.LANGUAGE === 'SI' 
              ? "❌ නිරවද්‍ය සංකේතයක් නොවේ. කරුණාකර පරීක්ෂාකර නැවත උත්සාහ කරන්න." 
              : "❌ Invalid symbol. Please check and try again.");
        } else {
            reply(config.LANGUAGE === 'SI' 
              ? `🚫 දෝෂයක් සිදු විය: ${e.message}` 
              : `🚫 An error occurred: ${e.message}`);
        }
    }
});
//=================================================================







//========================- NSFW COMMANDS -========================================

//=================================================================
cmd({
    pattern: "xnxx",
    desc: "Search XNXX for videos.",
    react: "🔍",
    category: "NSFW",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        const config = await readEnv();
        const lang = config.LANGUAGE || 'EN'; 
        if(config.NFSW_CMD === true ) return reply ("reply eka");
        const noQueryProvidedText = lang === 'SI' ? "🪄 කරුණාකර සෙවීමේ පර්යේෂණයක් ලබා දෙන්න ✨" : "🪄 Please provide a search query ✨";
        const noResultsText = lang === 'SI' ? "❌ සෙවීම් පර්යේෂණය සඳහා වීඩියෝ සෙවීමක් නැත." : "❌ No videos found for the search query.";
        const fetchErrorText = lang === 'SI' ? "❌ සෙවීමේ ප්‍රතිඵල ලබා ගැනීමට අසමත් විය. කරුණාකර පසුගිය කරුණා කරන්න." : "❌ Failed to fetch the search results. Please try again later.";
        const errorOccurredText = lang === 'SI' ? "❗ දෝෂයක් සිදු විය." : "❗ An error occurred.";

        // Check if the search query is provided
        if (!q) return reply(noQueryProvidedText);

        // Construct the API URL for searching videos
        const apiUrl = `https://api.fgmods.xyz/api/search/xnxxsearch?text=${encodeURIComponent(q)}&apikey=Cu5RXZLd`;

        // Fetch search results from the API
        let response = await axios.get(apiUrl);
        let result = response.data;

        // Check if the API response contains data
        if (result && result.result && Array.isArray(result.result)) {
            if (result.result.length === 0) {
                return reply(noResultsText);
            }

            // Build the search results response with the new format
            let searchResults = lang === 'SI' ? "乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖷 𝖭 𝖷 𝖷  𝖲 𝖤 𝖠 𝖱 𝖢 𝖧  𝖤 𝖭 𝖦 𝖨 𝖭 𝖤\n\n" : "乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖷 𝖭 𝖷 𝖷  𝖲 𝖤 𝖠 𝖱 𝖢 𝖧  𝖤 𝖭 𝖦 𝖨 𝖭 𝖤\n\n";


            result.result.forEach((video, index) => {
                searchResults += lang === 'SI' 
                    ? `🎬 මාතෘකාව : ${video.title}\n 🖇️ පිවිසුම් ලින්කුව : ${video.link || 'N/A'}\n\n`
                    : `🎬 Title: ${video.title}\n 🖇️ URL: ${video.link || 'N/A'}\n\n`;
            });
            await conn.sendMessage(from, { 
                text: searchResults,
                contextInfo: {
                  externalAdReply: {
                      title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                      body: '© Presented By Bhashi Coders. Powerd By Dark Hackers Zone Team. Enjoi Now Bhashi Project.',
                      thumbnailUrl: botimg2,
                      sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                      mediaType: 1,
                      renderLargerThumbnail: false
                  }
                }
            }, { quoted: mek });

        } else {
            return reply(fetchErrorText);
        }
    } catch (e) {
        console.error(e);
        reply(`${errorOccurredText} ${e.message}`);
    }
});
//===============================================================
cmd({
    pattern: "xnxxdl",
    desc: "Download video from XNXX in high quality.",
    react: "📹",
    category: "NSFW",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        const config = await readEnv();
        const lang = config.LANGUAGE || 'EN'; // Set language preference
        if (config.NSFW_CMD == true) {
            return reply(lang === 'SI' ? "❌ NSFW කමාන්ඩ් සක්‍රීය කර නොමැත. එය බොට් විධිමත් මූලිකතා වලට අනුකූල නොවේ." : "❌ NSFW commands are disabled. They are not allowed due to bot's ethical guidelines.");
        }
        const noUrlProvidedText = lang === 'SI' ? "🪄 කරුණාකර බාගත කිරීමට XNXX වීඩියෝ URL එකක් ලබා දෙන්න ✨" : "🪄 Please provide an XNXX video URL to download ✨";
        const downloadFailedText = lang === 'SI' ? "❌ වීඩියෝ විස්තර ලබා ගැනීමට අසමත් විය. කරුණාකර URL පරීක්ෂා කර නැවත උත්සාහ කරන්න!" : "❌ Failed to fetch the video details. Please check the URL and try again!";
        const errorOccurredText = lang === 'SI' ? "❗ දෝෂයක් සිදු විය." : "❗ An error occurred.";

        // Check if the XNXX video URL is provided
        if (!q) return reply(noUrlProvidedText);

        // Construct the API URL for fetching video details
        const apiUrl = `https://api.fgmods.xyz/api/downloader/xnxxdl?url=${encodeURIComponent(q)}&apikey=Cu5RXZLd`;

        // Fetch video details from the API
        let response = await axios.get(apiUrl);
        let result = response.data;

        // Check if the API response contains data
        if (result && result.result) {
            const video = result.result;

            let desc = lang === 'SI'
                ? `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖷 𝖵 𝖨 𝖣 𝖤 𝖮  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 මාතෘකාව : ${video.title}
📻 බැලීම් : ${video.views || 'N/A'}
📁 ප්‍රමාණය : ${video.quality || 'N/A'}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖣 𝖮 𝖶 𝖭 ���� 𝖮 𝖠 𝖣  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  බාගත කිරීම : වීඩියෝ ආකාරයට.
│ 2️⃣  බාගත කිරීම : ගොනු ආකාරයට.
╰─────────────────────┈`
                : `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖷 𝖵 𝖨 𝖣 𝖤 𝖮  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

 🎬 𝖳𝗂𝗍𝗅𝖾 : ${video.title}
 📻 𝖵𝗂𝖾𝗐𝗌 : ${video.views || 'N/A'}
 📁 𝖲𝗂𝗓𝖤 : ${video.quality || 'N/A'}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖵𝗂𝖽𝖾𝗈 𝖳𝗒𝗉𝖾.
│ 2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍 𝖳𝗒𝗉𝖾.
╰─────────────────────┈`;

            // Send the video with options for download
            let sentMessage = await conn.sendMessage(from, { 
                    text: desc,
                  contextInfo: {
                      externalAdReply: {
                          title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                          body: '© Presented By Bhashi Coders. Powerd By Dark Hackers Zone Team. Enjoi Now Bhashi Project.',
                          thumbnailUrl: botimg2,
                          sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                          mediaType: 1,
                          renderLargerThumbnail: false
                      }
                    }
                }, { quoted: mek });

            // Listen for the user's reply to select the download option
            conn.ev.on("messages.upsert", async (messageUpsert) => {
                const msg = messageUpsert.messages[0];
                if (!msg.message || !msg.message.extendedTextMessage) return;

                const userReply = msg.message.extendedTextMessage.text.trim();
                const messageContext = msg.message.extendedTextMessage.contextInfo;

                if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                    if (userReply === "1") {
                        await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                        await conn.sendMessage(from, {
                            video: { url: video.url_dl },
                            caption: lang === 'SI' ? "🎥 වීඩියෝ ඩවුන්ලෝඩ් සම්පූර්ණයි!\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ" : "🎥 Video download complete!\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
                            mimetype: 'video/mp4'
                        });
                        await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                    } else if (userReply === "2") {
                        await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                        await conn.sendMessage(from, {
                            document: { url: video.url_dl },
                            caption: lang === 'SI' ? "📄 ගොනු ඩවුන්ලෝඩ් සම්පූර්ණයි!\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ" : "📄 Document download complete!\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
                            mimetype: 'video/mp4'
                        });
                        await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                    } else {
                        // Handle invalid option
                        await conn.sendMessage(from, {
                            text: lang === 'SI' ? "❗ වැරදි අංකයක් ලබා දී ඇත. කරුණාකර සුදානම් කළ අංකයක් ලබා දෙන්න." : "❗ Invalid option, please reply with 1 or 2."
                        });
                    }
                }
            });
        } else {
            // If the API response fails, send an error message
            return reply(downloadFailedText);
        }
    } catch (e) {
        console.error(e);
        reply(` ${e.message}`); // Include error message in response
    }
});
//================================================================
cmd({
    pattern: 'hentai2',
    desc: 'Fetches NSFW Waifu images',
    category: 'NSFW',
    react: '🙄',
}, async (conn, mek, m, { from, quoted, reply }) => {
    const config = await readEnv();
    const url = 'https://api.waifu.pics/nsfw/waifu'; 
    const lang = config.LANGUAGE || 'EN'; // Set language preference
    if (config.NSFW_CMD == true) {
        return reply(lang === 'SI' ? "❌ NSFW කමාන්ඩ් සක්‍රීය කර නොමැත. එය බොට් විධිමත් මූලිකතා වලට අනුකූල නොවේ." : "❌ NSFW commands are disabled. They are not allowed due to bot's ethical guidelines.");
    }
    // Multi-language messages
    const nsfwDisabledText = lang === 'SI' ? "🚫 NSFW විධාන අබල කර ඇත." : "🚫 NSFW commands are currently disabled.";
    const noPermissionText = lang === 'SI' ? "😢 ඔබට මෙම විධානය භාවිතා කිරීමට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!" : "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!";

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        for (let i = 0; i < 5; i++) {
            const response = await axios.get(url);
            const imageUrl = response.data.url;
            await conn.sendMessage(from, { image: { url: imageUrl } }, { quoted: mek });
        }
    } catch (error) {
        console.error(error);
        reply(`🚫 An error occurred while retrieving the data: ${error.message}`);
    }
});

//========================================================================================================================================
// Command to fetch NSFW Trap images
cmd({
    pattern: 'trap',
    desc: 'Fetches NSFW trap images',
    category: 'NSFW',
    react: '🙄',
}, async (conn, mek, m, { from, quoted, reply }) => {
    const config = await readEnv();
    const url = 'https://api.waifu.pics/nsfw/trap';
    const lang = config.LANGUAGE || 'EN'; // Set language preference
    if (config.NSFW_CMD == true) {
        return reply(lang === 'SI' ? "❌ NSFW කමාන්ඩ් සක්‍රීය කර නොමැත. එය බොට් විධිමත් මූලිකතා වලට අනුකූල නොවේ." : "❌ NSFW commands are disabled. They are not allowed due to bot's ethical guidelines.");
    }
    // Multi-language messages
    const nsfwDisabledText = lang === 'SI' ? "🚫 NSFW විධාන අබල කර ඇත." : "🚫 NSFW commands are currently disabled.";
    const noPermissionText = lang === 'SI' ? "😢 ඔබට මෙම විධානය භාවිතා කිරීමට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!" : "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!";

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        for (let i = 0; i < 5; i++) {
            const response = await axios.get(url);
            const imageUrl = response.data.url;
            const caption = `Trap Waifu Image #${i + 1} 🔥\n\n> ${mono}ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛${mono}`;
            await conn.sendMessage(from, { image: { url: imageUrl }, caption }, { quoted: mek });
        }
    } catch (error) {
        reply(`🚫 An error occurred while retrieving the data: ${error.message}`);
    }
});

//========================================================================================================================================
// Command to fetch NSFW Neko images
cmd({
    pattern: 'hneko',
    desc: 'Fetches NSFW neko images',
    category: 'NSFW',
    react: '🙄',
}, async (conn, mek, m, { from, quoted, reply }) => {
    const config = await readEnv();
    const url = 'https://api.waifu.pics/nsfw/neko';
    const lang = config.LANGUAGE || 'EN'; // Set language preference
    if (config.NSFW_CMD == true) {
        return reply(lang === 'SI' ? "❌ NSFW කමාන්ඩ් සක්‍රීය කර නොමැත. එය බොට් විධිමත් මූලිකතා වලට අනුකූල නොවේ." : "❌ NSFW commands are disabled. They are not allowed due to bot's ethical guidelines.");
    }
    // Multi-language messages
    const nsfwDisabledText = lang === 'SI' ? "🚫 NSFW විධාන අබල කර ඇත." : "🚫 NSFW commands are currently disabled.";
    const noPermissionText = lang === 'SI' ? "😢 ඔබට මෙම විධානය භාවිතා කිරීමට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!" : "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!";

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        for (let i = 0; i < 5; i++) {
            const response = await axios.get(url);
            const imageUrl = response.data.url;
            const caption = `Neko Waifu Image #${i + 1} 🐾\n\n> ${mono}ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛${mono}`;
            await conn.sendMessage(from, { image: { url: imageUrl }, caption }, { quoted: mek });
        }
    } catch (error) {
        reply(`🚫 An error occurred while retrieving the data: ${error.message}`);
    }
});

//========================================================================================================================================
// Command to fetch NSFW Blowjob images
cmd({
    pattern: 'blowjob',
    desc: 'Fetches NSFW blowjob images',
    category: 'NSFW',
    react: '🙄',
}, async (conn, mek, m, { from, quoted, reply }) => {
    const config = await readEnv();
    const url = 'https://api.waifu.pics/nsfw/blowjob';
    const lang = config.LANGUAGE || 'EN'; // Set language preference
    if (config.NSFW_CMD == true) {
        return reply(lang === 'SI' ? "❌ NSFW කමාන්ඩ් සක්‍රීය කර නොමැත. එය බොට් විධිමත් මූලිකතා වලට අනුකූල නොවේ." : "❌ NSFW commands are disabled. They are not allowed due to bot's ethical guidelines.");
    }
    // Multi-language messages
    const nsfwDisabledText = lang === 'SI' ? "🚫 NSFW විධාන අබල කර ඇත." : "🚫 NSFW commands are currently disabled.";
    const noPermissionText = lang === 'SI' ? "😢 ඔබට මෙම විධානය භාවිතා කිරීමට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!" : "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!";

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;


        for (let i = 0; i < 5; i++) {
            const response = await axios.get(url);
            const imageUrl = response.data.url;
            const caption = lang === 'SI' 
                ? `🍑 Blowjob Waifu රූපය #${i + 1}\n\n> ${mono}ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛${mono}` 
                : `Blowjob Waifu Image #${i + 1} 🍑\n\n> ${mono}ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛${mono}`;

            await conn.sendMessage(from, { image: { url: imageUrl }, caption }, { quoted: mek });
        }
    } catch (error) {
        reply(`🚫 An error occurred while retrieving the data: ${error.message}`);
    }
});
//========================================================================================================================================
cmd({
    pattern: 'hentaivid',
    desc: 'Fetches NSFW hentai videos',
    category: 'NSFW',
    react: '🙄',
}, async (conn, mek, m, { from, quoted, reply }) => {
    const config = await readEnv();
    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE || 'EN'; // Set language preference
        if (config.NSFW_CMD == true) {
            return reply(lang === 'SI' ? "❌ NSFW කමාන්ඩ් සක්‍රීය කර නොමැත. එය බොට් විධිමත් මූලිකතා වලට අනුකූල නොවේ." : "❌ NSFW commands are disabled. They are not allowed due to bot's ethical guidelines.");
        }
        // Multi-language messages
        const nsfwDisabledText = lang === 'SI' ? "🚫 NSFW විධාන අබල කර ඇත." : "🚫 NSFW commands are currently disabled.";
        if (!config.NSFW_CMD) {
            return reply(nsfwDisabledText);
        }
        const noPermissionText = lang === 'SI' ? "😢 ඔබට මෙම විධානය භාවිතා කිරීමට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!" : "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!";

        let videos = await hentai();
        let length = videos.length > 10 ? 10 : videos.length;
        let i = Math.floor(Math.random() * length);

        await conn.sendMessage(from, {
            video: { url: videos[i].video_1 },
            caption: `*🎥Title:* ${videos[i].title}\n*> 🎥Category:* ${videos[i].category} 🎥\n\n> ${mono}ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛${mono}`
        }, { quoted: mek });
    } catch (error) {
        reply('🚫 An error occurred while retrieving the video: ' + error.message);
    }
});

async function hentai() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153);
        axios.get('https://sfmcompile.club/page/' + page)
            .then((data) => {
                const $ = cheerio.load(data.data);
                const results = [];
                $('#primary > div > div > ul > li > article').each(function () {
                    results.push({
                        title: $(this).find('header > h2').text(),
                        link: $(this).find('header > h2 > a').attr('href'),
                        category: $(this).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                        share_count: $(this).find('header > div.entry-after-title > p > span.entry-shares').text(),
                        views_count: $(this).find('header > div.entry-after-title > p > span.entry-views').text(),
                        type: $(this).find('source').attr('type') || 'video/mp4',
                        video_1: $(this).find('source').attr('src') || $(this).find('img').attr('data-src'),
                        video_2: $(this).find('video > a').attr('href') || ''
                    });
                });
                resolve(results);
            })
            .catch((error) => reject(error));
    });
}
//========================================================================================================================================

// Search XNXX Command
cmd({
    pattern: "xvideo",
    desc: "Search XNXX for videos.",
    react: "🔍",
    category: "NSFW",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE || 'EN';
        if (config.NSFW_CMD == true) {
            return reply(lang === 'SI' ? "❌ NSFW කමාන්ඩ් සක්‍රීය කර නොමැත. එය බොට් විධිමත් මූලිකතා වලට අනුකූල නොවේ." : "❌ NSFW commands are disabled. They are not allowed due to bot's ethical guidelines.");
        }
        // Multi-language messages
        const nsfwDisabledText = lang === 'SI' ? "🚫 NSFW විධාන අබල කර ඇත." : "🚫 NSFW commands are currently disabled.";
        const noPermissionText = lang === 'SI' ? "😢 ඔබට මෙම විධානය භාවිතා කිරීමට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!" : "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!";
        const blacklistedText = lang === 'SI' ? "🚫 ඔබ කළු ලැයිස්තුවේ නාමාවලියට ගිහින් ඇත. ඇතුලත් වීමට අවසර නැහැ." : "🚫 You are blacklisted. Access denied.";
        const noQueryProvidedText = lang === 'SI' ? "🪄 කරුණාකර සෙවීමේ පර්යේෂණයක් ලබා දෙන්න ✨" : "🪄 Please provide a search query ✨";
        const noResultsText = lang === 'SI' ? "❌ සෙවීම් පර්යේෂණය සඳහා වීඩියෝ සෙවීමක් නැත." : "❌ No videos found for the search query.";
        const fetchErrorText = lang === 'SI' ? "❌ සෙවීමේ ප්‍රතිඵල ලබා ගැනීමට අසමත් විය. කරුණාකර පසුගිය කරුණා කරන්න." : "❌ Failed to fetch the search results. Please try again later.";
        const errorOccurredText = lang === 'SI' ? "❗ දෝෂයක් සිදු විය." : "❗ An error occurred.";

        // Check if the search query is provided
        if (!q) return reply(noQueryProvidedText);

        // Construct the API URL for searching videos
        const apiUrl = `https://api.fgmods.xyz/api/search/xvideosearch?text=${encodeURIComponent(q)}&apikey=Cu5RXZLd`;

        // Fetch search results from the API
        let response = await axios.get(apiUrl);
        let result = response.data;

        // Check if the API response contains data
        if (result && result.result && Array.isArray(result.result)) {
            if (result.result.length === 0) {
                return reply(noResultsText);
            }

            // Build the search results response
            let searchResults = lang === 'SI' ? "🔍 *Xvideo සෙවීම් ප්‍රතිඵල:*\n\n" : "🔍 *XNXX Search Results:*\n\n";
            result.result.forEach((video, index) => {
                searchResults += `${index + 1}. *TITLE*: ${video.title}\n> 🔗 *Video URL*: ${video.url || 'N/A'}\n\n`;
            });

            // Send the search results as a message
            await conn.sendMessage(from, { text: searchResults }, { quoted: mek });
        } else {
            // If the API response fails, send an error message
            return reply(fetchErrorText);
        }
    } catch (e) {
        console.error(e);
        reply(`${errorOccurredText} ${e.message}`); // Include error message in response
    }
});

// Download XNXX Command
cmd({
    pattern: "xvideodl",
    desc: "Download video from XNXX in high quality.",
    react: "📹",
    category: "NSFW",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE || 'EN';
        if (config.NSFW_CMD == true) {
            return reply(lang === 'SI' ? "❌ NSFW කමාන්ඩ් සක්‍රීය කර නොමැත. එය බොට් විධිමත් මූලිකතා වලට අනුකූල නොවේ." : "❌ NSFW commands are disabled. They are not allowed due to bot's ethical guidelines.");
        }
        // Multi-language messages

        const noUrlProvidedText = lang === 'SI' ? "🪄 කරුණාකර බාගත කිරීමට XNXX වීඩියෝ URL එකක් ලබා දෙන්න ✨" : "🪄 Please provide an XNXX video URL to download ✨";
        const downloadFailedText = lang === 'SI' ? "❌ වීඩියෝ විස්තර ලබා ගැනීමට අසමත් විය. කරුණාකර URL පරීක්ෂා කර නැවත උත්සාහ කරන්න!" : "❌ Failed to fetch the video details. Please check the URL and try again!";


        // Check if the XNXX video URL is provided
        if (!q) return reply(noUrlProvidedText);

        // Construct the API URL for fetching video details
        const apiUrl = `https://api.fgmods.xyz/api/downloader/xvideosdl?url=${encodeURIComponent(q)}&apikey=Cu5RXZLd`;

        // Fetch video details from the API
        let response = await axios.get(apiUrl);
        let result = response.data;

        // Check if the API response contains data
        if (result && result.result) {
            const video = result.result;

            let desc = lang === 'SI'
                ? `🎬 *ශීර්ෂය*: ${video.title}\n> 👁️ *දැක්වීම්*: ${video.views || 'N/A'}\n> 📺 *ගුණාත්මකභාවය*: ${video.size|| 'N/A'}\n> ⏳ *කාලසීමාව*: ${video.vote || 'N/A'}`
                : `🎬 *TITLE*: ${video.title}\n> 👁️ *Views*: ${video.views || 'N/A'}\n> 📺 *Quality*: ${video.size || 'N/A'}\n> ⏳ *Vote*: ${video.vote|| 'N/A'}`;

            // Send the video
            await conn.sendMessage(from, {
                video: { url: video.url_dl },
                caption: desc,
                mimetype: 'video/mp4',
                contextInfo: {
                    externalAdReply: {
                        title: video.title,
                        body: "⚜️ ʙʜᴀꜱʜɪ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡᴀ ʙᴏᴛ 2024™️ | ©️ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠɪꜱʜᴡᴀ ᴍɪʜɪʀᴀɴɡᴀ ᴀɴᴅ ʙʜᴀꜱʜɪᴛʜᴀ | ᴛᴇᴀᴍ ʙʏ ᴅᴀʀᴋ ʜᴀᴄᴋ ᴢᴏɴᴇ",
                        thumbnailUrl: video.thumb, // Ensure 'article' is defined with a valid thumbnail
                        sourceUrl: video.url_dl, // Ensure 'article' is defined with a valid link
                        mediaType: 1, // 1 for image or video, set accordingly
                        renderLargerThumbnail: false // Adjust as necessary
                    }
                }
            }, { quoted: mek });
        } else {
            // If the API response fails, send an error message
            return reply(downloadFailedText);
        }
    } catch (e) {
        console.error(e);
        reply(`${errorOccurredText} ${e.message}`); // Include error message in response
    }
});
//=================================================================








//========================- FUN COMMANDS - ======================================
//=================================================================
const userTipIndex = new Map();

cmd({
    pattern: "studyhelper",
    desc: "Provide study tips and resources.",
    category: "fun",
    react: "📚",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    const config = await readEnv();
    const tips = {
        en: [
            "📖 Break your study time into manageable chunks with breaks in between.",
            "📝 Use active recall and spaced repetition to improve retention.",
            "🌟 Practice past exam papers and sample questions.",
            "🎯 Set specific goals for each study session.",
            "💡 Teach what you've learned to someone else to solidify your understanding.",
            "📚 Organize your study space to reduce distractions.",
            "📅 Create a study schedule and stick to it.",
            "🎧 Listen to instrumental music or white noise to improve focus.",
            "🔍 Summarize your notes to highlight key points.",
            "🧠 Use mnemonic devices to remember complex information.",
            "✍️ Practice writing essays and problem-solving regularly.",
            "🧩 Mix different subjects during study sessions to keep things interesting.",
            "📊 Use flashcards for quick review and memorization.",
            "🌐 Use online resources and educational videos to supplement your learning.",
            "💪 Stay physically active and exercise to boost cognitive function.",
            "🚶‍♂️ Take regular breaks to rest and recharge your mind.",
            "💤 Ensure you get enough sleep for optimal cognitive performance.",
            "🥗 Eat a balanced diet to support brain health and concentration.",
            "📈 Track your progress to stay motivated and identify areas for improvement.",
            "👥 Study with friends or in study groups to gain different perspectives.",
            "🔖 Use color-coded notes or diagrams to visually organize information.",
            "📖 Read textbooks and additional materials for a deeper understanding.",
            "🕒 Practice time management during exams and assignments.",
            "📚 Set aside dedicated time for review and revision before exams.",
            "✏️ Practice mindfulness and stress-relief techniques to manage exam anxiety.",
            "🔑 Focus on understanding concepts rather than rote memorization.",
            "🎯 Set realistic and achievable study goals to maintain motivation.",
            "💡 Use apps and tools for time management and productivity.",
            "🎓 Seek help from teachers or tutors if you're struggling with specific topics.",
            "📚 Read summaries and highlights to reinforce learning.",
            "🎯 Stay organized with a planner or to-do list for tasks and deadlines.",
            "🧠 Challenge yourself with practice questions and mock tests regularly.",
            "🔄 Review and revisit material periodically to reinforce learning."
        ],
        si: [
            "📖 ඔබගේ අධ්‍යයන කාලය කළමනාකරණය කළ හැකි කොටස් වලට බෙදාගන්න, අතර අතර වරාය කරන්න.",
            "📝 මතකය වර්ධනය කිරීමට සක්‍රීය ප්‍රතිලාභය සහ ස්ථානය නිවාස කිරීම් භාවිතා කරන්න.",
            "🌟 පසුගිය පරීක්ෂණ කඩපත සහ සාම්පල ප්‍රශ්න මනාප කරන්න.",
            "🎯 ඔබගේ සියලු අධ්‍යයන සැසියකට නිශ්චිත ඉලක්ක සකසන්න.",
            "💡 ඔබ ඉගෙනගත් දේ කිසියම් අයෙකුට උගන්වනවා අධ්‍යයනය තහවුරු කිරීමට.",
            "📚 ඔබගේ අධ්‍යයන අවකාශය සංවිධානය කරන්න සහ අපහසුතා අඩු කරන්න.",
            "📅 අධ්‍යයන කාලසටහනක් සාදා එය අනුගමනය කරන්න.",
            "🎧 මනාව අවධානය යොමු කිරීමට ආශ්‍රිත සංගීතය හෝ සුළඟකාරී සංගීතය අසන්න.",
            "🔍 ඔබගේ සටහන් සංක්ෂේප කරන්න ප්‍රධාන ලක්ෂණ තනි කරන්න.",
            "🧠 දුෂ්කර තොරතුරු මතක තබා ගැනීමට මනෝමය උපකරණ භාවිතා කරන්න.",
            "✍️ නියුක්ත ලේඛන සහ ප්‍රශ්න විසඳීම සමාන්‍යයෙන් පුහුණු කරන්න.",
            "🧩 අධ්‍යයන සැසීන් අතර විවිධ විෂය මිශ්‍ර කරන්න.",
            "📊 වේගයෙන් නැවත සමාලෝචනය සඳහා ෆ්ලැෂ්කාර්ඩ් භාවිතා කරන්න.",
            "🌐 අන්තර්ජාල ආධාරක සහ අධ්‍යයන වීඩියෝ භාවිතා කරන්න.",
            "💪 ඔබේ මනෝකරණ ක්‍රියාවලීන් සවිෂ්ට කරා පවත්වා ගන්න.",
            "🚶‍♂️ ඔබගේ මනස නැවත ප්‍රභාෂය සහ යළි ඉල්ලීමට සාමාන්‍යයෙන් අධ්‍යයනය කරන්න.",
            "💤 හොඳින් නිදා ගැනීම ප්‍රමාණවත්ද යන්න විශ්වස කරන්න.",
            "🥗 මනස සහ අවධානය සහය වීම සඳහා සමීප ශාක්‍යයක් රැගෙන අයදුම් කරන්න.",
            "📈 ඔබගේ සංකල්ප වර්ධනය සඳහා යෝජනා සකස් කරන්න.",
            "👥 මිතුරන් සමඟ අධ්‍යයනය කරන්න.",
            "🔖 ඔබගේ සටහන් දෘශ්‍යමය සංවිධානය කරයි.",
            "📖 ප්‍රධාන ලක්ෂණ ඉගෙන ගැනීමට පිළිබඳ පර්යේෂණය කරන්න.",
            "🕒 විභාග සහ කටයුතු කළමනාකරණය කරන්න.",
            "📚 විභාග සඳහා පෙර අධ්‍යයනයට වෙන් කළ කාලයක් ඇතිකරන්න.",
            "✏️ මානසිකයෝ සහ එම අඩුවලකුව භාවිතා කරන්න.",
            "🔑 කාර්යක්ෂම මතකය සහ නිවැරදිව සලස්වනු ඇත.",
            "🎯 වාසිය සහ වාසියක් සක්‍රීය කරන්න.",
            "💡 කාල කළමනාකරණය සහ නිෂ්පාදන සඳහා යෙදුම් සහ මෙවලම් භාවිතා කරන්න.",
            "🎓 ගුරුවරුන් හෝ ආධාරකයන්ගෙන් උපකාරයක් ලැබීමට උත්සාහ කරන්න.",
            "📚 සංක්ෂේප හා අවධි පුහුණු ගැනීමට පාඨකයන් හෝ සංග්‍රහය කරන්න.",
            "🎯 කටයුතු සහ කාල සටහන් සඳහා සැකැස්මක් භාවිතා කරන්න.",
            "🧠 ක්‍රියාත���මක ප්‍රශ්න සහ නිදර්ශන භාවිතා කරන්න.",
            "🔄 කාල සටහන් සම්පූර්ණයෙන් හෝ නැවත නැවත සකස් කරන්න."
        ]
    };

    // Retrieve the user's language preference from the context, ensuring it matches the expected format
    const lang = (config.LANGUAGE || 'en').toLowerCase(); // Default to English if no language is set
    const selectedTips = tips[lang];

    // Check if selectedTips is valid
    if (!selectedTips) {
        return reply("📚 Sorry, we couldn't find tips for your selected language. Defaulting to English.");
    }

    // Retrieve the last sent tip index for the user
    let index = userTipIndex.get(from) || 0;

    // Send the next tip
    if (index < selectedTips.length) {
        reply(`*📚 Study Tip ${index + 1}:*\n${selectedTips[index]}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`);
        // Update the index for the next time the user requests a tip
        userTipIndex.set(from, index + 1);
    } else {
        reply("📚 You’ve received all study tips. Use `!studyhelper` again to start over.");
        // Reset the index if you want to allow users to start over
        userTipIndex.delete(from);
    }
});
//================================================================
cmd({
    pattern: "hack",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    react: "💻",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE || 'EN'; // Get the language preference

        // Start the hacking message sequence
        const initialMessage = await conn.sendMessage(from, { text: `𝖡𝗁𝖺𝗌𝗁𝗂 𝖧𝖺𝖼𝗂𝗇𝗀 𝖲𝗍𝖺𝗋𝗍𝖾𝖽 🖥️`}, { quoted: mek });

        const steps = [
            '[██]  10% 🖥️',
            '[████]  20% 🖥️',
            '[█████]  30% 🖥️',
            '[███████]  40% 🖥️',
            '[█████████]  50% 🖥️',
            '[███████████]  60% 🖥️',
            '[█████████████]  70% 🖥️',
            '[██████████████]  80% 🖥️',
            '[████████████████]  90% 🖥️',
            '[█████████████████] 100% 🖥️',
              '𝖧𝖺𝖼𝗄𝖾𝖽 𝖲𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅 𝖯𝗈𝗐𝖾𝗋𝖽 𝖡𝗒 𝖡𝗁𝖺𝗌𝗁𝗂 𝖳𝖾𝖺𝗆 🖥️'
        ];

        // Edit the initial message with each step
        for (const line of steps) {
            await conn.editMessage(from, initialMessage.key, { text: line });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error:* ${e.message}`);
    }
});

//=================================================================
cmd({
    pattern: "fact",
    desc: "🧠 Get a random fun fact",
    react: "🤓",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en';  // API for random facts
        const response = await axios.get(url);
        const fact = response.data.text;

        const funFactSI = `
🧠 *අනවශ්‍ය විනෝද තොරතුරක්* 🧠

${fact}

ඇත්තෙන්ම විනෝදජනක නේද? 😄

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
`;

        const funFactEN = `
🧠 *Random Fun Fact* 🧠

${fact}

Isn't that interesting? 😄

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
`;

        return reply(config.LANGUAGE === 'SI' ? funFactSI : funFactEN);
    } catch (e) {
        console.log(e);
        return reply(config.LANGUAGE === 'SI' 
          ? "⚠️ තොරතුරක් ලබා ගැනීමට උත්සාහ කිරීමේදී දෝෂයක් සිදු විය. කරුණාකර නැවත උත්සාහ කරන්න." 
          : "⚠️ An error occurred while fetching a fun fact. Please try again later.");
    }
});
//=================================================================
cmd({
  pattern: 'genderize',
  desc: 'Get the most likely gender of a name.',
  category: 'fun',
  react: '🧑‍🤝‍🧑',
  filename: __filename
}, async (conn, mek, m, { from, quoted, q, pushname, reply }) => {
    const config = await readEnv();
  // Define language preference (SI for Sinhala, EN for English)
  const language = config.LANGUAGE; // Ensure this is set to either 'SI' or 'EN'

  try {
      const senderNumber = m.sender;
      const isGroup = m.isGroup || false;

      if (!q) {
          const noInputMsg = {
              SI: "*♻ කරුණාකර විශ්ලේෂණය කිරීමට නම් ලබා දෙන්න.*",
              EN: "*♻ Please provide a name to analyze.*"
          };
          return reply(noInputMsg[language]);
      }

      const response = await axios.get(`https://api.genderize.io/?name=${q}`);
      const data = response.data;

      if (data.gender) {
          const genderResult = {
              SI: `✨ "${q}" නම් සඳහා ප්‍රධාන වශයෙන් ලිංගය: \n*${data.gender}* (${(data.probability * 100).toFixed(2)}%)\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
              EN: `✨ The most likely gender for the name "${q}" is: \n*${data.gender}* (${(data.probability * 100).toFixed(2)}%)\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
          };
          reply(genderResult[language]);
      } else {
          const noDataMsg = {
              SI: `😔 "${q}" නම් සඳහා ලිංග තොරතුරු නොමැත.`,
              EN: `😔 No gender data found for the name "${q}".`
          };
          reply(noDataMsg[language]);
      }
  } catch (error) {
      console.error('Error fetching gender data:', error);
      const errorMsg = {
          SI: '⚠️ ලිංග තොරතුරු ලබා ගැනීමේදී දෝෂයක් සිදුවීය. කරුණාකර යළි උත්සාහ කරන්න.',
          EN: '⚠️ An error occurred while fetching gender data. Please try again later.'
      };
      reply(errorMsg[language]);
  }
});

cmd({
    pattern: "bininfo",
    fromMe: true,
    desc: "🔍 Lookup BIN details for a given card number",
    category: "useful",
    react: '🔍',
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    // Validate if the user has provided a valid BIN number
    const bin = args[0]?.replace(/[^0-9]/g, "");  // Clean the input by removing non-numeric characters

    if (!bin || bin.length < 6) {
        return reply("❌ Please provide a valid BIN (minimum 6 digits).");
    }

    try {
        // Make a GET request to the BIN lookup API
        const response = await axios.get(`https://lookup.binlist.net/${bin}`);

        // Extract relevant data from the API response
        const { scheme, type, brand, country, bank } = response.data;

        // Prepare the reply message
        const binInfo = `乂 ＢＩＮ ＩＮＦＯＭＡＴＩＯＮ

╭──────────────●➤
├ 💳 𝖡𝗂𝗇 : ${bin}
├ 🔗 𝖲𝖼𝗁𝖾𝗆𝖾 : ${scheme}
├ ☘️ 𝖳𝗒𝗉𝖾  : ${type}
├ ⚙️ 𝖡𝗋𝖺𝗇𝖽  : ${brand}
├ ${country.emoji} 𝖢𝗈𝗎𝗇𝗍𝗋𝗒 : ${country.name} 
├ ©️ 𝖡𝖺𝗇𝗄 : ${bank.name}
╰──────────●➤`;

        // Send the response with BIN information
        reply(binInfo);
    } catch (error) {
        console.error("Error fetching BIN details:", error);
        reply("❌ Unable to fetch BIN details. Please try again later.");
    }
});
//=================================================================

//=================================================================
cmd({
    pattern: "predict",
    desc: "😂 Get a random joke",
    react: "🤣",
    category: "fun",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        const config = await readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE || 'EN'; // Get the language preference

        // Multi-language messages
        const accessDeniedText = lang === 'SI' ? "😢 අයිතිකාරකම ලබා ගැනීමට ඔබට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!" : "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!";
        const blacklistedText = lang === 'SI' ? "*🚫 ඔබ කළු ලැයිස්තුවේ නාමාවලියට ගිහින් ඇත. ඇතුලත් වීමට අවසර නැහැ.*" : "*🚫 You are blacklisted. Access denied.*";
        const errorText = lang === 'SI' ? "⚠️ දැන් ආස්ථාන කිරීමක් ලබාගත නොහැක. කරුණාකර පසුගිය කරුණා කරන්න." : "⚠️ Couldn't fetch a joke right now. Please try again later.";
        const jokeHeaderText = lang === 'SI' ? "😂 *ඔබට කුතුහලයක් ලබා දීමට තරම් කුතුහලක්!* 😂" : "😂 *Here's a random joke for you!* 😂";
        const url = 'https://official-joke-api.appspot.com/random_joke';  // API for random jokes
        const response = await axios.get(url);
        const joke = response.data;

        // Fixed joke message structure
        const jokeMessage = `
${jokeHeaderText}

*${joke.setup}*

${joke.punchline} 😄

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;

        return reply(jokeMessage);
    } catch (e) {
        console.log(e);
        return reply(errorText);
    }
});
//===============================================================
cmd({
    pattern: "gif",
    react: "🎥",
    desc: "Search for GIF-like animated images on Pixabay.",
    category: "fun",
    use: '.gif <search term> [tiny|small|medium|large]',
    filename: __filename
},
async (conn, mek, m, { from, q, args, reply }) => {
    const config = await readEnv();
    const PIXABAY_API_KEY = config.PIXABAY_API_KEY;
    const PIXABAY_API_URL = 'https://pixabay.com/api/videos/';
    const translations = {
        SI: {
            noPermission: "😢 ඔබට මෙම විධානය භාවිතා කිරීමට අවසර නොමැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!",
            blacklisted: "🚫 ඔබ කළු ලැයිස්තුවේ වේ. ප්‍රවේශය තහනම්ය.",
            provideSearchTerm: "❗ කරුණාකර සෙවීමේ පදයක් ලබා දෙන්න.",
            noGifsFound: "❗ සෙවීමේ පදය සඳහා කිසිදු GIF නොමැත.",
            finalMessage: "🎉 ඔබේ සෙවීමේ පදය සඳහා Pixabay හි ඉහළ GIFs ගණනාව මෙන්න.",
            errorOccurred: "❗ GIF ලබා ගැනීමේදී දෝෂයක් සිදු විය."
        },
        EN: {
            noPermission: "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!",
            blacklisted: "🚫 You are blacklisted. Access denied.",
            provideSearchTerm: "❗ Please provide a search term.",
            noGifsFound: "❗ No GIFs found for the provided search term.",
            finalMessage: "🎉 These are the top GIFs from Pixabay for your search term.",
            errorOccurred: "❗ Error occurred while fetching GIFs."
        }
    };

    const lang = config.LANGUAGE || 'EN'; // Default to English if not set

    try {
        if (!q) return reply(translations[lang].provideSearchTerm);

        // Extract search term and size preference
        const searchTerm = args.slice(0, -1).join(' ') || args[0];
        const sizePreference = args[args.length - 1].toLowerCase();

        // Validate size preference
        const validSizes = ['tiny', 'small', 'medium', 'large'];
        const gifSize = validSizes.includes(sizePreference) ? sizePreference : 'small';

        // Make request to Pixabay API for animated videos (GIF-like content)
        const response = await axios.get(PIXABAY_API_URL, {
            params: {
                key: PIXABAY_API_KEY,
                q: searchTerm,
                video_type: 'animation',
                per_page: 5
            }
        });

        const data = response.data.hits;
        if (data.length === 0) return reply(translations[lang].noGifsFound);

        // Send GIFs one by one
        for (let i = 0; i < data.length; i++) {
            const hit = data[i];
            const caption = `*${i + 1}.* ${hit.tags}\n👤 *User:* ${hit.user}\n👁️ *Views:* ${hit.views}\n❤️ *Likes:* ${hit.likes}\n🖼️ *Size:* ${gifSize}`;

            await conn.sendMessage(from, { 
                video: { url: hit.videos[gifSize].url },
                caption: caption,
                gifPlayback: true
            }, { quoted: mek });

            // Add a small delay between messages to prevent flooding
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        // Send a final message
        await conn.sendMessage(from, { 
            text: translations[lang].finalMessage
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(translations[lang].errorOccurred);
    }
});
//=================================================================



















//=====================-SEACH COMMAND-===================================
//=================================================================
// Define possible text formats
const textFormats = [
    `*Current Cricket Match:*`,
    `*Ongoing Cricket Match:*`,
    `*Latest Cricket Match:*`
];

// Function to get a random text format
const getRandomTextFormat = () => textFormats[Math.floor(Math.random() * textFormats.length)];

cmd({
  pattern: "cric",
  desc: "Get a random current cricket match.",
  react: "🏏",
  category: "search",
  filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
  const config = await readEnv();
  const language = config.LANGUAGE || "EN"; // Default to English
  const CRIC_URL = 'https://api.cricapi.com/v1/currentMatches';
  const CRIC_KEY = 'f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78';

  try {
    // Fetch current cricket matches
    let response = await fetch(`${CRIC_URL}?apikey=${CRIC_KEY}`);
    let data = await response.json();

    if (!data || !data.data || data.data.length === 0) {
      const noMatchMessage = {
        SI: "🏏 දැන් ක්‍රියාත්මක වන කිසිදු ක්‍රිකට් තරගයක් සොයා ගත නොහැකි විය.",
        EN: "🏏 No current cricket matches found."
      };
      return reply(noMatchMessage[language]);
    }

    // Function to send match details
    const sendMatchDetails = async (match) => {
      let matchesMessage = `🏏 ${getRandomTextFormat()}\n\n`;

      // Check if teamInfo exists and is valid
      let teamInfo = {};
      if (match.teamInfo && Array.isArray(match.teamInfo)) {
        teamInfo = match.teamInfo.reduce((info, team) => {
          if (team.shortname && team.img) {
            info[team.shortname] = team.img;
          }
          return info;
        }, {});
      }

      const matchInfoMessage = {
        SI: `🏆 *තරගය:* ${match.name} \n📍 *ස්ථානය:* ${match.venue} \n📅 *දිනය:* ${match.date} \n🆚 *කණ්ඩායම්:* ${match.teams.map((team) => {
          return teamInfo[team] ? `![${team}](${teamInfo[team]}) ${team}` : team;
        }).join(' 🆚 ')}\n⏳ *තත්ත්වය:* ${match.status} \n`,
        EN: `🏆 *Match:* ${match.name} \n📍 *Venue:* ${match.venue} \n📅 *Date:* ${match.date} \n🆚 *Teams:* ${match.teams.map((team) => {
          return teamInfo[team] ? `![${team}](${teamInfo[team]}) ${team}` : team;
        }).join(' 🆚 ')}\n⏳ *Status:* ${match.status} \n`
      };
      matchesMessage += matchInfoMessage[language];

      // Add scores if available
      if (Array.isArray(match.score)) {
        match.score.forEach(score => {
          const scoreMessage = {
            SI: `*${score.inning}:* ${score.r} ක් රැස්කඩ 🏏, ${score.w} ක් විකට් 🎯, ${score.o} ක් ඕවර් ⏱️\n`,
            EN: `*${score.inning}:* ${score.r} runs 🏏, ${score.w} wickets 🎯, ${score.o} overs ⏱️\n`
          };
          matchesMessage += scoreMessage[language];
        });
      }

      const promptMessage = {
        SI: "\n1 | *තවත් තරගයක් ලබා ගන්න*\n",
        EN: "\n1 | *Get Another Match*\n"
      };
      matchesMessage += promptMessage[language];
      matchesMessage += `\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;

      // Send the match message
      const sentMessage = await conn.sendMessage(from, { text: matchesMessage }, { quoted: mek });

      // Listen for replies to the sent message
      conn.ev.on("messages.upsert", async (messageUpsert) => {
        const replyMessage = messageUpsert.messages[0];
        if (!replyMessage.message || !replyMessage.message.extendedTextMessage) return;

        const userReply = replyMessage.message.extendedTextMessage.text.trim();
        const messageContext = replyMessage.message.extendedTextMessage.contextInfo;

        // Check if the reply is to the previously sent message
        if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
          if (userReply === '1') {
            // Select another random match
            let newMatch = data.data[Math.floor(Math.random() * data.data.length)];
            await sendMatchDetails(newMatch); // Send the details of the new match
          } else {
            const invalidInputMessage = {
              SI: "❗ අවලංගු පිළිතුර. තවත් තරගයක් ලබා ගැනීමට '1' කියා පිළිතුරක් එවන්න.",
              EN: "❗ Invalid input. Reply with '1' to get another match."
            };
            await conn.sendMessage(from, { text: invalidInputMessage[language] }, { quoted: replyMessage });
          }
        }
      });
    };

    // Select a random match
    let match = data.data[Math.floor(Math.random() * data.data.length)];
    await sendMatchDetails(match); // Send match details initially

  } catch (e) {
    console.log(e);
    const errorMessage = {
      SI: `⚠️ දෝෂයක් සිදු විය: ${e.message}`,
      EN: `⚠️ An error occurred: ${e.message}`
    };
    reply(errorMessage[language]);
  }
});

//=================================================================
cmd({
    pattern: "define",
    desc: "📚 Get the definition of a word",
    react: "🔍",
    category: "search",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        const config = await readEnv();

        // Multilingual messages
        const messages = {
            noWord: {
                SI: "❗ කරුණාකර නිර්වචනය කිරීමට පදයක් ලබා දෙන්න. භාවිතය: .define [pada]",
                EN: "❗ Please provide a word to define. Usage: .define [word]"
            },
            wordNotFound: {
                SI: "🚫 පදය හමු නොවීය. කරුණාකර වක්‍රීකරනය පරීක්ෂා කරන්න.",
                EN: "🚫 Word not found. Please check the spelling and try again."
            },
            fetchError: {
                SI: "⚠️ නිර්වචනය ලබා ගැනීමට දෝෂයක් සිදු විය. කරුණාකර නැවත උත්සාහ කරන්න.",
                EN: "⚠️ An error occurred while fetching the definition. Please try again later."
            },
            wordInfoHeader: {
                SI: "📚 *BASHI-MD ශබ්දකෝෂය* 🔍\n",
                EN: "📚 *BASHI-MD DICTIONARY* 🔍\n"
            },
            wordLabel: {
                SI: "📚 *පදය*: ",
                EN: "📚 *Word*: "
            },
            definitionLabel: {
                SI: "🔍 *නිර්වචනය*: ",
                EN: "🔍 *Definition*: "
            },
            exampleLabel: {
                SI: "📝 *උදාහරණය*: ",
                EN: "📝 *Example*: "
            },
            synonymsLabel: {
                SI: "🔗 *සමාන පද*: ",
                EN: "🔗 *Synonyms*: "
            },
        };

        // Check if a word is provided
        if (!q) return reply(messages.noWord[config.LANGUAGE.toUpperCase()]);

        const word = q;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        const response = await axios.get(url);
        const definitionData = response.data[0];

        const definition = definitionData.meanings[0].definitions[0].definition;
        const example = definitionData.meanings[0].definitions[0].example || 'No example available';
        const synonyms = definitionData.meanings[0].definitions[0].synonyms.join(', ') || 'No synonyms available';

        const lang = config.LANGUAGE.toUpperCase(); // Get the current language setting

        const wordInfo = `${messages.wordInfoHeader[lang]}\n${messages.wordLabel[lang]}${definitionData.word}\n${messages.definitionLabel[lang]}${definition}\n${messages.exampleLabel[lang]}${example}\n${messages.synonymsLabel[lang]}${synonyms}

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;

        return reply(wordInfo);
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 404) {
            return reply(messages.wordNotFound[config.LANGUAGE.toUpperCase()]);
        }
        return reply(messages.fetchError[config.LANGUAGE.toUpperCase()]);
    }
});
//=================================================================
cmd({
  pattern: "gits",
  alias: ["gitsearch"],
  desc: "Search GitHub repositories related to a query.",
  react: "🔍",
  category: "search",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    const config = await readEnv();
    const query = args.join(' ') || "vajira"; // Default query
    const language = config.LANGUAGE || "EN"; // Default language
    const apiUrl = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=10`;

    // Language dictionary
    const langDict = {
      EN: {
        noResults: "❌ No GitHub repositories found for the query.",
        resultsTitle: `*🔍 GitHub Search Results for '${query}'*:\n\n`,
        repoName: "📦 *Name:*",
        stars: "(⭐ {stars} stars)",
        description: "📝 *Description:*",
        owner: "👤 *Owner:*",
        url: "🔗 *Repository URL:*",
        language: "🌐 *Language:*",
        createdAt: "📅 *Created At:*",
        updatedAt: "📅 *Updated At:*",
        footer: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
      },
      SI: {
        noResults: "❌ GitHub පරිපාලන වලින් ප්‍රතිපල හමුවී නැත.",
        resultsTitle: `*🔍 '${query}' සොයන්නාගේ GitHub ප්‍රතිපල*:\n\n`,
        repoName: "📦 *නම:*",
        stars: "(⭐ {stars} තාරකා)",
        description: "📝 *විස්තරය:*",
        owner: "👤 *හිමිකරු:*",
        url: "🔗 *ගිණුම:*",
        language: "🌐 *භාෂාව:*",
        createdAt: "📅 *සෑදූ දිනය:*",
        updatedAt: "📅 *යාවත්කාලීන දිනය:*",
        footer: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
      }
    };

    const lang = langDict[language] || langDict["EN"];

    // Fetch data from GitHub API
    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/vnd.github.v3+json"
      }
    });

    if (!response.ok) throw new Error(`API responded with status ${response.status}`);

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return reply(lang.noResults);
    }

    // Prepare the search results message
    let resultMessage = lang.resultsTitle;

    data.items.forEach(repo => {
      resultMessage += `${lang.repoName} ${repo.name} ${lang.stars.replace("{stars}", repo.stargazers_count)}\n`;
      resultMessage += `${lang.description} ${repo.description || "No description"}\n`;
      resultMessage += `${lang.owner} ${repo.owner.login} | ${repo.owner.html_url}\n`;
      resultMessage += `${lang.url} ${repo.html_url}\n`;
      resultMessage += `${lang.language} ${repo.language || "Not specified"}\n`;
      resultMessage += `${lang.createdAt} ${new Date(repo.created_at).toLocaleString()}\n`;
      resultMessage += `${lang.updatedAt} ${new Date(repo.updated_at).toLocaleString()}\n\n`;
    });

    resultMessage += lang.footer;

    // Send the search results
    await conn.sendMessage(from, {
      text: resultMessage,
        contextInfo: {
          externalAdReply: {
              title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
              body: '© Presented By Bhashi Coders. Powerd By Dark Hackers Zone Team. Enjoi Now Bhashi Project.',
              thumbnailUrl: botimg2,
              sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
              mediaType: 1,
              renderLargerThumbnail: false
          }
        }
    }, { quoted: mek });

  } catch (e) {
    console.error("Error:", e);
    const errorMessage = {
      SI: `🚫 GitHub ප්‍රතිපල ලබා ගැනීමේදී දෝෂයක් සිදු විය: ${e.message}`,
      EN: `🚫 An error occurred while fetching GitHub repositories: ${e.message}`
    };
    reply(errorMessage[language || "EN"]);
  }
});

//=================================================================
cmd({
    pattern: "spotifys",
    desc: "Search Spotify songs by title.",
    category: "search",
    react: "🎵",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, config }) => {
    try {
        const lang = config?.LANGUAGE || "EN";

        const translations = {
            EN: {
                noQuery: "🔍 Please provide a song title to search. Example: `.spotifys Bad`",
                noResults: "🚫 No results found for your query.",
                searchResults: "🎵 *Spotify Search Results for:*",
                title: "🎬 *Title*",
                artist: "🖥️ *Artist*",
                album: "📑 *Album*",
                duration: "⏰ *Duration*",
                releaseDate: "📆 *Released*",
                spotifyLink: "🔗 *[Listen on Spotify]*",
                previewLink: "🎧 *[Preview Track]*",
                footer: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
            },
            SI: {
                noQuery: "🔍 කරුණාකර සොයන ගීත මාතෘකාව ඇතුලත් කරන්න. උදා: `.spotifys Bad`",
                noResults: "🚫 ඔබේ විමසීමට ගැලපෙන ප්‍රතිඵල හමු නොවීය.",
                searchResults: "🎵 *Spotify හි සොයන ප්‍රතිඵලය:*",
                title: "*🎬 මාතෘකාව*",
                artist: "*🖥️ නිර්මාතෘ*",
                album: "*📑 ඇල්බමය*",
                duration: "*⏰ කාල සීමාව*",
                releaseDate: "*📆 නිකුත් කළ දිනය*",
                spotifyLink: "*🔗 [Spotify තුළ අහන්න]*",
                previewLink: "*🎧 [ඉක්මන් නැරඹුම]*",
                footer: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
            }
        };

        const T = translations[lang] || translations.EN;

        const query = args.join(' ');
        if (!query) {
            return reply(T.noQuery);
        }

        // Fetch Spotify Search Results
        const apiUrl = `https://api.nyxs.pw/dl/spotify-search?title=${encodeURIComponent(query)}`;
        const response = await axios.get(apiUrl);

        if (!response.data || !response.data.status || !Array.isArray(response.data.result) || response.data.result.length === 0) {
            return reply(T.noResults);
        }

        // Extract first 5 results
        const results = response.data.result.slice(0, 5);

        let messageText = `${T.searchResults} _${query}_ 🎵\n\n`;

        for (const [index, track] of results.entries()) {
            messageText += `*${index + 1}. ${track.name}*\n`;
            messageText += `> ${T.artist}: ${track.artists}\n`;
            messageText += `> ${T.album}: ${track.album}\n`;
            messageText += `> ${T.duration}: ${track.duration}\n`;
            messageText += `> ${T.releaseDate}: ${track.releaseDate}\n`;
            messageText += `> ${T.spotifyLink}(${track.spotifyUrl})\n`;
            messageText += `> ${T.previewLink}(${track.previewUrl || "N/A"})\n\n`;
        }

        // Use the thumbnail from the first result
        const thumbnailUrl = results[0]?.thumbnail || null;

        if (thumbnailUrl) {
            await conn.sendMessage(from, {
                image: { url: thumbnailUrl },
                caption: `${messageText}\n\n${T.footer}`
            }, { quoted: mek });
        } else {
            await conn.sendMessage(from, {
                text: `${messageText}\n\n${T.footer}`
            }, { quoted: mek });
        }

    } catch (error) {
        console.error("Error fetching Spotify search results:", error);
        reply(`⚠️ An error occurred while searching Spotify songs. Details: ${error.message}`);
    }
});
//================================================================
cmd({
    pattern: "lyrics",
    desc: "Fetches song information, a brief lyrics preview, and the album cover image.",
    react: "🎵",
    category: "search",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
    // Get the user's language preference
    const lang = config.LANGUAGE || 'EN';

    // Multi-language messages
    const noSongNameMsg = lang === 'SI' ? "කරුණාකර ගීතයේ නමක් ලබා දෙන්න. උදාහරණය: !lyrics Never Gonna Give You Up" : "Please provide a song name. Example: !lyrics Never Gonna Give You Up";
    const errorFetchingMsg = lang === 'SI' ? `❌ දෝෂයකි: ` : `❌ Error: `;
    const lyricsInfoHeader = lang === 'SI' ? `🎵 *ගීත තොරතුරු:* ☘️\n\n` : `🎵 *Lyrics Information:* ☘️\n\n`;
    const titleText = lang === 'SI' ? `🎤 *ශීර්ෂය:* ` : `🎤 *Title:* `;
    const artistText = lang === 'SI' ? `👨‍🎤 *කලාකරුවා:* ` : `👨‍🎤 *Artist:* `;
    const albumText = lang === 'SI' ? `💿 *අලබම්:* ` : `💿 *Album:* `;
    const lyricsPreviewText = lang === 'SI' ? `📜 *ගීත පෙළ පෙරහුරුව:*\n` : `📜 *Lyrics Preview:*\n`;
    const supportArtistText = lang === 'SI' ? `🎧 කරුණාකර ඔබේ ගීතය මිලදී ගැනීමට කලාකරුවාට සහය වන්න!\n\n` : `🎧 Please support the artist by purchasing their music!\n\n`;
    const footerText = `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;

    // Check if song name is provided
    if (!args.join(" ")) return reply(noSongNameMsg);
    const songName = args.join(" ");

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        // Fetch the song information from the API
        const apiUrl = `https://api.popcat.xyz/lyrics?song=${encodeURIComponent(songName)}`;
        let response = await fetch(apiUrl);
        let data = await response.json();

        if (data.error) {
            return reply(`${errorFetchingMsg}${data.error}`);
        }

        // Prepare the message with song information, emojis, and formatting
        let message = lyricsInfoHeader;
        message += `${titleText}${data.title}\n`;
        message += `${artistText}${data.artist}\n`;
        message += `${albumText}${data.album || 'N/A'}\n\n`;
        message += `${lyricsPreviewText}"${data.lyrics}"\n\n`;
        message += supportArtistText;
        message += footerText;

        // Fetch the album cover image
        let imageBuffer;
        try {
            const imageResponse = await fetch(data.image);
            imageBuffer = await imageResponse.buffer();
        } catch (imageError) {
            console.log("Error fetching image:", imageError);
            imageBuffer = null;
        }

        // Send the formatted song information message with the album cover image
        if (imageBuffer) {
            await conn.sendMessage(from, { image: imageBuffer, caption: message }, { quoted: mek });
        } else {
            // If image fetch fails, send text only
            await conn.sendMessage(from, { text: message }, { quoted: mek });
        }
    } catch (e) {
        console.log(e);
        const errorMsg = `${errorFetchingMsg}${e.message}`;
        reply(errorMsg);
    }
});
//=================================================================
cmd({
    pattern: "npm",
    desc: "Fetch npm package details.",
    category: "search",
    react: "📦",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, config }) => {
    try {
        const config = await readEnv();
        const lang = config?.LANGUAGE || "EN";

        const translations = {
            EN: {
                notFound: "🚫 Package not found on npm.",
                packageTitle: "乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖭 𝖯 𝖬  𝖯 𝖪 𝖦  𝖲 𝖳 𝖠 𝖫 𝖪 𝖤 𝖱",
                packageDetails: "📁 𝖭𝗉𝗆 𝖯𝖺𝖼𝗄𝖺𝗀𝖾",
                description: "📰 𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇",
                latestVersion: "📆 𝖫𝖺𝗍𝖾𝗌𝗍 𝖵𝖾𝗋𝗌𝗂𝗈𝗇",
                author: "🖥️ 𝖠𝗎𝗍𝗁𝗈𝗋",
                repository: "📻 𝖱𝖾𝗉𝗈𝗌𝗂𝗍𝗈𝗋𝗒",
                url: "🖇️ 𝖴𝗋𝗅"
            },
            SI: {
                notFound: "🚫 NPM හි package එකක් හමු නොවීය.",
                packageTitle: "乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖭 𝖯 𝖬  𝖯 𝖪 𝖦  𝖲 𝖳 𝖠 𝖫 𝖪 𝖤 𝖱",
                packageDetails: "📁 𝖭𝗉𝗆 පැකේජය",
                description: "📰 විස්තරය",
                latestVersion: "📆 යාවත්කාලිනය",
                author: "🖥️ අයිතුකරු",
                repository: "📻 ගබඩාව",
                url: "🖇️ පිවිසුම් ලින්කුව"
            }
        };

        const T = translations[lang] || translations.EN;

        const query = args.join(' ');
        if (!query) {
            return reply(`⚠️ Please provide a package name to search. Example: \`.npm axios\``);
        }

        const apiUrl = `https://registry.npmjs.org/${query}`;
        const response = await axios.get(apiUrl);

        if (!response.data) {
            return reply(T.notFound);
        }

        const data = response.data;
        const packageName = data.name || "N/A";
        const description = data.description || "N/A";
        const latestVersion = data["dist-tags"]?.latest || "N/A";
        const author = data.author?.name || "N/A";
        const repository = data.repository?.url || "N/A";
        const npmUrl = `https://www.npmjs.com/package/${packageName}`;

        const message = `
${T.packageTitle}

${T.packageDetails} : ${packageName}
${T.description} : ${description}
${T.latestVersion} : ${latestVersion}
${T.author} : ${author}
${T.repository} : ${repository}
${T.url} : ${npmUrl}

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;

        reply(message);
    } catch (error) {
        console.error("Error fetching npm package details:", error);
        reply("⚠️ An error occurred while fetching npm package details.");
    }
});
//============================================================
cmd({
  pattern: "npmsearch",
  alias: ["npms"],
  desc: "Search NPM packages related to a query.",
  react: "🔍",
  category: "search",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    const config = await readEnv();
    const query = args.join(' ') || "express"; // Default query if no input provided
    const language = config.LANGUAGE || "EN"; // Fallback to English if no language is set
    const apiUrl = `https://api.npms.io/v2/search?q=${encodeURIComponent(query)}&size=5`; // Search top 5 results

    const translations = {
      EN: {
        noResults: "❌ No NPM packages found for the query.",
        searchResults: `*🔍 NPM Search Results for '${query}'*:\n\n`,
        packageName: "📦 *Package Name:*",
        description: "📝 *Description:*",
        author: "👤 *Author:*",
        publisher: "👥 *Publisher:*",
        updated: "📅 *Last Updated:*",
        quality: "🌟 *Quality:*",
        popularity: "🔥 *Popularity:*",
        maintenance: "🛠️ *Maintenance:*",
        links: "🔗 *Links:*",
        footer: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛᴇᴅ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
      },
      SI: {
        noResults: "❌ NPM පැකේජ සඳහා ප්‍රතිපල හමු වී නැත.",
        searchResults: `*🔍 '${query}' සොයන්නාගේ NPM පැකේජ ප්‍රතිපල*:\n\n`,
        packageName: "📦 *පැකේජ නම:*",
        description: "📝 *විස්තරය:*",
        author: "👤 *නිර්මාතෘ:*",
        publisher: "👥 *ප්‍රකාශකයා:*",
        updated: "📅 *අවසන් යාවත්කාලීන කල දිනය:*",
        quality: "🌟 *ගුණාත්මකත්වය:*",
        popularity: "🔥 *ජනප්‍රියත්වය:*",
        maintenance: "🛠️ *නඩත්තු:*",
        links: "🔗 *සබැඳි:*",
        footer: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛᴇᴅ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
      }
    };

    const T = translations[language] || translations.EN;

    // Fetch data from NPM registry
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data || !data.results || data.results.length === 0) {
      return reply(T.noResults);
    }

    // Prepare the result message
    let resultMessage = T.searchResults;

    data.results.forEach(pkg => {
      const packageData = pkg.package;
      const author = packageData.author ? packageData.author.name : "N/A";
      const publisher = packageData.publisher ? packageData.publisher.username : "N/A";

      resultMessage += `${T.packageName} ${packageData.name} (v${packageData.version})\n`;
      resultMessage += `${T.description} ${packageData.description || "N/A"}\n`;
      resultMessage += `${T.author} ${author}\n`;
      resultMessage += `${T.publisher} ${publisher}\n`;
      resultMessage += `${T.updated} ${new Date(packageData.date).toLocaleString()}\n`;
      resultMessage += `${T.quality} ${(pkg.score.detail.quality * 100).toFixed(2)}%\n`;
      resultMessage += `${T.popularity} ${(pkg.score.detail.popularity * 100).toFixed(2)}%\n`;
      resultMessage += `${T.maintenance} ${(pkg.score.detail.maintenance * 100).toFixed(2)}%\n`;
      resultMessage += `${T.links} [NPM](${packageData.links.npm}) | [Homepage](${packageData.links.homepage || "N/A"})\n\n`;
    });

    resultMessage += T.footer;

    // Send the result as a message
    await conn.sendMessage(from, {
      text: resultMessage,
      contextInfo: {
        externalAdReply: {
          title: 'Bhashi - MD NPM Search',
          body: 'Powered by NPMS API',
          thumbnailUrl: botimg2, // Replace with your bot's thumbnail
          sourceUrl: 'https://npms.io/'
        }
      }
    }, { quoted: mek });

  } catch (error) {
    console.error("Error fetching NPM packages:", error);
    const errorMessage = {
      SI: `🚫 NPM පැකේජ ලබා ගැනීමේදී දෝෂයක් සිදු විය: ${error.message}`,
      EN: `🚫 An error occurred while fetching NPM packages: ${error.message}`
    };
    reply(errorMessage[language || "EN"]);
  }
});

//============================================================
cmd({
    pattern: "ffstalk",
    desc: "Get Free Fire account and guild information.",
    react: "👤",
    category: "search",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q, config }) => {
    try {
        if (!q) return reply("🪄 Please provide a Free Fire ID.");

        const apiUrl = `https://api.davidcyriltech.my.id/ffstalk?id=${q}`;
        const accountData = await axios.get(apiUrl).then(res => res.data);

        if (!accountData.success) {
            return reply("❌ Failed to fetch account information. Please check the Free Fire ID.");
        }

        const account = accountData.account;
        const pet = accountData.pet_info;
        const guild = accountData.guild;
        const guildLeader = accountData.guild_leader;

        const accountInfo = ` 
🎮 *Account Info*:
> 🔢 *ID*: ${account.id}
> 🏷️ *Name*: ${account.name}
> 🏅 *Level*: ${account.level}
> ⚡ *XP*: ${account.xp}
> 🌍 *Region*: ${account.region}
> 👍 *Likes*: ${account.likes}
> 🏆 *Honor Score*: ${account.honor_score}
> 🥇 *Booyah Pass*: ${account.booyah_pass}
> 💥 *BR Points*: ${account.BR_points}
> 💎 *CS Points*: 🚨 *${account.CS_points}* 🚨
> 🗓️ *Created At*: ${account.created_at}
> ⏳ *Last Login*: ${account.last_login}

🐾 *Pet Info*:
> 🐶 *Name*: ${pet.name}
> 📈 *Level*: ${pet.level}
> ⚡ *XP*: ${pet.xp}

💎 *Guild Info*:
> 🏰 *Name*: ${guild.name}
> 📊 *Level*: ${guild.level}
> 👥 *Members*: ${guild.member_count} / ${guild.capacity}
  
👑 *Guild Leader*:
> 👤 *Name*: ${guildLeader.name}
> 🏅 *Level*: ${guildLeader.level}
> ⚡ *XP*: ${guildLeader.xp}
> 👍 *Likes*: ${guildLeader.likes}
> ⏳ *Last Login*: ${guildLeader.last_login}
> 💥 *BR Points*: ${guildLeader.BR_points}
> 💎 *CS Points*: 🚨 *${guildLeader.CS_points}* 🚨

${caption}
`;

        await conn.sendMessage(from, { text: accountInfo }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`❌ Not Found`);
    }
});

cmd({
    pattern: "githubstalk",
    alias: ["gstalk", "gitstalk"],
    desc: "Fetch detailed GitHub user profile including profile picture.",
    category: "search",
    react: "🖥️",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const config = await readEnv();
        const lang = config.LANGUAGE || 'EN'; // Get the language preference
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

        // Multi-language messages
        const accessDeniedText = lang === 'SI' ? "*🚫 ඔබ කළු ලැයිස්තුවේ නාමාවලියට ගිහින් ඇත. ඇතුලත් වීමට අවසර නැහැ.*" : "*🚫 You are blacklisted. Access denied.*";
        const accessDeniedGeneral = lang === 'SI' ? "*😢 අයිතිකාරකම ලබා ගැනීමට ඔබට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!*" : "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*";
        const noUsernameText = lang === 'SI' ? "කරුණාකර GitHub භාවිතාකරු නාමයක් ලබා දෙන්න." : "Please provide a GitHub username.";
        const errorFetchingText = lang === 'SI' ? "දත්ත ලබා ගැනීමට දෝෂයක් ඇතිවිය." : "Error fetching data.";

        const username = args[0];
        if (!username) {
            return reply(noUsernameText);
        }

        const apiUrl = `https://api.github.com/users/${username}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        let userInfo = lang === 'SI'
            ? `     🔍 *BHASHI-MD GIT STALK* 🔎\n\n👤 *යූසර් නාමය*: ${data.name || data.login}\n🔗 *GitHub URL*:(${data.html_url})\n📝 *ජීවන රේඛාව*: ${data.bio || 'ලැබුණේ නැත'}\n🏙️ *ස්ථානය*: ${data.location || 'නිකන්'}\n📊 *සමූහ රෙපොස්*: ${data.public_repos}\n👥 *අනුග්‍රහකයන්*: ${data.followers} | අනුගමනය කරනවා: ${data.following}\n📅 *හදවතට*: ${new Date(data.created_at).toDateString()}\n🔭 *පොදු ගිස්ට්ස්*: ${data.public_gists}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
            : `     🔍 *BHASHI-MD GIT STALK* 🔎\n\n👤 *Username*: ${data.name || data.login}\n🔗 *Github Url*:(${data.html_url})\n📝 *Bio*: ${data.bio || 'Not available'}\n🏙️ *Location*: ${data.location || 'Unknown'}\n📊 *Public Repos*: ${data.public_repos}\n👥 *Followers*: ${data.followers} | Following: ${data.following}\n📅 *Created At*: ${new Date(data.created_at).toDateString()}\n🔭 *Public Gists*: ${data.public_gists}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;

        await conn.sendMessage(from, { image: { url: data.avatar_url }, caption: userInfo }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(errorFetchingText);
    }
});
//===============================================================
cmd({
    pattern: "color",
    desc: "Fetches a color and sends it as a message.",
    react: "🎨",
    category: "search",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
    // Define multilingual messages
    const messages = {
        noColorCode: {
            SI: "කරුණාකර පැහැය කේතයක් ලබා දෙන්න (ආදර්ශය: #ffcc99).",
            EN: "Please provide a color code in hex format (e.g., #ffcc99)."
        },
        blacklisted: {
            SI: "*🚫 ඔබ අසාදු ලේඛනගත කර ඇත. ප්‍රවේශය ප්‍රතික්ෂේප විය.*",
            EN: "*🚫 You are blacklisted. Access denied.*"
        },
        accessDenied: {
            SI: "*😢 ප්‍රවේශය ප්‍රතික්ෂේප විය. මෙම විධානය භාවිතා කිරීමට ඔබට අවසර නැත.🎁 බොට් මාදිලිය වෙනස් කරන්න!*",
            EN: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*"
        },
        invalidColor: {
            SI: "පාඨය කේතය ගෙන නොහැකි විය.",
            EN: "Unable to retrieve color information."
        },
        colorInfo: {
            SI: `🎨 මෙන්න පැහැය පිළිබඳ විස්තර:\n\n🎨*පැහැය කේතය:* #`,
            EN: `🎨 Here is the color information:\n\n🎨*Color Code:* #`
        },
        footer: {
            SI: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
            EN: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        },
        error: {
            SI: "😔 දෝෂයක් ඇති විය: ",
            EN: "😔 An error occurred: "
        }
    };

    // Check if color code is provided
    if (!args[0]) return reply(messages.noColorCode[config.LANGUAGE.toUpperCase()]);

    const colorCode = args[0].replace('#', ''); // Remove the hash from the color code

    try {
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;
        const lang = config.LANGUAGE.toUpperCase(); // Adjust to match your message object keys
        // Fetch the color information from the API
        const response = await fetch(`https://api.popcat.xyz/color/${colorCode}`);
        const data = await response.json();

        // Check if the color data is valid
        if (!data || !data.color_image) {
            return reply(messages.invalidColor[lang]);
        }

        // Fetch the color image
        const imageResponse = await fetch(data.color_image);
        const imageBuffer = await imageResponse.buffer();

        // Prepare the color message
        const colorMessage = `${messages.colorInfo[lang]}${data.hex}\n` +
            `🎨 *Color Name:* ${data.name}\n` +
            `🎨 *RGB Value:* ${data.rgb}\n` +
            `🎨 *Brightened Color:* ${data.brightened}\n\n` +
            messages.footer[lang];

        // Send the color image and details
        await conn.sendMessage(from, { image: imageBuffer, caption: colorMessage }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${messages.error[lang]}${e.message}`);
    }
});
//================================================================
cmd({
    pattern: "yts",
    desc: "Search YouTube videos.",
    category: "search",
    react: "🎥",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        const query = args.join(' ');

        if (!query) {
            return reply("🔍 Please provide a search term. Example: `.yts coding tutorials`");
        }

        // Perform a YouTube search
        const searchResults = await yts(query);

        if (!searchResults || !searchResults.videos || searchResults.videos.length === 0) {
            return reply("🚫 No results found for your query.");
        }

        // Extract the first 5 search results
        const results = searchResults.videos.slice(0, 30);

        // Construct the reply message
        let messageText = `🎥 *YouTube Search Results for:* _${query}_ 🎥\n\n`;

        results.forEach((video, index) => {
            messageText += `*${index + 1}. ${video.title}*\n`;
            messageText += `> 🕒 Duration: ${video.timestamp}\n`;
            messageText += `> 👤 Channel: ${video.author.name}\n`;
            messageText += `> 🔗 [Watch Now](${video.url})\n\n`;
        });

        // Send the message
        await conn.sendMessage(from, { text: messageText }, { quoted: mek });

    } catch (error) {
        console.error("Error fetching YouTube search results:", error);
        reply("⚠️ An error occurred while searching for YouTube videos.");
    }
});

//===============================================
cmd({
    pattern: "srepo",
    desc: "Fetch information about a GitHub repository.",
    category: "search",
    react: "📁",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const messages = {
        noRepo: "❗ Please provide a GitHub repository name in the format `owner/repo`.",
        repoNotFound: "🚫 Repository not found. Please check the owner/repo format.",
        fetchError: "⚠️ Unable to fetch repository information. Please try again later.",
        repoDetailsHeader: "📁 _*GitHub Repository Info*_ 📁\n\n",
        repoName: "📌 *Name*: ",
        repoURL: "🔗 *URL*: ",
        repoDescription: "📝 *Description*: ",
        repoStars: "⭐ *Stars*: ",
        repoForks: "🍴 *Forks*: ",
        repoOwner: "🧑‍💻 *Owner*: ",
        repoLanguage: "🛠️ *Primary Language*: ",
        repoCreatedOn: "📅 *Created on*: ",
        repoLicense: "📜 *License*: ",
        footer: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛᴇᴅ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
        error: "🚫 An error occurred: "
    };

    try {
        const repoLink = args.join(' ');

        if (!repoLink) {
            return reply(messages.noRepo);
        }

        // Extract owner/repo from input
        const repoMatch = repoLink.match(/([^\/]+\/[^\/]+)/);
        if (!repoMatch) {
            return reply(messages.noRepo);
        }

        const [owner, repository] = repoMatch[0].split('/');

        // API endpoint
        const apiUrl = `https://api.github.com/repos/${owner}/${repository}`;

        // Fetch repository data from GitHub API
        const response = await fetch(apiUrl, {
            headers: {
                Accept: "application/vnd.github+json"
            }
        });

        if (response.status === 404) {
            return reply(messages.repoNotFound);
        } else if (!response.ok) {
            throw new Error("GitHub API error");
        }

        const repoData = await response.json();

        // Construct repository information message
        let repoInfo = `${messages.repoDetailsHeader}`;
        repoInfo += `${messages.repoName}${repoData.name || "N/A"}\n`;
        repoInfo += `${messages.repoURL}${repoData.html_url || "N/A"}\n`;
        repoInfo += `${messages.repoDescription}${repoData.description || "No description provided"}\n`;
        repoInfo += `${messages.repoStars}${repoData.stargazers_count || 0}\n`;
        repoInfo += `${messages.repoForks}${repoData.forks_count || 0}\n`;
        repoInfo += `${messages.repoOwner}${repoData.owner?.login || "N/A"}\n`;
        repoInfo += `${messages.repoLanguage}${repoData.language || "Not specified"}\n`;
        repoInfo += `${messages.repoCreatedOn}${new Date(repoData.created_at).toLocaleDateString()}\n`;
        repoInfo += `${messages.repoLicense}${repoData.license?.name || "No license specified"}\n`;
        repoInfo += `\n${messages.footer}`;

        // Sending the repository owner's avatar as an image
        const avatarUrl = repoData.owner?.avatar_url || '';
        await conn.sendMessage(from, {
            image: { url: avatarUrl },
            caption: repoInfo
        }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`${messages.error}${e.message}`);
    }
});


//================================================================

//================================================================
cmd({
    pattern: "tech",
    desc: "Get random technology facts or latest tech news with images.",
    category: "search",
    react: "💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    const messages = {
        EN: {
            accessDenied: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*",
            blacklisted: "*🚫 You are blacklisted. Access denied.*",
            techFact: `🖥️ Tech Fact of the Day:\n\n{{fact}}`,
            breakingNews: `*📰 Breaking Tech News 🚨*\n\n🔥 {{title}}\n\n📝 {{description}}\n\n*🔗 Read more:* {{url}}\n\n\n> {{footer}}`,
        },
        SI: {
            accessDenied: "*😢 ප්‍රවේශය ප්‍රතික්ෂේපිතයි. මෙම විධානය භාවිතා කිරීමට ඔබට අනුමැතිය නැත.🎁 Bot ආකාරය වෙනස් කරන්න!*",
            blacklisted: "*🚫 ඔබට වළක්වනු ලැබුණි. ප්‍රවේශය ප්‍රතික්ෂේපිතයි.*",
            techFact: `🖥️ අද දිනයේ තාක්ෂණ සත්‍යය:\n\n{{fact}}`,
            breakingNews: `*📰 දැන් සිටින තාක්ෂණය 🚨*\n\n🔥 {{title}}\n\n📝 {{description}}\n\n*🔗 තවත් කියවන්න:* {{url}}\n\n\n> {{footer}}`,
        }
    };
    try {
        const config = await readEnv();
        const senderNumber = m.sender;

        // Choose between tech fact or news with 70% chance for news
        const choice = Math.random() < 0.7 ? 'news' : 'fact';

        let message;
        let image = { url: botimg};  // Default to ALIVE_IMG

        if (choice === 'fact') {
            // Array of technology facts with emojis
            const techFacts = [
                "🦠 The first computer virus was created in 1983.",
                "🖱️ The first computer mouse was made of wood.",
                "⌨️ The QWERTY keyboard layout was designed to slow typing speed.",
                "📷 The first webcam was created to check the status of a coffee pot.",
                "💰 About 90% of the world's currency is digital.",
                "👩‍💻 The first computer programmer was a woman named Ada Lovelace.",
                "🏋️ The first electronic computer ENIAC weighed more than 27 tons.",
                "💾 The first hard drive could store just 5 MB of data.",
                "🌐 More than 570 new websites are created every minute.",
                "🎮 The first computer game was created in 1961."
            ];

            const randomFact = techFacts[Math.floor(Math.random() * techFacts.length)];
            message = messages[config.LANGUAGE].techFact.replace("{{fact}}", randomFact);
        } else {
            // Fetch latest tech news
            const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                params: {
                    country: 'us',
                    category: 'technology',
                    apiKey: '0f2c43ab11324578a7b1709651736382'  // Moved to config for better security
                }
            });

            const newsItem = response.data.articles[0];
            message = messages[config.LANGUAGE].breakingNews
                .replace("{{title}}", newsItem.title)
                .replace("{{description}}", newsItem.description)
                .replace("{{url}}", newsItem.url)
                .replace("{{footer}}", `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`);

            // Use news image if available, otherwise keep ALIVE_IMG
            if (newsItem.urlToImage) {
                image = { url: newsItem.urlToImage };
            }
        }

        // Send the tech message with image
        await conn.sendMessage(from, { 
            image: image,
            caption: message
        }, { quoted: mek });

    } catch(e) {
        console.error(e);
        reply(`🚫 Oops! Something went wrong: ${e.message}`);
    }
});
//================================================================
cmd({
    pattern: "wiki", 
    desc: "Search Wikipedia and get a summary.", 
    category: 'search', 
    react: '📚', 
    filename: __filename 
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        const config = await readEnv();

        // Check if a search term is provided
        if (args.length < 1) {
            const noSearchTermMessage = config.LANGUAGE === 'SI' 
                ? "කරුණාකර සෙවීම් පදයක් ලබාදෙන්න." 
                : "Please provide a search term.";
            return reply(noSearchTermMessage);
        }

        const searchTerm = args.join(" ");
        const wikiApiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(searchTerm);

        // Fetch data from Wikipedia
        const response = await axios.get(wikiApiUrl);
        const { extract, title } = response.data;

        // Construct response text
        const responseText = (lang) => lang === 'SI' 
            ? `*🛸 විකිපීඩියා සෙවීම:* *${title}* - ${extract}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
            : `*🛸 Wiki Search* *"${title}"* - ${extract}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;

        // Send the response in the appropriate language
        await conn.sendMessage(from, { text: responseText(config.LANGUAGE) }, { quoted: mek });
    } catch (error) {
        console.error(error);
        const errorMessage = config.LANGUAGE === 'SI' 
            ? "විකිපීඩියා සෙවීමේදී දෝෂයක් ඇති විය." 
            : "An error occurred while searching Wikipedia.";
        await reply(errorMessage);
    }
});
//================================================================
cmd({
  pattern: "tiktokstalk",
  alias: ["tiktokinfo", "ttstalk"],
  desc: "Fetch and display TikTok profile information.",
  react: "👀",
  category: "search",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    // Check if the username is provided
    const username = args.join(' ');
    if (!username) {
      return reply("❌ Please provide a TikTok username. Example: `.tiktokstalk @x_vishwa_22`");
    }

    const apiUrl = `https://bk9.fun/stalk/tiktok?q=${username}`;

    // Fetch data from the TikTok profile API
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data || !data.BK9) {
      return reply("❌ No TikTok profile data found.");
    }

    const profile = data.BK9;

    // Construct the message with the profile data
    const resultMessage = `🔍 *TikTok Profile Information*\n
- 📸 *Name:* ${profile.name}
- 🏷️ *Username:* ${profile.username}
- 👥 *Followers:* ${profile.followers}
- ➡️ *Following:* ${profile.following}
- ❤️ *Likes:* ${profile.likes}
- 📝 *Description:* ${profile.desc}
- 🖊️ *Bio:* ${profile.bio}
    `;

    // Send the result as a message
    await conn.sendMessage(from, {
      image: { url: profile.profile },
      caption: resultMessage,
      contextInfo: {
        externalAdReply: {
          title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
          body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
          thumbnailUrl: botimg2,
          sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: mek });

  } catch (error) {
    console.error("Error fetching TikTok profile:", error);
    reply("🚫 An error occurred while fetching the TikTok profile data.");
  }
});

cmd({
  pattern: "steam",
  alias: ["gsearch", "steamgames"],
  desc: "Search and display Steam game information.",
  react: "🎮",
  category: "search",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    // Get the game query (e.g., GTA)
    const query = args.join(' ') || 'GTA'; // Default to "GTA" if no query provided
    const apiUrl = `https://bk9.fun/search/Steam?q=${query}`;

    // Fetch data from the Steam search API
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data || !data.BK9 || data.BK9.length === 0) {
      return reply("❌ No Steam games found for the query.");
    }

    // Start building the response message
    let resultMessage = `🎮 STEAM GAME SEARCH 𝖥𝗈𝗋 '${query}'\n\n`;

    // Iterate through each game and format the result
    data.BK9.forEach(game => {
      resultMessage += `
╭────────────────────┈
│ *🎮 Title:* ${game.title}
│ *💵 Price:* ${game.price}
│ *📅 Release Date:* ${game.release.trim()}
│ *⭐ Rating:* ${game.rating}
│ *🔗 Link:* ${game.link}
╰───────────────┈
      `;
    });

    // Send the formatted result as a message
    await conn.sendMessage(from, {
      text: resultMessage,
      contextInfo: {
        externalAdReply: {
          title: 'Steam Game Search',
          body: 'Powered by BAHSHIMD',
          thumbnailUrl: botimg2,
          sourceUrl: 'https://store.steampowered.com/',
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: mek });

  } catch (error) {
    console.error("Error fetching Steam game data:", error);
    reply("🚫 An error occurred while fetching the Steam game data.");
  }
});
cmd({
  pattern: "stickersearch",
  alias: ["searchsticker"],
  desc: "Search and display sticker pack information.",
  react: "💬",
  category: "search",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    // Get the sticker search query (e.g., cat)
    const query = args.join(' ') || 'cat'; // Default to "cat" if no query provided
    const apiUrl = `https://bk9.fun/search/sticker?q=${query}`;

    // Fetch data from the Sticker search API
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data || !data.BK9 || !data.BK9.sticker_url || data.BK9.sticker_url.length === 0) {
      return reply("❌ No stickers found for the query.");
    }

    // Send stickers one by one
    for (const stickerUrl of data.BK9.sticker_url) {
      // Fetch the sticker image as a buffer
      const stickerBuffer = await (await fetch(stickerUrl)).buffer();

      // Send the sticker as a message
      await conn.sendMessage(from, { sticker: stickerBuffer }, { quoted: mek });
    }

  } catch (error) {
    console.error("Error fetching Sticker data:", error);
    reply("🚫 An error occurred while fetching the Sticker data.");
  }
});
cmd({
  pattern: "emojiSearch",
  alias: ["semoji", "emoji"],
  desc: "Search and display emoji results.",
  react: "😀",
  category: "search",
  filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
  try {
    // Get the emoji search query (e.g., chad)
    const query = args.join(' ') || 'chad'; // Default to "chad" if no query provided
    const apiUrl = `https://bk9.fun/search/semoji?q=${query}`;

    // Fetch data from the emoji search API
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data || !data.BK9 || data.BK9.length === 0) {
      return reply("❌ No emojis found for the query.");
    }

    // Start building the response message
    let resultMessage = `😀 *Emoji Search Results for '${query}'*:\n\n`;


    // Iterate through each emoji result and append it to the message
    data.BK9.forEach((emoji, index) => {
      resultMessage += `
╭────────────────────┈
│ *Emoji ${index + 1}:* ${emoji}
╰──────────────┈
      `;
    });

    // Send the formatted result as a message
    await conn.sendMessage(from, { text: resultMessage }, { quoted: mek });

  } catch (error) {
    console.error("Error fetching Emoji data:", error);
    reply("🚫 An error occurred while fetching the Emoji data.");
  }
});
cmd({
    pattern: "channelinfo",
    alias: [ "getchannel"],
    desc: "Fetch and display information about a WhatsApp channel.",
    category: "search",
    react: "🔍",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Ensure the user provides a channel URL
        if (!args || args.length === 0) {
            return reply("❌ *Please provide a WhatsApp channel URL.*");
        }

        const channelURL = args[0];
        const apiURL = `https://itzpire.com/stalk/whatsapp-channel?url=${encodeURIComponent(channelURL)}`;

        // Fetch channel information from the API
        const axios = require("axios");
        const response = await axios.get(apiURL);

        // Check the API response status
        if (response.data.status === "success") {
            const channelData = response.data.data;

            // Format and send the channel information
            const message = `乂 ＢＨＡＳＨＩ ＷＡ-ＣＨＡＮＮＥＬ ＳＴＡＬＫＥＲ

📌 𝖳𝗂𝗍𝗅𝖾 : ${channelData.title}
👥 𝖥𝗈𝗅𝗅𝗈𝗐𝖾𝗋𝗌 : ${channelData.followers}
📝 𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇 : ${channelData.description}`;

            // Send the image with caption
            await conn.sendMessage(m.chat, {
                caption: message,
                image: { url: channelData.img },
            });
        } else {
            reply("❌ *Failed to fetch channel information. Please check the URL and try again.*");
        }
    } catch (error) {
        console.error("Error fetching channel information:", error.message);
        reply("❌ *Something went wrong while fetching the channel information. Please try again later.*");
    }
});
cmd({
    pattern: "instainfo",
    alias: ["getinsta"],
    desc: "Fetch and display information about an Instagram profile.",
    category: "search",
    react: "📸",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Ensure the user provides a username
        if (!args || args.length === 0) {
            return reply("❌ *Please provide an Instagram username.*");
        }

        const username = args[0];
        const apiURL = `https://itzpire.com/stalk/instagram?username=${encodeURIComponent(username)}`;

        // Fetch profile information from the API
        const axios = require("axios");
        const response = await axios.get(apiURL);

        // Check the API response status
        if (response.data.status === "success") {
            const profileData = response.data.data;

            // Format and send the profile information
            const message = `乂 ＢＨＡＳＨＩ ＩＮＳＴＡ ＳＴＡＬＫＥＲ 

📸 𝖴𝗌𝖾𝗋𝗇𝖺𝗆𝖾 : ${profileData.username}
👤 𝖥𝗎𝗅𝗅𝗇𝖺𝗆𝖾 : ${profileData.fullName}
📝 𝖡𝗂𝗈 :
${profileData.bio}

╭──────────────●➤
├ 📰  Posts: ${profileData.posts}
├ 🫂 Followers: ${profileData.followers}
├ 🤝 Following: ${profileData.following}
╰──────────●➤

> 🙌𝖸𝗈𝗎 𝖼𝖺𝗇 𝗎𝗌𝖾 .𝗂𝗀𝖽𝗅 𝗈𝗋 .𝗂𝗀𝖽𝗅2 𝖿𝗈𝗋 𝖽𝗈𝗐𝗇𝗅𝗈𝖺𝖽 𝗂𝗇𝗌𝗍𝖺𝗀𝗋𝖺𝗆 𝖼𝗈𝗇𝗍𝖾𝗇𝗍𝗌 💗`;

            // Send the image with caption
            await conn.sendMessage(m.chat, {
                caption: message,
                image: { url: profileData.profile },
            });
        } else {
            reply("❌ *Failed to fetch profile information. Please check the username and try again.*");
        }
    } catch (error) {
        console.error("Error fetching Instagram profile information:", error.message);
        reply("❌ *Something went wrong while fetching the profile information. Please try again later.*");
    }
});
cmd({
    pattern: "tiktoksearch",
    alias: ["findtiktok", "gettiktok"],
    desc: "Search TikTok videos based on a keyword and display results.",
    category: "search",
    react: "🎥",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Ensure the user provides a search keyword
        if (!args || args.length === 0) {
            return reply("❌ *Please provide a keyword to search for TikTok videos.*");
        }

        const searchQuery = args.join(" ");
        const apiURL = `https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=${encodeURIComponent(searchQuery)}`;

        // Fetch TikTok search results from the API
        const axios = require("axios");
        const response = await axios.get(apiURL);

        // Check if the API response status is successful
        if (response.data.status === 200 && response.data.data.length > 0) {
            const videos = response.data.data;

            // Loop through the results and send them
            for (let video of videos.slice(0, 5)) { // Limit to top 5 results
                const message = `乂 ＢＨＡＳＨＩ ＴＩＫＴＯＫ  ＳＥＡＲＣＨ 

╭──────────────●➤
├ 👤 𝖢𝗋𝖾𝖺𝗍𝗈𝗋 : ${video.creator}
├ 🗺️ 𝖱𝖾𝗀𝗂𝗈𝗇 : ${video.region}
├ ☘️ 𝖳𝗂𝗍𝗅𝖾 : ${video.title}
├ ⏱️ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇 : ${video.duration} seconds
├ 🫂 𝖵𝗂𝖾𝗐𝗌 : ${video.views}
├ 🙌 𝖫𝗂𝗄𝖾𝗌 : ${video.likes}
├ ⚙️ 𝖢𝗈𝗆𝗆𝖾𝗇𝗍𝗌 : ${video.comments}
├ 🤝 𝖲𝗁𝖺𝗋𝖾 : ${video.share}
├ 🔗 𝖫𝗂𝗇𝗄 : ${video.url})
╰──────────●➤

> You Can use .tiktok command for download tiktok Videos
`;

                // Send the video cover image with caption
                await conn.sendMessage(m.chat, {
                    caption: message,
                    image: { url: video.cover },
                });
            }
        } else {
            reply("❌ *No TikTok videos found for the given keyword.*");
        }
    } catch (error) {
        console.error("Error fetching TikTok search results:", error.message);
        reply("❌ *Something went wrong while fetching TikTok search results. Please try again later.*");
    }
});
cmd({
    pattern: "twitterstalk",
    alias: ["gettwitter", "twitterinfo"],
    desc: "Fetch information about a Twitter user.",
    category: "search",
    react: "🐦",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Ensure the user provides a Twitter username
        if (!args || args.length === 0) {
            return reply("❌ *Please provide a Twitter username to stalk.*");
        }

        const username = args.join(" ");
        const apiURL = `https://apis-starlights-team.koyeb.app/starlight/tweeter-stalk?text=${encodeURIComponent(username)}`;

        // Fetch Twitter user information from the API
        const axios = require("axios");
        const response = await axios.get(apiURL);

        // Check if the API response is successful
        if (response.data && response.data.user) {
            const data = response.data;

            // Construct the message
            const message = `乂  ＢＨＡＳＨＩ ＴＷＩＴＴＥＲ ＳＴＡＬＫＥＲ

👤 𝖴𝗌𝖾𝗋𝗇𝖺𝗆𝖾  : ${data.names}
📝 𝖡𝗂𝗈 : ${data.bio}
🖇️ 𝖯𝗋𝗈𝖿𝗂𝗅𝖾 𝖫𝗂𝗇𝗄 : ${data.link}
`;

            // Send the profile image with caption
            await conn.sendMessage(m.chat, {
                caption: message,
                image: { url: data.profile },
            });
        } else {
            reply("❌ *No Twitter user found with the given username.*");
        }
    } catch (error) {
        console.error("Error fetching Twitter user information:", error.message);
        reply("❌ *Something went wrong while fetching Twitter user information. Please try again later.*");
    }
});
cmd({
    pattern: "twittersearch",
    alias: ["findtwitter", "gettwitter"],
    desc: "Search Twitter posts based on a keyword and display results.",
    category: "search",
    react: "🐦",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Ensure the user provides a search keyword
        if (!args || args.length === 0) {
            return reply("❌ *Please provide a keyword to search for Twitter posts.*");
        }

        const searchQuery = args.join(" ");
        const apiURL = `https://apis-starlights-team.koyeb.app/starlight/Twitter-Posts?text=${encodeURIComponent(searchQuery)}`;

        // Fetch Twitter search results from the API
        const axios = require("axios");
        const response = await axios.get(apiURL);

        // Check if the API response status is successful
        if (response.data && response.data.result && response.data.result.length > 0) {
            const posts = response.data.result;

            // Loop through the results and send them
            for (let post of posts.slice(0, 5)) { // Limit to top 5 results
                const message = `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖳 𝖶 𝖨 𝖳 𝖳 𝖤 𝖱  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

📻 𝖴𝗌𝖾𝗋 : ${post.user}
🖇️ 𝖯𝗈𝗌𝗍 𝖫𝗂𝗇𝗄 : ${post.user_link}
📁 𝖯𝗈𝗌𝗍 𝖢𝗈𝗇𝗍𝖾𝗇𝗍 : ${post.post}

> You can use .twitter command for download twitter posts
`;

                // Send the user's profile picture with the post information
                await conn.sendMessage(m.chat, {
                    caption: message,
                    image: { url: post.profile },
                });
            }
        } else {
            reply("❌ *No Twitter posts found for the given keyword.*");
        }
    } catch (error) {
        console.error("Error fetching Twitter search results:", error.message);
        reply("❌ *Something went wrong while fetching Twitter search results. Please try again later.*");
    }
});
cmd({
    pattern: "telegramuserstalker",
    alias: ["tuserstalker"],
    desc: "Stalk a Telegram user by username",
    category: "search",
    react: "🔍",
    filename: __filename,
}, async (conn, mek, m, { from, reply, args }) => {
    try {
        // Check if the username argument is provided
        if (!args[0]) {
            return reply("❌ Please provide a username! Example: `.telegramstalker vishwamihi`");
        }

        const username = args[0];
        const url = `https://itzpire.com/stalk/telegram?username=${username}&type=user`;

        // Fetch user details from the API
        const response = await axios.get(url);
        const data = response.data;

        if (data.status === "success" && data.data) {
            const { type, photo, name, bio, username } = data.data;

            // Construct the response message
            let message = `乂 ＢＨＡＳＨＩ ＴＥＬＥＧＲＡＭ ＵＳＥＲ ＳＴＡＬＫＥＲ

📛 𝖭𝖺𝗆𝖾 : ${name || "N/A"}
📜 𝖡𝗂𝗈 : ${bio || "No bio provided"}
🔗 𝖴𝗌𝖾𝗋𝗇𝖺𝗆𝖾 : ${username || "N/A"}
🛠️ 𝖳𝗒𝗉𝖾 : ${type || "N/A"}`

            // Send the photo and details
            await conn.sendMessage(from, {
                image: { url: photo },
                caption: message,
            }, { quoted: mek });
        } else {
            reply("⚠️ Unable to fetch user details. The username might be invalid or not found.");
        }
    } catch (error) {
        console.error(error);
        reply(`❌ Error fetching user details: ${error.message}`);
    }
});
cmd({
    pattern: "telegramchannelstalker",
    alias: ["tcstalker"],
    desc: "Stalk a Telegram channel by username",
    category: "search",
    react: "🔍",
    filename: __filename,
}, async (conn, mek, m, { from, reply, args }) => {
    try {
        // Check if the username argument is provided
        if (!args[0]) {
            return reply("❌ Please provide a channel username! Example: `.tcstalker little_beauty`");
        }

        const username = args[0];
        const url = `https://itzpire.com/stalk/telegram?username=${username}&type=channel`;

        // Fetch channel details from the API
        const response = await axios.get(url);
        const data = response.data;

        if (data.status === "success" && data.data) {
            const { type, title, subscribers, description, image } = data.data;

            // Construct the response message
            let message = `乂 ＢＨＡＳＨＩ ＴＥＬＥＧＲＡＭ ＣＨＡＮＮＥＬ ＳＴＡＬＫＥＲ

📛 𝖳𝗂𝗍𝗅𝖾 : ${title || "N/A"}
👥 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝖻𝖾𝗋𝗌 : ${subscribers || "N/A"}
📝 𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇 : ${description || "No description provided"}
🛠️ 𝖳𝗒𝗉𝖾 : ${type || "N/A"}`;

            // Send the photo and details
            await conn.sendMessage(from, {
                image: { url: image },
                caption: message,
            }, { quoted: mek });
        } else {
            reply("⚠️ Unable to fetch channel details. The username might be invalid or not found.");
        }
    } catch (error) {
        console.error(error);
        reply(`❌ Error fetching channel details: ${error.message}`);
    }
});
cmd({
    pattern: "telegramgroupstalker",
    alias: ["tgstalker"],
    desc: "Stalk a Telegram group by username",
    category: "search",
    react: "🔍",
    filename: __filename,
}, async (conn, mek, m, { from, reply, args }) => {
    try {
        // Check if the username argument is provided
        if (!args[0]) {
            return reply("❌ Please provide a group username! Example: `.tgstalker little_beauty`");
        }

        const username = args[0];
        const url = `https://itzpire.com/stalk/telegram?username=${username}&type=group`;

        // Fetch group details from the API
        const response = await axios.get(url);
        const data = response.data;

        if (data.status === "success" && data.data) {
            const { type, title, description, totalMembers, onlineMembers, image } = data.data;

            // Construct the response message
            let message = `乂 ＢＨＡＳＨＩ ＴＥＬＥＧＲＡＭ ＧＲＯＵＰ ＳＴＡＬＫＥＲ

📛 𝖦𝗋𝗈𝗎𝗉 𝖳𝗂𝗍𝗅𝖾 : ${title || "N/A"}
📝 𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇 : ${description || "No description provided"}
👥 𝖳𝗈𝗍𝖺𝗅 𝖬𝖾𝗆𝖻𝖾𝗋𝗌 : ${totalMembers || "N/A"}
🟢 𝖮𝗇𝗅𝗂𝗇𝖾 𝖬𝖾𝗆𝖻𝖾𝗋𝗌 : ${onlineMembers || "N/A"}
🛠️ 𝖳𝗒𝗉𝖾 : ${type || "N/A"}`;

            // Send the photo and details
            await conn.sendMessage(from, {
                image: { url: image },
                caption: message,
            }, { quoted: mek });
        } else {
            reply("⚠️ Unable to fetch group details. The username might be invalid or not found.");
        }
    } catch (error) {
        console.error(error);
        reply(`❌ Error fetching group details: ${error.message}`);
    }
});

//===============================================================









//==========================-A.I. COMMANDS-=====================
//================================================================

cmd({
    pattern: "aiimg",
    alias: ["createaiimage", "generateaiimg"],
    desc: "Generate an AI image based on the given prompt.",
    category: "AI",
    react: "🖼️",
    filename: __filename,
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Ensure the user provided a prompt
        if (!args || args.length === 0) {
            return reply("❌ Please provide a prompt to generate the image.");
        }

        // Construct the prompt text
        const prompt = args.join(" ");
        const apiURL = `https://www.samirxpikachu.run.place/ArcticFL?prompt=${encodeURIComponent(prompt)}`;

        // Fetch the image from the API using fetch
        const response = await fetch(apiURL);

        // Check if the API request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert the response into an ArrayBuffer (binary data)
        const arrayBuffer = await response.arrayBuffer();

        // Convert the ArrayBuffer into a Buffer (for image handling)
        const buffer = Buffer.from(arrayBuffer);

        // Send the generated image to the chat
        await conn.sendMessage(m.chat, {
            image: buffer,
            caption: `🖼️ Here is your generated AI image based on the prompt: *${prompt}*\n\n${caption}`,
        });
    } catch (error) {
        console.error("Error generating AI image:", error.message);
        reply("❌ Something went wrong. Please try again later.");
    }
});
//================================================================
cmd({
    pattern: "letmegpt",
    desc: "Chat with LetMeGPT AI for various topics.",
    react: "🤖",
    category: "AI",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    const config = await readEnv();
    try {
        // Check if the user has provided a query
        if (!q) {
            return reply(config.LANGUAGE === 'SI' 
                ? "කරුණාකර ප්‍රශ්නයක් හෝ යමක් ඇතුළත් කරන්න." 
                : "Please enter a question or message.");
        }

        // Fetch LetMeGPT response from the API
        const apiUrl = `https://www.dark-yasiya-api.site/ai/letmegpt?q=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the response is successful
        if (!data.status) {
            return reply(config.LANGUAGE === 'SI' 
                ? "සමාවන්න, දෝෂයක් සිදු විය." 
                : "Sorry, an error occurred.");
        }

        // Construct and send the response message
        const responseMessage = `*🤖 LetMeGPT*\n\n ${data.result}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;
        return reply(responseMessage);
    } catch (e) {
        console.log(e);
        const errorMessage = config.LANGUAGE === 'SI' 
            ? `දෝෂයක්: ${e.message || 'අපට පැමිණුණු දෝෂයක් ඇත.'}` 
            : `Error: ${e.message || 'An error occurred.'}`;
        return reply(errorMessage);
    }
});

//=================================================================
cmd({
    pattern: "goodyai",
    desc: "Chat with GoodyAI for various topics.",
    react: "🤖",
    category: "AI",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    const config = await readEnv();
    try {
        // Check if the user has provided a query
        if (!q) {
            return reply(config.LANGUAGE === 'SI' 
                ? "කරුණාකර ප්‍රශ්නයක් හෝ යමක් ඇතුළත් කරන්න." 
                : "Please enter a question or message.");
        }

        // Fetch GoodyAI response from the API
        const apiUrl = `https://www.dark-yasiya-api.site/ai/goodyai?q=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the response is successful
        if (!data.status) {
            return reply(config.LANGUAGE === 'SI' 
                ? "සමාවන්න, දෝෂයක් සිදු විය." 
                : "Sorry, an error occurred.");
        }

        // Construct and send the response message
        const responseMessage = `*🤖 GoodyAI*\n\n ${data.result}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;
        return reply(responseMessage);
    } catch (e) {
        console.log(e);
        const errorMessage = config.LANGUAGE === 'SI' 
            ? `දෝෂයක්: ${e.message || 'අපට පැමිණුණු දෝෂයක් ඇත.'}` 
            : `Error: ${e.message || 'An error occurred.'}`;
        return reply(errorMessage);
    }
});

//===============================================================
cmd({
    pattern: "gemini",
    desc: "Chat with Gemini AI.",
    react: "✨",
    category: "AI",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    const config = await readEnv();
    try {
        // Check if the user has provided a query
        if (!q) {
            return reply(config.LANGUAGE === 'SI' 
                ? "කරුණාකර ප්‍රශ්නයක් හෝ යමක් ඇතුළත් කරන්න." 
                : "Please enter a question or message.");
        }

        // Fetch Gemini AI response from the new API
        const apiUrl = `https://www.dark-yasiya-api.site/ai/gemini?q=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the response is successful
        if (!data.status) {
            return reply(config.LANGUAGE === 'SI' 
                ? "සමාවන්න, දෝෂයක් සිදු විය." 
                : "Sorry, an error occurred.");
        }

        // Construct and send the response message
        const responseMessage = `*✨ Gemini AI*\n\n ${data.result}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;
        return reply(responseMessage);
    } catch (e) {
        console.log(e);
        const errorMessage = config.LANGUAGE === 'SI' 
            ? `දෝෂයක්: ${e.message || 'අපට පැමිණුණු දෝෂයක් ඇත.'}` 
            : `Error: ${e.message || 'An error occurred.'}`;
        return reply(errorMessage);
    }
});
//=================================================================
cmd({
    pattern: "flux",
    desc: "Fetches a random image based on the prompt.",
    react: "🐱",
    category: "AI",
    filename: __filename
  }, async (conn, mek, m, { from, reply, q }) => {
      try {
          // Check if the user provided a prompt (q)
          if (!q) {
              return reply(config.LANGUAGE === 'SI' 
                  ? "කරුණාකර  යමක් ඇතුළත් කරන්න." 
                  : "Please enter a prompt.");
          }
  
          const senderNumber = m.sender;
          const isGroup = m.isGroup || false;
  
          // Fetch the image from the API based on the user's prompt
          const catApiUrl = `https://api.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(q)}`;
          let response = await fetch(catApiUrl);
          
          // Check if the response is OK
          if (!response.ok) {
              throw new Error('Failed to fetch the image.');
          }
  
          let buffer = await response.buffer();
  
          // Send the fetched image with a caption
          await conn.sendMessage(from, { image: buffer, caption: `${caption}` }, { quoted: mek });
  
      } catch (e) {
          console.log(e);
          // Provide an error response to the user
          reply(`❌ An error occurred: ${e.message}`);
      }
  });
cmd({
    pattern: "chatgpt",
    desc: "Chat with GPT.",
    react: "🤖",
    category: "AI",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    const config = await readEnv();
    try {
        // Check if the user has provided a query
        if (!q) {
            return reply(config.LANGUAGE === 'SI' 
                ? "කරුණාකර ප්‍රශ්නයක් හෝ යමක් ඇතුළත් කරන්න." 
                : "Please enter a question or message.");
        }

        // Fetch AI response from the new API
        const apiUrl = `https://www.dark-yasiya-api.site/ai/chatgpt?q=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if the response is successful
        if (!data.status) {
            return reply(config.LANGUAGE === 'SI' 
                ? "සමාවන්න, දෝෂයක් සිදු විය." 
                : "Sorry, an error occurred.");
        }

        // Construct and send the response message
        const responseMessage = `*🤖 ChatGPT*\n\n ${data.result}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;
        return reply(responseMessage);
    } catch (e) {
        console.log(e);
        const errorMessage = config.LANGUAGE === 'SI' 
            ? `දෝෂයක්: ${e.message || 'අපට පැමිණුණු දෝෂයක් ඇත.'}` 
            : `Error: ${e.message || 'An error occurred.'}`;
        return reply(errorMessage);
    }
});

//===============================================================

cmd({
    pattern: "llama",
    desc: "Get a response from the Llama AI.",
    react: "🦙",
    category: "AI",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    const config = await readEnv();
    try {

        // If no text provided, show an error
        if (!q || q.trim() === "") {
            return reply(config.LANGUAGE === 'SI' ? "❌ කරුණාකර Llama AI සඳහා පෙළක් ලබා දෙන්න." : "❌ Please provide a text prompt for the Llama AI.");
        }

        // Fetch response from the Llama API
        const apiUrl = `https://api.gurusensei.workers.dev/llama?prompt=${encodeURIComponent(q.trim())}`;
        const response = await fetch(apiUrl);

        // Check if response is OK
        if (!response.ok) {
            return reply(config.LANGUAGE === 'SI' ? "⚠️ API එකෙන් දත්ත ලබා ගැනීමට දෝෂයක්. කරුණාකර පසුව උත්සහ කරන්න." : "⚠️ Error fetching data from the API. Please try again later.");
        }

        const data = await response.json();

        // Check if the response is valid and extract the relevant text
        if (data && data.response && data.response.response) {
            return reply(`🦙 *LLAMA A.I*\n\n${data.response.response}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`);
        } else {
            return reply(config.LANGUAGE === 'SI' ? "⚠️ කණගාටුයි, Llama AI පිළිතුරක් ලබා ගැනීමට නොහැකි විය." : "⚠️ Sorry, I couldn't get a response from the Llama AI. Please try again later.");
        }
    } catch (e) {
        console.log(e);
        reply(config.LANGUAGE === 'SI' ? `දෝෂයක් ඇතිවී ඇත: ${e.message}` : `An error occurred: ${e.message}`);
    }
});

//=============================================================
cmd({
    pattern: "mistral",
    desc: "Get a response from the Mistral AI.",
    react: "🌬️",
    category: "AI",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    try {
        const config = await readEnv();
        // If no text provided, show an error
        if (!q || q.trim() === "") {
            return reply(config.LANGUAGE === 'SI' 
                ? "❌ කරුණාකර Mistral AI සඳහා පෙළක් ඇතුළත් කරන්න." 
                : "❌ Please provide a text prompt for the Mistral AI.");
        }

        // Fetch response from the Mistral API
        const apiUrl = `https://api.gurusensei.workers.dev/mistral?text=${encodeURIComponent(q.trim())}`;
        const response = await fetch(apiUrl);

        // Check if response is OK
        if (!response.ok) {
            return reply(config.LANGUAGE === 'SI' 
                ? "⚠️ API වෙතින් දත්ත ලබා ගැනීමේ දෝෂයකි. කරුණාකර නැවත උත්සාහ කරන්න." 
                : "⚠️ Error fetching data from the API. Please try again later.");
        }

        const data = await response.json();

        // Check if the response is valid and extract the relevant text
        if (data && data.response && data.response.response) {
            return reply(config.LANGUAGE === 'SI' 
                ? `🌬️ *MISTRAL A.I*\n\n${data.response.response}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ` 
                : `🌬️ *MISTRAL A.I*\n\n${data.response.response}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`);
        } else {
            return reply(config.LANGUAGE === 'SI' 
                ? "⚠️ කනගාටුයි, Mistral AI වෙතින් ප්‍රතිචාරයක් ලබා ගත නොහැකි විය. කරුණාකර නැවත උත්සාහ කරන්න." 
                : "⚠️ Sorry, I couldn't get a response from the Mistral AI. Please try again later.");
        }
    } catch (e) {
        console.log(e);
        reply(config.LANGUAGE === 'SI' 
            ? `දෝෂයක් සිදු විය: ${e.message}` 
            : `An error occurred: ${e.message}`);
    }
});
//=============================================================
cmd({
    pattern: "ai",
    desc: "AI chat.",
    react: "✔",
    category: "AI",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    const config = await readEnv(); // Load configuration settings

    try {
        if (!q) {
            return reply(config.LANGUAGE === 'SI' 
                ? "කරුණාකර ප්‍රශ්නයක් හෝ යමක් ඇතුළත් කරන්න." 
                : "Please enter a question or message.");
        }

        // Use fetch for the API request
        const fetch = require('node-fetch');
        const apiUrl = `https://apis-starlights-team.koyeb.app/starlight/chatgpt?text=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl, { timeout: 5000 });

        if (!response.ok) {
            throw new Error(`Unexpected response: ${response.status}`);
        }

        const result = await response.json();
        const data = result.result;

        // Construct the reply
        return reply(`🛫 CHATGPT A.I.\n\n${data}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`);
    } catch (error) {
        console.error('Error fetching AI response:', error);

        // Handle specific errors
        let errorMessage;
        if (error.name === 'AbortError') {
            errorMessage = config.LANGUAGE === 'SI'
                ? "AI සේවාවට සම්බන්ධ වීම කාලය ඉක්මවා ගිය බව පෙනේ."
                : "The request to the AI service timed out.";
        } else if (error.message.includes('500')) {
            errorMessage = config.LANGUAGE === 'SI'
                ? "අභ්‍යන්තර සේවාදායක දෝෂයක් ඇතිවිය. පසුව උත්සාහ කරන්න."
                : "An internal server error occurred. Please try again later.";
        } else {
            errorMessage = config.LANGUAGE === 'SI'
                ? "AI පිළිතුරු ලබා දිය නොහැක. කරුණාකර පසුව උත්සාහ කරන්න."
                : "AI response is unavailable. Please try again later.";
        }

        // Send the fallback message
        return reply(errorMessage);
    }
});

//==========================-CONEVRTER COMMANDS-=====================

//================================================================

//================================================================

//================================================================

//=================================================================
cmd({
    pattern: "sha256encode",  // Command trigger
    desc: "Convert text to SHA256 hash",  // Description of the command
    react: "🔐",  // Emoji for reacting to the command
    category: "converter",  // Category for the command
    filename: __filename  // File name containing the command
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        // Get the user's text to hash
        const textToHash = args.join(" ");
        if (!textToHash) {
            // If no text is provided, return an error message
            return reply("⚠️ Please provide text to convert into SHA256 hash. Example: `.sha256 Hello World!`");
        }

        // Convert the text to SHA256 hash
        const crypto = require('crypto');
        const sha256Hash = crypto.createHash('sha256').update(textToHash).digest('hex');

        // Send the SHA256 hash result with formatting
        return reply(`💡 *SHA256 Hash Complete!*\n\n✨ Here's the SHA256 hash of your input:\n\n\`\`\`${sha256Hash}\`\`\`\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`);
    } catch (error) {
        console.error(error);
        return reply("⚠️ An error occurred while processing the request. Please try again later.");
    }
});

//===============================================================
cmd({
    pattern: "shorturl",
    desc: "Create a short URL using TinyURL API.",
    category: "converter",
    filename: __filename
}, async (conn, mek, m, { from, reply, q }) => {
    try {
        const config = await readEnv();
        const messages = {
            EN: {
                accessDenied: "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*",
                blacklisted: "*🚫 You are blacklisted. Access denied.*",
                urlRequired: "⚠️ Please provide a URL to shorten.",
                originalUrl: "🌐 *Original URL:*",
                shortenedUrl: "✂️ *Shortened URL:*",
                successMessage: "You can now use this short URL to share your link more easily! 🌟",
                error: "❌ An error occurred while shortening the URL: ",
            },
            SI: {
                accessDenied: "*😢 ප්‍රවේශය ප්‍රතික්ෂේපිතයි. මෙම විධානය භාවිතා කිරීමට ඔබට අනුමැතිය නැත.🎁 Bot ආකාරය වෙනස් කරන්න!*",
                blacklisted: "*🚫 ඔබට වළක්වනු ලැබුණි. ප්‍රවේශය ප්‍රතික්ෂේපිතයි.*",
                urlRequired: "⚠️ කෙටි URL එකක් සාදා ගැනීමට URL එකක් ලබා දෙන්න.",
                originalUrl: "🌐 *මුල් URL:*",
                shortenedUrl: "✂️ *කෙටි URL:*",
                successMessage: "ඔබට දැන් මෙම කෙටි URL එක භාවිතා කර ඔබේ සබැඳිය ලේසියෙන් බෙදා ගත හැක! 🌟",
                error: "❌ URL එක කෙටි කිරීමට දෝෂයක් සිදුවිය: ",
            }
        };

        if (!q) return reply(messages[config.LANGUAGE].urlRequired);

        const longUrl = q.trim();
        const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;

        const response = await axios.get(apiUrl);
        const shortUrl = response.data;

        const resultMessage = `
🔗 *URL Shortener*

${messages[config.LANGUAGE].originalUrl} ${longUrl}
${messages[config.LANGUAGE].shortenedUrl} ${shortUrl}

${messages[config.LANGUAGE].successMessage}

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
        `;

        await conn.sendMessage(from, { text: resultMessage }, { quoted: mek });
    } catch (e) {
        console.error('Error shortening URL:', e.message);
        reply(`${messages[config.LANGUAGE].error}${e.message}`);
    }
});

//=================================================================
cmd({
    pattern: "trt",
    alias: ["translate"],
    desc: "🌍 Translate text between languages",
    react: "🌐",
    category: "converter",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        const config = await readEnv();
        const lang = config.LANGUAGE || 'EN'; // Get the language preference

        const noArgsText = lang === 'SI' ? "❗ කරුණාකර භාෂා කේතයක් සහ පෙළක් ලබා දෙන්න. භාවිතය: .trt [භාෂා කේතය] [පෙළ]" : "❗ Please provide a language code and text. Usage: .trt [language code] [text]";
        const errorText = lang === 'SI' ? "⚠️ පෙළ පරිවර්තනය කරන විට දෝෂයක් සිදුවිය. කරුණාකර පසුගිය කරුණා කරන්න." : "⚠️ An error occurred while translating the text. Please try again later.";

        const args = q.split(' ');
        if (args.length < 2) return reply(noArgsText);

        const targetLang = args[0];
        const textToTranslate = args.slice(1).join(' ');

        // Prepare the URL for translation API
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLang}`;

        const response = await axios.get(url);
        const translation = response.data.responseData.translatedText;

        // Construct the translation message
        const translationMessage = lang === 'SI' ? `
🌍 *පරිවර්තනය* 🌍

🔤 *මූලිකය*: ${textToTranslate}
🔠 *පරිවර්තනය කළේ*: ${translation}
🌐 *භාෂාව*: ${targetLang.toUpperCase()}

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        : `
🌍 *Translation* 🌍

🔤 *Original*: ${textToTranslate}
🔠 *Translated*: ${translation}
🌐 *Language*: ${targetLang.toUpperCase()}

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;

        return reply(translationMessage);
    } catch (e) {
        console.log(e);
        return reply(errorText);
    }
});
//================================================================
cmd({
    pattern: "convert",
    desc: "Convert an amount from one currency to another.",
    category: "converter",
    react: "💱",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
    const langConfig = {
        EN: {
            accessDenied: "😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!",
            blacklisted: "🚫 You are blacklisted. Access denied.",
            invalidAmount: "Please provide a valid amount.",
            conversionUsage: "Usage: .convert <amount> <from_currency> <to_currency>",
            conversionRateNotFound: (currency) => `Conversion rate for ${currency} not found.`,
            conversionInfo: (amount, fromCurrency, convertedAmount, toCurrency, rate) =>
                `💸_*Currency Conversion*_💸\n\n💵 *Amount*: ${amount} ${fromCurrency}\n🔄 *Converted Amount*: ${convertedAmount} ${toCurrency}\n📈 *Exchange Rate*: 1 ${fromCurrency} = ${rate} ${toCurrency}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
            mathExpression: (expression) => `📊 *Math Expression:* ${expression}`,
            mathResult: (result) => `✅ *Result:* ${result}`,
            invalidMathExpression: "❌ Invalid mathematical expression. Please check your input and try again.",
            errorFetchingData: (message) => `Error fetching data: ${message}`,
        },
        SI: {
            accessDenied: "😢 ඔබට මෙම විධානය භාවිතා කිරීමට අවසර නැත.🎁 බොට් ක්‍රමය වෙනස් කරන්න!",
            blacklisted: "🚫 ඔබට මාරු කර ඇත. ප්‍රවේශය ප්‍රහාර කලා.",
            invalidAmount: "කරුණාකර වලංගු මුදලක් ලබා දෙන්න.",
            conversionUsage: "භාවිතය: .convert <මුදල> <from_currency> <to_currency>",
            conversionRateNotFound: (currency) => `${currency} සඳහා මාරු අනුපාතය සොයා ගත නොහැක.`,
            conversionInfo: (amount, fromCurrency, convertedAmount, toCurrency, rate) =>
                `💸_*මුදල් මාරු*_💸\n\n💵 *මුදල*: ${amount} ${fromCurrency}\n🔄 *මාරු කරන ලද මුදල*: ${convertedAmount} ${toCurrency}\n📈 *මාරු අනුපාතය*: 1 ${fromCurrency} = ${rate} ${toCurrency}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
            mathExpression: (expression) => `📊 *ගණිත ප්‍රකාශය:* ${expression}`,
            mathResult: (result) => `✅ *ප්‍රතිඵල:* ${result}`,
            invalidMathExpression: "❌ වැරදි ගණිත ප්‍රකාශය. කරුණාකර ඔබගේ ඇතුලත්කිරීම් පරීක්ෂා කරන්න සහ නැවත උත්සාහ කරන්න.",
            errorFetchingData: (message) => `දත්ත ලබා ගැනීමට ඇති දෝෂය: ${message}`,
        },
    };
    const lang = config.LANGUAGE || 'EN'; // Set language preference
    const language = langConfig[lang];

    try {
        const amount = args[0];
        const fromCurrency = args[1].toUpperCase();
        const toCurrency = args[2].toUpperCase();

        if (isNaN(amount)) {
            return reply(language.invalidAmount);
        }

        const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (!data.rates[toCurrency]) {
            return reply(language.conversionRateNotFound(toCurrency));
        }

        const convertedAmount = (amount * data.rates[toCurrency]).toFixed(2);
        const conversionInfo = language.conversionInfo(amount, fromCurrency, convertedAmount, toCurrency, data.rates[toCurrency]);

        await conn.sendMessage(from, { text: conversionInfo }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(language.errorFetchingData(e.message));
    }
});
//===============================================================
cmd({
    pattern: "remini",
    react: "🖼️",
    alias: ["rem", "hd"],
    category: "converter",
    use: '.remini <Reply to image>',
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    const config = await readEnv();
    const language = config.LANGUAGE || 'EN'; // Set default language to 'EN'

    try {
        // Check if the message is a quoted image
        const isQuotedImage = quoted ? (quoted.type === 'imageMessage' || (quoted.type === 'viewOnceMessage' && quoted.msg.type === 'imageMessage')) : false;

        let imageUrl;
        if (isQuotedImage) {
            // Get the image buffer from the quoted message
            const imageBuffer = await quoted.download();

            // Save the image temporarily
            const tempFileName = './temp_image.jpg'; // Path to temporarily save the image
            await fs.promises.writeFile(tempFileName, imageBuffer);

            // Upload the image to Imgbb using image2url
            const uploadedResult = await image2url(tempFileName);
            const uploadedUrl = uploadedResult.result.url; // Extract the URL from the result

            // Convert image to HD using the provided API
            const hdUrl = await convertToHD(uploadedUrl);

            // Send the HD image back to the user
            await conn.sendMessage(from, { 
                image: { url: hdUrl },
                caption: "✨ *HD Version* of the image is ready! 🔥" // Add your custom caption here
            }, { quoted: mek });


            // Clean up the temporary image file
            fs.unlinkSync(tempFileName);

        } else {
            const noImageMessage = {
                SI: "❌ කරුණාකර රූපයක් පිළිතුරු කරන්න.",
                EN: "❌ Please reply to an image."
            };
            return reply(noImageMessage[language]);
        }
    } catch (e) {
        const errorMessage = {
            SI: "🚫 දෝෂයක් සිදු විය!",
            EN: "🚫 An error occurred!"
        };
        reply(errorMessage[language]);
        console.log(e);
    }
});

// Function to convert the image to HD using the provided API
async function convertToHD(imageUrl) {
    try {
        const response = await axios.get(`https://api.nyxs.pw/tools/hd?url=${encodeURIComponent(imageUrl)}`);
        if (response.data && response.data.result) {
            return response.data.result;  // Return the HD image URL directly
        } else {
            throw new Error('No result found in the response');
        }
    } catch (error) {
        console.error('Error during HD conversion:', error.message);
        throw new Error('HD conversion failed');
    }
}
//===============================================================
cmd({
    pattern: "img2url",
    react: "🌐",
    alias: ["i2u", "imageurl"],
    category: "converter",
    use: ".img2url <Reply to image>",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    const config = await readEnv();
    const language = config.LANGUAGE || 'EN'; // Default language is English

    try {
        // Check if the message is a quoted image
        const isQuotedImage = quoted ? (quoted.type === 'imageMessage' || (quoted.type === 'viewOnceMessage' && quoted.msg.type === 'imageMessage')) : false;

        if (!isQuotedImage) {
            const noImageMessage = {
                SI: "❌ කරුණාකර රූපයක් පිළිතුරු කරන්න.",
                EN: "❌ Please reply to an image."
            };
            return reply(noImageMessage[language]);
        }

        // Download the quoted image
        const imageBuffer = await quoted.download();
        const tempImagePath = path.join(__dirname, "tempImg2Url.jpg");
        await fs.promises.writeFile(tempImagePath, imageBuffer);

        // Upload the image to imgbb and get the URL
        const uploadResponse = await image2url(tempImagePath);

        // Check if the upload was successful
        if (uploadResponse && uploadResponse.result && uploadResponse.result.url) {
            const url = uploadResponse.result.url; // Direct URL
            const viewerUrl = uploadResponse.result.url_viewer; // Viewer URL

            // Send the uploaded URL as a reply
            reply(`🌐 *Image Uploaded Successfully!*\n\n📤 *Direct URL:* ${url}\n🔗 *Viewer URL:* ${viewerUrl}`);
        } else {
            throw new Error("Failed to upload image.");
        }

        // Clean up temporary files
        await fs.promises.unlink(tempImagePath);
    } catch (e) {
        const errorMessage = {
            SI: "🚫 දෝෂයක් සිදු විය!",
            EN: "🚫 An error occurred!"
        };
        reply(errorMessage[language]);
        console.log(e);
    }
});
//================================================================
cmd({
    pattern: "sticker",
    react: "🔮",
    alias: ["s", "stic"],
    category: "converter",
    use: '.sticker <Reply to image>',
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    const config = await readEnv();
    const language = config.LANGUAGE || 'EN'; // Set default language to 'EN'

    try {
        // Check if the message is a quoted image or video
        const isQuotedImage = quoted ? (quoted.type === 'imageMessage' || (quoted.type === 'viewOnceMessage' && quoted.msg.type === 'imageMessage')) : false;
        const isQuotedSticker = quoted ? (quoted.type === 'stickerMessage') : false;

        let name;
        if ((m.type === 'imageMessage') || isQuotedImage) {
            name = getRandom('.jpg');
            const imageBuffer = isQuotedImage ? await quoted.download() : await m.download();
            await fs.promises.writeFile(name, imageBuffer); // Save the image temporarily
        } else if (isQuotedSticker) {
            name = getRandom('.webp');
            const stickerBuffer = await quoted.download();
            await fs.promises.writeFile(name, stickerBuffer); // Save the sticker temporarily
        } else {
            const noImageMessage = {
                SI: "❌ කරුණාකර රූපයක් පිළිතුරු කරන්න.",
                EN: "❌ Please reply to an image."
            };
            return reply(noImageMessage[language]);
        }

        // Create sticker from the downloaded image or sticker
        let sticker = new Sticker(name, {
            pack: pushname, // The pack name
            author: 'ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ', // The author name
            type: (m.q && (m.q.includes("--crop") || m.q.includes('-c'))) ? StickerTypes.CROPPED : StickerTypes.FULL,
            categories: ["🤩", "🎉"], // The sticker category
            id: "12345", // The sticker id
            quality: 75, // The quality of the output file
            background: "transparent", // The sticker background color (only for full stickers)
        });

        const buffer = await sticker.toBuffer();
        await conn.sendMessage(from, { sticker: buffer }, { quoted: mek });

    } catch (e) {
        const errorMessage = {
            SI: "🚫 දෝෂයක් සිදු විය!",
            EN: "🚫 An error occurred!"
        };
        reply(errorMessage[language]);
        console.log(e);
    }
});

//================================================================
const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.',
    'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.',
    'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-',
    'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '1': '.----',
    '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', '0': '-----', ' ': '/'
};
function encodeToMorse(text) {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || char).join(' ');
}
// Function to decode Morse code to text
function decodeFromMorse(morseCode) {
    const morseCodeMap = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
        '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
        '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
        '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
        '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
        '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
        '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
        '----.': '9', '/': ' ' // space in Morse code
    };

    return morseCode.split(' ').map(code => morseCodeMap[code] || '').join(''); // Decode each Morse code character
}

cmd({
    pattern: 'morse',
    desc: 'Convert text to Morse code',
    category: 'converter',
    react: '📡',
    filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
    try {
        const config = await readEnv();
         const lang = config.LANGUAGE || 'EN'; // Default to English if not set


        const noInputText = lang === 'SI' ? "කරුණාකර මෝස් කේතයට පරිවර්තනය කිරීමට පාඨයක් ලබා දෙන්න. උදා: `.morse Hello World`" : "Please provide text to convert to Morse code. Example: `.morse Hello World`";
        const errorOccurredText = lang === 'SI' ? "⚠️ මෝස් කේතයට පරිවර්තනය කිරීමේදී දෝෂයක් ඇතිවිය." : "⚠️ An error occurred while converting to Morse code.";


        // Check if input is provided
        if (!args.length) {
            return reply(noInputText);
        }

        const inputText = args.join(' ');
        const morseCode = encodeToMorse(inputText); // Assumes function for Morse encoding exists

        // Multi-language response for Morse code
        const morseResponseText = lang === 'SI' 
            ? `*⚠️ මෝස් කේතය* "${inputText}" සඳහා:\n\n${morseCode}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
            : `*⚠️ Morse code for* "${inputText}":\n\n${morseCode}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;

        await reply(morseResponseText);

    } catch (e) {
        console.error('Error converting to Morse code:', e);
        reply(errorOccurredText);
    }
});
//=================================================================
cmd({
    pattern: 'demorse',
    desc: 'Convert Morse code to text',
    category: 'converter',
    react: '📡',
    filename: __filename
}, async (conn, mek, m, { from, reply, args }) => {
    try {
        const config = await readEnv();
        const lang = config.LANGUAGE || 'EN'; 
        const noInputText = lang === 'SI' ? "කරුණාකර මෝර්ස් කේතය ලබා දෙන්න. උදා: `.demorse ... --- ...`" : "Please provide Morse code to convert to text. Example: `.demorse ... --- ...`";
        const errorOccurredText = lang === 'SI' ? "⚠️ මෝර්ස් කේතය පරිවර්තනය කිරීමේදී දෝෂයක් ඇතිවිය." : "⚠️ An error occurred while converting Morse code.";


        // Check if input is provided
        if (!args.length) {
            return reply(noInputText);
        }

        const morseCode = args.join(' '); // Join arguments to get the Morse code
        const decodedText = decodeFromMorse(morseCode); // Function to decode Morse code

        // Multi-language response for decoded text
        const demorseResponseText = lang === 'SI' 
            ? `*⚠️ මෝර්ස් කේතය* "${morseCode}" සඳහා:\n\n${decodedText}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
            : `*⚠️ Decoded text for* "${morseCode}":\n\n${decodedText}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`;

        await reply(demorseResponseText);

    } catch (e) {
        console.error('Error converting Morse code:', e);
        reply(errorOccurredText);
    }
});
//===============================================================
cmd({
    pattern: "urldecode", // Command trigger
    desc: "Decode a URL-encoded string", // Description of the command
    react: "🔃", // Emoji for reacting to the command
    category: "converter", // Category for the command
    filename: __filename // File name containing the command
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        // Get the URL-encoded string
        const encodedText = args.join(" ");
        if (!encodedText) {
            // If no encoded text is provided, return an error message
            return reply("⚠️ Please provide a URL-encoded string to decode. Example: `.urldecode APIs%20(Application%20Programming%20Interfaces)%20are%20essential%20tools`");
        }

        // Decode the string directly
        const decodedText = decodeURIComponent(encodedText);

        // Send the decoded result with formatting
        return reply(`💡 *URL Decoding Complete!*\n\n✨ Here's the decoded result:\n\n\`\`\`${decodedText}\`\`\`\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`);
    } catch (error) {
        console.error(error);
        return reply("⚠️ An error occurred while processing the request. Please try again later.");
    }
});
//===============================================================
cmd({
    pattern: "urlencode", // Command trigger
    desc: "Encode text into URL format", // Description of the command
    react: "🔃", // Emoji for reacting to the command
    category: "converter", // Category for the command
    filename: __filename // File name containing the command
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        // Get the user's text to encode
        const textToEncode = args.join(" ");
        if (!textToEncode) {
            // If no text is provided, return an error message
            return reply("⚠️ Please provide text to encode into URL format. Example: `.urlencode Hello World!`");
        }

        // Encode the text directly
        const encodedText = encodeURIComponent(textToEncode);

        // Send the URL-encoded result with formatting
        return reply(`💡 *URL Encoding Complete!*\n\n✨ Here's the URL-encoded result:\n\n\`\`\`${encodedText}\`\`\`\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`);
    } catch (error) {
        console.error(error);
        return reply("⚠️ An error occurred while processing the request. Please try again later.");
    }
});
//===============================================================
cmd({
    pattern: "base64decode", 
    desc: "Decode Base64 to text", 
    react: "🔃", 
    category: "converter", 
    filename: __filename 
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        const base64String = args.join(" ");
        if (!base64String) {
            return reply("⚠️ Please provide a Base64 string to decode. Example: `.base64decode SGVsbG8=`");
        }

        // Decode Base64 string
        const decodedText = Buffer.from(base64String, 'base64').toString('utf-8');

        return reply(`💡 *Base64 Decoding Complete!*\n\n✨ Here's the decoded text from your Base64 string:\n\n\`\`\`${decodedText}\`\`\`\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2*`);
    } catch (error) {
        console.error(error);
        return reply("⚠️ Invalid Base64 string. Please check and try again.");
    }
});

//===============================================================

cmd({
    pattern: "base64encode", 
    desc: "Convert text to Base64", 
    react: "🔃", 
    category: "converter", 
    filename: __filename 
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        const text = args.join(" ");
        if (!text) {
            return reply("⚠️ Please provide some text to encode to Base64. Example: `.base64encode Hello`");
        }

        // Encode text to Base64
        const base64Text = Buffer.from(text).toString('base64');

        return reply(`💡 *Base64 Encoding Complete!*\n\n✨ Here's the Base64 encoded result of your text:\n\n\`\`\`${base64Text}\`\`\`\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2*`);
    } catch (error) {
        console.error(error);
        return reply("⚠️ An error occurred while encoding your text. Please try again.");
    }
});

//===============================================================
cmd({
    pattern: "dbinary", 
    desc: "Convert binary to text", 
    react: "🔃", 
    category: "converter", 
    filename: __filename 
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        const binaryText = args.join(" ");
        if (!binaryText) {
            return reply("⚠️ Please provide binary to convert. Example: `.dbinary 01001000 01100101 01101100 01101100 01101111`");
        }

        // Convert binary to text
        const decodedText = binaryText.split(" ").map(bin => String.fromCharCode(parseInt(bin, 2))).join("");

        return reply(`💡 *Binary to Text Conversion Complete!*\n\n✨ Here's the text representation of your binary:\n\n\`\`\`${decodedText}\`\`\``);
    } catch (error) {
        console.error(error);
        return reply("⚠️ Invalid binary input. Please check and try again.");
    }
});

//=================================================================
cmd({
    pattern: "ebinary", 
    desc: "Convert text to binary format", 
    react: "🔃", 
    category: "converter", 
    filename: __filename 
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        const text = args.join(" ");
        if (!text) {
            return reply("⚠️ Please provide some text to convert to binary. Example: `.ebinary Hello`");
        }

        // Convert text to binary
        const binaryText = text.split("").map(char => char.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");

        return reply(`💡 *Binary Conversion Complete!*\n\n✨ Here's the binary representation of your text:\n\n\`\`\`${binaryText}\`\`\``);
    } catch (error) {
        console.error(error);
        return reply("⚠️ An error occurred while converting your text to binary. Please try again.");
    }
});


//=================================================================
cmd({
  pattern: "qr",
  desc: "Generate a QR code from text or URL.",
  react: "🔃",
  category: "converter",
  filename: __filename
}, async (conn, mek, m, { from, reply, q }) => {
    const config = await readEnv();
    const language = config.LANGUAGE; // SI for Sinhala, EN for English

    try {
        // Ensure 'q' is defined and is a valid non-empty string
        if (!q || typeof q !== 'string' || q.trim().length === 0) {
            const message = {
                SI: "⚠️ කරුණාකර QR කේතයක් නිර්මාණය කිරීමට පෙළක් හෝ URL එකක් ලබා දෙන්න.",
                EN: "⚠️ Please provide text or URL to generate a QR code."
            };
            return reply(message[language]);
        }

        const text = q.trim(); // Make sure the input is properly trimmed

        // Generate QR code using the qrcode library
        QRCode.toDataURL(text, { errorCorrectionLevel: 'H' }, async (err, qrCodeDataUrl) => {
            if (err) {
                console.error('Error generating QR code:', err.message);
                const errorMessage = {
                    SI: `❌ QR කේතය නිර්මාණය කිරීමේදී දෝෂයක් සිදු විය: ${err.message}`,
                    EN: `❌ An error occurred while generating the QR code: ${err.message}`
                };
                return reply(errorMessage[language]);
            }

            // Send the QR code image URL as a message
            const caption = {
                SI: `📱 මෙය ඔබගේ QR කේතය: ${text}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
                EN: `📱 Here's your QR code for: ${text}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
            };

            // Send the QR code as an image to the user
            await conn.sendMessage(from, {
                image: { url: qrCodeDataUrl }, // Use the Data URL for the image
                caption: caption[language]
            }, { quoted: mek });
        });

    } catch (e) {
        console.error('Error generating QR code:', e.message);
        const errorMessage = {
            SI: `❌ QR කේතය නිර්මාණය කිරීමේදී දෝෂයක් සිදු විය: ${e.message}`,
            EN: `❌ An error occurred while generating the QR code: ${e.message}`
        };
        reply(errorMessage[language]);
    }
});




//=====================================================================================- DOWNLOADER COMMANDS ==================================================================
//=============================================================================================================================================================================
cmd({
    pattern: "wallpaper",
    desc: "Download multiple wallpapers based on a search term.",
    react: "🖼️",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    const config = await readEnv();
    try {
        const query = args.join(" ");  // Get the search term from user input
        if (!query) {
            // If no search term is provided, show an error message
            return reply(config.LANGUAGE === 'SI' 
                ? "කරුණාකර පින්තූර සෙවීම සඳහා වචන ඇතුළත් කරන්න." 
                : "Please provide a search term to fetch wallpapers. Example: `.wallpaper car`");
        }

        // Construct the URL to fetch wallpapers
        const apiUrl = `https://www.dark-yasiya-api.site/download/wallpaper?text=${encodeURIComponent(query)}&page=1`;

        // Fetch the wallpaper data from the API
        const response = await fetch(apiUrl);

        // Check if the response was successful
        if (!response.ok) {
            return reply("⚠️ Failed to fetch wallpapers. Please try again later.");
        }

        // Parse the response JSON
        const data = await response.json();
        if (!data.result || data.result.length === 0) {
            return reply("⚠️ No wallpapers found for this search. Please try another term.");
        }

        // Extract the first 5 images from the result
        const wallpapers = [];
        for (let i = 0; i < Math.min(data.result.length, 5); i++) {
            wallpapers.push(data.result[i].image[0]);  // You can change the index if you prefer a different image size
        }

        // Send all 5 images
        for (const wallpaper of wallpapers) {
            await conn.sendMessage(from, { image: { url: wallpaper }, caption: `${caption}` }, { quoted: mek });
        }

    } catch (e) {
        console.log(e);
        const errorMessage = config.LANGUAGE === 'SI' 
            ? `දෝෂයක්: ${e.message || 'අපට පැමිණුණු දෝෂයක් ඇත.'}` 
            : `Error: ${e.message || 'An error occurred.'}`;
        return reply(errorMessage);
    }
});
//==============================================================================================================================================================================
cmd({
    pattern: "gimg",
    alias: ["googleimages"],
    desc: "Search and send 5 images from Google Image search",
    react: "📸",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q, lang }) => {
    try {
        // Define the default query or use the user input
        const query = args.length ? args.join(" ") : "hello";

        // Define messages based on language selection
        const messages = {
            en: {
                noQuery: "Please provide a search query.",
                noImagesFound: "Sorry, no images found for your search query.",
                insufficientImages: "Sorry, there are not enough images for your search.",
                error: "An error occurred while fetching the images. Please try again later.",
                caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
                responseStart: "Here are 5 images for"
            },
            si: {
                noQuery: "කරුණාකර සෙවුම් ප්‍රශ්නයක් ලබාදෙන්න.",
                noImagesFound: "සමාවන්න, ඔබගේ සෙවුම් ප්‍රශ්නය සඳහා ඡායාරූප කිසිවක් සොයාගත නොහැකිවූයේය.",
                insufficientImages: "සමාවන්න, ඔබේ සෙවුම සඳහා පින්තූර පරිප්‍රේෂණ කිසිවක් නොමැත.",
                error: "ඡායාරූප ලබා ගැනීමට දෝෂයක් ඇතිවිය. කරුණාකර නැවත උත්සාහ කරන්න.",
                caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
                responseStart: "මෙන්න ඔබගේ සෙවීම සඳහා 5 පින්තූර"
            }
        };

        // Determine the selected language or default to English
        const selectedLang = lang || "en";

        // Fetching Google Image Search results from the API using `nima-google-now`
        const res = await googleImage(query);

        // Check if the response contains valid data
        if (!res.status || !res.result || res.result.length === 0) {
            return reply(messages[selectedLang].noImagesFound);
        }

        // Extracting the image URLs from the response data
        const imageUrls = res.result;

        // Check if there are at least 5 images
        if (imageUrls.length < 5) {
            return reply(messages[selectedLang].insufficientImages);
        }

        // Send the images one by one
        let message = `${messages[selectedLang].responseStart} "${query}":`;

        // Send a response message with images
        for (let i = 0; i < 5; i++) {
            await conn.sendMessage(from, {
                image: { url: imageUrls[i] },
                caption: `${messages[selectedLang].caption} ${i + 1}`,
                quoted: mek
            });
        }
    } catch (error) {
        console.error(error);
        reply(messages[selectedLang].error);
    }
});

//==============================================================================================================================================================================
cmd({
    pattern: "pinterest",
    alias: ["pin","pimg"],
    desc: "Create Pinterest images with random search terms",
    react: "🖼️",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    try {
        const config = await readEnv();  // Read configuration for language
        const query = args.length ? args.join(" ") : "car"; // Use 'car' if no argument is given

        // Fetching Pinterest results using the provided API
        const apiUrl = `https://www.dark-yasiya-api.site/download/piniimg?text=${encodeURIComponent(query)}`;
        const response = await fetch(apiUrl);
        const json = await response.json(); // Parse the JSON response

        const imageUrls = json.result.map(pin => pin.images_url).filter(url => url); // Filter out empty URLs

        if (imageUrls.length < 5) {
            return reply("Sorry, not enough images found for your search. Please try again later.");
        }

        // Language-specific messages
        let responseMessage = "";
        if (config.LANGUAGE === "SI") {
            // Sinhala message
            responseMessage = `✨ ඔබගේ පින්ටරෙස්ට් පින් එක සාර්ථකව සාදන්න "${query}" 📸`;
        } else {
            // English message
            responseMessage = `✨ Your Pinterest images for "${query}" have been successfully created 📸`;
        }

        // Send the images directly
        await conn.sendMessage(from, {
            text: responseMessage,
            image: { url: imageUrls[0] },
            caption: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
            quoted: mek
        });

        // Send remaining 4 images
        for (let i = 1; i < 5; i++) {
            await conn.sendMessage(from, {
                image: { url: imageUrls[i] },
                caption: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
                quoted: mek
            });
        }

    } catch (error) {
        console.error(error);
        reply("An error occurred while processing your request. Please try again later.");
    }
});
//==============================================================================================================================================================================

//==============================================================================================================================================================================
cmd({
    pattern: "apk",
    desc: "Download WhatsApp APK from Aptoide",
    react: "💻",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    try {
        const config = await readEnv();
        const query = args.length ? args.join(" ") : null;

        if (!query) {
            return reply("⚠️ *Please provide a search query for the APK.*");
        }

        const apiUrl = `https://web-api-cache.aptoide.com/search?query=${encodeURIComponent(query)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.info.status !== "OK" || !data.datalist || !data.datalist.list || data.datalist.list.length === 0) {
            return reply("❌ *Sorry, no WhatsApp APKs found.*");
        }

        const apkList = data.datalist.list;
        let appInfoMessage = "";

        // Set the caption
        if (config.LANGUAGE === "SI") {
            appInfoMessage = "මෙම විකල්පයන් වලින් පමණක් තෝරන්න:\n\n";
        } else {
            appInfoMessage = `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＡＰＫ ＤＬ\n\n> 💗 𝖢𝗁𝗈𝗈𝗌𝖾 𝖸𝗈𝗎𝗋 𝖢𝗁𝗈𝗂𝖼𝖾\n\n`;
        }

        apkList.forEach((app, index) => {
            const { name, package, size } = app;
            appInfoMessage += `╭───❲ ${index + 1}.  ❳───╾\n├ ✨${name}\n├ 📦 𝖯𝖺𝖼𝗄𝖺𝗀𝖾 :  ${package}\n├ 📏 𝖲𝗂𝗓𝖾 : ${(size / 1024 / 1024).toFixed(2)} MB\n╰───────────╼\n\n`;
        });

        appInfoMessage += caption;

        const sentMessage = await conn.sendMessage(from, { 
            text: appInfoMessage 
        }, { quoted: mek });

        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage || !msg.message.extendedTextMessage.text) {
                return;
            }

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                const selectedIndex = parseInt(userReply) - 1;
                await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                if (selectedIndex >= 0 && selectedIndex < apkList.length) {
                    const selectedApp = apkList[selectedIndex];
                    const { name, file, icon } = selectedApp;
                    const { path } = file;  // Use the primary download path

                    // Fetch the icon image and convert to a buffer for jpegThumbnail
                    const iconBuffer = await (await fetch(icon)).buffer();

                    // Send APK download with enhanced response
                    await conn.sendMessage(from, { 
                        document: { url: path },
                        mimetype: 'application/vnd.android.package-archive',
                        fileName: `${name}.apk`,
                        caption: `${caption}`,
                        jpegThumbnail: iconBuffer,
                        renderLargerThumbnail: false, 
                        quoted: mek
                    });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else {
                    await reply("❌ *Invalid APK choice. Please reply with a valid number (1 or 2).*");
                }
            }
        });

    } catch (error) {
        console.error(error);
        reply("⚠️ *An error occurred while processing your request. Please try again later.*");
    }
});


cmd({
    pattern: "tiktokdl2",
    alias: ["tiktok2", "tt2"],
    desc: "Download videos or images from TikTok",
    category: "downloader",
    react: "🎥",
    filename: __filename,
}, async (conn, mek, m, { args, reply, quoted }) => {
    try {
        const tiktokURL = args[0]; // URL passed by the user
        if (!tiktokURL) return reply("❌ Please provide a TikTok video link. Example: .tiktokdl <link>");

        // Send fetching message
        await conn.sendMessage(m.chat, {
            text: "🔄 Fetching TikTok video information...",
        });

        // Use the TikTok module to fetch video details
        const result = await downloadTiktok(tiktokURL);
        if (!result.status || !result.result) return reply("❌ Unable to fetch video details. Please check the URL or try again later.");

        const { title, image, dl_link } = result.result;

        const { download_mp4_1, download_mp4_2, download_mp4_hd, download_mp3, images } = dl_link;

        // Prepare message with download options
        let downloadMessage = `乂 ＴｉｋＴｏｋ ＤＯＷＮＬＯＡＤＥＲ

╭──────────●➤
├ 1️⃣ Video MP4 (Standard): ${download_mp4_1 ? "✅ Available" : "❌ Unavailable"}
├ 2️⃣ Video MP4 (Alternative): ${download_mp4_2 ? "✅ Available" : "❌ Unavailable"}
├ 3️⃣ Video MP4 (HD): ${download_mp4_hd ? "✅ Available" : "❌ Unavailable"}
├ 4️⃣ Audio MP3: ${download_mp3 ? "✅ Available" : "❌ Unavailable"}
├ 5️⃣ Image Download: ${images && images.length ? "✅ Available" : "❌ Unavailable"}
╰──────●➤

> 🙌 Reply Below Your Choice 💗
> 🙌 You can Use .findtiktok For Get Search Result from Titkok`;

        // Send the message with download options
        const menuMessage = await conn.sendMessage(
            m.chat,
            {
                text: downloadMessage,
                contextInfo: {
                    externalAdReply: {
                        title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                        body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                        thumbnail: { url: image }, // Thumbnail URL
                        sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
                        mediaType: 1,
                    }
                }
            },
            { quoted: mek }
        );

        // Handle the user's response for download choice
        conn.ev.on("messages.upsert", async (msgUpsert) => {
            const msg = msgUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply matches the menu message
            if (messageContext && messageContext.stanzaId === menuMessage.key.id) {
                if (userReply === "1" && download_mp4_1) {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(m.chat, { video: { url: download_mp4_1 }, caption: title });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else if (userReply === "2" && download_mp4_2) {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(m.chat, { video: { url: download_mp4_2 }, caption: title });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else if (userReply === "3" && download_mp4_hd) {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(m.chat, { video: { url: download_mp4_hd }, caption: title });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else if (userReply === "4" && download_mp3) {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(m.chat, { audio: { url: download_mp3 }, caption: title });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else if (userReply === "5" && images && images.length > 0) {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    for (const img of images) {
                        await conn.sendMessage(m.chat, { image: { url: img }, caption: title });
                    }
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else {
                    await conn.sendMessage(m.chat, { react: { text: "❌", key: msg.key } });
                    return reply("❌ Invalid choice or the selected option is unavailable.");
                }
            }
        });
    } catch (error) {
        console.error(error);
        reply("❌ An error occurred while processing your request. Please try again later.");
    }
});

// TEST_TIKTOK_DL function to test the TikTok video downloader functionality
async function TEST_TIKTOK_DL() {
    var link = "https://vt.tiktok.com/ZS2vSs5fL/";
    try {
        const result = await downloadTiktok(link);
    } catch (error) {
        console.error("Error fetching TikTok video:", error.message);
    }
}

TEST_TIKTOK_DL();
cmd({
    pattern: "likeedl",
    alias: ["likee", "ldl"],
    desc: "Download Likee videos with or without watermark",
    category: "downloader",
    react: "🎥",
    filename: __filename,
}, async (conn, mek, m, { args, reply, quoted }) => {
    try {
        const likeeURL = args[0]; // URL passed by the user
        if (!likeeURL) return reply("❌ Please provide a Likee video link. Example: .likeedl <link>");

        // Send fetching message
        await conn.sendMessage(m.chat, {
            text: "🔄 Fetching Likee video information...",
        });

        // Use the Likee download API to fetch video details
        const url = `https://bk9.fun/download/likee?url=${encodeURIComponent(likeeURL)}`;
        const response = await axios.get(url);
        const data = response.data;

        if (!data.status || !data.BK9) return reply("❌ Unable to fetch video details. Please check the URL or try again later.");

        const { title, thumbnail, withWatermark, withoutWatermark } = data.BK9;

        // Prepare message with download options
        let downloadMessage = `乂 ＬＩＫＥＥ ＤＯＷＮＬＯＡＤＥＲ

╭──────────●➤
├ 1️⃣ Video with Watermark: ${withWatermark ? "✅ Available" : "❌ Unavailable"}
├ 2️⃣ Video without Watermark: ${withoutWatermark ? "✅ Available" : "❌ Unavailable"}
╰──────●➤

> 🙌 Reply Below Your Choice 💗`;

        // Send the message with download options
        const menuMessage = await conn.sendMessage(
            m.chat,
            {
                text: downloadMessage,
                contextInfo: {
                    externalAdReply: {
                        title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                        body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                        thumbnail: { url: thumbnail }, // Thumbnail URL
                        sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
                        mediaType: 1,
                    }
                }
            },
            { quoted: mek }
        );

        // Handle the user's response for download choice
        conn.ev.on("messages.upsert", async (msgUpsert) => {
            const msg = msgUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply matches the menu message
            if (messageContext && messageContext.stanzaId === menuMessage.key.id) {
                if (userReply === "1" && withWatermark) {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(m.chat, { video: { url: withWatermark }, caption: title });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else if (userReply === "2" && withoutWatermark) {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(m.chat, { video: { url: withoutWatermark }, caption: title });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else {
                    await conn.sendMessage(m.chat, { react: { text: "❌", key: msg.key } });
                    return reply("❌ Invalid choice or the selected option is unavailable.");
                }
            }
        });
    } catch (error) {
        console.error(error);
        reply("❌ An error occurred while processing your request. Please try again later.");
    }
});

// TEST_LIKEE_DL function to test the Likee video downloader functionality
async function TEST_LIKEE_DL() {
    var link = "https://l.likee.video/v/1RIGvL";
    try {
        const result = await axios.get(`https://bk9.fun/download/likee?url=${encodeURIComponent(link)}`);
    } catch (error) {
        console.error("Error fetching Likee video:", error.message);
    }
}

TEST_LIKEE_DL();

cmd({
    pattern: "ig",
    desc: "Download media (image/video) from Instagram.",
    react: "📸",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    try {
        // Ensure the URL is provided and contains "instagram.com"
        if (!q || !q.includes("instagram.com")) {
            return reply("❌ Please provide a valid Instagram URL.");
        }

        // Prepare the API URL with the provided Instagram URL
        const apiUrl = `https://api.zenkey.my.id/api/download/instagram?url=${encodeURIComponent(q)}&apikey=zenkey`;

        // Fetch the media data from the API
        const response = await axios.get(apiUrl);
        const { status, result } = response.data;

        // Handle API failure or missing result
        if (!status || !result || result.length === 0) {
            return reply("❌ Failed to fetch the media. Ensure the URL is valid or try again later.");
        }

        const mediaData = result[0];
        // Check if the media is a video or image and send it
        if (mediaData.type === "video") {
            await conn.sendMessage(from, {
                video: { url: mediaData.url },
                mimetype: "video/mp4",
                caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
            }, { quoted: mek });
        } else if (mediaData.type === "image") {
            await conn.sendMessage(from, {
                image: { url: mediaData.url },
                caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
            }, { quoted: mek });
        } else {
            return reply("❌ Unsupported media type in the provided Instagram link.");
        }

    } catch (error) {
        console.error(error);
        reply("❌ An error occurred while processing your request. Please try again later.");
    }
});
//==============================================================================================================================================================================

cmd({
    pattern: "twitter",
    desc: "Download media (video/audio) from Twitter.",
    react: "🐦",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    try {
        const config = await readEnv();
        const lang = config.LANGUAGE || "EN"; // Default to English
        const messages = {
            EN: {
                invalidUrl: "❌ Please provide a valid Twitter URL.",
                fetchError: "❌ Failed to fetch the media. Ensure the URL is valid or try again later.",
                unsupportedMedia: "❌ Unsupported media type. No video or audio found.",
                downloading: "📥 Downloading media...",
                mediaDetails: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖳 𝖶 𝖨 𝖳 𝖳 𝖤 𝖱  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 𝖳𝗂𝗍𝗅𝖾 : {desc}
🖇️ 𝖴𝗋𝗅 : ${q}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : HD 𝖵𝗂𝖽𝖾𝗈 𝖳𝗒𝗉𝖾.
│ 2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : SD 𝖵𝗂𝖽𝖾𝗈 𝖳𝗒𝗉𝖾.
│ 3️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗼 𝖳𝗒𝗉𝖾.
╰─────────────────────┈`,
                HDVideo: "🎬 *HD Video*\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
                SDVideo: "🎬 *SD Video*\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
                audio: "🎧 *Audio File*\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
            },
            SI: {
                invalidUrl: "❌ වලංගු Twitter URL එකක් ලබා දෙන්න.",
                fetchError: "❌ මාධ්‍ය ලබා ගැනීම අසාර්ථක විය. URL වලංගු බව සහ තවත් වරක් උත්සාහ කරන්න.",
                unsupportedMedia: "❌ අනුමත නොකළ මාධ්‍ය වර්ගය. වීඩියෝ හෝ සංගීතයක් සොයාගත නොහැක.",
                downloading: "📥 මාධ්‍ය බාගත කරමින්...",
                mediaDetails: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖳 𝖶 𝖨 𝖳 𝖳 𝖤 𝖱  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 මාතෘකාව : {desc}
🖇️ පිවිසුම් ලින්කුව : ${q}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  බාගත කිරීම : HD වීඩියෝ ආකාරයට.
│ 2️⃣  බාගත කිරීම : SD වීඩියෝ ආකාරයට.
│ 3️⃣  බාගත කිරීම : සංගීත ආකාරයට.
╰─────────────────────┈`,
                HDVideo: "🎬 *HD වීඩියෝ*\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
                SDVideo: "🎬 *SD වීඩියෝ*\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ",
                audio: "🎧 *සංගීත ගොනුව*\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
            }
        };

        // Check if a valid URL is provided
        if (!q || !/^https:\/\/(www\.)?twitter\.com\/.*\/status\/\d+/.test(q)) {
            return reply(messages[lang].invalidUrl);
        }

        // Prepare the API URL with the provided URL
        const apiKey = "Cu5RXZLd";
        const apiUrl = `https://api.fgmods.xyz/api/downloader/twitter?url=${encodeURIComponent(q)}&apikey=${apiKey}`;

        // Fetch the Twitter media details
        const axios = require('axios');
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Handle API failure or missing result
        if (!data.status || !data.result) {
            return reply(messages[lang].fetchError);
        }

        const { desc, thumb, HD, SD, audio } = data.result;

        // Construct and send message with media details
        const mediaInfo = messages[lang].mediaDetails.replace("{desc}", desc);
        const sentMessage = await conn.sendMessage(from, {
            image: { url: thumb },
            caption: mediaInfo
        }, { quoted: mek });

        // Listen for user replies (e.g., 1, 2, 3)
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                switch (userReply) {
                    case "1":
                        if (HD) {
                            await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                            await conn.sendMessage(from, {
                                video: { url: HD },
                                mimetype: "video/mp4",
                                caption: messages[lang].HDVideo
                            }, { quoted: mek });
                            await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                        }
                        break;
                    case "2":
                        if (SD) {
                            await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                            await conn.sendMessage(from, {
                                video: { url: SD },
                                mimetype: "video/mp4",
                                caption: messages[lang].SDVideo
                            }, { quoted: mek });
                            await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                        }
                        break;
                    case "3":
                        if (audio) {
                            await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                            await conn.sendMessage(from, {
                                audio: { url: audio },
                                mimetype: "audio/mp3",
                                caption: messages[lang].audio
                            }, { quoted: mek });
                            await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                        }
                        break;
                    default:
                        reply(messages[lang].unsupportedMedia);
                }
            }
        });

    } catch (error) {
        console.error(error);
        reply(messages[lang].fetchError);
    }
});
//=============================================================================================================================================================================

//==============================================================================================================================================================================

cmd({
    pattern: "mega",
    category: "downloader",
    react: "⬇️",
    use: '.mega <Link>',
    desc: "Download Mega file and send it with detailed info.",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, args, q, reply }) => {
    try {
        if (!q || !q.includes('mega.nz')) {
            return reply("❌ *Invalid URL!* Please provide a valid Mega.nz file URL. 🔗");
        }

        // Extract file link and key from the Mega URL
        const [fileURL, fileKey] = q.split("#");
        if (!fileKey) {
            return reply("🔑 *Decryption key missing!* Please provide a complete Mega.nz URL.");
        }

        // Create a File instance
        const file = File.fromURL(`${fileURL}#${fileKey}`);

        // Notify about the download starting
        reply("📥 *Preparing to download...*\nPlease wait, fetching file details.");

        // Get file metadata
        const fileMeta = await file.loadAttributes();

        const fileName = fileMeta.name || "Unknown_File";
        const fileSizeMB = (fileMeta.size / (1024 * 1024)).toFixed(2); // Size in MB
        const fileDate = new Date(fileMeta.timestamp * 1000).toLocaleString(); // Convert timestamp to readable date


        // Progress tracking
        file.on('progress', (bytesLoaded, bytesTotal) => {
            const percent = ((bytesLoaded / bytesTotal) * 100).toFixed(2);
            const loadedMB = (bytesLoaded / (1024 * 1024)).toFixed(2);
            const totalMB = (bytesTotal / (1024 * 1024)).toFixed(2);

            reply(`⬇️ *Progress:*\n${percent}% (${loadedMB} MB of ${totalMB} MB)`);
        });

        // Download the file as a buffer
        const buffer = await file.downloadBuffer();

        // Send the file as a document
        await conn.sendMessage(from, {
          document: buffer,
          mimetype: "application/octet-stream",
          fileName: fileName,
          jpegThumbnail: { url: botimg2 },
          caption: `乂 ＭＥＧＡ  ＤＯＷＮＬＯＡＤＥＲ

╭──────────●➤
├ ☘️ 𝖭𝖺𝗆𝖾 : ${fileName}
├ 💾 𝖲𝗂𝗓𝖾 : ${fileSizeMB} MB
├ 📅 𝖴𝗉𝗅𝗈𝖺𝖽 𝖮𝗇 : ${fileDate}
├ ⚙️ 𝖴𝗋𝗅 : ${fileUrl}
╰──────●➤

> 🙌 𝖸𝗈𝗎𝗋 𝖥𝗂𝗅𝖾 𝖶𝗂𝗅𝗟 𝖡𝖾 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝗘𝗗 𝖠𝗇𝖽 𝖴𝗉𝗅𝗈𝖺𝖽𝗂𝗇𝗀... 𝖯𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍 𝗌𝗈𝗆𝖾 𝗌𝖾𝖼𝗈𝗇𝖽 💗`,
          contextInfo: {
            externalAdReply: {
              title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
              body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
              thumbnail: { url: `https://i.ibb.co/jD4tk8g/github.jpg` }, // Thumbnail URL
              sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
              mediaType: 1,
              renderLargerThumbnail: false
            }
          }
        }, { quoted: mek });


    } catch (error) {
        console.error(error);
        reply(`❌ *Error occurred!*\n\nDetails: ${error.message}`);
    }
});
//==============================================================================================================================================================================
cmd({
    pattern: "mfire",
    desc: "Download files from MediaFire.",
    react: "📥",
    category: "downloader",
    filename: __filename,
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        const config = await readEnv();

        // Check if the user has provided a URL
        if (!q || !q.startsWith("http")) {
            return reply(config.LANGUAGE === "SI" 
                ? "❌ කරුණාකර වලංගු MediaFire URL එකක් ලබා දෙන්න!" 
                : "❌ Please provide a valid MediaFire URL!"
            );
        }

        // Construct API URL to get MediaFire file details
        const apiUrl = `https://www.dark-yasiya-api.site/download/mfire?url=${encodeURIComponent(q)}`;

        // Fetch data from the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data.status || !data.result) {
            return reply(config.LANGUAGE === "SI" 
                ? "❌ MediaFire ලින්කුව විග්‍රහ කිරීම අසාර්ථක විය. කරුණාකර නැවත පරීක්ෂා කරන්න." 
                : "❌ Failed to process the MediaFire link. Please check and try again."
            );
        }

        const { fileName, fileType, size, dl_link } = data.result;

        // Send download information to the user
        await conn.sendMessage(from, {
            text: config.LANGUAGE === "SI" 
                ? `*乂 𝗠𝗘𝗗𝗜𝗔𝗙𝗜𝗥𝗘 𝗙𝗜𝗟𝗘 𝗗𝗘𝗧𝗔𝗜𝗟𝗦* \n\n📄 *ගොනුවේ නම:* ${fileName}\n📂 *ප්‍රමාණය:* ${size}\n🖇️ *URL:* ${q}\n\n✅ *බාගත කිරීම ආරම්භ වේ...*` 
                : `*乂 MEDIAFIRE FILE DETAILS* \n\n📄 *File Name:* ${fileName}\n📂 *Size:* ${size}\n🖇️ *URL:* ${q}\n\n✅ *Downloading file now...*`,
            footer: "ʙʜᴀꜱʜɪ-ᴍᴅ ᴠ2 🚀",
        }, { quoted: mek });

        // Download the file and send it to the user
        await conn.sendMessage(from, {
            document: { url: dl_link },
            mimetype: fileType,
            fileName,
            jpegThumbnail: { url: botimg2 },
            caption: config.LANGUAGE === "SI" 
                ? `🎉 *බාගත කිරීම සාර්ථකයි!*\n© 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗕𝗛𝗔𝗦𝗛𝗜-𝗠𝗗 🚀` 
                : `🎉 *Download successful!*\n© POWERED BY BHASHI-MD 🚀`,
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(config.LANGUAGE === "SI" 
            ? `❌ දෝෂයක් සිදු විය: ${error.message}. කරුණාකර නැවත උත්සාහ කරන්න.` 
            : `❌ An error occurred: ${error.message}. Please try again.`
        );
    }
});
//==============================================================================================================================================================================
cmd({
    pattern: "soundcloud",
    desc: "Download SoundCloud tracks.",
    react: "🎶",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    try {
        const config = await readEnv();
        if (!q) {
            return reply(config.LANGUAGE === "SI" 
                ? "🎵 කරුණාකර වලංගු SoundCloud URL එකක් ලබා දෙන්න!" 
                : "🎵 Please provide a valid SoundCloud URL!"
            );
        }

        const apiKey = "Cu5RXZLd"; // Your API key
        const soundcloudUrl = `https://api.fgmods.xyz/api/downloader/soundcloud?url=${encodeURIComponent(q)}&apikey=${apiKey}`;

        const response = await fetch(soundcloudUrl);
        const data = await response.json();

        // Check if data was successfully fetched
        if (!data.status || !data.result) {
            return reply(config.LANGUAGE === "SI" 
                ? "❌ SoundCloud ගීතය ලබා ගැනීම අසමත් විය. කරුණාකර URL එක පරීක්ෂා කරන්න හෝ නැවත උත්සාහ කරන්න." 
                : "❌ Unable to fetch track details. Check the URL or try again."
            );
        }

        const { title, duration, thumb, dl_url } = data.result;

        // Prepare track information message based on language
        const trackInfo = config.LANGUAGE === "SI" 
            ? `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖲 𝖮 𝖴 𝖭 𝖣 𝖢 𝖫 𝖮 𝖴 𝖣  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 මාතෘකාව : ${title}
⏰ කාලසීමාව : ${duration}
🖇️ පිවිසුම් ලින්කුව : ${q}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖮  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖮 𝖯 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  බාගත කිරීම : ඕඩියෝ
╰─────────────────────┈`
            : `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖲 𝖮 𝖴 𝖭 𝖣 𝖢 𝖫 𝖮 𝖴 𝖣  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 Title: ${title}
⏰ Duration: ${duration}
🖇️ URL: ${q}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖮  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖮 𝖯 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  Download: Audio Type
╰─────────────────────┈`;

        // Send the message with the track information and thumbnail
        const sentMessage =  await conn.sendMessage(from, {
                image: { url: thumb },
                caption: trackInfo,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: 'ʙʜᴀꜱʜɪ-ᴍᴅ ᴠ2 🚀​',
                        newsletterJid: "120363333519565664@newsletter",
                    },
                    externalAdReply: {
                        title: 'ＢＨＡＳＨＩ－ＭＤ Ｖ２ 🚀',
                        body: '© ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ',
                        thumbnailUrl: botimg2,
                        sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                        mediaType: 1,
                        renderLargerThumbnail: false
                    }
                }
            }, { quoted: mek });

        // Listen for the user's reply and send the audio if they choose "1"
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply is for this specific message and user chose "1"
            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                if (userReply === "1") {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(from, {
                        audio: { url: dl_url },
                        mimetype: "audio/mpeg",
                        fileName: `${title}.mp3`,
                        caption: config.LANGUAGE === "SI" 
                            ? `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ` 
                            : `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
                    }, { quoted: mek });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                }
            }
        });

    } catch (error) {
        console.error(error);
        reply(config.LANGUAGE === "SI" 
            ? `❌ දෝෂයක් සිදු විය: ${error.message}. කරුණාකර නැවත උත්සාහ කරන්න.` 
            : `❌ An error occurred: ${error.message}. Please try again.`
        );
    }
});

cmd({
    pattern: "song",
    desc: "Download songs.",
    react: "🎶",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q, config }) => {
    try {
        const config = await readEnv();
        const language = config.LANGUAGE || 'EN'; // Default to English if no language is set

        // Multi-language responses
        const messages = {
            'EN': {
                noQuery: "🪄 Please provide a song URL or name ✨",
                songInfo: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖲 𝖮 𝖭 𝖦  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 𝖳𝗂𝗍𝗂𝗅𝖾 : {title}
⏰ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇 : {duration}
📻 𝖢𝗁𝖺𝗇𝖾𝗅 : {channel}
📆 𝖴𝗉𝗅𝗈𝖺𝖽 𝖮𝗇 : {uploaded}
🖇️ 𝖴𝗋𝗅 : {url}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖬 𝖤 𝖭 𝖴  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗈 𝖳𝗒𝗉𝖾.
│ 2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖣𝗈𝖼𝗎𝗺𝗎𝗇𝗍 𝖳𝗒𝗉𝖾.
╰─────────────────────┈`,
                invalidChoice: "🚫 Invalid choice! Please reply with '1' to download as audio or '2' to download as a document."
            },
            'SI': {
                noQuery: "🪄 කරුණාකර සංගීත URL එකක් හෝ නමක් ලබා දෙන්න ✨",
                songInfo: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖲 𝖮 𝖭 𝖦  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 මාතෘකාව : {title}
⏰ කාලසීමාව : {duration}
📻 චැනලය :  {channel}
📆 උඩුගත කල දිනය : {uploaded}
🖇️ පිවිසුම් ලින්කුව : {url}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖬 𝖤 𝖭 𝖴  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  බාගත කිරීම : සංගීත ආකාරයට.
│ 2️⃣  බාගත කිරීම : ගොනු ආකාරයට.
╰─────────────────────┈`,
                invalidChoice: "🚫 වැරදි තෝරන්න! කරුණාකර '1' ලෙස උත්තර දෙන්න, සංගීත ආකාරයට බාගත කිරීමට හෝ '2' ලෙස ගොනු ආකාරයට බාගත කිරීමට."
            }
        };

        // Check for query input
        if (!q) return reply(messages[language].noQuery);

        // Search for song
        const search = await ytsearch(q);
        if (!search || !search.results || search.results.length === 0) {
            return reply(messages[language].noQuery);
        }

        const data = search.results[0];
        const url = data.url;

        // Ensure that the author exists
        const authorName = data.author ? data.author.name : "Unknown Channel";

        // Prepare song details message
        let desc = messages[language].songInfo
            .replace("{title}", data.title)
            .replace("{duration}", data.timestamp)
            .replace("{channel}", authorName)
            .replace("{uploaded}", data.ago)
            .replace("{url}", data.url);

        // Send song details with thumbnail and emoji
        const sentMessage = await conn.sendMessage(
                from,
                {
                    text: desc,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: false,
                        externalAdReply: {
                            title: `Bhashi Song Downloader`,
                            body: `${data.title} : Powered By Bhashi Song Information Search Engine`,
                            thumbnailUrl: data.thumbnail,
                            sourceUrl: "",
                            mediaType: 1,
                            renderLargerThumbnail: false,
                        },
                    },
                },
                { quoted: mek },
            );

        // Get song audio info using the new API
        const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(url)}`;
        const audioData = await axios.get(apiUrl).then(res => res.data);

        if (!audioData.success || !audioData.result) {
            return reply("❌ Failed to fetch audio. Please try again!");
        }

        const audioUrl = audioData.result.download_url;
        const thumbnailUrl = audioData.result.thumbnail;

        const imageResponse = await axios.get(thumbnailUrl, { responseType: 'arraybuffer' });
        const imageBuffer = await sharp(imageResponse.data)
          .resize(320, 180) // Adjust dimensions as needed
          .jpeg({ quality: 90 }) // Adjust quality as needed
          .toBuffer();

        // Prevent redundant reactions and handle the user reply for download choice
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Ensure the message reply is related to the sent message
            if (messageContext && messageContext.stanzaId === sentMessage.key.id && msg.key.remoteJid === from) {
                if (userReply === '1') {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(from, { 
                        audio: { url: audioUrl }, 
                        mimetype: "audio/mpeg", 
                        caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ" 
                    }, { quoted: mek });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else if (userReply === '2') {
                    const docUrl = audioUrl;
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(from, { 
                        document: { url: docUrl }, 
                        mimetype: "audio/mpeg", 
                        caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ", 
                        jpegThumbnail: imageBuffer,
                        fileName: `${data.title}.mp3` 
                    }, { quoted: mek });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else {
                    await reply(messages[language].invalidChoice);
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply(`❌ An error occurred: ${e.message}. Please try again!`);
    }
});

cmd({
    pattern: "video",
    desc: "Download videos from YouTube.",
    react: "🎬",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q, config }) => {
    try {
        const config = await readEnv();
        const language = config.LANGUAGE || 'EN'; // Default to English if no language is set

        // Multi-language responses
        const messages = {
            'EN': {
                noQuery: "🪄 Please provide a video URL or name ✨",
                videoInfo: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  V I D E O  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 𝖳𝗂𝗍𝗅𝖾 : {title}
⏰ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇 : {duration}
📻 𝖢𝗁𝖺𝗇𝖾𝗅 : {channel}
📆 𝖴𝗉𝗅𝗈𝖺𝖽 𝖮𝗇 : {uploaded}
🖇️ 𝖴𝗋𝗅 : {url}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖬 𝖤 𝖭 𝖴  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖬𝖩𝖯 𝖠𝗎𝖽𝗂𝗈.
│ 2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗈 𝖢𝗁𝖠𝖽𝖳.
╰─────────────────────┈`,
                invalidChoice: "🚫 Invalid choice! Please reply with '1' to download as MP4 video or '2' to download as audio.",
                invalidUrl: "🚫 Invalid YouTube URL! Please provide a valid URL.",
                downloadError: "❌ Failed to download the video. Please try again!",
                downloading: "⬇️ Downloading... Please wait!",
                downloadComplete: "✅ Download complete!",
            },
            'SI': {
                noQuery: "🪄 කරුණාකර වීඩියෝ URL එකක් හෝ නමක් ලබා දෙන්න ✨",
                videoInfo: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  V I D E O  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 මාතෘකාව : {title}
⏰ කාලසීමාව : {duration}
📻 චැනලය : {channel}
📆 උඩුගත කල දිනය : {uploaded}
🖇️ පිවිසුම් ලින්කුව : {url}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖬 𝖤 𝖭 𝖴  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  බාගත කිරීම : 𝖬𝖩𝖯 වීඩියෝ.
│ 2️⃣  බාගත කිරීම : 𝖬𝖩𝖯 𝖠𝗎𝖽𝗂𝗈.
╰─────────────────────┈`,
                invalidChoice: "🚫 වැරදි තෝරන්න! කරුණාකර '1' ලෙස උත්තර දෙන්න, 𝖬𝖩𝖯 වීඩියෝවක් බාගත කිරීමට හෝ '2' ලෙස 𝖠𝗎𝖽𝗂𝗈 𝖡𝖧𝖠𝖲𝗁𝗂 බාගත කිරීමට.",
                invalidUrl: "🚫 වලංගු නොවන YouTube URL එකකි! කරුණාකර වලංගු URL එකක් ලබා දෙන්න.",
                downloadError: "❌ වීඩියෝව බාගත කිරීමට අසමත් විය. කරුණාකර නැවත උත්සාහ කරන්න!",
                downloading: "⬇️ බාගත කිරීම... කරුණාකර රැඳී සිටින්න!",
                downloadComplete: "✅ බාගත කිරීම සම්පූර්ණයි!",
            }
        };

        // Check for query input
        if (!q) return reply(messages[language].noQuery);

        // Validate YouTube URL or search for video
        let videoUrl = q;
        let videoInfo;

        if (!q.startsWith('http')) {
            // Search for video if the input is not a URL
            const search = await ytsearch(q);
            if (!search || !search.results || search.results.length === 0) {
                return reply(messages[language].noQuery);
            }
            videoUrl = search.results[0].url;
        }

        // Get video info using the new API
        const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(videoUrl)}`;
        const videoData = await axios.get(apiUrl).then(res => res.data);

        if (!videoData.success || !videoData.result) {
            return reply(messages[language].downloadError);
        }

        const { title, duration, thumbnail, download_url } = videoData.result;
        const author = { name: videoData.creator }; // You can customize how the author is fetched
        const uploaded = 'Just Now'; // This can be customized with actual upload time if available

        // Prepare video details message
        let desc = messages[language].videoInfo
            .replace("{title}", title)
            .replace("{duration}", duration)
            .replace("{channel}", author.name)
            .replace("{uploaded}", uploaded)
            .replace("{url}", videoUrl);

        // Send video details with thumbnail and emoji
        const sentMessage = await conn.sendMessage(
            from,
            {
                text: desc,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    externalAdReply: {
                        title: `Bhashi Video Downloader`,
                        body: `${title} : Powered By Bhashi Video Information Search Engine`,
                        thumbnailUrl: thumbnail,
                        sourceUrl: "",
                        mediaType: 1,
                        renderLargerThumbnail: false,
                    },
                },
            },
            { quoted: mek },
        );

        // Listen for the user's reply (handle the number choice)
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply is to the previously sent prompt
            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                if (userReply === '1') {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await reply(messages[language].downloading);

                    // Download video in 720p (as per API response)
                    await conn.sendMessage(from, {
                        video: { url: download_url },
                        mimetype: "video/mp4",
                        caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
                    }, { quoted: mek });

                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                    await reply(messages[language].downloadComplete);
                } else if (userReply === '2') {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await reply(messages[language].downloading);

                    // Download audio
                    const audioData = await ytmp3(videoUrl);
                    if (!audioData || !audioData.status) {
                        return reply(messages[language].downloadError);
                    }

                    await conn.sendMessage(from, {
                        audio: { url: audioData.download.url },
                        mimetype: "audio/mpeg",
                        caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
                    }, { quoted: mek });

                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                    await reply(messages[language].downloadComplete);
                } else {
                    await reply(messages[language].invalidChoice);
                }
            }
        });

    } catch (e) {
        console.error(e);
        reply(`❌ An error occurred: ${e.message}. Please try again!`);
    }
});

/*
//==============================================================================================================================================================================
cmd({
    pattern: "video",
    desc: "Download videos from YouTube.",
    react: "🎬",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q, config }) => {
    try {
        const config = await readEnv();
        const language = config.LANGUAGE || 'EN'; // Default to English if no language is set

        // Multi-language responses
        const messages = {
            'EN': {
                noQuery: "🪄 Please provide a video URL or name ✨",
                videoInfo: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  V I D E O  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 𝖳𝗂𝗍𝗅𝖾 : {title}
⏰ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇 : {duration}
📻 𝖢𝗁𝖺𝗇𝖾𝗅 : {channel}
📆 𝖴𝗉𝗅𝗈𝖺𝖽 𝖮𝗇 : {uploaded}
🖇️ 𝖴𝗋𝗅 : {url}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖬 𝖤 𝖭 𝖴  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖬𝖩𝖯 𝖠𝗎𝖽𝗂𝗈.
│ 2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗈 𝖢𝗁𝖠𝖽𝖳.
╰─────────────────────┈`,
                invalidChoice: "🚫 Invalid choice! Please reply with '1' to download as MP4 video or '2' to download as audio.",
                invalidUrl: "🚫 Invalid YouTube URL! Please provide a valid URL.",
                downloadError: "❌ Failed to download the video. Please try again!",
                downloading: "⬇️ Downloading... Please wait!",
                downloadComplete: "✅ Download complete!",
            },
            'SI': {
                noQuery: "🪄 කරුණාකර වීඩියෝ URL එකක් හෝ නමක් ලබා දෙන්න ✨",
                videoInfo: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  V I D E O  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 මාතෘකාව : {title}
⏰ කාලසීමාව : {duration}
📻 චැනලය : {channel}
📆 උඩුගත කල දිනය : {uploaded}
🖇️ පිවිසුම් ලින්කුව : {url}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖬 𝖤 𝖭 𝖴  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  බාගත කිරීම : 𝖬𝖩𝖯 වීඩියෝ.
│ 2️⃣  බාගත කිරීම : 𝖬𝖩𝖯 𝖠𝗎𝖽𝗂𝗈.
╰─────────────────────┈`,
                invalidChoice: "🚫 වැරදි තෝරන්න! කරුණාකර '1' ලෙස උත්තර දෙන්න, 𝖬𝖩𝖯 වීඩියෝවක් බාගත කිරීමට හෝ '2' ලෙස 𝖠𝗎𝖽𝗂𝗈 𝖡𝖧𝖠𝖲𝗁𝗂 බාගත කිරීමට.",
                invalidUrl: "🚫 වලංගු නොවන YouTube URL එකකි! කරුණාකර වලංගු URL එකක් ලබා දෙන්න.",
                downloadError: "❌ වීඩියෝව බාගත කිරීමට අසමත් විය. කරුණාකර නැවත උත්සාහ කරන්න!",
                downloading: "⬇️ බාගත කිරීම... කරුණාකර රැඳී සිටින්න!",
                downloadComplete: "✅ බාගත කිරීම සම්පූර්ණයි!",
            }
        };

        // Check for query input
        if (!q) return reply(messages[language].noQuery);

        // Validate YouTube URL or search for video
        let videoUrl = q;
        let videoInfo;

        if (!q.startsWith('http')) {
            // Search for video if the input is not a URL
            const search = await ytsearch(q);
            if (!search || !search.results || search.results.length === 0) {
                return reply(messages[language].noQuery);
            }
            videoUrl = search.results[0].url;
        }

        // Get video info
        const videoData = await ytmp4(videoUrl, '360p'); // Fetch video info
        if (!videoData || !videoData.status) {
            return reply(messages[language].downloadError);
        }

        const { title, duration, author, uploaded, url } = videoData.result;

        // Prepare video details message
        let desc = messages[language].videoInfo
            .replace("{title}", title)
            .replace("{duration}", duration.timestamp)
            .replace("{channel}", author.name)
            .replace("{uploaded}", uploaded)
            .replace("{url}", url);

        // Send video details with thumbnail and emoji
        const sentMessage = await conn.sendMessage(
            from,
            {
                text: desc,
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: false,
                    externalAdReply: {
                        title: `Bhashi Video Downloader`,
                        body: `${title} : Powered By Bhashi Video Information Search Engine`,
                        thumbnailUrl: videoData.result.image,
                        sourceUrl: "",
                        mediaType: 1,
                        renderLargerThumbnail: false,
                    },
                },
            },
            { quoted: mek },
        );

        // Listen for the user's reply (handle the number choice)
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply is to the previously sent prompt
            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                if (userReply === '1') {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await reply(messages[language].downloading);

                    // Download video in 360p
                    const videoUrl = videoData.download.url;
                    await conn.sendMessage(from, {
                        video: { url: videoUrl },
                        mimetype: "video/mp4",
                        caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
                    }, { quoted: mek });

                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                    await reply(messages[language].downloadComplete);
                } else if (userReply === '2') {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await reply(messages[language].downloading);

                    // Download audio
                    const audioData = await ytmp3(videoUrl);
                    if (!audioData || !audioData.status) {
                        return reply(messages[language].downloadError);
                    }

                    await conn.sendMessage(from, {
                        audio: { url: audioData.download.url },
                        mimetype: "audio/mpeg",
                        caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ"
                    }, { quoted: mek });

                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                    await reply(messages[language].downloadComplete);
                } else {
                    await reply(messages[language].invalidChoice);
                }
            }
        });

    } catch (e) {
        console.error(e);
        reply(`❌ An error occurred: ${e.message}. Please try again!`);
    }
});
//==============================================================================================================================================================================
cmd({
    pattern: "song",
    desc: "Download songs.",
    react: "🎶",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q, config }) => {
    try {
        const config = await readEnv();
        const language = config.LANGUAGE || 'EN'; // Default to English if no language is set

        // Multi-language responses
        const messages = {
            'EN': {
                noQuery: "🪄 Please provide a song URL or name ✨",
                songInfo: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖲 𝖮 𝖭 𝖦  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 𝖳𝗂𝗍𝗅𝖾 : {title}
⏰ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇 : {duration}
📻 𝖢𝗁𝖺𝗇𝖾𝗅 : {channel}
📆 𝖴𝗉𝗅𝗈𝖺𝖽 𝖮𝗇 : {uploaded}
🖇️ 𝖴𝗋𝗅 : {url}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖬 𝖤 𝖭 𝖴  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗈 𝖳𝗒𝗉𝖾.
│ 2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖣𝗈𝖼𝗎𝗺𝗎𝗇𝗍 𝖳𝗒𝗉𝖾.
╰─────────────────────┈`,
                invalidChoice: "🚫 Invalid choice! Please reply with '1' to download as audio or '2' to download as a document."
            },
            'SI': {
                noQuery: "🪄 කරුණාකර සංගීත URL එකක් හෝ නමක් ලබා දෙන්න ✨",
                songInfo: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖲 𝖮 𝖭 𝖦  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🎬 මාතෘකාව : {title}
⏰ කාලසීමාව : {duration}
📻 චැනලය :  {channel}
📆 උඩුගත කල දිනය : {uploaded}
🖇️ පිවිසුම් ලින්කුව : {url}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖬 𝖤 𝖭 𝖴  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭─────────────────────┈
│ 1️⃣  බාගත කිරීම : සංගීත ආකාරයට.
│ 2️⃣  බාගත කිරීම : ගොනු ආකාරයට.
╰─────────────────────┈`,
                invalidChoice: "🚫 වැරදි තෝරන්න! කරුණාකර '1' ලෙස උත්තර දෙන්න, සංගීත ආකාරයට බාගත කිරීමට හෝ '2' ලෙස ගොනු ආකාරයට බාගත කිරීමට."
            }
        };

        // Check for query input
        if (!q) return reply(messages[language].noQuery);

        // Search for song
        const search = await ytsearch(q);
        if (!search || !search.results || search.results.length === 0) {
            return reply(messages[language].noQuery);
        }

        const data = search.results[0];
        const url = data.url;

        // Ensure that the author exists
        const authorName = data.author ? data.author.name : "Unknown Channel";

        // Prepare song details message
        let desc = messages[language].songInfo
            .replace("{title}", data.title)
            .replace("{duration}", data.timestamp)
            .replace("{channel}", authorName)
            .replace("{uploaded}", data.ago)
            .replace("{url}", data.url);

        // Send song details with thumbnail and emoji
        const sentMessage = await conn.sendMessage(
                from,
                {
                    text: desc,
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: false,
                        externalAdReply: {
                            title: `Bhashi Song Downloader`,
                            body: `${data.title} : Powered By Bhashi Song Information Search Engine`,
                            thumbnailUrl: data.thumbnail,
                            sourceUrl: "",
                            mediaType: 1,
                            renderLargerThumbnail: false,
                        },
                    },
                },
                { quoted: mek },
            );

        // Download audio
        const audioInfo = await ytmp3(url);
        const audioUrl = audioInfo.download.url;

        const imageResponse = await axios.get(data.thumbnail, { responseType: 'arraybuffer' });
        const imageBuffer = await sharp(imageResponse.data)
          .resize(320, 180) // Adjust dimensions as needed
          .jpeg({ quality: 90 }) // Adjust quality as needed
          .toBuffer();
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply is to the previously sent prompt
            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                if (userReply === '1') {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(from, { 
                        audio: { url: audioUrl }, 
                        mimetype: "audio/mpeg", 
                        caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ" 
                    }, { quoted: mek });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else if (userReply === '2') {
                    const docUrl = audioInfo.download.url;
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(from, { 
                        document: { url: docUrl }, 
                        mimetype: "audio/mpeg", 
                        caption: "> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ", 
                        jpegThumbnail: imageBuffer,
                        fileName: `${data.title}.mp3` 
                    }, { quoted: mek });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else {
                    await reply(messages[language].invalidChoice);
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply(`❌ An error occurred: ${e.message}. Please try again!`);
    }
});
*/

//==============================================================================================================================================================================
cmd({
    pattern: "gitclone",
    alias: ["repoclone"],
    desc: "Download a GitHub repository",
    category: "downloader",
    react: "📥",
    filename: __filename
},
async (conn, mek, m, { from, args, reply }) => {
    try {
        const config = await readEnv();
        const lang = config.LANGUAGE || 'EN'; 

        const noUrlProvidedText = lang === 'SI' ? `කරුණාකර GitHub නාමාවලියක් ලබා දෙන්න.\n\nඋදාහරණය: .gitclone https://github.com/example/example` : `Please provide a GitHub repository URL.\n\nExample: .gitclone https://github.com/example/example`;
        const invalidUrlText = lang === 'SI' ? 'අවලංගු GitHub නාමාවලිය. කරුණාකර වලංගු URL එකක් ලබා දෙන්න.' : 'Invalid GitHub repository URL. Please provide a valid URL.';
        const repoNotFoundText = lang === 'SI' ? 'නාමාවලිය සොයා ගත නොහැක. කරුණාකර URL එක පරීක්ෂා කර නැවත උත්සාහ කරන්න.' : 'Repository not found. Please check the URL and try again.';
        const downloadingTextBase = lang === 'SI' ? `📥 ඩවුන්ලෝඩ් කරමින්: %s\n\nකරුණාකර වාසියක්, මෙය විනාඩි කිහිපයක් ගනු ඇත...` : `📥 Downloading: %s\n\nPlease wait, this may take a moment...`;


        if (!args[0]) {
            return reply(noUrlProvidedText);
        }

        const regex = /(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/]+)\/([^\/]+)/i;
        const match = args[0].match(regex);

        if (!match) {
            return reply(invalidUrlText);
        }

        const [, user, repo] = match;
        const zipUrl = `https://codeload.github.com/${user}/${repo}/zip/refs/heads/main`;
        const apiUrl = `https://api.github.com/repos/${user}/${repo}`;

        // Fetch repository information
        https.get(apiUrl, {
            headers: { 'User-Agent': 'BHASHI-MD Bot' }
        }, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', async () => {
                if (res.statusCode === 404) {
                    return reply(repoNotFoundText);
                }

                const repoInfo = JSON.parse(data);

                // Send a message indicating download is starting
                const downloadingText = downloadingTextBase.replace('%s', repoInfo.full_name);
                await conn.sendMessage(from, {
                  text: downloadingText, // Dynamically fetch the message based on the language
                  contextInfo: {
                    externalAdReply: {
                      title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                      body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                      thumbnail: { url: `https://i.ibb.co/jD4tk8g/github.jpg` }, // Thumbnail URL
                      sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
                      mediaType: 1,
                      renderLargerThumbnail: false
                    }
                  }
                });


                // Download and send the repository
                await conn.sendMessage(from, {
                  document: { url: zipUrl },
                  mimetype: 'application/zip',
                 jpegThumbnail: { url: botimg2 },
                  fileName: `${repoInfo.name}.zip`,
                  caption: lang === 'SI' 
                    ? `📦 *නාමාවලිය:* ${repoInfo.full_name}\n🌟 *තරඟ:* ${repoInfo.stargazers_count}\n📚 *විස්තරය:* ${repoInfo.description || 'විස්තරයක් නොමැත.'}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
                    : `📦 *Repository:* ${repoInfo.full_name}\n🌟 *Stars:* ${repoInfo.stargazers_count}\n📚 *Description:* ${repoInfo.description || 'No description provided.'}\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
                  contextInfo: {
                    externalAdReply: {
                      title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                      body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                      thumbnail: { url: `https://i.ibb.co/jD4tk8g/github.jpg` }, // Thumbnail URL
                      sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
                      mediaType: 1,
                      renderLargerThumbnail: false
                    }
                  }
                });
            });
        }).on('error', (error) => {
            console.error(error);
            reply(lang === 'SI' ? '📥 ප්‍රවේශ කරමින් GitHub නාමාවලියක් ලබා ගැනීමේ දෝෂයක් ඇතිවිය. කරුණාකර නැවත උත්සාහ කරන්න.' : 'An error occurred while fetching repository information. Please try again later.');
        });

    } catch (error) {
        console.error(error);
        reply(lang === 'SI' ? '❌ **දෝෂයක්:** ඔබේ ඉල්ලීම සැකසීමේදී අනපේක්ෂිත දෝෂයක් සිදුවිය.' : '❌ **Error:** An unexpected error occurred while processing your request. Please try again later.');
    }
});
//==============================================================================================================================================================================
cmd({
    pattern: "gdrive",
    alias: ["gdrive"],
    react: "📥",
    desc: "Download files from Google Drive",
    category: "downloader",
    use: ".gdrive <Google Drive file URL>",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, pushname }) => {
    const config = await readEnv();
    const language = config.LANGUAGE; 
    try {
        const gdriveUrl = args.join(" ");
        if (!gdriveUrl) {
            const message = {
                SI: "*🚫 කරුණාකර Google Drive ලින්ක් එකක් ලබා දෙන්න!*",
                EN: "*🚫 Please provide a Google Drive URL!*"
            };
            return await reply(message[language]);
        }

        // API URL to fetch file information
        const apiUrl = `${vishwa2}/misc/gdrive?url=${encodeURIComponent(gdriveUrl)}&apikey=key1`;

        // Fetch file information from the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === "success") {
            const fileInfo = data.fileInfo;
            const { fileName, directDownloadLink, originalLink, Author } = fileInfo;

            // Send the file info to the user
            const message = {
                SI: `╭─『 *Google Drive DL* 』───⊷
│
│ ✨ *Requester*: ${pushname}
│ 🤖 *Bot*: BHASHI-MD
│ 📄 *File Name:* ${fileName}
│ 📚 *Author:* ${Author}
│ 📎 *Type:* Image (Assumed for simplicity)
│ 📥 *Direct Download Link:* ${directDownloadLink}
│
│ 🤷‍♀️ _Your Google Drive content is on its way!_
╰────────────────────⊷`,
                EN: `╭─『 *Google Drive DL* 』───⊷
│
│ ✨ *Requester*: ${pushname}
│ 🤖 *Bot*: BHASHI-MD
│ 📄 *File Name:* ${fileName}
│ 📚 *Author:* ${Author}
│ 📎 *Type:* Image (Assumed for simplicity)
│ 📥 *Direct Download Link:* ${directDownloadLink}
│
│ 🤷‍♀️ _Your Google Drive content is on its way!_
╰────────────────────⊷`
            };
            await reply(message[language]);

            // Now send the file directly to the user from the direct download link
            await conn.sendMessage(from, {
              document: { url: directDownloadLink },
              mimetype: 'application/octet-stream',
              jpegThumbnail : { url: botimg2 },
              fileName: fileName,
              caption: `📥 *${pushname}*, here is your Google Drive file!\n\n> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
              contextInfo: {
                externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                  thumbnail: { url: `https://i.ibb.co/tZg6Z2T/gdrive.jpg` }, // Thumbnail URL
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
                  mediaType: 1,
                  renderLargerThumbnail: false
                }
              }
            });

        } else {
            const errorMessage = {
                SI: "*🚫 ගූගල් ඩ්රයිව් ගොනුව සොයා ගැනීමේදී දෝෂයක් සිදු විය!*",
                EN: "*🚫 Error occurred while fetching the Google Drive file!*"
            };
            await reply(errorMessage[language]);
        }

    } catch (e) {
        // Handle errors gracefully
        const errorMessage = {
            SI: `❌ *ඔබේ ඉල්ලීම පිරිනැමීමේදී දෝෂයක් සිදු විය:* ${e.message} ❌`,
            EN: `❌ *Error occurred while processing your request:* ${e.message} ❌`
        };
        await conn.sendMessage(from, { text: errorMessage[language], quoted: mek });
        console.log(e);
    }
});
//==============================================================================================================================================================================
cmd({
    pattern: "ytmp3",
    category: "downloader",
    react: "🎵",
    use: ".ytmp3 <YouTube URL or Name>",
    desc: "Download YouTube video as MP3",
    filename: __filename
}, async (conn, mek, m, { from, args, q, reply }) => {
    try {
        if (!q) return reply("❌ Please provide a YouTube URL or search term");

        let videoUrl = q;
        // If input is not a URL, search for it
        if (!q.includes("youtube.com") && !q.includes("youtu.be")) {
            const yt = await ytsearch(q);
            if (yt.results.length < 1) return reply("❌ No results found!");
            videoUrl = yt.results[0].url;
        }

        await conn.sendMessage(from, {
          text: "⏳ Processing your request...",
          contextInfo: {
            externalAdReply: {
              title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
              body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
              thumbnail: { url: `https://i.ibb.co/Qbs9FrW/yt.jpg` }, // Thumbnail URL
              sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
              mediaType: 1,
              renderLargerThumbnail: false
            }
          }
        });
        const result = await ytmp3(videoUrl);

        if (!result || !result.download || !result.download.url) {
            throw new Error('Failed to fetch video details');
        }

        const title = result.title || 'YouTube Audio';
        const authorName = result.author?.name || 'Unknown Author';
        const downloadUrl = result.download.url;
        const thumbnail = result.thumbnail || '';
        const fileSize = result.download?.size || 'Unknown size';

         let caption =`乂 ＹＴ  ＭＰ3  ＤＯＷＮＬＯＡＤＥＲ

╭──────────●➤
├ 🩸𝖳𝗂𝗍𝗅𝖾 : ${title}
├ 👤𝖢𝗁𝖺𝗇𝗇𝖾𝗅 : ${authorName}
├ 💾 𝖲𝗂𝗓𝖾 : ${fileSize}
├ ⚙️ 𝖴𝗋𝗅 : ${videoUrl}
╰──────●➤

> 🙌 𝖸𝗈𝗎𝗋 𝖠𝗎𝖽𝗂𝗈 𝖥𝗂𝗅𝖾 𝖶𝗂𝗅𝗅 𝖡𝖾 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 𝖠𝗇𝖽 𝖴𝗉𝗅𝗈𝖺𝖽𝗂𝗇𝗀... 𝖯𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍 𝗌𝗈𝗆𝖾 𝗌𝖾𝖼𝗈𝗇𝖽 💗`
        // Send thumbnail with details
        if (thumbnail) {
            await conn.sendMessage(from, {
              image: { url: thumbnail },
              caption: caption,
              contextInfo: {
                externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                  thumbnail: { url: `https://i.ibb.co/Qbs9FrW/yt.jpg` }, // Thumbnail URL
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
                  mediaType: 1,
                  renderLargerThumbnail: false
                }
              }
            }, { quoted: mek });
        } else {
            await conn.sendMessage(from, {
              text: caption,
              contextInfo: {
                externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                  thumbnail: { url: `https://i.ibb.co/Qbs9FrW/yt.jpg` }, // Thumbnail URL
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
                  mediaType: 1,
                  renderLargerThumbnail: false
                }
              }
            }, { quoted: mek });
        }

        // Send as audio
        // Send audio
        await conn.sendMessage(from, {
          audio: { url: downloadUrl },
          mimetype: "audio/mpeg",
          contextInfo: {
            externalAdReply: {
              title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
              body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
              thumbnail: { url: `https://i.ibb.co/Qbs9FrW/yt.jpg` }, // Thumbnail URL
              sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
              mediaType: 1,
              renderLargerThumbnail: false
            }
          }
        }, { quoted: mek });

        // Send as document
        await conn.sendMessage(from, {
          document: { url: downloadUrl },
          mimetype: "audio/mpeg",
          fileName: `${title}.mp3`,
          caption: title,
          contextInfo: {
            externalAdReply: {
              title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
              body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
              thumbnail: { url: `https://i.ibb.co/Qbs9FrW/yt.jpg` }, // Thumbnail URL
              sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
              mediaType: 1,
              renderLargerThumbnail: false
            }
          }
        }, { quoted: mek });

    } catch (error) {
        console.error('YT MP3 Error:', error);
        reply(`❌ Download failed: ${error.message}`);
    }
});

cmd({
    pattern: "ytmp4",
    category: "downloader",
    react: "🎥",
    use: ".ytmp4 <YouTube URL or Name> [quality]",
    desc: "Download YouTube video as MP4",
    filename: __filename
}, async (conn, mek, m, { from, args, q, reply }) => {
    try {
        if (!q) return reply("❌ Please provide a YouTube URL or search term");

        let videoUrl = q;
        // If input is not a URL, search for it
        if (!q.includes("youtube.com") && !q.includes("youtu.be")) {
            const yt = await ytsearch(q);
            if (yt.results.length < 1) return reply("❌ No results found!");
            videoUrl = yt.results[0].url;
        }

        const quality = args[1]?.toLowerCase() || '360p';
        const validQualities = ['144p', '240p', '360p', '480p', '720p', '1080p'];
        if (!validQualities.includes(quality)) {
            return reply(`❌ Invalid quality! Available options: ${validQualities.join(', ')}`);
        }

        await conn.sendMessage(from, {
          text: "⏳ Processing your request...",
          contextInfo: {
            externalAdReply: {
              title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
              body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
              thumbnail: { url: `https://i.ibb.co/Qbs9FrW/yt.jpg` }, // Thumbnail URL
              sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
              mediaType: 1,
              renderLargerThumbnail: false
            }
          }
        });
        const result = await ytmp4(videoUrl, quality);

        if (!result || !result.download || !result.download.url) {
            throw new Error('Failed to fetch video details');
        }

        const title = result.title || 'YouTube Video';
        const authorName = result.author?.name || 'Unknown Author';
        const downloadUrl = result.download.url;
        const thumbnail = result.thumbnail || '';
        const fileSize = result.download?.size || 'Unknown size';

        let caption = `乂 ＹＴ  ＭＰ4  ＤＯＷＮＬＯＡＤＥＲ

╭──────────●➤
├ 🩸𝖳𝗂𝗍𝗅𝖾 : ${title}
├ 👤𝖢𝗁𝖺𝗇𝗇𝖾𝗅 : ${authorName}
├ 💾 𝖲𝗂𝗓𝖾 : ${fileSize}
├ ⚙️ 𝖴𝗋𝗅 : ${videoUrl}
╰──────●➤

> 🙌 𝖸𝗈𝗎𝗋 𝖵𝗂𝖽𝖾𝗈 𝖥𝗂𝗅𝖾 𝖶𝗂𝗅𝗅 𝖡𝖾 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 𝖠𝗇𝖽 𝖴𝗉𝗅𝗈𝖺𝖽𝗂𝗇𝗀... 𝖯𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍 𝗌𝗈𝗆𝖾 𝗌𝖾𝖼𝗈𝗇𝖽 💗`
        // Send thumbnail with details
        if (thumbnail) {
            await conn.sendMessage(from, {
              image: { url: thumbnail },
              caption: caption,
              contextInfo: {
                externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                  thumbnail: { url: `https://i.ibb.co/Qbs9FrW/yt.jpg` }, // Thumbnail URL
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
                  mediaType: 1,
                  renderLargerThumbnail: false
                }
              }
            }, { quoted: mek });
        } else {
            await conn.sendMessage(from, {
              text: caption,
              contextInfo: {
                externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                  thumbnail: { url: `https://i.ibb.co/Qbs9FrW/yt.jpg` }, // Thumbnail URL
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
                  mediaType: 1,
                  renderLargerThumbnail: false
                }
              }
            }, { quoted: mek });
        }

        // Send video
        await conn.sendMessage(from, {
            video: { url: downloadUrl },
            mimetype: "video/mp4",
            fileName: `${title}.mp4`,
            caption: `✅ Download Complete!`
        }, { quoted: mek });

    } catch (error) {
        console.error('YT MP4 Error:', error);
        reply(`❌ Download failed: ${error.message}`);
    }
});
//==============================================================================================================================================================================

cmd({
    pattern: "tt",
    alias: ["tiktok"],
    react: '🎵',
    desc: "Download TikTok videos",
    category: "downloader",
    use: '.tt <tiktok link>',
    filename: __filename
}, async (conn, mek, m, { from, args, reply, pushname }) => {
    const config = await readEnv();
    // Define language preference (SI for Sinhala, EN for English)
    const language = config.LANGUAGE; // Ensure this is set to either 'SI' or 'EN'

    try {
        // Get the TikTok URL from args
        const q = args.join(" ");
        if (!q) {
            const message = {
                SI: '*🚫 කරුණාකර TikTok URL එකක් ලබා දෙන්න!*',
                EN: '*🚫 Please provide a TikTok URL!*'
            };
            return await reply(message[language]);
        }

        // Watermark message
        const wm = {
            SI: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖳 𝖨 𝖪 𝖳 𝖮 𝖪  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🖇️ පිවිසුම් ලින්කුව : ${q}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭───────────────────┈
│ 1️⃣  බාගත කිරීම : වීඩියෝ ආකාරයට. ( සලකුනු ඉවත් කරමින් )
│ 2️⃣  බාගත කිරීම : සංගීත ආකාරයට.
╰─────────────────┈`,
            EN: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖳 𝖨 𝖪 𝖳 𝖮 𝖪  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭

🖇️ 𝖡𝖺𝗌𝖾 𝖴𝗋𝗅 : ${q}

乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭

╭───────────────────┈
│ 1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖵𝗂𝖽𝖾𝗈 𝖧𝖣 𝖳𝗒𝗉𝖾. ( 𝖶𝗂𝗍𝗁𝗈𝗎𝗍 𝖶𝖺𝗍𝖾𝗋𝗆𝖺𝗋𝗄 )
│ 2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖠𝗎𝖽𝗂𝗈 𝖳𝗒𝗉𝖾.
╰─────────────────┈`
        };

        // Perform TikTok download using a hypothetical tiktokdl function
        let response = await tiktokdl(q);
        let { video, music } = response;

        // Send initial message with options
        const sentMessage = await conn.sendMessage(from, {
             text: wm[language],
              contextInfo: {
                  externalAdReply: {
                      title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                      body: '© Presented By Bhashi Coders. Powerd By Dark Hackers Zone Team. Enjoi Now Bhashi Project.',
                      thumbnailUrl: `https://i.ibb.co/DD0gVqR/image.png`,
                      sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                      mediaType: 1,
                      renderLargerThumbnail: true
                  }
              }
          });

        // Listen for user's reply
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply is to the previously sent prompt
            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                if (userReply === '1') {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(from, { 
                      video: { url: video },
                      caption: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,
                      contextInfo: {
                        externalAdReply: {
                          title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                          body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                          thumbnail: { url: `https://i.ibb.co/DD0gVqR/image.png` }, // Thumbnail URL
                          sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
                          mediaType: 1,
                          renderLargerThumbnail: false
                        }
                      }
                    }, { quoted: msg });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else if (userReply === '2') {
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(from, { 
                      audio: { url: music },
                      mimetype: "audio/mpeg",
                      contextInfo: {
                        externalAdReply: {
                          title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                          body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                          thumbnail: { url: `https://i.ibb.co/DD0gVqR/image.png` }, // Thumbnail URL
                          sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
                          mediaType: 1,
                          renderLargerThumbnail: false
                        }
                      }
                    }, { quoted: msg });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else {
                    await conn.sendMessage(from, { 
                        text: language === 'SI' ? "❗ *වැරදි ආකාරය.* කරුණාකර '1' ලෙස වීඩියෝ සඳහා හෝ '2' ලෙස ශබ්දය සඳහා පිළිතුරු දෙන්න." : "❗ *Invalid input.* Please reply with '1' for Video or '2' for Audio."
                    }, { quoted: msg });
                }
            }
        });

        // Send a reaction
        return await conn.sendMessage(from, { react: { text: '🎉', key: mek.key } });
    } catch (e) {
        // Reply with an error message to the user via WhatsApp
        const errorMessage = {
            SI: `❌ *ඔබේ ඉල්ලීම පිරිනැමීමේදී දෝෂයක් සිදු විය:* ${e.message} ❌`,
            EN: `❌ *Error occurred while processing your request:* ${e.message} ❌`
        };
        await conn.sendMessage(from, { text: errorMessage[language], quoted: mek });
        console.log(e);
    }
});
//==============================================================================================================================================================================
cmd({
    pattern: "9gag",
    react: "😂",
    desc: "Get a random post from 9GAG.",
    category: "downloader",
    use: '.9gag [section]',
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        // Ensure config is read properly
        const config = await readEnv();
        const section = q.trim() || 'hot'; // Default to 'hot' if no section is provided

        await reply(config.LANGUAGE === 'SI'
            ? `🔍 ${section} කොටසෙන් යම් පශ්චාත් එකක් ලබාගන්න...`
            : `🔍 Fetching a random post from the ${section} section...`);

        // Create Scraper instance with section and posts limit
        const scraper = new Scraper(10, section, 0);
        const posts = await scraper.scrap();

        // Check if posts are undefined or empty
        if (!posts || posts.length === 0) {
            return reply(config.LANGUAGE === 'SI'
                ? "❗ පශ්චාත් සොයාගත නොහැක. කරුණාකර නැවත උත්සාහ කරන්න."
                : "❗ No posts found. Please try again.");
        }

        // Select random post
        const randomPost = posts[Math.floor(Math.random() * posts.length)];
        const captionSI = `*${randomPost.title}*\n👍 ආසාවෙන් හිමිවූ මනාප: ${randomPost.upVoteCount}\n💬 කුමන්ත්රණ: ${randomPost.commentsCount}\n\n> ${mono}ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛${mono}`;
        const captionEN = `*${randomPost.title}*\n👍 Upvotes: ${randomPost.upVoteCount}\n💬 Comments: ${randomPost.commentsCount}\n\n> ${mono}ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛${mono}`;

        const caption = config.LANGUAGE === 'SI' ? captionSI : captionEN;

        // Sending the appropriate content based on post type
        try {
            const messageContent = { caption };
            switch (randomPost.type) {
                case 'Photo':
                case 'Animated':
                    messageContent.image = { url: randomPost.content };
                    break;
                case 'Video':
                    messageContent.video = { url: randomPost.content };
                    break;
                default:
                    messageContent.text = `${caption}\n\nContent: ${randomPost.content}`;
            }

            await conn.sendMessage(from, messageContent, { quoted: mek });
        } catch (postError) {
            console.error('Error sending post:', postError);
            await reply(config.LANGUAGE === 'SI'
                ? "❗ පශ්චාත් එක යැවීමට දෝෂයක් ඇති විය. නැවත උත්සාහ කරන්න."
                : "❗ Error sending post. Please try again.");
        }

    } catch (e) {
        console.error('Error in 9gag command:', e);
        reply(config.LANGUAGE === 'SI'
            ? "❗ 9GAG වෙතින් පශ්චාත් එකක් ලබා ගැනීමේ දෝෂයක් ඇතිවිය."
            : "❗ Error occurred while fetching post from 9GAG.");
    }
});
//==============================================================================================================================================================================

cmd({
    pattern: "fb2",
    alias: ["facebook2", "fbdl2"],
    desc: "Download videos from Facebook",
    category: "downloader",
    react: "📹",
    filename: __filename,
}, async (conn, mek, m, { args, reply, quoted }) => {
    try {
        const thumbnailUrl = "https://i.ibb.co/PCb0Y4X/fb.jpg";
        const fbURL = args[0]; // URL passed by the user
        if (!fbURL) return reply("❌ Please provide a Facebook video link. Example: .fb2 <link>");

        await conn.sendMessage(m.chat, {
          text: "🔄 Fetching video links...",
          contextInfo: {
            externalAdReply: {
              title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
              body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
              thumbnail: { url: thumbnailUrl }, // Thumbnail URL
              sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
              mediaType: 1,
            }
          }
        });

        // Ensure proper encoding of the Facebook URL to avoid encoding errors
        const encodedUrl = encodeURIComponent(fbURL.trim());
        const apiUrl = `https://www.dark-yasiya-api.site/download/fbdl1?url=${encodedUrl}`;

        // Fetch video details from the API
        const { data } = await axios.get(apiUrl);
        if (!data.status || !data.result) return reply("❌ Unable to fetch video links. Please check the URL or try again later.");

        const hdLink = data.result.hd || "Unavailable";
        const sdLink = data.result.sd || "Unavailable";

        // Prepare quality selection message
        const qualityMessage = `乂 ＦＢ ＤＯＷＮＬＯＡＤＥＲ

╭──────────●➤
├ 1️⃣  ʜᴅ Qᴜᴀʟɪᴛʏ : ${hdLink === "Unavailable" ? "❌ Unavailable" : "✅ Available"}
├ 2️⃣  ꜱᴅ Qᴜᴀʟᴜᴛʏ : ${sdLink === "Unavailable" ? "❌ Unavailable" : "✅ Available"}
╰──────●➤

> 🙌 Reply Below Your Choice 💗`;

          // Replace with actual thumbnail if needed

        // Send quality selection message with embedded thumbnail
        const menuMessage = await conn.sendMessage(
            m.chat, 
            { 
                text: qualityMessage, 
                contextInfo: {
                    externalAdReply: {
                        title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                        body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                        thumbnail: { url: thumbnailUrl }, // Thumbnail URL
                        sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
                        mediaType: 1,
                    }
                }
            }, 
            { quoted: mek }
        );

        // Handle the user's response for video quality
        conn.ev.on("messages.upsert", async (msgUpsert) => {
            const msg = msgUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply matches the menu message
            if (messageContext && messageContext.stanzaId === menuMessage.key.id) {
                if (userReply === "1" && hdLink !== "Unavailable") {
                    // React to user reply before sending the video
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(m.chat, { video: { url: hdLink }, caption: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ` });
                    // React with success after sending video
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else if (userReply === "2" && sdLink !== "Unavailable") {
                    // React to user reply before sending the video
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(m.chat, { video: { url: sdLink }, caption: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ` });
                    // React with success after sending video
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else {
                    // React to invalid choice
                    await conn.sendMessage(m.chat, { react: { text: "❌", key: msg.key } });
                    return reply("❌ Invalid choice or the selected quality is unavailable.");
                }
            }
        });
    } catch (error) {
        console.error(error);
        reply("❌ An error occurred while processing your request. Please try again later.");
    }
});
//==============================================================================================================================================================================

cmd({
    pattern: "fb",
    alias: ["facebook", "fbdl"],
    desc: "Download videos from Facebook",
    category: "downloader",
    react: "📹",
    filename: __filename,
}, async (conn, mek, m, { args, from, reply, quoted }) => {
    try {
        const thumbnailUrl = "https://i.ibb.co/PCb0Y4X/fb.jpg";
        const fbURL = args[0]; // URL passed by the user
        if (!fbURL) return reply("❌ Please provide a Facebook video link. Example: .fb <link>");

        await conn.sendMessage(from, {
          text: "🔄 Fetching video links...",
          contextInfo: {
            externalAdReply: {
              title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
              body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
              thumbnail: { url: thumbnailUrl }, // Thumbnail URL
              sourceUrl: 'https://bhashi-md-ofc.netlify.app/', // Optional link
              mediaType: 1,
            }
          }
        });

        // Fetch the video data using the new npm package
        const result = await facebook(fbURL);

        // Check if the result is valid
        if (!result.status || !result.result) return reply("❌ Unable to fetch video links. Please check the URL or try again later.");

        const thumbnail = result.result.thumbnail;
        const hdLink = result.result.links.HD || "Unavailable";
        const sdLink = result.result.links.SD || "Unavailable";

        // Constructing the message to ask for quality selection
        const qualityMessage = `乂 ＦＢ ＤＯＷＮＬＯＡＤＥＲ

╭──────────●➤
├ 1️⃣  ʜᴅ Qᴜᴀʟɪᴛʏ : ${hdLink === "Unavailable" ? "❌ Unavailable" : "✅ Available"}
├ 2️⃣  ꜱᴅ Qᴜᴀʟᴜᴛʏ : ${sdLink === "Unavailable" ? "❌ Unavailable" : "✅ Available"}
╰──────●➤

> 🙌 Reply Below Your Choice 💗`;

        // Send the quality selection message with thumbnail
        const menuMessage = await conn.sendMessage(
            from, 
            { 
                caption: qualityMessage,
                image:{url: thumbnail},
                contextInfo: {
                    externalAdReply: {
                        title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                        body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                        thumbnail: { url: thumbnailUrl}, // Ensure thumbnail is a valid URL
                        sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                        mediaType: 1,
                    }
                }
            }, 
            { quoted: mek }
        );

        conn.ev.on("messages.upsert", async (msgUpsert) => {
            const msg = msgUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            // Check if the reply matches the menu message
            if (messageContext && messageContext.stanzaId === menuMessage.key.id) {
                if (userReply === "1" && hdLink !== "Unavailable") {
                    // React to user reply before sending the video
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(m.chat, { video: { url: hdLink }, caption: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ` });
                    // React with success after sending video
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else if (userReply === "2" && sdLink !== "Unavailable") {
                    // React to user reply before sending the video
                    await conn.sendMessage(m.chat, { react: { text: "🔽", key: msg.key } });
                    await conn.sendMessage(m.chat, { video: { url: sdLink }, caption: `> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ` });
                    // React with success after sending video
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else {
                    // React to invalid choice
                    await conn.sendMessage(m.chat, { react: { text: "❌", key: msg.key } });
                    return reply("❌ Invalid choice or the selected quality is unavailable.");
                }
            }
        });
    } catch (error) {
        console.error(error);
        reply("❌ An error occurred while processing your request. Please try again later.");
    }
});
cmd({
    pattern: "threads",
    desc: "Download media from Threads post.",
    react: "🔽",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    const config = await readEnv();
    try {
        if (!q) {
            return reply(config.LANGUAGE === 'SI' 
                ? "❌ කරුණාකර Threads URL එකක් ලබා දෙන්න." 
                : "❌ Please provide a valid Threads URL.");
        }

        const apiUrl = `https://apis-starlights-team.koyeb.app/starlight/threads-DL?url=${encodeURIComponent(q)}`;

        // Log the URL to check for any issues

        // Fetch media details from the API
        const axios = require("axios");
        const response = await axios.get(apiUrl);

        // Log the API response for debugging

        const data = response.data;

        // Check if the response contains valid media data
        if (!data || (!data.images || data.images.length === 0) && (!data.videos || data.videos.length === 0)) {
            return reply(config.LANGUAGE === 'SI' 
                ? "❌ Threads URL එකෙන් මාධ්‍ය ලබා ගත නොහැකි විය."
                : "❌ Unable to fetch media from the provided Threads URL.");
        }

        // Extract the media details
        const images = data.images || [];
        const videos = data.videos || [];
        const description = data.desc || "No description available.";
        const thumb = images.length > 0 ? images[0] : videos.length > 0 ? videos[0] : null;

        // Construct the message with media details
        let mediaInfo = `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＴＨＲＥＡＤＳ ＤＬ

🖇️ 𝖡𝖺𝗌𝖾 𝖴𝗋𝗅 : ${𝗊}
🏷️ 𝖣𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇 : ${𝖽𝖾𝗌𝖼𝗋𝗂𝗉𝗍𝗂𝗈𝗇}

> 💗 𝖲𝖾𝗅𝖾𝖼𝗍 𝖡𝖾𝗅𝗈𝗐 𝖬𝖾𝖽𝗂𝖺 𝖳𝗒𝗉𝖾 𝖳𝗈 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽
`;

        let count = 1;

        // Add image options if available
        if (images.length > 0) {
            images.forEach((image, index) => {
                mediaInfo += `${count}️⃣ Download Image ${index + 1}\n`;
                count++;
            });
        }

        // Add video options if available
        if (videos.length > 0) {
            videos.forEach((video, index) => {
                mediaInfo += `${count}️⃣ Download Video ${index + 1}\n`;
                count++;
            });
        }

        // Send the initial message with media details
        const sentMessage = await conn.sendMessage(from, {
            image: { url: thumb },
            caption: mediaInfo
        }, { quoted: mek });

        // Listen for user replies (e.g., 1, 2, 3)
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                let mediaToSend = null;

                switch (userReply) {
                    // Handle image downloads
                    case "1":
                        if (images[0]) mediaToSend = images[0];
                        break;
                    case "2":
                        if (images[1]) mediaToSend = images[1];
                        break;
                    case "3":
                        if (images[2]) mediaToSend = images[2];
                        break;

                    // Handle video downloads
                    case "4":
                        if (videos[0]) mediaToSend = videos[0];
                        break;
                    case "5":
                        if (videos[1]) mediaToSend = videos[1];
                        break;
                    case "6":
                        if (videos[2]) mediaToSend = videos[2];
                        break;

                    default:
                        reply(config.LANGUAGE === 'SI' 
                            ? "❌ හෝඩුව මත අනුවාදයක් නැත."
                            : "❌ No valid media option selected.");
                        return;
                }

                if (mediaToSend) {
                    // Send the selected media
                    if (mediaToSend.endsWith(".mp4")) {
                        await conn.sendMessage(from, {
                            video: { url: mediaToSend },
                            caption: `${caption}`
                        }, { quoted: mek });
                    } else {
                        await conn.sendMessage(from, {
                            image: { url: mediaToSend },
                            caption: `${caption}`
                        }, { quoted: mek });
                    }
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                }
            }
        });

    } catch (error) {
        console.log("Error fetching Threads media:", error);
        const errorMessage = config.LANGUAGE === 'SI' 
            ? `දෝෂයක්: ${error.message || 'අපට පැමිණුණු දෝෂයක් ඇත.'}` 
            : `Error: ${error.message || 'An error occurred.'}`;
        return reply(errorMessage);
    }
});
cmd({
    pattern: "vimeo",
    desc: "Download media from Vimeo video.",
    react: "🔽",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    const config = await readEnv();
    try {
        if (!q) {
            return reply(config.LANGUAGE === 'SI' 
                ? "❌ කරුණාකර Vimeo URL එකක් ලබා දෙන්න." 
                : "❌ Please provide a valid Vimeo URL.");
        }

        const apiUrl = `https://apis-starlights-team.koyeb.app/starlight/vimeo-DL?url=${encodeURIComponent(q)}`;

        // Log the URL to check for any issues

        // Fetch media details from the API
        const axios = require("axios");
        const response = await axios.get(apiUrl);

        // Log the API response for debugging

        const data = response.data;

        // Check if the response contains valid media data
        if (!data || !data.medias || data.medias.length === 0) {
            return reply(config.LANGUAGE === 'SI' 
                ? "❌ Vimeo URL එකෙන් මාධ්‍ය ලබා ගත නොහැකි විය."
                : "❌ Unable to fetch media from the provided Vimeo URL.");
        }

        // Extract the media details
        const { title, thumbnail, duration, url, medias } = data;

        // Construct the message with media details
        let mediaInfo = `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＶＩＭＥＯ ＤＬ

🏷️ 𝖳𝗂𝗍𝗅𝖾 : ${𝗍𝗂𝗍𝗅𝖾 || "𝖭𝗈𝗍 𝖥𝗈𝗎𝗇𝖽"}
⏱️ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇 : ${𝖽𝗎𝗋𝖺𝗍𝗂𝗈𝗇 || "𝖭𝗈𝗍 𝖥𝗈𝗎𝗇𝖽"}
🖇️ 𝖡𝖺𝗌𝖾 𝖴𝗋𝗅 : ${𝗊}

> 💗 𝖲𝖾𝗅𝖾𝖼𝗍 𝖡𝖾𝗅𝗈𝗐 𝖬𝖾𝖽𝗂𝖺 𝖳𝗒𝗉𝖾 𝖳𝗈 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽
`;

        medias.forEach((media, index) => {
            mediaInfo += `${index + 1}️⃣ Download ${media.quality} (${media.formattedSize})\n`;
        });

        // Send the initial message with media details
        const sentMessage = await conn.sendMessage(from, {
            image: { url: thumbnail || "https://via.placeholder.com/150" },
            caption: mediaInfo
        }, { quoted: mek });

        // Listen for user replies (e.g., 1, 2, 3)
        conn.ev.on("messages.upsert", async (messageUpsert) => {
            const msg = messageUpsert.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();
            const messageContext = msg.message.extendedTextMessage.contextInfo;

            if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
                let mediaToSend = null;

                const selectedQuality = parseInt(userReply) - 1;

                if (selectedQuality >= 0 && selectedQuality < medias.length) {
                    mediaToSend = medias[selectedQuality].url;
                }

                if (mediaToSend) {
                    // Send the selected video
                    await conn.sendMessage(from, {
                        video: { url: mediaToSend },
                        caption: `${caption}`
                    }, { quoted: mek });
                    await conn.sendMessage(m.chat, { react: { text: "✅", key: msg.key } });
                } else {
                    reply(config.LANGUAGE === 'SI' 
                        ? "❌ හෝඩුව මත අනුවාදයක් නැත."
                        : "❌ No valid media option selected.");
                }
            }
        });

    } catch (error) {
        console.log("Error fetching Vimeo media:", error);
        const errorMessage = config.LANGUAGE === 'SI' 
            ? `දෝෂයක්: ${error.message || 'අපට පැමිණුණු දෝෂයක් ඇත.'}` 
            : `Error: ${error.message || 'An error occurred.'}`;
        return reply(errorMessage);
    }
});


cmd({
    pattern: "spotifydl",
    desc: "Download music from Spotify.",
    react: "🎶",
    category: "downloader",
    filename: __filename
}, async (conn, mek, m, { from, args, reply, q }) => {
    const config = await readEnv();
    try {
        if (!q) {
            return reply(config.LANGUAGE === 'SI' 
                ? "❌ කරුණාකර Spotify URL එකක් ලබා දෙන්න." 
                : "❌ Please provide a valid Spotify URL.");
        }

        const apiUrl = `https://apis-starlights-team.koyeb.app/starlight/spotifydl?url=${encodeURIComponent(q)}`;

        // Log the URL to check for any issues


        // Fetch media details from the API
        const axios = require("axios");
        const response = await axios.get(apiUrl);



        const data = response.data;

        // Check if the response contains valid media data
        if (!data || !data.music) {
            return reply(config.LANGUAGE === 'SI' 
                ? "❌ Spotify URL එකෙන් සංගීත ගොනු ලබා ගත නොහැකි විය."
                : "❌ Unable to fetch music from the provided Spotify URL.");
        }

        // Extract the music details with null checks
        const title = data.title ? data.title : "No title available.";
        const artist = data.artist ? data.artist : "Unknown artist.";
        const album = data.album ? data.album : "Unknown album.";
        const thumbnail = data.thumbnail ? data.thumbnail : "https://via.placeholder.com/150";
        const music = data.music;
        const spotify = data.spotify ? data.spotify : "No link available.";

        // Ensure the music URL is valid before proceeding
        if (!music) {
            return reply(config.LANGUAGE === 'SI' 
                ? "❌ සංගීත ගොනුව හෝ එහි URL සොයා ගැනීමට අපොහොසත් විය."
                : "❌ Unable to find the music file or its URL.");
        }

        // Construct the message with media details
        let mediaInfo = `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＳＰＯＴＩＦＹ ＤＬ

📜  𝖳𝗂𝗍𝗅𝖾 : ${title}
🎤  𝖠𝗋𝗍𝗂𝗌𝗍 :  ${artist}
📀  𝖠𝗅𝖻𝗎𝗆 ${album}
🔗  𝖲𝗉𝗈𝗍𝗂𝖿𝗒 𝖫𝗂𝗇𝗄 : ${spotify}

> 📥 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝗂𝗇𝗀 𝖸𝗈𝗎𝗋 𝖬𝗎𝗌𝗂𝖼 𝖳𝗋𝖺𝖼𝗄 𝖯𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...
`;

        // Send the initial message with music details
        const sentMessage = await conn.sendMessage(from, {
            image: { url: thumbnail },
            caption: mediaInfo
        }, { quoted: mek });

        // Download the music file

        // Send the music file as an attachment
        await conn.sendMessage(from, {
            audio: { url: data.music},
            mimetype: "audio/mp3",
            fileName: `${title}.mp3`
        }, { quoted: mek });

        // React to the message
        await conn.sendMessage(m.chat, { react: { text: "✅", key: sentMessage.key } });

    } catch (error) {
        console.log("Error fetching Spotify media:", error);
        const errorMessage = config.LANGUAGE === 'SI' 
            ? `දෝෂයක්: ${error.message || 'අපට පැමිණුණු දෝෂයක් ඇත.'}` 
            : `Error: ${error.message || 'An error occurred.'}`;
        return reply(errorMessage);
    }
});


//=======================================================================MAIN-COMMANDS========================================================================================
//==============================================================================================================================================================================
cmd({
    pattern: "repo",
    desc: "Get the link to the official GitHub repository along with stats.",
    category: "main",
    react: "📂",
    filename: __filename
  }, async (conn, mek, m, { reply, from }) => {
    const config = await readEnv();
    const repoUrl = 'https://api.github.com/repos/vishwamihiranga/BHASHI-MD-v2'; 
    const language = config.LANGUAGE || "EN";
  
    try {
      const response = await axios.get(repoUrl);
      const { stargazers_count, forks_count, open_issues_count, contributors_url, owner, name, description, html_url, license, updated_at } = response.data;
  
      const contributorsResponse = await axios.get(contributors_url);
      const contributors_count = contributorsResponse.data.length;
  
      const repoInfo = {
        SI: `
  📂 *GitHub Repository* 📂
  ඔබට මෙහි අභ්‍යන්තර සම්පාදක භාෂාව සහා සම්පත් කේතය සොයා ගත හැක:
  
  - *🧾 GitHub Repository*: ${html_url}
  - ⭐ *තරු*: ${stargazers_count}
  - 🍴 *හැරීම*: ${forks_count}
  - 🛠 *විවෘත ගැටලු*: ${open_issues_count}
  - 🚀 *සහය දායකයන්*: ${contributors_count}
  - 📜 *ලයිසන්ස්*: ${license ? license.spdx_id : "N/A"}
  - 🕒 *අවසන් යාවත්කාලීනය*: ${new Date(updated_at).toLocaleDateString()}
  
  ආරාධනා කරනවා ඔබ කේතයට තරු එකතු කරන ලෙස සහා සම්බන්ධ වන්න!
        `,
        EN: `
  📂 *GitHub Repository* 📂
  You can find the source code and contribute to the project here:
  
  - *🧾 GitHub Repository*: ${html_url}
  - ⭐ *Stars*: ${stargazers_count}
  - 🍴 *Forks*: ${forks_count}
  - 🛠 *Open Issues*: ${open_issues_count}
  - 🚀 *Contributors*: ${contributors_count}
  - 📜 *License*: ${license ? license.spdx_id : "N/A"}
  - 🕒 *Last Updated*: ${new Date(updated_at).toLocaleDateString()}
  
  Feel free to star the project and contribute!
        `
      };
  
      const thumbnailUrl = owner.avatar_url || "https://i.ibb.co/jD4tk8g/github.jpg";
  
      await conn.sendMessage(from, {
        text: repoInfo[language],
        contextInfo: {
          externalAdReply: {
            title: `${name} - GitHub Repository 🧚🏻‍♀️`,
            body: description || "© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team.",
            thumbnail: { url: thumbnailUrl },
            sourceUrl: html_url,
            mediaType: 1,
          }
        }
      });
  
    } catch (error) {
      console.error("Error fetching repository data:", error);
      const errorMessage = {
        SI: "❌ ගිටහබ් විස්තර ලබා ගැනීම අසාර්ථක විය. කරුණාකර පසුව නැවත උත්සාහ කරන්න.",
        EN: "❌ Failed to fetch repository data. Please try again later."
      };
      await reply(errorMessage[language]);
    }
  });
//==============================================================================================================================================================================
cmd({
  pattern: "web",
  desc: "Get the official website link.",
  category: "main",
  react: "🌐",
  filename: __filename
}, async (conn, mek, m, { reply }) => {
  const config = await readEnv();
  const language = config.LANGUAGE; 

  const webInfo = {
      SI: `
🌐 *නිල වෙබ් අඩවිය* 🌐
වැඩි විස්තර සහ සම්පත් සඳහා අපගේ නිල වෙබ් අඩවියට පිවිසෙන්න:

- *🔗 වෙබ් අඩවිය*: https://bhashi-md-ofc.netlify.app/
      `,
      EN: `
🌐 *Official Website* 🌐
Visit our official website for more information and resources:

- *🔗 Website*: https://bhashi-md-ofc.netlify.app/
      `
  };

  reply(webInfo[language]); 
});
//==============================================================================================================================================================================
cmd({
  pattern: "session",
  desc: "Get information about session management.",
  category: "main",
  react: "🔑",
  filename: __filename
}, async (conn, mek, m, { reply }) => {
  const config = await readEnv();
  const language = config.LANGUAGE; 

  // Session information in both languages
  const sessionInfo = {
      SI: `
🔑 *සෙෂන් කළමනාකරණය* 🔑
ඔබට පහත සම්පත් භාවිතා කරමින් ඔබගේ සෙෂන් කළමනාකරණය කළ හැක:

- *📑 Session ID*: https://bhashi-session-web-v2.onrender.com/
      `,
      EN: `
🔑 *Session Management* 🔑
You can manage your sessions using the following resources:

- *📑 Session ID*: https://bhashi-session-web-v2.onrender.com/
      `
  };

  reply(sessionInfo[language]); // Send the message based on language preference
});
//==============================================================================================================================================================================
cmd({
  pattern: "channel",
  desc: "Get information about the official channels.",
  category: "main",
  react: "📢",
  filename: __filename
}, async (conn, mek, m, { reply }) => {
  const config = await readEnv();
  const language = config.LANGUAGE; 
  const channelInfo = {
      SI: `
📢 *නිළ නාලිකා* 📢
අපගේ නවතම ප්‍රවෘත්ති සහ නිවේදන ලබාගැනීමට යාවත්කාලීනව සිටින්න:

- *📣 WhatsApp නාලිකාව*: https://whatsapp.com/channel/0029Vajj591JUM2RT8xtig2U
      `,
      EN: `
📢 *Official Channels* 📢
Stay updated with our latest news and announcements:

- *📣 WhatsApp Channel*: https://whatsapp.com/channel/0029Vajj591JUM2RT8xtig2U
      `
  };
  reply(channelInfo[language]); 
});
const handleRestartError = (error, stdout, stderr) => {
    if (error) {
        console.error(`Error restarting PM2: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`PM2 stderr: ${stderr}`);
        return;
    }
    console.log(`PM2 stdout: ${stdout}`);
};

cmd({
    pattern: "settings",
    alias: ["set"],
    desc: "Change bot settings.",
    react: "⚙️",
    category: "owner",
    filename: __filename
  }, async (conn, mek, m, { from, reply, isOwner }) => {
      if (!isOwner) return reply("❌ You are not the owner!");
      const config = await readEnv();
      const g = "`";
      const mon = "```";

      function formatUptime(seconds) {
          if (isNaN(seconds) || seconds < 0) {
              return 'Invalid uptime';
          }
          const days = Math.floor(seconds / (3600 * 24));
          const hours = Math.floor((seconds % (3600 * 24)) / 3600);
          const minutes = Math.floor((seconds % 3600) / 60);
          const secs = Math.floor(seconds % 60);
          return `${days}d ${hours}h ${minutes}m ${secs}s`;
      }
      const settings = [
        { key: 'PREFIX', value: '.', emoji: '🔧' },
        { key: 'OWNER_REACT', value: '😎', emoji: '👑' },
        { key: 'OWNER_NUMBER', value: '94xxxxxxxx', emoji: '📞' },
        { key: 'BAD_WORDS', value: 'huththa,pakaya,ponnaya,kariya,puka,hukanawa,hukanni,fuck,huth,ponna,fucking,hukamu,හුත්තා,huththi,hukanawaa,etadeta,pakayooo,huththoo,wesawi,wesi,kari,kariyaa,hukamuda,hukamu,hukam,pakaa,paiya,payiya,ponnayaa,ponna,ponnaya,ponnayo,ponnayoo,huththii,huththiii,puke,pukemail,pukathama,pukasududa,pukaa,pukalokuda,paka,pakathama,හුත්තා,හුත්ත,පක', emoji: '🚫' },
        { key: 'AUTO_SREACT_KEY', value: '😎', emoji: '😎' }
    ];
      const uptimeInSeconds = process.uptime();
      const uptime = formatUptime(uptimeInSeconds);
      const bruh = "`"
      const settingsMessage = `*⚙️ BHASHI - MD SETTINGS ⚙️*

_A simple WhatsApp Bot Based On Baiyles. If you want to change settings, add your MongoDB URI into config.js file_

╭─────────────────╾
> ▣ *ᴄʀᴇᴀᴛᴏʀ* : Vishwa And Bhashitha
> ▣ *ᴀʟʟ ᴠᴀʀꜱ* : 14
> ▣ *ʀᴜɴᴛɪᴍᴇ* : ${runtime(process.uptime())}
╰─────────╾
 💡 Reply With the Number If you Want to Change Some Settings

*╭──────────────╮*
▏ 🛡️ ${g}MODE${g}     
▏${mon}1.1 >>> PUBLIC${mon}
▏${mon}1.2 >>> PRIVATE${mon}
▏${mon}1.3 >>> INBOX${mon}
▏${mon}1.4 >>> GROUPS${mon}
*╰─────────╾*
*╭──────────────╮*
▏ 🛡️ ${g}AUTO STATUS READ${g}     
▏${mon}2.1 >>> ON  ✅${mon}
▏${mon}2.2 >>> OFF ❌${mon}
*╰─────────╾*
*╭──────────────╮*
▏ 🛡️ ${g}AUTO READ MSG${g}     
▏${mon}3.1 >>> ON  ✅${mon}
▏${mon}3.2 >>> OFF ❌${mon}
*╰─────────╾*
*╭──────────────╮*
▏ 🛡️ ${g}AUTO READ CMD${g}     
▏${mon}4.1 >>> ON  ✅${mon}
▏${mon}4.2 >>> OFF ❌${mon}
*╰─────────╾*
*╭──────────────╮*
▏ 🛡️ ${g}AUTO BIO${g}     
▏${mon}5.1 >>> ON  ✅${mon}
▏${mon}5.2 >>> OFF ❌${mon}
*╰─────────╾*
*╭──────────────╮*
▏ 🛡️ ${g}ALWAYS RECORDING${g}     
▏${mon}6.1 >>> ON  ✅${mon}
▏${mon}6.2 >>> OFF ❌${mon}
*╰─────────╾*
*╭──────────────╮*
▏ 🛡️ ${g}ALWAYS TYPING${g}     
▏${mon}7.1 >>> ON  ✅${mon}
▏${mon}7.2 >>> OFF ❌${mon}
*╰─────────╾*
*╭──────────────╮*
▏ 🛡️ ${g}AUTO AI CHAT${g}     
▏${mon}8.1 >>> ON  ✅${mon}
▏${mon}8.2 >>> OFF ❌${mon}
*╰─────────╾*
*╭──────────────╮*
▏ 🛡️ ${g}LANGUAGE${g}     
▏${mon}9.1 >>> ENGLISH 🇮🇸${mon}
▏${mon}9.2 >>> SINHALA 🇱🇰${mon}
*╰─────────╾*
*╭──────────────╮*
▏ 🛡️ ${g}ANTI CALL${g}     
▏${mon}10.1 >>> ALLOW ✅${mon}
▏${mon}10.2 >>> DISALLOW ❌${mon}
*╰─────────╾*
*╭──────────────╮*
▏ 🛡️ ${g}ALWAYS ONLINE${g}     
▏${mon}11.1 >>> ON  ✅${mon}
▏${mon}11.2 >>> OFF ❌${mon}
*╰─────────╾*

${bruh}To update a Belwo setting, reply with the setting you want to change, e.g., .setvar OWNER:94724826875${bruh}\n${bruh}You can chnage settings like that below ones${bruh}\n\n.
${settings.map(setting => `> ▣ *${setting.emoji} ${setting.key}* : ${setting.value}`).join('\n')}

> *ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ ㋛*`;

      const aliveImage = config.ALIVE_IMG;

      const sentMessage = await conn.sendMessage(from, { 
          text: settingsMessage, 
          image: { url: aliveImage }
      }, { quoted: mek });

      const listener = async (messageUpsert) => {
          const msg = messageUpsert.messages[0];
          if (!msg.message || !msg.message.extendedTextMessage) return;

          const userReply = msg.message.extendedTextMessage.text.trim();
          const messageContext = msg.message.extendedTextMessage.contextInfo;

          if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
              const setting = userReply.split('.');
              if (setting.length === 2) {
                  const mainSetting = parseInt(setting[0]);
                  const toggleOption = parseInt(setting[1]);

                  await conn.sendMessage(from, { react: { text: "✅", key: msg.key } });

                  try {
                    if (mainSetting === 1) { 
                        // MODE setting with multiple options
                        if (toggleOption === 1) {
                            await updateEnv("MODE", "public");
                            reply("✅ *MODE has been set to PUBLIC.* Restarting...");
                        } else if (toggleOption === 2) {
                            await updateEnv("MODE", "private");
                            reply("✅ *MODE has been set to PRIVATE.* Restarting...");
                        } else if (toggleOption === 3) {
                            await updateEnv("MODE", "inbox");
                            reply("✅ *MODE has been set to INBOX.* Restarting...");
                        } else if (toggleOption === 4) {
                            await updateEnv("MODE", "groups");
                            reply("✅ *MODE has been set to GROUPS.* Restarting...");
                        } else {
                            reply("❌ *Invalid option for MODE. Please select a valid option:*\n1. Public\n2. Private\n3. Inbox\n4. Groups");
                        }
                        setTimeout(async () => {
                            await exec("pm2 restart all");
                        }, 30000);
                    } else if (mainSetting === 2) { 
                          await updateEnv("AUTO_STATUS_READ", toggleOption === 1 ? "true" : "false");
                          reply(`✅ *AUTO STATUS READ has been turned ${toggleOption === 1 ? "ON" : "OFF"}.*`);
                      } else if (mainSetting === 3) {
                          await updateEnv("AUTO_READ_MSG", toggleOption === 1 ? "true" : "false");
                          reply(`✅ *AUTO READ MSG has been turned ${toggleOption === 1 ? "ON" : "OFF"}.*`);
                      } else if (mainSetting === 4) {
                          await updateEnv("AUTO_READ_CMD", toggleOption === 1 ? "true" : "false");
                          reply(`✅ *AUTO READ CMD has been turned ${toggleOption === 1 ? "ON" : "OFF"}.*`);
                      } else if (mainSetting === 5) {
                          await updateEnv("AUTO_BIO", toggleOption === 1 ? "true" : "false");
                          reply(`✅ *AUTO BIO has been turned ${toggleOption === 1 ? "ON" : "OFF"}.*`);
                      } else if (mainSetting === 6) {
                          await updateEnv("ALWAYS_RECORDING", toggleOption === 1 ? "true" : "false");
                          reply(`✅ *ALWAYS RECORDING has been turned ${toggleOption === 1 ? "ON" : "OFF"}.*`);
                      } else if (mainSetting === 7) {
                          await updateEnv("ALWAYS_TYPING", toggleOption === 1 ? "true" : "false");
                          reply(`✅ *ALWAYS TYPING has been turned ${toggleOption === 1 ? "ON" : "OFF"}.*`);
                      } else if (mainSetting === 8) {
                          await updateEnv("AUTO_AI_CHAT", toggleOption === 1 ? "true" : "false");
                          reply(`✅ *AUTO AI CHAT has been turned ${toggleOption === 1 ? "ON" : "OFF"}.*`);
                      } else if (mainSetting === 9) {
                          await updateEnv("LANGUAGE", toggleOption === 1 ? "EN" : "SI");
                          reply(`✅ *LANGUAGE has been set to ${toggleOption === 1 ? "ENGLISH" : "SINHALA"}.*`);
                      } else if (mainSetting === 10) {
                          await updateEnv("ANTI_CALL", toggleOption === 1 ? "true" : "false");
                          reply(`✅ *ANTI CALL has been turned ${toggleOption === 1 ? "ON" : "OFF"}.*`);
                      } else if (mainSetting === 11) {
                          await updateEnv("ALWAYS_ONLINE", toggleOption === 1 ? "true" : "false");
                          reply(`✅ *ALWAYS ONLINE has been turned ${toggleOption === 1 ? "ON" : "OFF"}.*`);
                      } else {
                          reply("❌ *Invalid setting number.*");
                      }

                      setTimeout(async () => {
                          await exec("pm2 restart all");
                      }, 30000);
                  } catch (err) {
                      console.error(err);
                      reply("❌ *An error occurred while updating the settings.*");
                  }
              } else {
                  reply("❌ *Invalid format. Please reply with the format: <number>.<option>*");
              }
          }
      };

      conn.ev.on("messages.upsert", listener);
});
//==============================================================================================================================================================================
const packageJson = require('../package.json'); // Import package.json

// Function to detect the platform
function detectPlatform() {
    if (process.env.REPL_ID) return 'Replit';
    if (process.env.HEROKU_APP_NAME) return 'Heroku';
    if (process.env.KOYEB_PROJECT_ID) return 'Koyeb';
    if (process.env.AWS_LAMBDA_FUNCTION_NAME) return 'AWS Lambda';
    if (process.env.VERCEL) return 'Vercel';
    if (process.env.NETLIFY) return 'Netlify';
    if (process.env.GITHUB_ACTIONS) return 'GitHub Actions (Workflow)';
    if (process.env.CODESPACES) return 'GitHub Codespaces';
    if (process.env.GOOGLE_CLOUD_PROJECT) return 'Google Cloud Platform (GCP)';
    if (process.env.DIGITALOCEAN_API_TOKEN) return 'DigitalOcean';
    if (process.env.AZURE_FUNCTIONS_ENVIRONMENT) return 'Azure Functions';
    if (process.env.LINUX) return 'Linux Server';
    if (process.env.DOCKER_HOST) return 'Docker';
    if (process.env.CLOUDRON_APP) return 'Cloudron';
    if (process.env.VMWARE) return 'VMware';
    if (process.env.CIRCLECI) return 'CircleCI';
    if (process.env.TRAVIS) return 'Travis CI';
    if (process.env.JENKINS_HOME) return 'Jenkins';
    if (process.env.OPENSHIFT_BUILD_NAME) return 'OpenShift';
    if (process.env.SNAP) return 'Snapcraft (Snap)';
    return 'Unknown Platform';
}

// Function to format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Function to format uptime
function formatUptime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return 'Invalid uptime';
    }
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

// Function to get CPU usage
function getCpuUsage() {
    const cpus = os.cpus();
    let totalIdle = 0, totalTick = 0;
    cpus.forEach(cpu => {
        for (let type in cpu.times) {
            totalTick += cpu.times[type];
        }
        totalIdle += cpu.times.idle;
    });
    return ((1 - totalIdle / totalTick) * 100).toFixed(2);
}

// Function to get IP address
function getIpAddress() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return 'Unknown IP';
}

// Function to get disk usage
function getDiskUsage() {
    const totalDisk = os.totalmem();
    const freeDisk = os.freemem();
    return {
        total: formatFileSize(totalDisk),
        free: formatFileSize(freeDisk),
    };
}

// Function to get network stats
function getNetworkStats() {
    const interfaces = os.networkInterfaces();
    const stats = [];
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                stats.push({
                    name: name,
                    address: iface.address,
                    mac: iface.mac,
                });
            }
        }
    }
    return stats;
}

const PLATFORM = detectPlatform();
const botVersion = packageJson.version; // Bot version from package.json
const uptimeInSeconds = process.uptime(); // Get system uptime in seconds
const uptime = formatUptime(uptimeInSeconds);
cmd({
  pattern: "system",
  alias: ["status", "botinfo"],
  desc: "Check uptime, RAM usage, CPU info, and more",
  category: "main",
  react: "🧬",
  filename: __filename,
}, async (conn, mek, m, { from, reply }) => {
  try {

    const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
    const cpuUsage = getCpuUsage();
    const ipAddress = getIpAddress();
    const osType = os.type(); // OS type (e.g., Linux, Windows)
    const osRelease = os.release(); // OS release version
    const osArch = os.arch(); // OS architecture (e.g., x64)
    const diskUsage = getDiskUsage();
    const networkStats = getNetworkStats();
    const processId = process.pid; // Bot's process ID
    const nodeVersion = process.version; // Node.js version


    // Format network stats
    const networkInfo = networkStats.map(iface => {
        return `📡 *${iface.name}*: ${iface.address} (MAC: ${iface.mac})`;
    }).join('\n');

    // Status message to be sent
    const status = `*乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖲 𝖸 𝖲 𝖳 𝖤 𝖬  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭*

> ⏰ *𝖴𝗉𝗍𝗂𝗆𝖾* : ${runtime(process.uptime())}
> 📻 *𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆* : ${PLATFORM}
> ⚙️ *𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾* : ${memoryUsage} MB / ${totalMemory} MB
> 💻 *𝖢𝖯𝖴 𝖴𝗌𝖺𝗀𝖾* : ${cpuUsage}%
> 🌐 *𝖨𝖯 𝖠𝖽𝖽𝗋𝖾𝗌𝗌* : ${ipAddress}
> 🖥️ *𝖮𝖲 𝖳𝗒𝗉𝖾* : ${osType} ${osRelease} (${osArch})
> 💾 *𝖣𝗂𝗌𝗄 𝖴𝗌𝖺𝗀𝖾* : ${diskUsage.free} free of ${diskUsage.total}
> 📡 *𝖭𝖾𝗍𝗐𝗈𝗋𝗄 𝖨𝗇𝗍𝖾𝗋𝖿𝖺𝖼𝖾𝗌* : ${networkInfo}
> 🆔 *𝖯𝗋𝗈𝖼𝖾𝗌𝗌 𝖨𝖣* : ${processId}
> 📦 *𝖭𝗈𝖽𝖾.𝗃𝗌 𝖵𝖾𝗋𝗌𝗂𝗈𝗇* : ${nodeVersion}
> 🤖 *𝖡𝗈𝗍 𝖵𝖾𝗋𝗌𝗂𝗈𝗇* : ${botVersion}

*乂  𝖱 𝖤 𝖯 𝖫 𝖸  𝖳 𝖧 𝖤  𝖨 𝖭 𝖥 𝖮  𝖮 𝖯 𝖢 𝖳 𝖨 𝖮 𝖭*

╭─────────────────────┈
│ 1️⃣  𝖡𝗁𝖺𝗌𝗁𝗂 : 𝖮𝗐𝗇𝖾𝗋 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇.
│ 2️⃣  𝖡𝗁𝖺𝗌𝗁𝗂 : 𝖱𝖾𝗉𝗈 𝖨𝗇𝖿𝗈𝗋𝗆𝖺𝗍𝗂𝗈𝗇.
│ 3️⃣  𝖡𝗁𝖺𝗌𝗁𝗂 : 𝖧𝖾𝗅𝗉. ( 𝖧𝗈𝗐 𝖳𝗈 𝖣𝖾𝗉𝗅𝗈𝗒 )
╰─────────────────────┈`;

        // Send audio message
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/vishwamihiranga/BHASHI-PUBLIC/raw/main/ui%20(1).mp3' },
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: mek });
    const sentMessage = await conn.sendMessage(from, {
          text: status,
          contextInfo: {
              externalAdReply: {
                  title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                  body: '© Presented By Bhashi Coders. Powerd By Dark Hackers Zone Team. Enjoi Now Bhashi Project.',
                  thumbnailUrl: `https://i.ibb.co/NFDg5Hd/temp-Img2-Url.jpg`,
                  sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                  mediaType: 1,
                  renderLargerThumbnail : true
              }
          }
      }, { quoted: mek });



    // Handle user replies
    conn.ev.on("messages.upsert", async (messageUpsert) => {
      const msg = messageUpsert.messages[0];
      if (!msg.message || !msg.message.extendedTextMessage) return;

      const userReply = msg.message.extendedTextMessage.text.trim();
      const messageContext = msg.message.extendedTextMessage.contextInfo;

      if (messageContext && messageContext.stanzaId === sentMessage.key.id) {
        if (userReply === "1") {
            await conn.sendMessage(from, { react: { text: "⏳", key: mek.key } });
          reply(`*乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖮 𝖶 𝖭 𝖤 𝖱  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭*

🧑🏻‍💻 *𝖮𝗐𝗇𝖾𝗋* : 𝖡𝗁𝖺𝗌𝗁𝗂𝗍𝗁𝖺 𝖣𝗂𝗌𝗌𝖺𝗇𝖺𝗒𝖺𝗄𝖾
🧑🏻‍💻 *𝖢𝗈 𝖮𝗐𝗇𝖾𝗋* : 𝖵𝗂𝗌𝗁𝗐𝖺 𝖬𝗂𝗁𝗂𝗋𝖺𝗇𝗀𝖺 ( 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋 )
🧑🏻‍💻 *𝖧𝖾𝗅𝗉𝖾𝗋* : 𝖠𝗅𝖾𝗑 𝖨𝖣 ( 𝖳𝖾𝖺𝗆 𝖫𝖾𝖺𝖽𝖾𝗋 )`);
        } else if (userReply === "2") {
            await conn.sendMessage(from, { react: { text: "⏳", key: mek.key } });
          reply(`*乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖱 𝖤 𝖯 𝖮  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭*

⚙️ 𝖶𝖾𝖻 𝖲𝗂𝗍𝖾 : ( 𝖭𝗈𝗍 𝖱𝖾𝗅𝖾𝖺𝗌𝖾𝖽 )
⚙️ 𝖦𝗂𝗍𝗁𝗎𝖻 : ( 𝖭𝗈𝗍 𝖱𝖾𝗅𝖾𝖺𝗌𝖾𝖽 )
⚙️ 𝖢𝗁𝖺𝗇𝖾𝗅 : https://whatsapp.com/channel/0029Vajj591JUM2RT8xtig2U`);
        } else if (userReply === "3") {
            await conn.sendMessage(from, { react: { text: "⏳", key: mek.key } });
          reply(`乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖧 𝖤 𝖫 𝖯  𝖢 𝖤 𝖭 𝖳 𝖤 𝖱

📻 𝖮𝗐𝗇𝗇𝖾𝗋𝗌 𝖠𝗅𝗂𝗏𝖾 𝖮𝗇 𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉`);
        } else {
          reply("Invalid option, please reply with 1, 2, or 3.");
        }
      }
    });
  } catch (e) {
    console.error(e);
    reply(`*Error:* ${e.message}`);
  }
});
//==============================================================================================================================================================================

cmd({
    pattern: "alive",
    desc: "Check if the bot is online and send an 'alive' message with system info.",
    category: "main",
    react: "👋🏻",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        const systemInfo = `
> *Platform* : ${PLATFORM}
> *Uptime* : ${uptime}
> *𝖡𝗈𝗍 𝖵𝖾𝗋𝗌𝗂𝗈𝗇* : ${botVersion}
> *Total RAM* : ${formatFileSize(os.totalmem())}
> *Free RAM* : ${formatFileSize(os.freemem())}
        `.trim();



        // Send the message with system info
        await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/kHpVgCD/temp-Img2-Url.jpg' },
            caption: `
𝙃𝙀𝙇𝙇𝙊 𝙄 𝘼𝙈 𝙊𝙉𝙇𝙄𝙉𝙀

_A Bhashi Md Whatsapp Bot Based Third Party Application Providing Many Services With Real-Time Automated Conversational Experience. Enjoy._

${systemInfo}

> *ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ᴡᴀ-ʙᴏᴛ*  
> © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
            `.trim(),
            footer: '*ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ᴡᴀ-ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠɪꜱʜᴡᴀ ᴍɪʜɪʀᴀɴɢᴀ*',
              contextInfo: {
                  forwardingScore: 999,
                  isForwarded: true,
                  forwardedNewsletterMessageInfo: {
                      newsletterName: 'ʙʜᴀꜱʜɪ-ᴍᴅ ᴠ2 🚀​',
                      newsletterJid: "120363333519565664@newsletter",
                  },
                  externalAdReply: {
                      title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                      body: '© Presented By Bhashi Coders. Powerd By Dark Hackers Zone Team. Enjoi Now Bhashi Project.',
                      thumbnailUrl: botimg2,
                      sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                      mediaType: 1,
                  }
            }
        });
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/vishwamihiranga/BHASHI-PUBLIC/raw/main/ui%20(1).mp3' },
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: mek });
    } catch (e) {
        console.error('🚫 Error:', e);
        await reply('🚫 Error: ' + e.message);
    }
});
//==============================================================================================================================================================================
cmd({
  pattern: "support",
  desc: "Get information about support channels.",
  category: "main",
  react: "🆘",
  filename: __filename
}, async (conn, mek, m, { reply }) => {
  const config = await readEnv();
  const language = config.LANGUAGE; 
  const supportInfo = {
      SI: `
🆘 *උදව්ක් ඕනද?* 🆘
ඔබට සහය අවශ්‍ය නම් හෝ ප්‍රශ්න තිබේ නම්, පහත නාලිකා හරහා අපට පිවිසෙන්න:

🪀*සහය කණ්ඩායම*: https://whatsapp.com/channel/0029VaSaZd5CBtxGawmSph1k
      `,
      EN: `乂  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖲 𝖴 𝖯 𝖯 𝖮 𝖱 𝖳  𝖢 𝖤 𝖭 𝖳 𝖤 𝖱

𝖨𝖿 𝖸𝗈𝗎 𝖭𝖾𝖾𝖽 𝖲𝗎𝗉𝗉𝗈𝗋𝗍 𝖮𝗋 𝖧𝖺𝗏𝖾 𝖠𝗇𝗒 𝖰𝗎𝖾𝗌𝗍𝗂𝗈𝗇𝗌. 𝖸𝗈𝗎 𝖢𝖺𝗇 𝖱𝖾𝖺𝖼𝗁 𝖴𝗌 𝖳𝗁𝗋𝗈𝗎𝗀𝗁 𝖳𝗁𝖾 𝖥𝗈𝗅𝗅𝗈𝗐𝗂𝗇𝗀 𝖢𝗁𝖺𝗇𝗇𝖾𝗅𝗌.

🪀 𝖲𝗎𝗉𝗉𝗈𝗋𝗍 𝖦𝗋𝗈𝗎𝗉 : https://whatsapp.com/channel/0029VaSaZd5CBtxGawmSph1k`
  };
  reply(supportInfo[language]);
});
//==============================================================================================================================================================================
cmd({
  pattern: "requestpair",
  desc: "Generate a pairing code for session management.",
  category: "main",
  react: "🔗",
  filename: __filename
}, async (conn, mek, m, { args, q, reply, replyimg }) => {
  const axios = require('axios'); // Ensure Axios is installed

  // Extract the phone number from the arguments
  const phoneNumber = args[0]; // First argument after the command

  if (!phoneNumber) {
    // If no phone number is provided, prompt the user
    reply("❌ Please provide a phone number. Example: *.requestpair 94712345678*");
    return;
  }

  const apiUrl = `https://bhashi-session-web-v2.onrender.com/code?number=${phoneNumber}`;

  try {
    // Make a GET request to the API
    const response = await axios.get(apiUrl);

    // Extract the pairing code from the response
    const pairingCode = response.data.code;

    // Create the message
    const message = `
🔑 *Session Pairing Code* 🔑
A pairing code has been generated for the number *${phoneNumber}*:

- *📑 Code*: \`${pairingCode}\`

Use this code to manage your session: https://bhashi-session-web-v2.onrender.com/
    `;

    // Send the message with an optional image
    replyimg(message, null); // Replace `null` with an image buffer if available

  } catch (error) {
    // Handle errors
    console.error(error);
    reply(`
❌ *Error Generating Pairing Code* ❌
An error occurred while trying to generate a pairing code. Please try again later.

Error Details: ${error.message}
    `);
  }
});
//==============================================================================================================================================================================

// Function to get the total number of plugins
function getTotalPlugins() {
    const pluginDirectory = path.join(__dirname, '../BHASHI-PLUGS');
    const files = fs.readdirSync(pluginDirectory);

    // Filter to count only JavaScript files (.js), you can modify this for your specific use case
    const pluginFiles = files.filter(file => file.endsWith('.js'));
    return pluginFiles.length;
}
//==============================================================================================================================================================================
cmd({
    pattern: "list",
    react: "📜",
    alias: ["panel",  "commands"],
    desc: "Get bot's command list.",
    category: "main",
    use: '.menu',
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, isoska, groupAdmins, isBotAdmins, isAdmins, reply,replyimg }) => {

    try {
         const config = readEnv();
        let categories = {};

        // Loop through commands and organize them by category
        for (let cmd of commands) {
            if (!cmd.dontAddCommandList && cmd.pattern) { // Add command only if pattern is defined
                if (!(cmd.category in categories)) {
                    categories[cmd.category] = {};
                }
                if (!(cmd.pattern in categories[cmd.category])) {
                    categories[cmd.category][cmd.pattern] = [];
                }
                categories[cmd.category][cmd.pattern].push(...(cmd.alias || []));
            }
        }
        const prefix = ".";
        const totalPlugins = getTotalPlugins();  // Dynamically get the total plugins

        let menu = `╭──┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖬 𝖤 𝖭 𝖴  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭
│ 
│  ❍   𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆 : ${PLATFORM}
│  ❍   𝖯𝗋𝖾𝖿𝗂𝗑 : ${prefix}
│  ❍   𝖠𝗎𝗍𝗁𝗈𝗋 : Bhashi Coders
│  ❍   𝖱𝗎𝗇 𝖳𝗂𝗆𝖾 : ${runtime(process.uptime())}
╰──────────────────────────┈
${readmore}
> ${mono}ʀᴇᴘʟʏ ᴡɪᴛʜ ɴᴜᴍʙᴇʀ ꜰᴏʀ ɢᴇᴛ ᴍᴇɴᴜ${mono}\n\n`;

        // Loop through categories and add commands along with descriptions
        for (let category in categories) {
            menu += `*╭───────────●●►* \n*│* *「 ${category.toUpperCase()} COMMANDS 」*\n*│*   ───────\n`;
            for (let pattern in categories[category]) {
                const commandDesc = commands.find(cmd => cmd.pattern === pattern)?.desc || 'No description available';  // Get command description

                menu += `*│* *"${prefix}${pattern}"* - ${commandDesc}\n`;  // Add command with description
                for (let alias of categories[category][pattern]) {
                    menu += `*│*   *| ${prefix}${alias}*\n`;
                }
                menu += '*│*\n';
            }
            menu += `*╰───────────●●►*\n`;
        }

        // Send the formatted menu with description
        await conn.sendMessage(from, { image: { url: `https://i.ibb.co/2jKpYXw/temp-Img2-Url.jpg` }, caption: menu }, { quoted: mek });
    } catch (e) {
        reply('*Error !!*');
        console.error(e); // Log the error to the console
    }
});

//==============================================================================================================================================================================


//==================================================================

//===================================================================
cmd({
    pattern: "menu",
    desc: "get menu list.",
    category: "main",
    react: "🔖",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        const prefix = '.';
        const totalPlugins = getTotalPlugins();  // Dynamically get the total plugins
        const config = readEnv();
        const senderNumber = m.sender;
        const isGroup = m.isGroup || false;

const readmore = "\u200B".repeat(4000); 
        const thumbnailUrl = 'https://i.ibb.co/hRw1XK4/image.png'; // Direct URL to your image

        const sallmenu = `╭──┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖬 𝖤 𝖭 𝖴  𝖨 𝖭 𝖥 𝖮 𝖱 𝖬 𝖠 𝖳 𝖨 𝖮 𝖭
│ 
│  ❍   𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆 : ${PLATFORM}
│  ❍   𝖯𝗋𝖾𝖿𝗂𝗑 : ${prefix}
│  ❍   𝖠𝗎𝗍𝗁𝗈𝗋 : Bhashi Coders
│  ❍   𝖱𝗎𝗇 𝖳𝗂𝗆𝖾 : ${runtime(process.uptime())}
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨 ＭＡＩＮ 𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗋𝖾𝗉𝗈
│  • 𝗐𝖾𝖻
│  • 𝗌𝖾𝗌𝗌𝗂𝗈𝗇
│  • 𝖼𝗁𝖺𝗇𝗇𝖾𝗅
│  • 𝗌𝗒𝗌𝗍𝖾𝗆
│  • 𝖺𝗅𝗂𝗏𝖾
│  • 𝗌𝗎𝗉𝗉𝗈𝗋𝗍
│  • 𝗋𝖾𝗊𝗎𝖾𝗌𝗍𝗉𝖺𝗂𝗋
│  • 𝗅𝗂𝗌𝗍
│  • 𝗆𝖾𝗇𝗎
│  • 𝗉𝗂𝗇𝗀
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗌𝗈𝗇𝗀
│  • 𝗏𝗂𝖽𝖾𝗈
│  • 𝖿𝖻
│  • 𝗂𝗀𝖽𝗅
│  • 𝗍𝗍
│  • 𝗍𝗐𝗂𝗍𝗍𝖾𝗋
│  • 𝗆𝖾𝗀𝖺 
│  • 𝗆𝖿𝗂𝗋𝖾
│  • 𝗀𝖽𝗋𝗂𝗏𝖾
│  • 𝗐𝖺𝗅𝗅𝗉𝖺𝗉𝖾𝗋
│  • 𝗀𝗂𝗆𝗀
│  • 𝗉𝗂𝗇𝗍𝖾𝗋𝖾𝗌𝗍
│  • 𝖺𝗉𝗄
│  • 𝗌𝗈𝗎𝗇𝖽𝖼𝗅𝗈𝗎𝖽
│  • 𝗀𝗂𝗍𝖼𝗅𝗈𝗇𝖾
│  • 𝗒𝗍𝗆𝗉3
│  • 𝗒𝗍𝗆𝗉4
│  • 9𝗀𝖺𝗀
│  • 𝗍𝗁𝗋𝖾𝖺𝖽𝗌
│  • 𝗏𝗂𝗆𝖾𝗈
│  • 𝗌𝗉𝗈𝗍𝗂𝖿𝗒𝖽𝗅
│  • 𝖻𝗒𝗍𝗌𝗆𝗑
│  • 𝗃𝖺𝗒𝖺𝗌𝗋𝗂𝗅𝖺𝗇𝗄𝖺
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨 ＣＯＮＶＥＲＴＥＲ 𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗌𝗁𝖺256𝖾𝗇𝖼𝗈𝖽𝖾
│  • 𝗍𝗋𝗍
│  • 𝖼𝗈𝗇𝗏𝖾𝗋𝗍
│  • 𝗋𝖾𝗆𝗂𝗇𝗂
│  • 𝗌𝗍𝗂𝖼𝗄𝖾𝗋
│  • 𝗆𝗈𝗋𝗌𝖾
│  • 𝖽𝖾𝗆𝗈𝗋𝗌𝖾
│  • 𝗎𝗋𝗅𝖾𝗇𝖼𝗈𝖽𝖾
│  • 𝗎𝗋𝗅𝖽𝖾𝖼𝗈𝖽𝖾
│  • 𝖻𝖺𝗌𝖾64𝖾𝗇𝖼𝗈𝖽𝖾
│  • 𝖻𝖺𝗌𝖾64𝖽𝖾𝖼𝗈𝖽𝖾
│  • 𝖽𝖻𝗂𝗇𝖺𝗋𝗒
│  • 𝖾𝖻𝗂𝗇𝖺𝗋𝗒
│  • 𝗊𝗋
│  • 𝗌𝗁𝗈𝗋𝗍𝗎𝗋𝗅
│  • 𝗂𝗆𝗀2𝗎𝗋𝗅
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＡＩ 𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲 
│
│  • 𝖺𝗂𝗂𝗆𝗀
│  • 𝗅𝖾𝗍𝗆𝖾𝗀𝗉𝗍
│  • 𝗀𝗈𝗈𝖽𝗒𝖺𝗂
│  • 𝗀𝖾𝗆𝗂𝗇𝗂
│  • 𝖼𝗁𝖺𝗍𝗀𝗉𝗍
│  • 𝗅𝗅𝖺𝗆𝖺
│  • 𝗆𝗂𝗍𝗋𝖺𝗅
│  • 𝖺𝗂
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＳＥＡＲＣＨ  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝖼𝗋𝗂𝖼
│  • 𝖽𝖾𝖿𝗂𝗇𝖾
│  • 𝗀𝗂𝗍𝗌𝖾𝖺𝗋𝖼𝗁
│  • 𝗌𝗉𝗈𝗍𝗂𝖿𝗒𝗌
│  • 𝗅𝗒𝗋𝗂𝖼𝗌
│  • 𝗇𝗉𝗆𝗌
│  • 𝗇𝗉𝗆
│  • 𝗀𝗂𝗍𝗌𝗍𝖺𝗅𝗄
│  • 𝖼𝗈𝗅𝗈𝗋
│  • 𝗒𝗍𝗌
│  • 𝗌𝗋𝖾𝗉𝗈
│  • 𝗍𝖾𝖼𝗁
│  • 𝗐𝗂𝗄𝗂
│  • 𝗍𝗍𝗌𝗍𝖺𝗅𝗄
│  • 𝗌𝗍𝖾𝖺𝗆
│  • 𝗌𝗍𝗂𝖼𝗄𝖾𝗋𝗌𝖾𝖺𝗋𝖼𝗁
│  • 𝗌𝖾𝗆𝗈𝗃𝗂
│  • 𝖼𝗁𝖺𝗇𝗇𝖾𝗅𝗂𝗇𝖿𝗈
│  • 𝗂𝗇𝗌𝗍𝖺𝗂𝗇𝖿𝗈
│  • 𝖿𝗂𝗇𝖽𝗍𝗂𝗄𝗍𝗈𝗄
│  • 𝗍𝗐𝗂𝗍𝗍𝖾𝗋𝗌𝗍𝖺𝗅𝗄𝖾𝗋
│  • 𝗍𝖾𝗅𝖾𝗀𝗋𝖺𝗆𝗎𝗌𝖾𝗋𝗌𝗍𝖺𝗅𝗄𝖾𝗋
│  • 𝗍𝖾𝗅𝖾𝗀𝗋𝖺𝗆𝖼𝗁𝖺𝗇𝗇𝖾𝗅𝗌𝗍𝖺𝗅𝗄𝖾𝗋
│  • 𝗍𝖾𝗅𝖾𝗀𝗋𝖺𝗆𝗀𝗋𝗈𝗎𝗉𝗌𝗍𝖺𝗅𝗄𝖾𝗋
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＦＵＮ  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗌𝗍𝗎𝖽𝗒𝗁𝖾𝗅𝗉𝖾𝗋
│  • 𝖿𝖺𝖼𝗍
│  • 𝗁𝖺𝖼𝗄
│  • 𝗀𝗂𝖿
│  • 𝗉𝗋𝖾𝖽𝗂𝖼𝗍
│  • 𝗀𝖾𝗇𝖽𝖾𝗋𝗂𝗓𝖾
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＮＳＦＷ  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗑𝗇𝗑𝗑
│  • 𝗑𝗇𝗑𝗑𝖽𝗅
│  • 𝗁𝖾𝗇𝗍𝖺𝗂2
│  • 𝗍𝗋𝖺𝗉
│  • 𝗁𝗇𝖾𝗄𝗈
│  • 𝖻𝖾𝗅𝗈𝗐𝗃𝗈𝖻
│  • 𝗁𝖾𝗇𝗍𝖺𝗂𝗏𝗂𝖽
│  • 𝗑𝗏𝗂𝖽𝖾𝗈
│  • 𝗑𝗏𝗂𝖽𝖾𝗈𝖽𝗅
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＵＳＥＦＵＬ  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗋𝖾𝗆𝗈𝗏𝖾𝖻𝗀
│  • 𝗌𝖼𝗋𝖾𝖾𝗇𝗌𝗁𝗈𝗍
│  • 𝗇𝖾𝗐𝗉𝖺𝗌𝗍𝖾
│  • 𝗀𝖾𝗍𝗉𝖺𝗌𝗍𝖾
│  • 𝖼𝗒𝖻𝖾𝗋𝗍𝗂𝗉𝗌
│  • 𝗀𝗉𝖺𝗌𝗌
│  • 𝗍𝖾𝗆𝗉𝗆𝖺𝗂𝗅
│  • 𝖼𝗁𝖾𝖼𝗄𝗆𝖺𝗂𝗅
│  • 𝗐𝖾𝖺𝗍𝗁𝖾𝗋
│  • 𝗐𝗁𝗈𝗂𝗌
│  • 𝗂𝗉𝗀𝖾𝗈
│  • 𝗎𝗌𝖾𝗋𝗂𝗇𝖿𝗈
│  • 𝖼𝗁𝖾𝖼𝗄𝗉𝗐
│  • 𝖼𝗈𝗎𝗇𝗍𝖽𝗈𝗐𝗇
│  • 𝖽𝗇𝗌
│  • 𝗃𝗂𝖽
│  • 𝗌𝖾𝗇𝖽
│  • 𝗌𝗈𝗅𝗏𝖾
│  • 𝖺𝗉𝗈𝖽
│  • 𝗐𝖺
│  • 𝗋𝖺𝗇𝖽𝗈𝗆𝗎𝗌𝖾𝗋
│  • 𝗐𝗈𝗋𝖽𝗈𝖿𝗍𝗁𝖾𝖽𝖺𝗒
│  • 𝖺𝖿𝖿𝗂𝗋𝗆𝖺𝗍𝗂𝗈𝗇
│  • 𝗋𝖾𝖼𝗂𝗉𝖾
│  • 𝗁𝗈𝗅𝗂𝖽𝖺𝗒𝗌
│  • 𝗋𝖾𝖺𝖽𝗆𝗈𝗋𝖾
│  • 𝖻𝗂𝗇𝖺𝗇𝖼𝖾
│  • 𝖻𝗂𝗇𝗂𝗇𝖿𝗈
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖫 𝖮 𝖦 𝖮  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝖾𝗉𝗁𝗈𝗍𝗈
│  • 𝖿𝗎𝗇𝗉𝗅𝖺𝗒𝗅𝗈𝗀𝗈
│  • 𝗐𝗂𝗅𝗅𝖽𝗅𝗈𝗀𝗈
│  • 𝗉𝗈𝗉𝗌𝗂𝖼𝗅𝖾𝗅𝗈𝗀𝗈
│  • 𝗌𝗂𝗅𝗏𝖾𝗋𝗅𝗈𝗀𝗈
│  • 𝗋𝗈𝗆𝖺𝗇𝗅𝗈𝗀𝗈
│  • 𝖼𝗋𝖺𝖿𝗍𝗌𝗅𝗈𝗀𝗈
│  • 𝖺𝗆𝗉𝖾𝖽𝗅𝗈𝗀𝗈
│  • 𝗋𝗎𝗇𝗇𝖾𝗋𝗅𝗈𝗀𝗈
│  • 𝗐𝖺𝗍𝖾𝗋𝗅𝗈𝗀𝗈
│  • 𝖻𝗅𝖺𝖼𝗄𝖻𝗂𝗋𝖽𝗅𝗈𝗀𝗈
│  • 𝖿𝗅𝗎𝖿𝖿𝗒𝗅𝗈𝗀𝗈
│  • 𝗌𝗆𝗎𝗋𝖿𝗅𝗈𝗀𝗈
│  • 𝖼𝗈𝗆𝗂𝖼𝗌𝗅𝗈𝗀𝗈
│  • 𝗇𝖾𝗈𝗇𝗅𝗈𝗀𝗈
│  • 𝗀𝗅𝗈𝗐𝗅𝗈𝗀𝗈
│  • 𝖿𝗂𝗋𝖾𝗅𝗈𝗀𝗈
│  • 𝗉𝗂𝗄𝖺𝖼𝗁𝗎
│  • 𝖼𝖺𝗎𝗍𝗂𝗈𝗇
│  • 𝖽𝗋𝖺𝗄𝖾
│  • 𝗉𝗈𝗈𝗁
│  • 𝗌𝖺𝖽𝖼𝖺𝗍
│  • 𝗈𝗈𝗀𝗐𝖺𝗒
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖬 𝖮 𝖵 𝖨 𝖤  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗍𝗋𝖾𝗇𝖽𝗂𝗇𝗀 
│  • 𝗀𝖾𝗇𝗋𝖾𝗌
│  • 𝗇𝗈𝗐𝗉𝗅𝖺𝗒𝗂𝗇𝗀
│  • 𝖺𝖼𝗍𝗂𝗏𝖺𝗍𝖾
│  • 𝖽𝖾𝖺𝖼𝗍𝗂𝗏𝖺𝗍𝖾
│  • 𝗅𝗂𝗌𝗍𝗎𝗌𝖾𝗋𝗌
│  • 𝗅𝗂𝗌𝗍𝗀𝗋𝗈𝗎𝗉𝗌
│  • 𝗒𝗆𝗑
│  • 𝗌𝗂𝗇𝗁𝖺𝗅𝖺𝗌𝗎𝖻
│  • 𝖿𝗂𝗋𝖾𝗆𝗈𝗏𝗂𝖾
│  • 𝖢𝗂𝗇𝖾𝗌𝗎𝖻𝗓
│  • 𝖢𝗂𝗇𝖾𝗍𝗏𝗌𝗁𝗈𝗐
│  • 𝗍𝗈𝗉𝗋𝖺𝗍𝖾𝖽
│  • 𝗇𝖾𝗐𝗋𝖾𝗅𝖾𝗌𝖾𝗌
│  • 𝗉𝗈𝗉𝗎𝗅𝖺𝗋𝗆𝗈𝗏𝗂𝖾𝗌
│  • 𝗋𝖾𝗇𝖽𝗈𝗆𝗆𝗈𝗏𝗂𝖾
│  • 𝗆𝗈𝗏𝗂𝖾
│  • 𝖽𝗅
│  • 𝖽𝗅2
│  • 𝖻𝗌2
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖠 𝖭 𝖨 𝖬 𝖤  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗎𝗉𝖼𝗈𝗆𝗂𝗇𝗀𝖺𝗇𝗂𝗆𝖾
│  • 𝗍𝗈𝗉𝖺𝗇𝗂𝗆𝖾
│  • 𝖺𝗇𝗂𝗆𝖾
│  • 𝗍𝗈𝗉𝖺𝗇𝗂𝗆𝖾𝖼𝗁𝖺𝗋
│  • 𝗍𝗈𝗉𝗏𝗈𝗂𝖼𝖾𝖺𝖼𝗍𝗈𝗋𝗌
│  • 𝗍𝗈𝗉𝗆𝖺𝗇𝗀𝖺
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖭 𝖤 𝖶 𝖲  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝖻𝗎𝗌𝗂𝗇𝖾𝗌𝗌𝖾𝗌𝗇𝖾𝗐𝗌
│  • 𝗌𝗉𝗈𝗋𝗍𝗇𝖾𝗐𝗌
│  • 𝗀𝖺𝗀𝖺𝗇𝖺
│  • 𝗇𝖾𝗍𝗁𝗇𝖾𝗐𝗌
│  • 𝗌𝗂𝗅𝗎𝗆𝗂𝗇𝖺
│  • 𝗅𝖺𝗇𝗄𝖺𝗇𝗍𝗋𝗎𝗍𝗁
│  • 𝗍𝖾𝖺𝖼𝗁𝗇𝖾𝗐𝗌
│  • 𝗁𝖺𝖼𝗄𝖾𝗋𝗇𝖾𝗐𝗌
│  • 𝖺𝖽𝖺𝗇𝖾𝗐𝗌
│  • 𝖻𝖻𝖼𝗇𝖾𝗐𝗌
│  • 𝗌𝗂𝗒𝖺𝗍𝗁𝖺𝗇𝖾𝗐𝗌
│  • 𝗌𝗂𝗋𝖺𝗌𝖺𝗇𝖾𝗐𝗌
│  • 𝖺𝗇𝗂𝗆𝖾𝗇𝖾𝗐𝗌
│  • 𝗇𝖾𝗐𝗌2
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖦 𝖱 𝖮 𝖴 𝖯  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲 
│
│  • 𝗀𝗋𝗈𝗎𝗉𝗇𝗈𝗍𝗂𝖿𝗒
│  • 𝗅𝗈𝖼𝗄
│  • 𝗎𝗇𝗅𝗈𝖼𝗄
│  • 𝖺𝗉𝗉𝗋𝗈𝗏𝖾𝖺𝗅𝗅
│  • 𝗋𝖾𝗏𝗈𝗄𝖾
│  • 𝖺𝖽𝖽
│  • 𝗌𝖾𝗍𝗂𝖼𝗈𝗇
│  • 𝗍𝖺𝗀𝖺𝗅𝗅
│  • 𝗋𝖾𝗆𝗈𝗏𝖾𝖺𝗅𝗅
│  • 𝗉𝗋𝗈𝗆𝗈𝗍𝖾
│  • 𝖽𝖾𝗆𝗈𝗍𝖾
│  • 𝗂𝗇𝗏𝗂𝗍𝖾
│  • 𝗀𝗋𝗈𝗎𝗉𝗂𝗇𝖿𝗈
│  • 𝗄𝗂𝖼𝗄
│  • 𝗌𝖾𝗍𝗌𝗎𝖻𝗃𝖾𝖼𝗍
│  • 𝗌𝖾𝗍𝖽𝖾𝗌𝖼
│  • 𝗆𝗎𝗍𝖾
│  • 𝗎𝗇𝗆𝗎𝗍𝖾
│  • 𝖺𝗆𝗎𝗍𝖾
│  • 𝖺𝗎𝗇𝗆𝗎𝗍𝖾
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖱 𝖤 𝖭 𝖣 𝖮 𝖬  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗆𝗒𝗌𝗍𝖾𝗋𝗒𝗂𝗆𝖺𝗀𝖾
│  • 𝗋𝖾𝗇𝖽𝗈𝗆𝗆𝗒𝗌𝗍𝖾𝗋𝗒
│  • 𝗋𝖾𝗇𝖽𝗈𝗆𝗌𝗈𝗎𝗇𝖽
│  • 𝗋𝖾𝗇𝖽𝗈𝗆𝗆𝖾𝗆𝖾
│  • 𝖽𝗈𝗀𝖻𝗋𝖾𝖾𝖽
│  • 𝖼𝗈𝖼𝗄𝗍𝖺𝗂𝗅
│  • 𝗋𝖼𝗈𝖿𝖿𝖾𝖾
│  • 𝗋𝗂𝗆𝗀𝗌
│  • 𝗋𝖼𝗈𝗅𝗈𝗋
│  • 𝖽𝗈𝗀
╰──────────────────────────┈

╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＯＷＮＥＲ  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗌𝖾𝗍𝗍𝗂𝗇𝗀𝗌
│  • 𝖻𝗈𝗈𝗆
│  • 𝖿𝖾𝗍𝖼𝗁
│  • 𝖿𝖾𝖾𝖽𝖻𝖺𝖼𝗄
│  • 𝖿𝖾𝖺𝗍𝗎𝗋𝖾𝗋𝖾𝗊𝗎𝖾𝗌𝗍
│  • 𝖻𝗎𝗀𝗋𝖾𝗉𝗈𝗋𝗍
│  • 𝖼𝗅𝖾𝖺𝗋𝖼𝗁𝖺𝗍𝗌
│  • 𝗋𝖾𝗇𝖺𝗆𝖾
│  • 𝖿𝗈𝗋𝗐𝖺𝗋𝖽
│  • 𝗒𝗍𝗌
│  • 𝗌𝗌𝖺𝗏𝖾
│  • 𝗌𝖾𝗍𝗏𝖺𝗋
│  • 𝗀𝖾𝗍𝗏𝖺𝗋𝗌
│  • 𝗋𝖾𝗆𝗏𝖺𝗋
│  • 𝗋𝖾𝗆𝖺𝗅𝗅𝗏𝖺𝗋𝗌
│  • 𝗀𝖾𝗍𝖺𝖻𝗈𝗎𝗍
│  • 𝗀𝖾𝗍𝖻𝗎𝗌𝗌𝗂𝗇𝖾𝗌𝗌
│  • 𝗃𝗈𝗂𝗇
│  • 𝗅𝖾𝖿𝗍
│  • 𝗁𝗂𝖽𝖾𝗍𝖺𝗀
│  • 𝗋𝖾𝗌𝗍𝖺𝗋𝗍
│  • 𝗋𝖾𝗌𝗍𝖺𝗋𝗍2
│  • 𝖺𝖽𝖽𝗌𝗎𝖽𝗈
│  • 𝖽𝖺𝗌𝗎𝖽𝗈
│  • 𝖻𝖺𝗇
│  • 𝗎𝗇𝖻𝖺𝗇
│  • 𝖻𝖺𝗇𝗎𝖼
│  • 𝗎𝗇𝖻𝖺𝗇𝗀𝖼
│  • 𝗌𝖾𝗍𝖻𝗈𝗍𝗇𝖺𝗆𝖾
│  • 𝗌𝖾𝗍𝖻𝗈𝗍𝖻𝗂𝗈
│  • 𝖻𝗅𝗈𝖼𝗄
│  • 𝗎𝗇𝖻𝗅𝗈𝖼𝗄
╰──────────────────────────┈

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ'
            `
        const smainmenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨 ＭＡＩＮ 𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗋𝖾𝗉𝗈
│  • 𝗐𝖾𝖻
│  • 𝗌𝖾𝗌𝗌𝗂𝗈𝗇
│  • 𝖼𝗁𝖺𝗇𝗇𝖾𝗅
│  • 𝗌𝗒𝗌𝗍𝖾𝗆
│  • 𝖺𝗅𝗂𝗏𝖾
│  • 𝗌𝗎𝗉𝗉𝗈𝗋𝗍
│  • 𝗋𝖾𝗊𝗎𝖾𝗌𝗍𝗉𝖺𝗂𝗋
│  • 𝗅𝗂𝗌𝗍
│  • 𝗆𝖾𝗇𝗎
│  • 𝗉𝗂𝗇𝗀
╰──────────────────────────┈

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        const sdlmenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖣 𝖮 𝖶 𝖭 𝖫 𝖮 𝖠 𝖣  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗌𝗈𝗇𝗀
│  • 𝗏𝗂𝖽𝖾𝗈
│  • 𝖿𝖻
│  • 𝗂𝗀𝖽𝗅
│  • 𝗍𝗍
│  • 𝗍𝗐𝗂𝗍𝗍𝖾𝗋
│  • 𝗆𝖾𝗀𝖺 
│  • 𝗆𝖿𝗂𝗋𝖾
│  • 𝗀𝖽𝗋𝗂𝗏𝖾
│  • 𝗐𝖺𝗅𝗅𝗉𝖺𝗉𝖾𝗋
│  • 𝗀𝗂𝗆𝗀
│  • 𝗉𝗂𝗇𝗍𝖾𝗋𝖾𝗌𝗍
│  • 𝖺𝗉𝗄
│  • 𝗌𝗈𝗎𝗇𝖽𝖼𝗅𝗈𝗎𝖽
│  • 𝗀𝗂𝗍𝖼𝗅𝗈𝗇𝖾
│  • 𝗒𝗍𝗆𝗉3
│  • 𝗒𝗍𝗆𝗉4
│  • 9𝗀𝖺𝗀
│  • 𝗍𝗁𝗋𝖾𝖺𝖽𝗌
│  • 𝗏𝗂𝗆𝖾𝗈
│  • 𝗌𝗉𝗈𝗍𝗂𝖿𝗒𝖽𝗅
│  • 𝖻𝗒𝗍𝗌𝗆𝗑
│  • 𝗃𝖺𝗒𝖺𝗌𝗋𝗂𝗅𝖺𝗇𝗄𝖺
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        const sconvertermenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨 ＣＯＮＶＥＲＴＥＲ 𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗌𝗁𝖺256𝖾𝗇𝖼𝗈𝖽𝖾
│  • 𝗍𝗋𝗍
│  • 𝖼𝗈𝗇𝗏𝖾𝗋𝗍
│  • 𝗋𝖾𝗆𝗂𝗇𝗂
│  • 𝗌𝗍𝗂𝖼𝗄𝖾𝗋
│  • 𝗆𝗈𝗋𝗌𝖾
│  • 𝖽𝖾𝗆𝗈𝗋𝗌𝖾
│  • 𝗎𝗋𝗅𝖾𝗇𝖼𝗈𝖽𝖾
│  • 𝗎𝗋𝗅𝖽𝖾𝖼𝗈𝖽𝖾
│  • 𝖻𝖺𝗌𝖾64𝖾𝗇𝖼𝗈𝖽𝖾
│  • 𝖻𝖺𝗌𝖾64𝖽𝖾𝖼𝗈𝖽𝖾
│  • 𝖽𝖻𝗂𝗇𝖺𝗋𝗒
│  • 𝖾𝖻𝗂𝗇𝖺𝗋𝗒
│  • 𝗊𝗋
│  • 𝗌𝗁𝗈𝗋𝗍𝗎𝗋𝗅
│  • 𝗂𝗆𝗀2𝗎𝗋𝗅
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        const saimenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＡＩ 𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲 
│
│  • 𝖺𝗂𝗂𝗆𝗀
│  • 𝗅𝖾𝗍𝗆𝖾𝗀𝗉𝗍
│  • 𝗀𝗈𝗈𝖽𝗒𝖺𝗂
│  • 𝗀𝖾𝗆𝗂𝗇𝗂
│  • 𝖼𝗁𝖺𝗍𝗀𝗉𝗍
│  • 𝗅𝗅𝖺𝗆𝖺
│  • 𝗆𝗂𝗍𝗋𝖺𝗅
│  • 𝖺𝗂
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        const ssearchmenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＳＥＡＲＣＨ  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝖼𝗋𝗂𝖼
│  • 𝖽𝖾𝖿𝗂𝗇𝖾
│  • 𝗀𝗂𝗍𝗌𝖾𝖺𝗋𝖼𝗁
│  • 𝗌𝗉𝗈𝗍𝗂𝖿𝗒𝗌
│  • 𝗅𝗒𝗋𝗂𝖼𝗌
│  • 𝗇𝗉𝗆𝗌
│  • 𝗇𝗉𝗆
│  • 𝗀𝗂𝗍𝗌𝗍𝖺𝗅𝗄
│  • 𝖼𝗈𝗅𝗈𝗋
│  • 𝗒𝗍𝗌
│  • 𝗌𝗋𝖾𝗉𝗈
│  • 𝗍𝖾𝖼𝗁
│  • 𝗐𝗂𝗄𝗂
│  • 𝗍𝗍𝗌𝗍𝖺𝗅𝗄
│  • 𝗌𝗍𝖾𝖺𝗆
│  • 𝗌𝗍𝗂𝖼𝗄𝖾𝗋𝗌𝖾𝖺𝗋𝖼𝗁
│  • 𝗌𝖾𝗆𝗈𝗃𝗂
│  • 𝖼𝗁𝖺𝗇𝗇𝖾𝗅𝗂𝗇𝖿𝗈
│  • 𝗂𝗇𝗌𝗍𝖺𝗂𝗇𝖿𝗈
│  • 𝖿𝗂𝗇𝖽𝗍𝗂𝗄𝗍𝗈𝗄
│  • 𝗍𝗐𝗂𝗍𝗍𝖾𝗋𝗌𝗍𝖺𝗅𝗄𝖾𝗋
│  • 𝗍𝖾𝗅𝖾𝗀𝗋𝖺𝗆𝗎𝗌𝖾𝗋𝗌𝗍𝖺𝗅𝗄𝖾𝗋
│  • 𝗍𝖾𝗅𝖾𝗀𝗋𝖺𝗆𝖼𝗁𝖺𝗇𝗇𝖾𝗅𝗌𝗍𝖺𝗅𝗄𝖾𝗋
│  • 𝗍𝖾𝗅𝖾𝗀𝗋𝖺𝗆𝗀𝗋𝗈𝗎𝗉𝗌𝗍𝖺𝗅𝗄𝖾𝗋
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        const sfunmenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＦＵＮ  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗌𝗍𝗎𝖽𝗒𝗁𝖾𝗅𝗉𝖾𝗋
│  • 𝖿𝖺𝖼𝗍
│  • 𝗁𝖺𝖼𝗄
│  • 𝗀𝗂𝖿
│  • 𝗉𝗋𝖾𝖽𝗂𝖼𝗍
│  • 𝗀𝖾𝗇𝖽𝖾𝗋𝗂𝗓𝖾
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        const snsfwmenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＮＳＦＷ  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗑𝗇𝗑𝗑
│  • 𝗑𝗇𝗑𝗑𝖽𝗅
│  • 𝗁𝖾𝗇𝗍𝖺𝗂2
│  • 𝗍𝗋𝖺𝗉
│  • 𝗁𝗇𝖾𝗄𝗈
│  • 𝖻𝖾𝗅𝗈𝗐𝗃𝗈𝖻
│  • 𝗁𝖾𝗇𝗍𝖺𝗂𝗏𝗂𝖽
│  • 𝗑𝗏𝗂𝖽𝖾𝗈
│  • 𝗑𝗏𝗂𝖽𝖾𝗈𝖽𝗅
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        const susefulmenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＵＳＥＦＵＬ  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗋𝖾𝗆𝗈𝗏𝖾𝖻𝗀
│  • 𝗌𝖼𝗋𝖾𝖾𝗇𝗌𝗁𝗈𝗍
│  • 𝗇𝖾𝗐𝗉𝖺𝗌𝗍𝖾
│  • 𝗀𝖾𝗍𝗉𝖺𝗌𝗍𝖾
│  • 𝖼𝗒𝖻𝖾𝗋𝗍𝗂𝗉𝗌
│  • 𝗀𝗉𝖺𝗌𝗌
│  • 𝗍𝖾𝗆𝗉𝗆𝖺𝗂𝗅
│  • 𝖼𝗁𝖾𝖼𝗄𝗆𝖺𝗂𝗅
│  • 𝗐𝖾𝖺𝗍𝗁𝖾𝗋
│  • 𝗐𝗁𝗈𝗂𝗌
│  • 𝗂𝗉𝗀𝖾𝗈
│  • 𝗎𝗌𝖾𝗋𝗂𝗇𝖿𝗈
│  • 𝖼𝗁𝖾𝖼𝗄𝗉𝗐
│  • 𝖼𝗈𝗎𝗇𝗍𝖽𝗈𝗐𝗇
│  • 𝖽𝗇𝗌
│  • 𝗃𝗂𝖽
│  • 𝗌𝖾𝗇𝖽
│  • 𝗌𝗈𝗅𝗏𝖾
│  • 𝖺𝗉𝗈𝖽
│  • 𝗐𝖺
│  • 𝗋𝖺𝗇𝖽𝗈𝗆𝗎𝗌𝖾𝗋
│  • 𝗐𝗈𝗋𝖽𝗈𝖿𝗍𝗁𝖾𝖽𝖺𝗒
│  • 𝖺𝖿𝖿𝗂𝗋𝗆𝖺𝗍𝗂𝗈𝗇
│  • 𝗋𝖾𝖼𝗂𝗉𝖾
│  • 𝗁𝗈𝗅𝗂𝖽𝖺𝗒𝗌
│  • 𝗋𝖾𝖺𝖽𝗆𝗈𝗋𝖾
│  • 𝖻𝗂𝗇𝖺𝗇𝖼𝖾
│  • 𝖻𝗂𝗇𝗂𝗇𝖿𝗈
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`

        const slogomenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖫 𝖮 𝖦 𝖮  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝖾𝗉𝗁𝗈𝗍𝗈
│  • 𝖿𝗎𝗇𝗉𝗅𝖺𝗒𝗅𝗈𝗀𝗈
│  • 𝗐𝗂𝗅𝗅𝖽𝗅𝗈𝗀𝗈
│  • 𝗉𝗈𝗉𝗌𝗂𝖼𝗅𝖾𝗅𝗈𝗀𝗈
│  • 𝗌𝗂𝗅𝗏𝖾𝗋𝗅𝗈𝗀𝗈
│  • 𝗋𝗈𝗆𝖺𝗇𝗅𝗈𝗀𝗈
│  • 𝖼𝗋𝖺𝖿𝗍𝗌𝗅𝗈𝗀𝗈
│  • 𝖺𝗆𝗉𝖾𝖽𝗅𝗈𝗀𝗈
│  • 𝗋𝗎𝗇𝗇𝖾𝗋𝗅𝗈𝗀𝗈
│  • 𝗐𝖺𝗍𝖾𝗋𝗅𝗈𝗀𝗈
│  • 𝖻𝗅𝖺𝖼𝗄𝖻𝗂𝗋𝖽𝗅𝗈𝗀𝗈
│  • 𝖿𝗅𝗎𝖿𝖿𝗒𝗅𝗈𝗀𝗈
│  • 𝗌𝗆𝗎𝗋𝖿𝗅𝗈𝗀𝗈
│  • 𝖼𝗈𝗆𝗂𝖼𝗌𝗅𝗈𝗀𝗈
│  • 𝗇𝖾𝗈𝗇𝗅𝗈𝗀𝗈
│  • 𝗀𝗅𝗈𝗐𝗅𝗈𝗀𝗈
│  • 𝖿𝗂𝗋𝖾𝗅𝗈𝗀𝗈
│  • 𝗉𝗂𝗄𝖺𝖼𝗁𝗎
│  • 𝖼𝖺𝗎𝗍𝗂𝗈𝗇
│  • 𝖽𝗋𝖺𝗄𝖾
│  • 𝗉𝗈𝗈𝗁
│  • 𝗌𝖺𝖽𝖼𝖺𝗍
│  • 𝗈𝗈𝗀𝗐𝖺𝗒
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`

        const smvmenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖬 𝖮 𝖵 𝖨 𝖤  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗍𝗋𝖾𝗇𝖽𝗂𝗇𝗀 
│  • 𝗀𝖾𝗇𝗋𝖾𝗌
│  • 𝗇𝗈𝗐𝗉𝗅𝖺𝗒𝗂𝗇𝗀
│  • 𝖺𝖼𝗍𝗂𝗏𝖺𝗍𝖾
│  • 𝖽𝖾𝖺𝖼𝗍𝗂𝗏𝖺𝗍𝖾
│  • 𝗅𝗂𝗌𝗍𝗎𝗌𝖾𝗋𝗌
│  • 𝗅𝗂𝗌𝗍𝗀𝗋𝗈𝗎𝗉𝗌
│  • 𝗒𝗆𝗑
│  • 𝗌𝗂𝗇𝗁𝖺𝗅𝖺𝗌𝗎𝖻
│  • 𝖿𝗂𝗋𝖾𝗆𝗈𝗏𝗂𝖾
│  • 𝖢𝗂𝗇𝖾𝗌𝗎𝖻𝗓
│  • 𝖢𝗂𝗇𝖾𝗍𝗏𝗌𝗁𝗈𝗐
│  • 𝗍𝗈𝗉𝗋𝖺𝗍𝖾𝖽
│  • 𝗇𝖾𝗐𝗋𝖾𝗅𝖾𝗌𝖾𝗌
│  • 𝗉𝗈𝗉𝗎𝗅𝖺𝗋𝗆𝗈𝗏𝗂𝖾𝗌
│  • 𝗋𝖾𝗇𝖽𝗈𝗆𝗆𝗈𝗏𝗂𝖾
│  • 𝗆𝗈𝗏𝗂𝖾
│  • 𝖽𝗅
│  • 𝖽𝗅2
│  • 𝖻𝗌2
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        const sanimemenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖠 𝖭 𝖨 𝖬 𝖤  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗎𝗉𝖼𝗈𝗆𝗂𝗇𝗀𝖺𝗇𝗂𝗆𝖾
│  • 𝗍𝗈𝗉𝖺𝗇𝗂𝗆𝖾
│  • 𝖺𝗇𝗂𝗆𝖾
│  • 𝗍𝗈𝗉𝖺𝗇𝗂𝗆𝖾𝖼𝗁𝖺𝗋
│  • 𝗍𝗈𝗉𝗏𝗈𝗂𝖼𝖾𝖺𝖼𝗍𝗈𝗋𝗌
│  • 𝗍𝗈𝗉𝗆𝖺𝗇𝗀𝖺
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        const snewsmenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖭 𝖤 𝖶 𝖲  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝖻𝗎𝗌𝗂𝗇𝖾𝗌𝗌𝖾𝗌𝗇𝖾𝗐𝗌
│  • 𝗌𝗉𝗈𝗋𝗍𝗇𝖾𝗐𝗌
│  • 𝗀𝖺𝗀𝖺𝗇𝖺
│  • 𝗇𝖾𝗍𝗁𝗇𝖾𝗐𝗌
│  • 𝗌𝗂𝗅𝗎𝗆𝗂𝗇𝖺
│  • 𝗅𝖺𝗇𝗄𝖺𝗇𝗍𝗋𝗎𝗍𝗁
│  • 𝗍𝖾𝖺𝖼𝗁𝗇𝖾𝗐𝗌
│  • 𝗁𝖺𝖼𝗄𝖾𝗋𝗇𝖾𝗐𝗌
│  • 𝖺𝖽𝖺𝗇𝖾𝗐𝗌
│  • 𝖻𝖻𝖼𝗇𝖾𝗐𝗌
│  • 𝗌𝗂𝗒𝖺𝗍𝗁𝖺𝗇𝖾𝗐𝗌
│  • 𝗌𝗂𝗋𝖺𝗌𝖺𝗇𝖾𝗐𝗌
│  • 𝖺𝗇𝗂𝗆𝖾𝗇𝖾𝗐𝗌
│  • 𝗇𝖾𝗐𝗌2
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        const sgpmenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖦 𝖱 𝖮 𝖴 𝖯  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲 
│
│  • 𝗀𝗋𝗈𝗎𝗉𝗇𝗈𝗍𝗂𝖿𝗒
│  • 𝗅𝗈𝖼𝗄
│  • 𝗎𝗇𝗅𝗈𝖼𝗄
│  • 𝖺𝗉𝗉𝗋𝗈𝗏𝖾𝖺𝗅𝗅
│  • 𝗋𝖾𝗏𝗈𝗄𝖾
│  • 𝖺𝖽𝖽
│  • 𝗌𝖾𝗍𝗂𝖼𝗈𝗇
│  • 𝗍𝖺𝗀𝖺𝗅𝗅
│  • 𝗋𝖾𝗆𝗈𝗏𝖾𝖺𝗅𝗅
│  • 𝗉𝗋𝗈𝗆𝗈𝗍𝖾
│  • 𝖽𝖾𝗆𝗈𝗍𝖾
│  • 𝗂𝗇𝗏𝗂𝗍𝖾
│  • 𝗀𝗋𝗈𝗎𝗉𝗂𝗇𝖿𝗈
│  • 𝗄𝗂𝖼𝗄
│  • 𝗌𝖾𝗍𝗌𝗎𝖻𝗃𝖾𝖼𝗍
│  • 𝗌𝖾𝗍𝖽𝖾𝗌𝖼
│  • 𝗆𝗎𝗍𝖾
│  • 𝗎𝗇𝗆𝗎𝗍𝖾
│  • 𝖺𝗆𝗎𝗍𝖾
│  • 𝖺𝗎𝗇𝗆𝗎𝗍𝖾
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`


        const sownermenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  ＯＷＮＥＲ  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝗌𝖾𝗍𝗍𝗂𝗇𝗀𝗌
│  • 𝖻𝗈𝗈𝗆
│  • 𝖿𝖾𝗍𝖼𝗁
│  • 𝖿𝖾𝖾𝖽𝖻𝖺𝖼𝗄
│  • 𝖿𝖾𝖺𝗍𝗎𝗋𝖾𝗋𝖾𝗊𝗎𝖾𝗌𝗍
│  • 𝖻𝗎𝗀𝗋𝖾𝗉𝗈𝗋𝗍
│  • 𝖼𝗅𝖾𝖺𝗋𝖼𝗁𝖺𝗍𝗌
│  • 𝗋𝖾𝗇𝖺𝗆𝖾
│  • 𝖿𝗈𝗋𝗐𝖺𝗋𝖽
│  • 𝗒𝗍𝗌
│  • 𝗌𝗌𝖺𝗏𝖾
│  • 𝗌𝖾𝗍𝗏𝖺𝗋
│  • 𝗀𝖾𝗍𝗏𝖺𝗋𝗌
│  • 𝗋𝖾𝗆𝗏𝖺𝗋
│  • 𝗋𝖾𝗆𝖺𝗅𝗅𝗏𝖺𝗋𝗌
│  • 𝗀𝖾𝗍𝖺𝖻𝗈𝗎𝗍
│  • 𝗀𝖾𝗍𝖻𝗎𝗌𝗌𝗂𝗇𝖾𝗌𝗌
│  • 𝗃𝗈𝗂𝗇
│  • 𝗅𝖾𝖿𝗍
│  • 𝗁𝗂𝖽𝖾𝗍𝖺𝗀
│  • 𝗋𝖾𝗌𝗍𝖺𝗋𝗍
│  • 𝗋𝖾𝗌𝗍𝖺𝗋𝗍2
│  • 𝖺𝖽𝖽𝗌𝗎𝖽𝗈
│  • 𝖽𝖺𝗌𝗎𝖽𝗈
│  • 𝖻𝖺𝗇
│  • 𝗎𝗇𝖻𝖺𝗇
│  • 𝖻𝖺𝗇𝗎𝖼
│  • 𝗎𝗇𝖻𝖺𝗇𝗀𝖼
│  • 𝗌𝖾𝗍𝖻𝗈𝗍𝗇𝖺𝗆𝖾
│  • 𝗌𝖾𝗍𝖻𝗈𝗍𝖻𝗂𝗈
│  • 𝖻𝗅𝗈𝖼𝗄
│  • 𝗎𝗇𝖻𝗅𝗈𝖼𝗄
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`
        const spremiummenu = `> Sorry That Feature Not Availble We will Fix and Give Update Soon..`


        const srandommenu = `╭───┈  𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖭 𝖤 𝖶 𝖲  𝖢 𝖮 𝖬 𝖬 𝖠 𝖭 𝖣 𝖲
│
│  • 𝖻𝗎𝗌𝗂𝗇𝖾𝗌𝗌𝖾𝗌𝗇𝖾𝗐𝗌
│  • 𝗌𝗉𝗈𝗋𝗍𝗇𝖾𝗐𝗌
│  • 𝗀𝖺𝗀𝖺𝗇𝖺
│  • 𝗇𝖾𝗍𝗁𝗇𝖾𝗐𝗌
│  • 𝗌𝗂𝗅𝗎𝗆𝗂𝗇𝖺
│  • 𝗅𝖺𝗇𝗄𝖺𝗇𝗍𝗋𝗎𝗍𝗁
│  • 𝗍𝖾𝖺𝖼𝗁𝗇𝖾𝗐𝗌
│  • 𝗁𝖺𝖼𝗄𝖾𝗋𝗇𝖾𝗐𝗌
│  • 𝖺𝖽𝖺𝗇𝖾𝗐𝗌
│  • 𝖻𝖻𝖼𝗇𝖾𝗐𝗌
│  • 𝗌𝗂𝗒𝖺𝗍𝗁𝖺𝗇𝖾𝗐𝗌
│  • 𝗌𝗂𝗋𝖺𝗌𝖺𝗇𝖾𝗐𝗌
│  • 𝖺𝗇𝗂𝗆𝖾𝗇𝖾𝗐𝗌
│  • 𝗇𝖾𝗐𝗌2
╰──────────────────────────┈

> ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2 | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ
            `
            await conn.sendMessage(from, {
                audio: { url: 'https://github.com/vishwamihiranga/BHASHI-PUBLIC/raw/main/ui%20(1).mp3' },
                mimetype: 'audio/mpeg',
                ptt: true
            }, { quoted: mek });

        const menuMessage = await conn.sendMessage(from, {
            text : `╭┈   ❲ 𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖬 𝖤 𝖭 𝖴  𝖨 𝖭 𝖥 𝖮 ❳ ──►
│  ❍   𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆 : ${PLATFORM}
│  ❍   𝖯𝗋𝖾𝖿𝗂𝗑 : ${prefix}
│  ❍   𝖠𝗎𝗍𝗁𝗈𝗋 : Bhashi Coders
│  ❍   𝖱𝗎𝗇 𝖳𝗂𝗆𝖾 :${runtime(process.uptime())}
╰──────────────►
${readmore}

> ${mono}ʀᴇᴘʟʏ ᴡɪᴛʜ ɴᴜᴍʙᴇʀ ꜰᴏʀ ɢᴇᴛ ᴍᴇɴᴜ${mono}

╭─┈ ❲ 𝖡 𝖧 𝖠 𝖲 𝖧 𝖨  𝖬 𝖤 𝖭 𝖴  𝖫 𝖨 𝖲 𝖳 ❳ ─►
│
│  01  𝖠𝗅𝗅 𝖬𝖾𝗇𝗎
│  02  𝖬𝖺𝗂𝗇 𝖬𝖾𝗇𝗎
│  03  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 𝖬𝖾𝗇𝗎
│  04  𝖢𝗈𝗇𝗏𝖾𝗋𝗍 𝖬𝖾𝗇𝗎
│  05  𝖠𝖨 𝖬𝖾𝗇𝗎
│  06  𝖲𝖾𝖺𝗋𝖼𝗁 𝖬𝖾𝗇𝗎
│  07  𝖥𝗎𝗇 𝖬𝖾𝗇𝗎
│  08  𝖭𝖲𝖥𝖶 𝖬𝖾𝗇𝗎
│  09  𝖴𝗌𝖾𝖿𝗎𝗅𝗅 𝖬𝖾𝗇𝗎
│  10  𝖫𝗈𝗀𝗈 𝖬𝖾𝗇𝗎
│  11  𝖬𝗈𝗏𝗂𝖾 𝖬𝖾𝗇𝗎
│  12  𝖠𝗇𝗂𝗆𝖾 𝖬𝖾𝗇𝗎
│  13  𝖭𝖾𝗐𝗌 𝖬𝖾𝗇𝗎
│  14  𝖦𝗋𝗈𝗎𝗉 𝖬𝖾𝗇𝗎
│  15  𝖯𝗋𝖾𝗆𝗂𝗎𝗆 𝖬𝖾𝗇𝗎
│  16  𝖮𝗐𝗇𝖾𝗋 𝖬𝖾𝗇𝗎
│  17  𝖱𝖾𝗇𝖽𝗈𝗆 𝖬𝖾𝗇𝗎
╰────────────────►

> *ʙʜᴀꜱʜɪ • ᴍᴅ ᴠ2* | © ᴘʀᴇꜱᴇɴᴛ ʙʏ ʙʜᴀꜱʜɪ ᴛᴇᴀᴍ`,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
contextInfo: {
    externalAdReply: {
        title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
        body: '© Presented By Bhashi Coders. Powerd By Dark Hackers Zone Team. Enjoi Now Bhashi Project.',
        thumbnailUrl: `https://i.ibb.co/G02rB7v/image.png`,
        sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
        mediaType: 1,
        renderLargerThumbnail : true
    }
}
}, { quoted: mek });
        // Listen for replies to the menu message
                        conn.ev.on("messages.upsert", async (messageUpsert) => {
                            const msg = messageUpsert.messages[0];
                            if (!msg.message || !msg.message.extendedTextMessage) return;

                            const userReply = msg.message.extendedTextMessage.text.trim();
                            const messageContext = msg.message.extendedTextMessage.contextInfo;

                            // Check if the reply is to the menu message
                            if (messageContext && messageContext.stanzaId === menuMessage.key.id) {
                                switch (userReply) {
                                    case "01":
                                        await conn.sendMessage(from, {
                                image : { url: `https://i.ibb.co/G02rB7v/image.png` },
                                caption : sallmenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                                contextInfo: {
                                    externalAdReply: {
                                        title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                        body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                        thumbnail: { url: `https://i.ibb.co/G02rB7v/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                        sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                        mediaType: 1,
                                        renderLargerThumbnail: false,
                                    }
                                }
                             });

                    break;
                    case "02":
                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : smainmenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "03":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : sdlmenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "04":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : sconvertermenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "05":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : saimenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "06":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : ssearchmenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "07":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : sfunmenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "08":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : snsfwmenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "09":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : susefulmenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "10":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : slogomenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "11":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : smvmenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "12":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : smvmenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "13":
                                              await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : snewsmenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "14":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : sgpmenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "15":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : spremiummenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "16":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : sownermenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    case "17":

                        await conn.sendMessage(from, {
                            image : { url: `https://i.ibb.co/jkCTg2y/image.png` },
                            caption : srandommenu,//ᴏᴡɴᴇʀ ᴄᴍᴅ ᴍᴇɴᴜ
                            contextInfo: {
                                externalAdReply: {
                                    title: 'Bhashi - MD Version 2.0.0 🧚🏻‍♀️',
                                    body: '© Presented By Bhashi Coders. Powered By Dark Hackers Zone Team. Enjoy Now Bhashi Project.',
                                    thumbnail: { url: `https://i.ibb.co/jkCTg2y/image.png` }, // Ensure botimg2 is a valid URL or buffer
                                    sourceUrl: 'https://bhashi-md-ofc.netlify.app/',
                                    mediaType: 1,
                                    renderLargerThumbnail: false,
                                }
                            }
                         });
                        break;
                    default:
                        reply("*Please reply with a valid number from the menu!*");
                        break;
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
cmd({
    pattern: "guide",
    desc: "Get a beginner-friendly guide on how to use the bot.",
    category: "main",
    react: "📘",
    filename: __filename
  }, async (conn, mek, m, { reply, from }) => {
    const config = await readEnv();
    const language = config.LANGUAGE || "EN";
  
    const guideInfo = {
      SI: `
  📘 *භාෂි බොට් භාවිතය පිළිබඳ මගපෙන්වීම* 📘
  
  භාෂි බොට් භාවිතය ඉතාමත් පහසුයි! මෙම මගපෙන්වීම ඔබට බොට් භාවිතා කරන ආකාරය පිළිබඳ මූලික තොරතුරු ලබා දෙයි.
  
  1. *සමූහ එකතු කිරීම*:
     - බොට් ඔබගේ WhatsApp සමූහයට එක් කරන්න.
     - පරිපාලක අයිතිය ලබා දෙන්න.
  
  2. *විධාන භාවිතය*:
     - විධාන ලබා ගැනීමට *.menu* යතුරුව භාවිතා කරන්න.
     - විධාන ලැයිස්තුව ඔබට සියලුම භාවිතා කළ හැකි විධාන පෙන්වයි.
  
  3. *සහාය ලබා ගැනීම*:
     - ඔබට උදව් අවශ්‍ය නම් *.support* යතුරුව භාවිතා කරන්න.
     - අපගේ සහය කණ්ඩායම ඔබට උදව් කිරීමට සුදානම්.
  
  4. *සැකසුම්*:
     - බොට් සැකසුම් වෙනස් කිරීමට *.settings* යතුරුව භාවිතා කරන්න.
  
  භාෂි බොට් භාවිතා කිරීම ගැන ඔබට තවත් ප්‍රශ්න ඇත්නම්, කරුණාකර අපගේ සහය කණ්ඩායම අමතන්න. 😊
      `,
      EN: `
  📘 *Bhashi Bot Usage Guide* 📘
  
  Using Bhashi Bot is super easy! This guide will walk you through the basics of how to use the bot.
  
  1. *Add to Group*:
     - Add the bot to your WhatsApp group.
     - Grant admin permissions.
  
  2. *Using Commands*:
     - Use the *.menu* command to see all available commands.
     - The command list will show you everything you can do with the bot.
  
  3. *Getting Support*:
     - If you need help, use the *.support* command.
     - Our support team is ready to assist you.
  
  4. *Settings*:
     - Use the *.settings* command to customize the bot's behavior.
  
  If you have any further questions about using Bhashi Bot, feel free to contact our support team. 😊
      `
    };
  
    const thumbnailUrl = "https://i.ibb.co/0jZQY7L/guide.jpg"; // Thumbnail for the guide
  
    await conn.sendMessage(from, {
      text: guideInfo[language],
      contextInfo: {
        externalAdReply: {
          title: "Bhashi Bot - Usage Guide 🧚🏻‍♀️",
          body: "Learn how to use Bhashi Bot effectively!",
          thumbnail: { url: thumbnailUrl },
          sourceUrl: "https://bhashi-md-ofc.netlify.app/", // Optional link
          mediaType: 1,
        }
      }
    });
  });
//==============================================================================================================================================================================
cmd({
    pattern: "ping",
    desc: "Check bot's response time with microsecond precision.",
    category: "main",
    react: "🪄",
    filename: __filename
  }, async (conn, mek, m, { from, quoted, reply }) => {
    const langMessages = {
        SI: {
            pinging: 'පිංගින්...',
            responseTime: (pingMs, pingMicro) => `⚡ *පිංග්*: ${pingMs} ms (${pingMicro} μs)`,
            error: (error) => `දෝෂයක්: ${error}`
        },
        EN: {
            pinging: 'Pinging...',
            responseTime: (pingMs, pingMicro) => `⚡ *Ping*: ${pingMs} ms (${pingMicro} μs)`,
            error: (error) => `Error: ${error}`
        }
    };
  
    try {
        const config = await readEnv();
        const language = config.LANGUAGE || 'EN';
        const messages = langMessages[language] || langMessages.EN;
  
        // Start measuring bot latency with high-resolution timing
        const startTime = process.hrtime(); // Returns [seconds, nanoseconds]
        const pingingMessage = await conn.sendMessage(from, { text: messages.pinging }, { quoted: mek });
  
        // End measuring bot latency
        const endTime = process.hrtime(startTime); // Returns [seconds, nanoseconds] difference
        const pingNs = (endTime[0] * 1e9) + endTime[1]; // Convert to nanoseconds
        const pingMs = (pingNs / 1e6).toFixed(3); // Convert to milliseconds
        const pingMicro = (pingNs / 1e3).toFixed(3); // Convert to microseconds
  
        // Prepare the final message
        const responseTimeMessage = messages.responseTime(pingMs, pingMicro);
  
        // Edit the original message with the final response
        if (pingingMessage?.key) {
            await conn.editMessage(from, pingingMessage.key, { text: responseTimeMessage });
        } else {
            throw new Error('Invalid message object for editing.');
        }
  
        // Add a reaction based on ping time
        const reaction = pingMs < 10 ? '🟢' : '🔴'; // Green for good, red for slow
        await conn.sendMessage(from, { react: { text: reaction, key: pingingMessage.key } });
    } catch (e) {
        console.error('Error during ping operation:', e);
        const config = await readEnv(); 
        const language = config?.LANGUAGE || 'EN';
        const messages = langMessages[language] || langMessages.EN;
        reply(messages.error(e.message));
    }
  });

//==============================================================================================================================================================================
