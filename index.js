const commando = require('discord.js-commando');
const bot = new commando.Client();


bot.registry.registerGroup('random','Random');
bot.registry.registerDefaults();

bot.registry.registerCommandsIn(__dirname + "/");


bot.login(process.env.bot_token);
