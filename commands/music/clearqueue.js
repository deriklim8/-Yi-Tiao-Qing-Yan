const { getVoiceConnection } = require("@discordjs/voice");
module.exports = {
    name: "clearqueue",
    description: "清除队列",
    run: async (client, message, args, prefix) => {
        if(!message.member.voice.channelId) return message.reply("<a:BobeeNo:1002230087762063410>｜**你必须先加入一个语音频道！**").catch(() => null);
        // get an old connection
        const oldConnection = getVoiceConnection(message.guild.id);
        if(!oldConnection) return message.reply("<a:BobeeNo:1002230087762063410>｜**我还没有连接到语音频道**").catch(() => null);
        if(oldConnection && oldConnection.joinConfig.channelId != message.member.voice.channelId) return message.reply("<a:BobeeNo:1002230087762063410>｜**我们在不同的语音频道**").catch(() => null);
        
        const queue = client.queues.get(message.guild.id); // get the queue
        if(!queue) { 
            return message.reply(`<a:BobeeNo:1002230087762063410>｜**没有音乐在播放！**`).catch(() => null);
        }
        // no new songs (and no current)
        queue.tracks = [ queue.tracks[0] ];
        // skip the track
        
        return message.reply(`<a:Checkmark:1002230097727725589>｜**成功清除了队列**`).catch(() => null);
    },
};