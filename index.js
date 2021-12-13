require("http").createServer((req, res) => res.end(process.version)).listen()
const Discord = require("discord.js");
const { Client, Message, MessageEmbed, Collection, WebhookClient } = require("discord.js");
const fs = require('fs');
var Twit = require("twit");
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);
console.log(`Hello from Node.js ${process.version}!`);
const { prefix } = require("./settings/config.json");
const client = new Client({
    messageCacheLifetime: 60,
    fetchAllMembers: false,
    messageCacheMaxSize: 10,
    restTimeOffset: 0,
    restWsBridgetimeout: 100,
    shards: "auto",
    allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: true,
    },
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: 32767,
});
module.exports = client;
const config = require("./settings/config.json");
global.prefix = (config.prefix);
const token = process.env.TOKEN;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.prefix = config.prefix;

global.joinchannel = client.channels.cache.get("889062649516654622");

// TWITTER //

var Twitter = require('twitter');

var twit = new Twitter({
  consumer_key: process.env.twitterConsumerKey,
  consumer_secret: process.env.twitterConsumerSecret,
  access_token_key: process.env.twitterAccessTokenKey,
  access_token_secret: process.env.twitterAccessTokenSecret
});
  twit.stream('statuses/filter', {follow: '1439726982497964035'},  function(stream) {
  stream.on('data', function(tweet) {
    let tweet_url = ("https://twitter.com/Minecraft118OFC/status/" + tweet.id_str);
    console.log(tweet_url);
    let channel = client.channels.fetch("890078301769597009").then(channel => {
    channel.send(tweet_url)});
    var logger = fs.createWriteStream('DataLog.txt', {
  flags: 'a' 
});
    logger.write("\n" + tweet_url);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
// TWITTER //


var webhookToken = (process.env.WEBTOKEN)
var webhookId = (process.env.WEBID)

const webhookClient = new WebhookClient({ id: webhookId, token: webhookToken });

webhookClient.send('Bot Reiniciado!');

// YOUTUBE //

const { CHANNEL_ID, SERVER_CHANNEL_ID } = require("./settings/config.json");
const YouTubeNotifier = require('youtube-notification');

console.log("Assistindo " + CHANNEL_ID.length  + " Canais")

const notifier = new YouTubeNotifier({
  hubCallback: 'https://Warden-Bot.gabrieldgamer.repl.co/youtube',
  secret: 'JOIN_MY_SERVER_OR_DIE'
});
notifier.setup('uploaded');

notifier.on('notified', data => {
  console.log('New Video: ' + data.video.title + ' ' + data.video.link);

   var postTweetAranhaMaster = "Saiu video novo do " + data.channel.name + " " + data.video.link;

   var postTweetBrine = "Boas pessoal, saiu video novo no canal do Brine " + data.video.link;

   var postTweetSmoffy = "Eaee fihh,saiu video novo no canal do Smoffy " + data.video.link;

   var postTweetJggl = "Wooooo Cupcakes saiu vídeo novo ! " + data.video.link;

   var postTweetLoop3s = "Saiu video novo do " + data.channel.name + " " + data.video.link;

   var postTweetWauCraft = "Saiu video novo do " + data.channel.name + " " + data.video.link;

   var postTweetDarkBRz = "Saiu video novo do " + data.channel.name + " " + data.video.link;

   var postTweetDefault = "Saiu video novo do " + data.channel.name + " " + data.video.link;

   var postTweetDefaulta = "Saiu video novo da " + data.channel.name + " " + data.video.link;

   var postTweetAdriano = "Saiu video novo do " + data.channel.name + " " + data.video.link;

   var postTweetElld = "Saiu video novo do " + data.channel.name + " " + data.video.link;

   var postTweetTestes = "Conta de Testes " + data.video.link;

   var postTweetTiozera = "Galera corre que o Tiozão acabou de postar mais uma verdadeira obra de arte audiovisual, vai lá conferir... " + data.video.link;

var titulo = "Minecraft 1.18"
var videoyt = data.video.title

if (data.video.title.toLowerCase().includes(titulo.toLowerCase())) {


  if (data.channel.name == "Aranha e Juan") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetAranhaMaster)
}
  if (data.channel.name == "Tiozera Games") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetTiozera)    
  }
  if (data.channel.name == "Smoffy") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetSmoffy)
  }
  if (data.channel.name == "Jggl") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetJggl)
  }
  if (data.channel.name == "Brine") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetBrine)
  }
  if (data.channel.name == "SrElld") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetElld)
  }
  if (data.channel.name == "Loop3s") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetLoop3s)    
  }
  if (data.channel.name == "Dark BRz") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetDarkBRz)    
  }
  if (data.channel.name == "Universo Waucraft") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetWauCraft)    
  }
  if (data.channel.name == "GabrielDGamer Conta Teste") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetTestes)
   console.log("retorno")
  }
  if (data.channel.name == "Adriano Flores") {
    client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetAdriano);
    console.log("Tweet Postado")
  }
  if (data.channel.name == "Crizinha E Yuske") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetDefulta)    
  }
  if (data.channel.name == "Vaca - Canal 2") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetDefault)    
  }
  if (data.channel.name == "San_") {
   client.channels.cache.get(SERVER_CHANNEL_ID).send(postTweetDefault)    
  }
} else {
  console.log("Esse video não pertence a serie Minecraft 1.18");
}
});

notifier.subscribe(CHANNEL_ID);
app.use("/youtube", notifier.listener());

// WELCOME //

client.on('guildMemberAdd', async member => {
  require("./welcome-bye/memberAdd")(member)
});

/*client.on('guildMemberAdd', member => {
var role = member.guild.roles.cache.find(role => role.name == "▬▬▬ MEMBRO ▬▬▬")
member.roles.add(role);
});*/

client.on('guildMemberAdd', member => {
var role = member.guild.roles.cache.find(role => role.name == "『💎』MEMBROS")
member.roles.add(role);
});

//  WELCOME

client.prefix = config.prefix;

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();
client.categories = fs.readdirSync("./commands/");

["command_handler", "event_handler", "slash_handler"].forEach((handler) => {
   require(`./handlers/${handler}`)(client)
});

//  HANDLER //

/*webhooklink = (process.env.WEBHOOK)
const hook = new Discord.WebhookClient('890088795549085696', webhooklink);

  hook.send('Bot Reiniciado!');*/

client.login(process.env.TOKEN);