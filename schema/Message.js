class Message {
    constructor(userNumber, userID, content, typeContent, nameAuthor) {
        this.userNumber = userNumber;
        this.userID = userID;
        this.content = content;
        this.typeContent = typeContent;
        this.nameAuthor = nameAuthor;
    }
}

module.exports = { Message };