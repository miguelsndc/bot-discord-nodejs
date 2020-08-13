const execute = (bot, msg, args) => {
  msg.member.voice.channel.leave()
};

module.exports = {
  name: "leave",
  help: "sai do canal de voz.",
  execute,
};