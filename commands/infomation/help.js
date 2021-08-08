const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');
const { prefix } = require('../../config.json');


module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'infomation',
    description: 'Hướng dẫn sử dụng lệnh',
    usage: `${prefix}help [tên lệnh]`,
    run: async (client, message, args) => {
        if (!args[0]) return getAll(client, message);
    },
    
} 

function getAll(client, message, ) {
    const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Sử dụng ${prefix}help lệnh để xem chi tiết`)

    const  commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `\`${cmd.name}\``)
            .join(',')
        }

    const info = client.categories
        .map(cat => stripIndent`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n" +category);
    return message.channel.send(embed.setDescription(info))
}
