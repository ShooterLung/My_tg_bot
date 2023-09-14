const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('6410656534:AAHa_bqpiV2O6sBIzk0w5hI7xS6RfvmKagU', {polling: true});

bot.onText(/(.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const messageText = match[1];


  bot.sendMessage(chatId, messageText);
});
