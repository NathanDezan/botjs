const { Member } = require("../../schema/Member");

async function setMembers(arrayParticipants) {
    try{
        const arrayMembers = [];

        arrayParticipants.forEach(element => {
            const role = { "isAdmin": element.isAdmin, "isSuperAdmin": element.isSuperAdmin };
            const tempMember = new Member(element.id._serialized, element.id.user, "", "", role);
    
            arrayMembers.push(tempMember);
        });
    
        return arrayMembers;
    }catch(err){
        throw err;
    }
}

module.exports = { setMembers };