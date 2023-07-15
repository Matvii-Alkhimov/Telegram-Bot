// const { Telegraf } = require('telegraf');

// const bot = new Telegraf('6049628992:AAG3nEa-oe5lvOLvzBWeHGcdRjZLlKfUiF4');

// bot.start((ctx) => ctx.reply("Welcome!"))
// bot.hears('Да', (ctx) => ctx.reply('Пизда'));

// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));

const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf('6049628992:AAG3nEa-oe5lvOLvzBWeHGcdRjZLlKfUiF4');
bot.start((ctx) => ctx.reply('Welcome'));
bot.on('message', (ctx) => {
    // console.log(message)
    if (ctx.message.text.toLowerCase() === "да") {
        ctx.reply("Пизда");
    }
});
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));