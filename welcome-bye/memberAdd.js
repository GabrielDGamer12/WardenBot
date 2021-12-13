const Discord = require("discord.js");

module.exports = async (member, guild, client, send) => {
  
const canal = member.guild.channels.cache.find(ch => ch.id === "889062649516654622");

    const name = ("Minecraft 1.18")
    var mention = `${member.user}`;
    let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Bem-vindo`)
      .setDescription(`**${member.user}**, bem-vindo(a) ao **Minecraft 1.18**! Atualmente estamos com **${member.guild.memberCount} membros**`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Minecraft 1.18")
      .setTimestamp();

    /*member.guild.channels.cache.get
    ("729873038648279051")*/
    canal.send(mention);
    canal.send({ embeds: [embed] });
  };
