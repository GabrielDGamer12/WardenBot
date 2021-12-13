const Discord = require("discord.js");
const db = require('quick.db');
const { Message, Client, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "setprefix",
    aliases: ["set-prefix"],
    category: "moderation",
    run: async(client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "Você não tem permissão para fazer isso!"
    );
  let prefixo = args[0];
  db.set('prefixodb', `${prefixo}`);
  var prefixonovodb = db.get('prefixodb');
  var prefixoatual = ("``" + prefixonovodb + "``")

  let embed = new MessageEmbed() 
    .setColor(`#4cd8b2`) 
    .setTitle(`Novo prefixo definido`) 
    .setDescription(`Um novo prefixo foi definido com sucesso!\n\nPrefixo Padrão\nO Prefixo padrão é \`!\`\n\nPrefixo Extra\nO Prefixo extra é ${prefixoatual}`)
    return message.channel.send({ embeds: [embed] });
  /*message.channel.send(`O prefixo ${prefixoatual} foi definido com sucesso!\n\nAgora seus prefixos são ${prefixoatual} e ` + "``+``")*/
}};