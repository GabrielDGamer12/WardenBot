const { Message, Client, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "serverinfo",
    category: "owner",
    run: async (client, message, args) => {
        if (message.author.id !== '311531938286534656') {
            return message.channel.send(`🚨 | Desculpe, mas você não tem permissão para isso.`)
        }
        const embed = new MessageEmbed()
    .setTitle(`Informações do Servidor`)
    .setColor("#FF0000")
    .addField("IP:", "minecraft18.jogar.io")
    .addField("Versão:", "Snapshot 21w39a")
    .addField("Link Discord:", "https://discord.gg/BnTuvM7tbt")

  return message.channel.send({ embeds: [embed] })
    }
}