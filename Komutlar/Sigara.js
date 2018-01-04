const Discord = require('discord.js');
exports.run = (client, msg, args) => {
 msg.channel.send(':cry::smoking:')
     .then(msg => msg.edit(':cry::smoking:'))
     .then(msg => msg.edit(':cry::smoking::cloud:'))
     .then(msg => msg.edit(':cry::smoking::cloud::cloud:'))
     .then(msg => msg.edit(':cry::smoking::cloud::cloud::cloud:'))
     .then(msg => msg.edit(':cry::smoking::cloud::cloud::cloud::cloud:'))
     .then(msg => msg.edit(':cry::smoking::cloud::cloud::cloud::cloud::cloud:'))
     .then(msg => msg.edit(':cry::smoking::cloud::cloud::cloud::cloud:'))
     .then(msg => msg.edit(':cry::smoking::cloud::cloud::cloud:'))
     .then(msg => msg.edit(':cry::smoking::cloud::cloud:'))
     .then(msg => msg.edit(':cry::smoking::cloud:'))
     .then(msg => msg.edit(':cry::smoking:'))
     .then(msg => msg.edit(':cry::cloud:'))
     .then(msg => msg.edit(':cry::cloud::cloud:'))
     .then(msg => msg.edit(':cry::cloud::cloud::cloud:'))
     .then(msg => msg.edit(':cry::cloud::cloud::cloud::cloud:'))
     .then(msg => msg.edit(':cry::cloud::cloud::cloud::cloud::cloud:'))
     .then(msg => msg.edit(':cry::cloud::cloud::cloud::cloud:'))
     .then(msg => msg.edit(':cry::cloud::cloud::cloud:'))
     .then(msg => msg.edit(':cry::cloud::cloud:'))
      .then(msg => msg.edit(':cry::cloud:'))
     .then(msg => msg.edit('**Sigara bitti** Sigara Sağlığa Zarar Verir **Sigara içmeyiniz**'))
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yak',
  description: 'Bi Dal Sigara Yakarsınız.',
  usage: 'yak'
};
