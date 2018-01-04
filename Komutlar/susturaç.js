const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {
if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:Yetkin yok!")
}})

            let susturulacak = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
            if(!susturulacak) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:etiketlesene birini kimi susturiyim.")
}})

            let role = msg.guild.roles.find(r => r.name === "Cezalı");

          if(!role || !susturulacak.roles.has(role.id)) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:Bu kullanıcı zaten cezalı değil olum.")
}});

          susturulacak.removeRole(role);
          msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: ("Cezası başarıyla kalktı.")
}})
      }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'susturaç',
  description: 'Botun pingini gösterir.',
  usage: 'susturaç'
};
