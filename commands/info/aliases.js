const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "aliases",
    aliases: ["a"],
    description: "获取我的指令的其他用法",
    run: async (client, message, args, prefix) => {
        const aliases = new MessageEmbed()
        .setTitle('<a:Book:1002230091406913596> 这些是我的指令的其他用法')
        .setDescription('<a:HP_aMusicalNotes1:1002230135627460728> **音乐指令**\n**.play** - p\n**.playskip** - ps\n**.playtop** - pt\n**.nowplaying** - np, current, cur\n**.pause** - break\n**.resume** - res, con, continue\n**.volume** - vol\n**.skip** - s, fs, forceskip\n**.skipto** - jump, jumpto\n**.forward** - fwd, fd\n**.leave** - disconnect, dis, stopleave\n**.queue** - list\n**.remove** - delete\n**.queueloop** - loopqueue, qloop, queuloop**trackloop** - looptrack, songloop, loopsong\n**.bassboost** -"bass, bb\n<:BLANK:1002230077783822496>\n<:Info:1002230132192325692> **资讯指令**\n**.help** - h')
        .setColor('RANDOM')
        .setFooter({ text: client.user.tag + "｜阿巴阿巴这里该写什么", iconURL: client.user.avatarURL() })
        return message.reply({ embeds: [aliases] }).catch(() => null);
    },
};