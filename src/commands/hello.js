const execute = (bot, msg, args) => {
  console.log(args)
  return msg.reply('Hello')
}

module.exports = {
  name:"hello",
  help: "Hello, world!",
  execute
}