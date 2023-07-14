const fs = require('fs');

async function existFile(filePath) {
    try {
        await fs.promises.access(filePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.promises.writeFile(filePath, '');
        } else {
            throw error;
        }
    }
}

module.exports = { existFile };