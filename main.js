const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === '/hello') {
    message.channel.send('Hello!');
  }
});

// Remplacez 'TOKEN' par votre propre token de bot Discord
client.login(process.env.TOKEN);
