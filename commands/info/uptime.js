const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "uptime",
    description: "获取我宅在discord的总时长",
    run: async (client, message, args, prefix) => {
        let date = new Date()
        let timestamp = date.getTime() - Math.floor(client.uptime);
        message.reply({
            embeds: [new MessageEmbed()
            .setTitle(`<:duration1:1002230218276225174> **我在<t:${Math.floor(timestamp / 1000)}:F>开始宅在discord并从<t:${Math.floor(timestamp / 1000)}:R>开始了discord的宅家生活。**`)
            .setFooter({ text: client.user.tag + '｜（＾∀＾●）ﾉｼ', iconURL: client.user.avatarURL() })]
        }).catch(() => null);
    },
};