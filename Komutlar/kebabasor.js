const Discord = require('discord.js');
exports.run = function(client, message, args) {
    var cevaplar = [
      'Evet',  'Hayır',  'Kesinlikle Evet',  'Kesinlikle Hayır',  'Sanırım Evet',  'Sanırım Hayır',  'Marullarım Evet Diyor',  'Etlerim Hayır Diyor'
    ];
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]
    message.channel.send(cevap.toString())
   }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kebabasor',
  description: 'Botun pingini gösterir.',
  usage: 'kebabasor'
};
