const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./envdb');

const defaultEnvVariables = [
    { key: 'PREFIX', value: '.' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_STATUS_READ', value: 'false' },
    { key: 'AUTO_READ_MSG', value: 'false' },
    { key: 'AUTO_READ_CMD', value: 'false' },
    { key: 'AUTO_BIO', value: 'false' },
    { key: 'ALWAYS_RECORDING', value: 'false' },
    { key: 'ALWAYS_TYPING', value: 'false' },
    { key: 'OWNER_REACT', value: '😎' },
    { key: 'OWNER_NUMBER', value: '94xxxxxxxx' },
    { key: 'AUTO_AI_CHAT', value: 'false' },
    { key: 'LANGUAGE', value: 'EN' },
    { key: 'NSFW_CMD', value: 'true' },
    { key: 'ANTI_LINK', value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,' },
    { key: 'ANTI_SPAM', value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,' },
    { key: 'ANTI_STICKER', value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,' },
    { key: 'ANTI_IMAGE', value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,' },
    { key: 'ANTI_VIDEO', value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,' },
    { key: 'ANTI_AUDIO', value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,' },
    { key: 'ANTI_DOCUMENT', value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,' },
    { key: 'ANTI_CALL', value: 'true' },
    { key: 'ALWAYS_ONLINE', value: 'false' },
    { key: 'BAN_USER', value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,' },
    { key: 'SUDO', value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,' },
    { key: 'BAN_GROUPS', value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,'},
    { key: 'ANTIBAD_GROUP', value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxxxxxxxxxxxxxxx,'},
    { key: 'BAD_WORDS', value: 'huththa,pakaya,ponnaya,kariya,puka,hukanawa,hukanni,fuck,huth,ponna,fucking,hukamu,හුත්තා,huththi,hukanawaa,etadeta,pakayooo,huththoo,wesawi,wesi,kari,kariyaa,hukamuda,hukamu,hukam,pakaa,paiya,payiya,ponnayaa,ponna,ponnaya,ponnayo,ponnayoo,huththii,huththiii,puke,pukemail,pukathama,pukasududa,pukaa,pukalokuda,paka,pakathama,හුත්තා,හුත්ත,පක'},
    { key: 'AUTO_SREACT_KEY', value: '💝' }

];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('MONGODB CONNECTED ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`✔ Server Env Saved : ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
