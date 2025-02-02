const https = require('https');
const fs = require('fs');
const path = require('path');
if (require("../package.json").version === "1.0.0") {
    return console.log("ado thota puluwnnm mt kochchr pulundh");
}
function decodeUrl(encoded) {
    // Split the encoded string into parts and remove dummy data
    const parts = encoded.split('|');
    const realEncoded = parts[1]; // Extract the real Base64 part
    return Buffer.from(realEncoded, 'base64').toString('utf-8');
}

// Function to download a file with retry logic
async function downloadFileWithRetry(url, filePath, retries = 3, delay = 2000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`⏳ Attempt ${attempt}......`);
            await downloadFile(url, filePath);
            console.log(`✅ File downloaded successfully: ${filePath}`);
            return; // Exit the function if the download succeeds
        } catch (error) {
            console.error(`❌ Attempt ${attempt} failed:`, error.message);
            if (attempt < retries) {
                console.log(`🕒 Retrying in ${delay / 1000} seconds...`);
                await new Promise((resolve) => setTimeout(resolve, delay)); // Wait before retrying
            } else {
                throw new Error(`Failed to download file after ${retries} attempts: ${url}`);
            }
        }
    }
}

// Function to download a file
function downloadFile(url, filePath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filePath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download file: ${url}, status code: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => reject(err)); // Delete the file if there's an error
        });
    });
}

async function setupBhashiProject() {
    const baseDir = __dirname;
    const folders = [
        path.join(baseDir, 'BHASHI-PLUGS'),
        path.join(baseDir, 'BHASHI-DB'),
        path.join(baseDir, 'BHASHI-DB/BHASHI-MD-SESSION')
    ];

    // Obfuscated file URLs (Base64 encoded with dummy data)
    const files = [
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL0JIQVNISS1EQi9tYWlubXMuanM=|dummy',
            path: path.join(baseDir, 'BHASHI-DB/mainms.js')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL0JIQVNISS1EQi9tYWluZnVuLmpz|dummy',
            path: path.join(baseDir, 'BHASHI-DB/mainfun.js')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL2JoYXNoaWdyb3Vwcy5qcw==|dummy',
            path: path.join(baseDir, 'BHASHI-PLUGS/bhashigroups.js')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL2JoYXNoaW1haW4uanM=|dummy',
            path: path.join(baseDir, 'BHASHI-PLUGS/bhashimain.js')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL2JoYXNoaW93bmVyLmpz|dummy',
            path: path.join(baseDir, 'BHASHI-PLUGS/bhashiowner.js')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL0JIQVNISS1EQi9jb25uZWN0ZWQuaHRtbA==|dummy',
            path: path.join(baseDir, 'BHASHI-DB/connected.html')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL0JIQVNISS1EQi9lbnZkYi5qcw==|dummy',
            path: path.join(baseDir, 'BHASHI-DB/envdb.js')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL0JIQVNISS1EQi9pbmRleC5odG1s|dummy',
            path: path.join(baseDir, 'BHASHI-DB/index.html')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL0JIQVNISS1EQi9tb25nb2RiLmpz|dummy',
            path: path.join(baseDir, 'BHASHI-DB/mongodb.js')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL0JIQVNISS1EQi9wYWlyLmh0bWw=|dummy',
            path: path.join(baseDir, 'BHASHI-DB/pair.html')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL0JIQVNISS1EQi9wYWlyLmpz|dummy',
            path: path.join(baseDir, 'BHASHI-DB/pair.js')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL0JIQVNISS1EQi9zZXR0aW5nc2RiLmpz|dummy',
            path: path.join(baseDir, 'BHASHI-DB/settingsdb.js')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL0JIQVNISS1EQi9zZXR0aW5nc2RiMi5qcw==|dummy',
            path: path.join(baseDir, 'BHASHI-DB/settingsdb2.js')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL0JIQVNISS1EQi9hY3RpdmF0ZS5qc29u|dummy',
            path: path.join(baseDir, 'BHASHI-DB/activate.json')
        },
        {
            url: 'dummy|aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3B1bWlkdS9CSEFTSEktUFVCTElDMS9yZWZzL2hlYWRzL21haW4vQkhBU0hJLVBMVUdTL2luZGV4Lmpz|dummy',
            path: path.join(baseDir, 'index.js')
        }
    ];

    try {
        // Create folders
        for (const folder of folders) {
            fs.mkdirSync(folder, { recursive: true });
            console.log(`✅ Folder created: ${folder}`);
        }

        // Download files with retry logic
        for (const file of files) {
            try {
                const decodedUrl = decodeUrl(file.url); // Decode the URL
                await downloadFileWithRetry(decodedUrl, file.path);
            } catch (error) {
                console.error(`❌ Error downloading file: ${file.path}`, error.message);
            }
        }

        console.log('🎉 Setup completed successfully!');
    } catch (error) {
        console.error('❌ Error during setup:', error);
    }
}

// Ensure setup is completed before starting the app
setupBhashiProject()
    .then(() => {
        console.log('🚀 Starting BHASHI-MD-V2...');
        require('./index.js'); // Start the main application after setup is complete
    })
    .catch((error) => {
        console.error('❌ Failed to complete setup:', error);
    });
