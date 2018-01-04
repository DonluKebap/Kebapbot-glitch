const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.sendMessage({
         "embed": {
                 title: 'Kebabınız Geldi!',
                 description: "Kebabını Afiyetle Yedin!",
                 url: '',
                 "image": {
                 "url": "https://i.hizliresim.com/bLPm6m.jpg",
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
  name: 'kebapye',
  description: 'Kebap yersiniz.',
  usage: 'kebapye'
};
