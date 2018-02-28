const commando = require('discord.js-commando');
const bot = new commando.Client();


bot.registry.registerGroup('random','Random');
bot.registry.registerDefaults();

bot.registry.registerCommandsIn(__dirname + "/");

var bot_token= "NDE4NTI2MzI3ODE4NDIwMjI0.DXi2jA.hdhpw7XDJAGDu7NBC5Q3KKgNJ5E"
bot.login(process.env.bot_token);
