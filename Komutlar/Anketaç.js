const Discord = require('discord.js');

exports.run = function(client, message, args) {
    if(!message.member.hasPermission("MANAGE_NICKNAMES"))
    return (message.channel.send("Mesajları Yönetme Yetkin Yok Birader"))
    const anketYap = args.join(" ");
    message.delete().catch(O_o=>{});
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
    .setDescription(anketYap) 
    .setTimestamp()
    message.channel.send(embed)
    .then(function (message) {
      message.react("✔")
      message.react("❌")
    }).catch(function() {
      //Something
     });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'anketaç',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'anketaç'
};