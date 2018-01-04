const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Kebap Bot  ${client.user.tag} Adı İle Giriş Yaptı!`);
});

client.on('message', msg => {
 console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);  if(msg.author.id === ayarlar.id) return;
  if(msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) {
      return;
  }
 if (msg.content.toLowerCase() === prefix + 'yenidenbaşlat') {
  if (msg.author.id !== ayarlar.sahip) {
    msg.reply('Beni sen yapmadın!');
  } else {
    msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`Kebapbot yeniden başlatılıyor...`);
    process.exit(0);
  })
 }
}
});

client.login(ayarlar.token);
