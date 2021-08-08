'use strict';
const { Client, MessageEmbed, Collection } = require('discord.js');
const client = new Client();
const { token } = require('./config.json');
const { prefix } = require('./config.json');


client.on('ready', () => {
    console.log(`Bot ${client.user.username} đã sẵn sàng hoạt động ~~`);
    client.user.setPresence({
        activity: {
            name: "Đang viết </>",
            type: "PLAYING",
        },
        status: 'online'
    })
}); 

client.commands = new Collection();
client.aliases = new Collection();
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})



client.on('message' ,  message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

        if (message.author.bot && cmd.length === 0 && !message.content.startsWith(prefix)) {
            return;
        }
   // if (!message.guild) return;
   /*if (cmd == '') {
    message.channel.send(`Chat  "${prefix}help"  để xem thông tin và các lệnh của tui :3`)
} else if (cmd == 'help') {
    
}*/
    let command = client.commands.get(cmd);
        if (!command) { 
        command = client.commands.get(client.aliases.get(cmd)); 
        } else if (command) {
        command.run(client, message, args);
        }

})



client.login(token);
