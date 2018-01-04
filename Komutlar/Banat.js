const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
   const Discord = require('discord.js')
    if(!msg.member.hasPermission("BAN_MEMBERS"))
      return   msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Yetkin yok Hala Ban Atmaya Çalışıyosun!')
}});
    var channel = client.channels.get(client.channels.find("name", "kebap-logs").id)
    if(!channel){
      msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign:"#kebap-log" kanalı yok! Lütfen "#kebap-log" adında bir yazı kanalı açınız.')
}});return
    }
    // Let's first check if we have a member and if we can kick them!
    // msg.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = msg.mentions.members.first();
    if(!member){
      return   msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Kimi Banlıyim olum söylesene!')
}});}
    if(!member.bannable) {
      return   msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Bu Kişiyi Banlayamıyorum Sanırım Benden Yüksek Yetkisi var ')
}});}

    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason){
      return   msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Aga Nedenin Ne Adamı Suçsuz Banlıyon Günah Günah!')
}});}
    await member.ban(reason)
      .catch(error => msg.reply(`Üzgünüm ${msg.author} Bu Kullanıcıyı Bu yüzden Banlayamıyorum : ${error}`));
        const kullanicibilgimk = new Discord.RichEmbed()
        .setThumbnail(member.user.avatarURL)
        .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
        .setTimestamp()
        .setTitle("Banlandı")
        .addField('İsim:', member.user.tag+member.user.discriminator )
        .addField('ID:', member.user.id)
        .addField('Tag', member.user.tag)
        .addField('Yasaklayan', msg.author.tag)
        .addField('Sebep:', reason)
        return channel.send(kullanicibilgimk);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'Banat',
  description: 'Botun pingini gösterir.',
  usage: 'Banat'
};
