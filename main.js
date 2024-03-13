const Discord = require('discord.js');
const client = new Discord.Client();

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
