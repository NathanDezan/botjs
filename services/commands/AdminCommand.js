const { Group } = require("../../schema/Group");
const { Member } = require("../../schema/Member");
const { setMembers } = require("../members/SetMembers");
const { getJSONFile } = require("../utils/GetData");
const { setJSONFile } = require("../utils/SetData");

async function adminCommand(groupChat, typeCommand) {
    try {
        if (typeCommand === "add_group") {
            const tempGroup = new Group(groupChat.id.user, groupChat.id._serialized, groupChat.name, groupChat.participants);
            const dataJSON = await getJSONFile("./data/groups.json");

            if (dataJSON === "") {
                const groupsTemplate = { "groups": [tempGroup] }
                await setJSONFile("./data/groups.json", groupsTemplate);
                await groupChat.sendMessage("Grupo cadastrado! (vsf raj)");
            } else {
                const arrayGroup = dataJSON.groups;
                let exist = false;

                arrayGroup.forEach(async item => {
                    if (item.groupID === tempGroup.groupID) {
                        exist = true;
                    }
                });

                if (exist === true) {
                    await groupChat.sendMessage("Grupo já cadastrado.");
                    return;
                } else {
                    const newGroupsTemplate = { "groups": "" };

                    arrayGroup.push(tempGroup);
                    newGroupsTemplate.groups = arrayGroup;

                    await setJSONFile("./data/groups.json", newGroupsTemplate);
                    await groupChat.sendMessage("Grupo cadastrado! (vsf raj)");
                }
            }
        } else if (typeCommand === "add_members") {
            const dataJSON = await getJSONFile("./data/groups.json");

            if (dataJSON === "") {
                await groupChat.sendMessage("Grupo nao foi cadastrado!");
            } else {
                const arrayGroup = dataJSON.groups;
                let exist = false;
                let position = 0;

                arrayGroup.forEach(async item => {
                    if (item.groupID === groupChat.id._serialized) {
                        exist = true;
                        return;
                    }
                    position += 1;
                });
                
                if (exist === true) {
                    const arrayParticipants = groupChat.participants;
                    const arrayMembers = await setMembers(arrayParticipants);

                    arrayGroup[position].members = arrayMembers;
                    dataJSON.groups = arrayGroup;

                    await setJSONFile("./data/groups.json", dataJSON);
                    await groupChat.sendMessage("Membros cadastrados! (vsf raj)");
                }
            }
        }
    } catch (err) {
        throw err;
    }
}

module.exports = { adminCommand };