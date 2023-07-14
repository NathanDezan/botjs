const fs = require('fs');
const { existFile } = require('./ExistFile');

async function getJSONFile(filePath) {
    try{
        await existFile(filePath);
        const content = await fs.promises.readFile(filePath, 'utf-8');

        if (content != ""){
            const contentJSON = JSON.parse(content);
            return contentJSON;
        }
        
        return "";
    }catch(err){
        throw err;
    }
}

module.exports = { getJSONFile };