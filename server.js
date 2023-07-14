const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const { SplitMessage } = require('./services/utils/SplitMessage.js');
const { adminCommand } = require('./services/commands/AdminCommand.js');
const { Message } = require('./schema/Message.js');

const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client-one" })
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async function (message) {
    const tempContact = await message.getContact();
    const tempMessage = new Message(tempContact.id.user, tempContact.id._serialized, message.body, message.type, tempContact.pushname);

    if (tempMessage.userID === process.env.ADMIN_SERVICE){
        const command = tempMessage.content.split(" ");
        const prefix = command[0];

        if (prefix === "!admin"){
            const posfix = command[1];
            const groupChat = await message.getChat();

            await adminCommand(groupChat, posfix);
        }
    }
    // if (msg[0] === "!admin"){
    //     AdminCommand(client, msg);
    // }else{
    //     console.log('not admin');
    // }
});

client.initialize();