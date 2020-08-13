const execute = (bot, msg, args) => {
  const queue = bot.queues.get(msg.guild.id);

  if(!queue) {
    return msg.reply("Não existe nenhuma música sendo tocada.")
  }

  queue.dispatcher.resume();

}

module.exports = {
  name: "resume",
  help: "Resume a reprodução da música atual",
  execute
}