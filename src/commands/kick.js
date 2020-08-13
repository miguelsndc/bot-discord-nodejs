const Discord = require('discord.js')

const execute = (msg, args) => {

    let successfullKickEmbed = new Discord.MessageEmbed()
    .setDescription(`${member.displayName} Kickado com sucesso.`)
    .setColor("#2C2F33");

    if(msg.channel.type === 'DM') {
        msg.channel.send('Use esse comando somente em chat público.');
        return;
    };
    
    if(!member.roles.cache.has('657255631450931211')) {
         msg.channel.send('Você não tem permissão pra fazer isso.');
         return;
    };
    
    let mentionMember = msg.mentions.members.first();
    
    if(!mentionMember) {
        msg.channel.send('Por favor mencione o membro que você quer kickar');
         return;
    }
    
    if(!mentionMember.kickable) {
        msg.channel.send('Eu não tenho permissão pra kickar esse usuário.');
        return
    };
    
    mentionMember.kick()
        .then(() => msg.channel.send(successfullKickEmbed))
        .catch(console.error);
      }


module.exports = {
  name: 'kick',
  description: 'kicka um membro',
  execute

}



