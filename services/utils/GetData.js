const fs = require('fs');

async function getJSONFile(filePath) {
    try{
        // const content = fs.readFileSync(filePath, 'utf-8');
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