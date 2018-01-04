const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.channel.sendMessage({
         "embed": {
                 title: 'Kebap Pişirmek Herkesin Harcı Değildir!',
                 description: "Kebaplarda Mis Gibi koktu",
                 url: '',
                 "image": {
                 "url": "https://media.giphy.com/media/xUOxf0jQt4kBe63Ias/giphy.gif",
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
  name: 'kebappişir',
  description: 'Kebap Pişirirsiniz.',
  usage: 'kebappişir'
};
