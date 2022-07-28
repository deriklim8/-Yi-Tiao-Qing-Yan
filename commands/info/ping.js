
module.exports = {
    name: "ping",
    description: "获取我家的网速",
    run: async (client, message, args, prefix) => {
        message.reply({
            content: `:ping_pong: **PONG! 我家的网络延迟是: \`${client.ws.ping}ms\`**`
        }).catch(() => null);
    },
};