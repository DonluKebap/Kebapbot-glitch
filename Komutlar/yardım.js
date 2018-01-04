const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, msg, args) => {
  msg.channel.send({embed: {
      color: Math.floor(Math.random() * (0xFFFFFF + 1)),
      author: {
        name: msg.author.username,
        icon_url: msg.author.avatarURL
      },
      title: "Beni kullandigin için saol!",
      url: "",
      description: "Komulari asagida görebilirsin",
      fields: [{
          name: "Ana komutlar:",
          value: "**Yardım-**Komutları Gösterir Aynı Şimdiki Gibi! \n**Kebappişir-** İsmindende Anlayacağınız Gibi Kebap Pişirirsiniz! \n**Kebapye-**Kebap Yersiniz! \n**KebapIsmarla-**Herkese Kebap Ismarlarsınız \n**yak-**Bi Dal Sigara Yakarsınız :( \n**Ping-**Botun Pingini Gösterir \n**davet-**Botun Davet Linkini Atar \n**Yaz-** Bot Dediğiniz Şeyi Yazar \n**Atasözü-** Kebap Etiketlediğiniz Kişiye Atasözü söyler \n**Kebabasor-**Kebap Sorduğunuz Sorulara Evet Yada Hayır diye cevap verir \n**yazıtura-**Anlatılcak bişey yok"
        },
        {
          name: "Admin Komutları",
          value: "**Sustur-**Etiketlediğiniz Kişi Mutelenir \n**susturaç-**Etiketlediğiniz Kişinin Mutesi Kalkar \n**Banat-**Etiketlediğiniz Kişiye Ban Atar \n**At-**Etiketlediğiniz Kişiye Kick Atar \n**Temizle-**Belirttiğiniz Kadar Mesaj Siler \n**İsimdeğiş-**Etiketlediğiniz Kişinin ismi Değişir."
        },
        {
          name: "Yapımcı Komutları",
          value: "**eval-**Komutu Denemek İçin Kullanılır \n**Yenidenbaşlat-**Bot Yeniden Başlatılır \n**Load-** İstediğiniz Komutu Yükler \n**unload-** İstediğiniz komutu devre dışı bırakır \n**Reload-**Söylediğiniz Komut Yeniden Başlatılır \n**oyundeğiş-**Kebabın oyun durumu söylediğiniz şeye dönüşür"
        },

        {
          name: "Davet et",
          value: "[Beni Davet Etmek Için Tikla](https://discordapp.com/oauth2/authorize?client_id=363748013988118538&scope=bot&permissions=201337864)"
        },
        {
          name: "Bilgi",
          value: `${client.users.size} kullanici,  ${client.channels.size} kanal ve ${client.guilds.size} sunucu.`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
      }
    }
  })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Botun pingini gösterir.',
  usage: 'yardım'
};
