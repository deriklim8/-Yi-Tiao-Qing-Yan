const { getVoiceConnection } = require("@discordjs/voice");
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "bassboost",
    aliases: ["bass", "bb"],
    description: "增强音乐的低音强度",
    run: async (client, message, args, prefix) => {
        //没有加入语音房
        if(!message.member.voice.channelId) return message.reply({
            embeds: [
                new MessageEmbed()
                .setTitle("<:error:1002230223779156058>｜**你必须先加入到语音频道**")
                .setFooter({ text: client.user.tag + '｜我依旧不懂到底要写什么在这里', iconURL: client.user.avatarURL() })
            ]}).catch(() => null);

        // get an old connection阿巴阿巴这是什么
        const oldConnection = getVoiceConnection(message.guild.id);

        if(!oldConnection) return message.reply({embeds: [
            new MessageEmbed()
            .setTitle("<:error:1002230223779156058>｜**我没有连接到某个地方**")
            .setFooter({ text: client.user.tag + '｜唉，这里到底要写什么', iconURL: client.user.avatarURL() })
        ]})
        //不在同一个语音房
        if(oldConnection && oldConnection.joinConfig.channelId != message.member.voice.channelId) return message.reply({embeds: [
            new MessageEmbed()
            .setTitle("<:error:1002230223779156058>｜**我们不在同一个语音频道里！**")
            .setFooter({ text: client.user.tag + '｜我双不懂这里要写什么', iconURL: client.user.avatarURL() })
        ]}).catch(() => null);
        
        const queue = client.queues.get(message.guild.id); // get the queue
        if(!queue) { 
            //没有东西在播放
            return message.reply({embeds: [
                new MessageEmbed()
                .setTitle(`<a:BobeeNo:1002230087762063410>｜**你必须先播放音乐！**`)
                .setFooter({ text: client.user.tag + '｜ヾ(•ω•`)o', iconURL: client.user.avatarURL() })
            ]});
        }

        //强度超出范围
        if(args[0] === undefined || isNaN(args[0]) || Number(args[0]) < 0 || Number(args[0]) > 20) return message.reply({ embeds: [
            new MessageEmbed()
            .setTitle('')
        ]}).catch(() => null);
        const bassboost = Number(args[0]);
        queue.effects.bassboost = bassboost;

        // change the Basslevel
        queue.filtersChanged = true;
        const curPos = oldConnection.state.subscription.player.state.resource.playbackDuration;
        oldConnection.state.subscription.player.stop();
        oldConnection.state.subscription.player.play(client.getResource(queue, queue.tracks[0].id, curPos));
    
        return message.reply(`<a:Checkmark:1002230097727725589>｜**低音增强强度已经更改为\`${bassboost}db\`**`).catch(() => null);
    },
};