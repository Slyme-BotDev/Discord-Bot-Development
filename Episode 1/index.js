const Discord = require("discord.js");
const bot = new Discord.Client();
const settings = require("./settings.json");

bot.on("ready", () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("The server", {type: "WATCHING"})
})

bot.on('message', msg => {
    if (msg.content === '&hi') {
        msg.channel.send("Hi")
    }
});

bot.login(settings.token)