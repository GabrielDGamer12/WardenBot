const { Client, MessageEmbed, Interaction } = require("discord.js");

module.exports = {
    name: "avatar",
    category: "others",
    description: "Mostra seu Avatar",
    type: 'CHAT_INPUT',
    options: [
      {
        name: "user",
        description: "Mostra o Avatar do Usuario Mencionado",
        type: 6,
        required: false
      }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async(client, interaction, message, args) => {
      try {
        const options = interaction.options._hoistedOptions;

        
        const user = (options.find((e) => e.name == "user") && options.find((e) => e.name == "user").member.user) || interaction.user;

        const member = (options.find((e) => e.name == "user") && options.find((e) => e.name == "user").member) || interaction.member;

        /*const embed = new MessageEmbed().setColor(member.displayHexColor);
/*
        const image = user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 });

        embed.setAuthor(member.displayName, user.displayAvatarURL()).setImage(image).setTimestamp();
*/
        let embed = new MessageEmbed()
          .setTitle(`Avatar de ${user.username}`) 
          .setImage(user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) 
          .setFooter(`• Autor: ${user.tag}`, user.displayAvatarURL({format: "png"}));
        
        await interaction.followUp({ embeds: [embed] });
      } catch(err) {
        console.log("Erro", err)
      }
    }
                                                                            }