const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
  if(!msg.member.hasPermission("CHANGE_NICKNAMES"))
      return   msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Yetkin yok değiştiremezsin!!')
}})
    let member = msg.mentions.members.first();
    if(!member)
      return   msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Düzgün Birini Etiketle!')
}});
    let yeniisim = args.slice(1).join(' ');
    if(!yeniisim)
      return   msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Yeni İsmi Ne Olsun?')
}})
    member.setNickname(yeniisim)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'isimdeğiş',
  description: 'Botun pingini gösterir.',
  usage: 'isimdeğiş'
};
