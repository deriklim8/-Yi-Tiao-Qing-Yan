const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "help",
    aliases: ["h"],
    description: "获取我的所有指令",
    run: async (client, message, args, prefix) => {
        return message.reply({embeds: [
            new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`一条晴彦`)
            .setDescription(`小提示: 想要知道我的指令的其他用法？使用\`.a\`或\`.aliases\`指令！\n顺便说一下，我忙着和魈宝贴贴<:nekocatdroll:901445671637356637>`)
            .addFields(
                { name: '<a:HP_aMusicalNotes1:1002230135627460728> 音乐指令', value: '\`.play\` \`.playskip\` \`.playtop\` \`.nowplaying\` \`.pause\` \`.resume\` \`.volume\` \`.stop\` \`.shuffle\` \`.seek\` \`.speed\` \`.skip\` \`.skipto\` \`.forward\` \`.rewind\` \`.join\` \`.move\` \`.leave\` \`.queue\` \`.remove\` \`.clearqueue\` \`.queueloop\` \`.trackloop\` \`.filter\` \`.bassboost\`', inline: true },
                { name: '<:Info:1002230132192325692> 资讯指令', value: '\`.bot-info\` \`.changelog\` \`.help\` \`.ping\` \`.uptime\`', inline: true },
                { name: '你知道吗？', value: '一条君其实原本是一个全英文的开源音乐机器人，之后由云翻译优化，最后才有了现在的一条晴彦。\n开源音乐机器人原创者: Odd Coder[https://github.com/odd-coder/OddMusic]', inline: false }
            )
            .setFooter({ text: client.user.tag + '｜我还是不懂到底要写什么在这里', iconURL: client.user.avatarURL() })
        ]}).catch(() => null);
    },
};