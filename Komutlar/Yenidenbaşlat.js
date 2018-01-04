const Discord = require('discord.js');
exports.run = (client, message, args) => {
	  if(message.author.id !== '357860399129034752') return message.reply('yetkin yok');
    message.channel.send(`Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'Yenidenbaşlat',
  description: 'Botu yeniden başlatır.',
  usage: 'Yenidenbaşlat'
};
