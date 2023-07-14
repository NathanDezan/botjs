const fs = require('fs');

async function setJSONFile(filePath, newContent) {
    try {
        const jsonContent = JSON.stringify(newContent, null, 4);
        fs.writeFileSync(filePath, jsonContent);
    } catch (err) {
        throw err;
    }
}

module.exports = { setJSONFile };
