async function existData(idCompare, dataJSON){
    try{
        dataJSON.forEach(item => {
            console.log(item);
        });
    } catch(err){
        throw err;
    }
}

module.exports = { existData };