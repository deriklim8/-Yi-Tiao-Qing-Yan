const { getVoiceConnection } = require("@discordjs/voice");
const { Permissions } = require("discord.js");
module.exports = {
    name: "join",
    description: "加入一个语音频道",
    run: async (client, message, args, prefix) => {
        try {
            if(!message.member.voice.channelId) return message.reply({content: "<a:BobeeNo:1002230087762063410> ｜**真的拜托，先加入语音频道再用指令，本云已经打这段话好多次了╰（‵□′）╯**"}).catch(() => null);
            
            const oldConnection = getVoiceConnection(message.guild.id);
            if(oldConnection) return message.reply({ content: `<a:BobeeNo:1002230087762063410>｜**我已经连接到<#${oldConnection.joinConfig.channelId}>了！**`}).catch(() => null);
            
            if(!message.member.voice.channel?.permissionsFor(message.guild?.me)?.has(Permissions.FLAGS.CONNECT)) {
                return message.reply({content: `<a:BobeeNo:1002230087762063410>｜**权限 加入不到 懂？**`}).catch(() => null);
            }
            if(!message.member.voice.channel?.permissionsFor(message.guild?.me)?.has(Permissions.FLAGS.SPEAK)) {
                return message.reply({content: `<a:BobeeNo:1002230087762063410>｜**权限 发不出声音 <:ababa:880426249560924170>**`}).catch(() => null);
            }

            await client.joinVoiceChannel(message.member.voice.channel);
            message.reply({content: "<a:uptime1:995317995909943456>｜**已经加入到了你所在的语音频道**"}).catch(() => null);
        } catch(e) { 
            console.error(e);
            message.reply({content: `<a:BobeeNo:1002230087762063410>  Could not join your VC because: \`\`\`${e.message || e}`.substring(0, 1950) + `\`\`\``}).catch(() => null);
        }
    },
};
