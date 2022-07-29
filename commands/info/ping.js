const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "ping",
    description: "获取我家的网速",
    run: async (client, message, args, prefix) => {
        message.reply({
            embeds: [
                new MessageEmbed()
                .setTitle(`:ping_pong: **PONG! 我家的网络延迟是: \`${client.ws.ping}ms\`**`)
                .setFooter({ text: client.user.tag + '｜(｡･∀･)ﾉﾞ', iconURL: client.user.avatarURL() })
            ]}).catch(() => null);
    },
};