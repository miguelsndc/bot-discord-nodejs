const Discord = require('discord.js')

const execute = (message, args) => {
  const amount = parseInt(args[0]) + 1;

    if(isNaN(amount)) {
      return;
    }
    else if (amount <= 1 || amount > 100) {

      let noargsembed = new Discord.MessageEmbed()
       .setDescription(`Digite um número entre 1 e 99`)
       .setColor("#2C2F33");
       
      return message.reply(noargsembed)
    }

    message.channel.bulkDelete(amount, true).catch(error => {
      console.log(error)
    })
}

module.exports = {
  name: 'delete-messages',
  help: 'Deleta a quantidade de mensagens especificadas pelo usuário',

}