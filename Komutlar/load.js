exports.run = (client, message, args) => {
    if(message.author.id !== '357860399129034752') return message.reply('yetkin yok');
    var command = args[0];
    message.channel.sendMessage("`" + command + "` adlı komutu yüklüyorum...")
      .then(m => {
        client.load(command)
          .then(() => {
            m.edit("`" + command + "` adlı komutu başarıyla yükledim.");
          })
          .catch(e => {
            m.edit(`Komut yüklenirken bir hata oluştu: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['l'],
  permLevel: 4
};

exports.help = {
  name: 'load',
  description: 'Yeni eklenen komutu yükler.',
  usage: 'load <komut adı>'
};
