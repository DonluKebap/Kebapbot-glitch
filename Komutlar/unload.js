exports.run = (client, message, args) => {
  if(message.author.id !== '357860399129034752') return message.reply('yetkin yok');
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.sendMessage("`" + args[0] + "` adında bir komutum yok.");
  } else {
    message.channel.sendMessage("`" + command + "` adlı komutu devre dışı bırakıyorum...")
      .then(m => {
        client.unload(command)
          .then(() => {
            m.edit("`" + command + "` adlı komutu başarıyla devre dışı bıraktım.");
          })
          .catch(e => {
            m.edit(`Komut yeniden başlatılırken bir hata oluştu: ${command}\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['u'],
  permLevel: 4
};

exports.help = {
  name: 'unload',
  description: 'İstediğiniz bir komutu devre dışı bırakır.',
  usage: 'unload <komut adı>'
};
