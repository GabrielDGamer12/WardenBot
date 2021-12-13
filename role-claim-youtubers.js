const firstMessage = require('./first-messageYT');
const secondMessage = require('./first-message');

module.exports = (client) => {
  const channelId = '896050789854883880'

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
    jggl: '896106027139858482',
    tiozerag: '896093353442168852',
    brine: '896106186280144937',
    wauzinho: '896106108752633876',
    darkbrz: '896106285454491658',
    smoffy: '896106216684658730',
    loop3s: '896106057733132428',
    san: '896483300590383115',
    agentevaca: '896484374063751198',
    crizinha: '896486056520744970',
    aranhamaster: '896486742415261747'
  }

 // const emojis2 = {
   // warden: '896093271669997589'
 // }

  const reactions = []

  let emojiText = 'Clique na reação do Emoji relativo aos canais em que você é Inscrito\n\n'
  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
    //var roles = member.guild.roles.cache.find(role => role.name == role)
    //let role = guild.roles.cache.find(role => role.name === roles);
    emojiText += `${emoji} ~> <@&` + role + ">\n"
  }
  //let emojiText2 = 'Clique na reação do Emoji relativo aos canais em que você é Inscrito\n\n'
  //for (const key2 in emojis2) {
    //const emoji2 = getEmoji(key2)
    //reactions.push(emoji2)

    //const role2 = emojis[key2]
    //var roles = member.guild.roles.cache.find(role => role.name == role)
    //let role = guild.roles.cache.find(role => role.name === roles);
    //emojiText2 += `${emoji2} ~> <@&` + role2 + ">\n"
  //}

  firstMessage(client, channelId, emojiText, reactions)

  //secondMessage(client, channelId, emojiText2, reactions)

  const handleReaction = (reaction, user, add) => {
    if (user.id === '888970033584275497') {
      return
    }

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const roleName = emojis[emoji]
    if (!roleName) {
      return
    }

    const role = guild.roles.cache.find((role) => role.id === roleName)
    const member = guild.members.cache.find((member) => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      member.roles.remove(role)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}