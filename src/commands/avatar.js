const Discord = require('discord.js')

const execute = (message, args) => {

  let authorAvatarEmbed = new Discord.MessageEmbed()
  .setDescription(`Seu avatar: <${message.author.displayAvatarURL({format: 'png', dynamic: true})}>`)
  .setColor('#ffffff')

  if(!message.mentions.users.size){ 
    return message.channel.send(authorAvatarEmbed)
  }
  const avatarList = message.mentions.users.map(user => {

    let userAvatarEmbed = new Discord.MessageEmbed()
    .setDescription(`${user.username}'s Avatar : <${user.displayAvatarURL({format: 'png', dynamic: true})}>`)
    .setColor('#ffffff')

    return userAvatarEmbed
  })
  message.channel.send(avatarList)
}


module.exports = {
  name: 'avatar',
  help: 'Mostra o link avatar do(s) usuário(s)',
  execute
}