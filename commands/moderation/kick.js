const Discord = require("discord.js");
const db = require('quick.db');
const { Message, Client, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "kick",
    aliases: ["expulsar"],
    category: "moderation",
    run: (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (membro === message.member) return message.reply(`🚨 | Desculpe, mas você não tem permissão para isso.`)

    var motivo = args.slice(1).join(" ");
    if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send('Desculpe, mas você não tem permissão para isso.')
    if (!motivo) return message.channel.send(`Formato inválido. Formato correto: **!kick @usario motivo.**`)
        
        let avatar = user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 });
        var canal = message.guild.channels.cache.find(ch => ch.id === "899033697355968542");
        message.channel.send(`Deseja realmente expulsar  ${user}? Clique no emoji para confirmar.`).then(msg => {
        msg.react("👍")
     
        const embed = new MessageEmbed()
        .setTitle('🚨 - EXPULSÃO')
        .setColor('#ff210e')
        .setTimestamp()
        .setThumbnail(avatar)
        .addFields(
        {name: "``Informações da Expulsão:``", value: `**Usuário**: ${membro} \n**ID**: ${membro.id} \n**Motivo**: ${motivo} \n **Expulso por**: ${message.author.username}`
        }
        )

        const filter = (reaction, user) => {
	return reaction.emoji.name === '👍' && user.id === message.author.id;
};

msg.awaitReactions({ filter, max: 1, time: 60000, errors: ['time'] })
	.then(collected => canal.send({ embeds: [embed] })).then(collected => membro.kick(args.slice(1).join(" ") ))
	.catch(collected => {
		console.log(`After a minute, only ${collected.size} out of 1 reacted.`);
	});
    })}}



