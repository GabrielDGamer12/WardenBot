const Discord = require("discord.js");
const db = require('quick.db');
const { Message, Client, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "mute",
    aliases: ["mutar"],
    category: "moderation",
    run: (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0])
    var membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (membro === message.member) return message.reply(`🚨 | Desculpe, mas você não tem permissão para isso.`)

    var motivo = args.slice(1).join(" ") || "Não Expecificado.";
    if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send('Desculpe, mas você não tem permissão para isso.')
    if (!membro) return message.reply(`Formato inválido. Formato correto: **!mute @usario motivo.**`).then(m => setTimeout(() => m.delete(), 5000)).then(setTimeout(() => message.delete(), 500))
        
        let avatar = user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 });
        var canal = message.guild.channels.cache.find(ch => ch.id === "899033697355968542");
        message.channel.send(`Deseja realmente \`mutar\`  ${user}? Clique no emoji para confirmar.`).then(msg => {
        msg.react("👍")
     
        const embed = new MessageEmbed()
        .setTitle('🚨 - MUTADO')
        .setColor('#ff210e')
        .setTimestamp()
        .setThumbnail(avatar)
        .addFields(
        {name: "``Informações do Mute:``", value: `**Usuário**: ${membro} \n**ID**: ${membro.id} \n**Motivo**: ${motivo} \n **Mutado por**: ${message.author.username}`
        }
        )

        const filter = (reaction, user) => {
	return reaction.emoji.name === '👍' && user.id === message.author.id;
};
var role = message.guild.roles.cache.find(role => role.name == "Mutado")

msg.awaitReactions({ filter, max: 1, time: 60000, errors: ['time'] })
	.then(collected => canal.send({ embeds: [embed] })).then(collected => membro.roles.add(role) ).then(setTimeout(() => message.delete(), 500))
	.catch(collected => {
		console.log(`After a minute, only ${collected.size} out of 1 reacted.`);
	});
    })}}
