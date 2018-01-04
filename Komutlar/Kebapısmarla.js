const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.sendMessage({
         "embed": {
                 title: 'Kebaplar Geldi!',
                 description: "Herkese Kebap Ismarladın",
                 url: '',
                 "image": {
                 "url": "https://i.hizliresim.com/NOjmdY.jpg",
                 }
             }
         });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kebapısmarla',
  description: 'Herkese Kebap Ismarlarsınız.',
  usage: 'kebapısmarla'
};
