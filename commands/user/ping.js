module.exports = {
    name: 'ping',
    category: 'user',
    aliases: ['ping'],
    run: (client, message, args) => {
        message.channel.send(`PING PING ${client.ws.ping}ms !`);
    }
}