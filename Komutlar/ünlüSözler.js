const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {
  let atasözü=[
    "Aç ayı oynamaz.",
    "Mal istersen bedeninden, evlat istersen belinden",
    "Mart ayı, dert ayı.",
    "Mayasız yoğurt tutmaz",
    "Baba ekmeği zindan ekmeği, koca ekmeği meydan ekmeği",
    "Ihlamurdan odun olmaz,beslemeden kadın olmaz",
    "Tabak sevdiği deriyi yerden yere çalar.",
    "Yavaş tükürüğün sakala zararı var.",
    "Para parayı çeker.",
    "Para dediğin el kiri",
    "Yabancı koyun kenarda yatar.",
    "Tandır başında bağ dikmek kolaydır.",
    "Laf lafı açar.",
    "Isıran it,dişini göstermez.",
    "Kalın incelene kadar ince üzülür",
    "Kalem kılıçtan keskindir.",
    "Baba mirası yanan mum gibidir.",
  ]
  if(msg.guild.id === "357860399129034752" || msg.guild.id === "357860399129034752")return msg.channel.send({embed: {
 description: (':Yapımcıma bu sözlerin Gerek Olmadığını Düşünüyorum')
}})
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('kime atasözü söylememi istiyorsun?')
}});
  if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`Kendime Söz Söylemeyi Tercih Etmiyorum .`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${atasözü[Math.floor(Math.random() * 16)]}.`)
}})
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atasözü',
  description: 'Botun pingini gösterir.',
  usage: 'atasözü'
};
