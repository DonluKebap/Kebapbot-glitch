const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {
if(!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:olum yetkin yok susturmak senin neyine!")
}})

          let susturulacak = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
          if(!susturulacak) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:kimi susturiyim olum söylesene.")
}})

          if(susturulacak.id === msg.author.id) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:Kendini susturamazsın mozoşist!")
}})
          if(susturulacak.highestRole.position >= msg.member.highestRole.position) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:Rolü senden yüksek olanları susturamazsın malmısın olum!")
}})
          let role = msg.guild.roles.find(r => r.name === "Cezalı");
          if(!role) {
          try {
              role = await msg.guild.createRole({
                    name: "Köle",
                    color: "#0b0a0a",
                    permission:[]
            });

            msg.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(role, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          } catch(e) {
              console.log(e.stack);
          }

        }

        if(susturulacak.roles.has(role.id)) return msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: (":no_entry_sign:Bu kişi zaten susturulmuş Ta**akmı geçiyon olum!")
}});

        await susturulacak.addRole(role);
        msg.channel.send({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: ("Kişi Başarıyla Susturuldu Sus Köle!")
}})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sustur',
  description: 'Botun pingini gösterir.',
  usage: 'sustur'
};
