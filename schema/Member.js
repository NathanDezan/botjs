class Member {
    constructor(memberID, memberNumber, memberName, memberAlias, roleInfo) {
        this.memberID = memberID;
        this.memberNumber = memberNumber;
        this.memberName = memberName;
        this.memberAlias = memberAlias;
        this.memberRole = defineRole(roleInfo);

        function defineRole(roleInfo) {
            try {
                if (roleInfo.isAdmin == true && roleInfo.isSuperAdmin == true) {
                    return "admin";
                } else {
                    return "common";
                }
            } catch (err) {
                throw err;
            }
        }
    }
}

module.exports = { Member };