const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "forward",
    aliases: ["fwd", "fd"],
    description: "快进X(秒数)",
    run: async (client, message, args, prefix) => {
        try {
            if(!message.member.voice.channelId) return message.reply({content: "<a:BobeeNo:1002230087762063410>｜**你必须先加入一个语音频道**"}).catch(() => null);
            
            const oldConnection = getVoiceConnection(message.guild.id);
            if(!oldConnection) return message.reply({content: "<a:BobeeNo:1002230087762063410> ｜**我迷路了╮(╯-╰)╭**"}).catch(() => null);
            if(oldConnection && oldConnection.joinConfig.channelId != message.member.voice.channelId) return message.reply({content: "<a:bobeeloop:1002230188182081597>｜**我迷路了**!"}).catch(() => null);
            
            const queue = client.queues.get(message.guild.id); // get the queue
            if(!queue || !queue.tracks || !queue.tracks[0]) { 
                return message.reply(`<a:BobeeNo:1002230087762063410>｜**你必须先播放一个音乐**`).catch(() => null);
            }
            
            const curPos = oldConnection.state.subscription.player.state.resource.playbackDuration;
        
            if(!args[0] || isNaN(args[0])) return message.reply({ content: `<a:BobeeNo:1002230087762063410>｜**你要快进多少秒？( ╯□╰ )** 用法: \`${prefix}forward <Time-In-S>\``}).catch(() => null);
            
            if(Number(args[0]) < 0 || Number(args[0]) > Math.floor((queue.tracks[0].duration - curPos) / 1000 - 1))
            return message.reply({ content: `<a:BobeeNo:1002230087762063410>｜**快进的秒数必须介于\`0\`和\`${Math.floor((queue.tracks[0].duration - curPos) / 1000 - 1)}\`之间!**`}).catch(() => null);
            
            const newPos = curPos + Number(args[0]) * 1000;
            // set Filterschanged to true
            queue.filtersChanged = true;
            // seek
            oldConnection.state.subscription.player.stop();
            oldConnection.state.subscription.player.play(client.getResource(queue, queue.tracks[0].id, newPos));
            
            message.reply({content: `<:skip:1002230640638443620>｜**已经快进\`${args[0]}s\`到\`${client.formatDuration(newPos)}\`了**`}).catch(() => null);
        } catch(e) { 
            console.error(e);
            message.reply({content: `<a:BobeeNo:1002230087762063410>｜我加入不到你的语音频道因为: \`\`\`${e.message || e}`.substring(0, 1950) + `\`\`\``}).catch(() => null);
        }
    },
};