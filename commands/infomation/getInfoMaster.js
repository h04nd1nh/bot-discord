const { MessageEmbed } = require('discord.js');
const { FBid } = require('../../config.json');

module.exports = {
    name: 'info',
    category:'infomation',
    aliases: ['info'],
    run (client, message, args) {
        var profile = new MessageEmbed();
        var profileURL = `https://www.facebook.com/${FBid}`
        var imgURL = "https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/271526920_322834949752295_5413350923362903149_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=BOWsnK65JhIAX_OXjp8&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-5Bhl8lE2yb-RMIv2oGWc3mjJU1GCdSYO_hHH04xscog&oe=61DD4826";
        profile
        .setColor('COLOR_RANGE')
        .setTitle('Link Facebook')
        .setURL(profileURL)
        .setImage(imgURL)
        .setTimestamp()
        message.channel.send(profile);
          
    }
}