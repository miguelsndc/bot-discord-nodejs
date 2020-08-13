const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {
  if (args.length === 0) {
    const embed = new MessageEmbed();
    embed.setTitle("Escolha suas área de interesse");
    embed.setDescription(
      "Para escolher uma área de interesse, reaja à essa mensagem com os emojis que desejar. Cada uma das áreas possui um emoji, representados abaixo:"
    );
    embed.setAuthor(
      "Vai todo mundo pra casa do karalho 😎",
      `https://cdn.discordapp.com/icons/${msg.guild.id}/${msg.guild.icon}.png`,
      "https://github.com/miguelsndc"
    );
    embed.addFields([
      { name: "Dono do bar", value: "😎", inline: true },
      { name: "Garçom", value: "👺", inline: true },
      { name: "Cliente bêbado", value: "🤮", inline: true },
      { name: "JBL", value: "🤖", inline: true },
    ]);
    msg.member.send({ embed }).then(async (embed) => {
      try {
        await embed.react("😎");
        await embed.react("👺");
        await embed.react("🤮");
        await embed.react("🤖");
        const collector = embed.createReactionCollector(
          (reaction, user) =>
            ["😎", "👺", "🤮", "6️🤖"].includes(reaction.emoji.name) &&
            !user.bot,
          {
            time: 500,
          }
        );
        collector.on("collect", (reaction, user) => {
          let role;
          switch (reaction.emoji.name) {
            case "😎":
              role = msg.guild.roles.cache.find((r) => r.name === "Dono do bar");
              if (role) msg.member.roles.add(role);
              else console.error("Cargo não encontrado");
              break;
            case "👺":
              role = msg.guild.roles.cache.find((r) => r.name === "Garçom");
              if (role) msg.member.roles.add(role);
              else console.error("Cargo não encontrado");
              break;
            case "🤮":
              role = msg.guild.roles.cache.find((r) => r.name === "Cliente bêbado");
              if (role) msg.member.roles.add(role);
              else console.error("Cargo não encontrado");
              break;
            case "🤖":
              role = msg.guild.roles.cache.find((r) => r.name === "JBL");
              if (role) msg.member.roles.add(role);
              else console.error("Cargo não encontrado");
              break;
          }
        });
      } catch (e) {
        console.error(e);
      }
    });
  } else {
    if (!msg.member.hasPermission("MANAGE_ROLES"))
      return msg.reply("Desculpa, você não pode executar essa ação");
    const [mention, roleArg] = args;
    const member = msg.mentions.members.first();
    if (!member)
      return msg.reply("você precisa mencionar a quem deseja dar o cargo.");
    if (!roleArg) return msg.reply("você precisa escolher um cargo");
    const role = msg.guild.roles.cache.find((r) => r.name === roleArg);
    if (!role) return msg.reply(`não encontrei o cargo \`${roleArg}\``);
    member.roles.add(role);
  }
};

module.exports = {
  name: "role",
  help: "Atribui cargos a um usuário",
  execute,
};