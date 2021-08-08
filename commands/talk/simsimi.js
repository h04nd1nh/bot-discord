var fetch = require('node-fetch');

module.exports = {
    name: "csim",
    category: "talk",
    aliases: ["csim"],
    run: (client, message, args) =>{
        fetch(`https://api.simsimi.net/v1/?text=${encodeURI(args.join(' '))}&lang=vi_VN&cf=false`)
        .then(data => data.json())
        .then(result => result.success)
        .then(data => {
            message.channel.send(data);
        })
        .catch(err => {message.channel.send(err)});
    }
}