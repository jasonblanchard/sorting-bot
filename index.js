import Botkit from 'botkit';

require('dotenv').config();

const controller = Botkit.slackbot({
  debug: false,
});

controller.spawn({
  token: process.env.BOT_TOKEN,
}).startRTM();

controller.hears('test', ['direct_message', 'mention'], (bot, message) => {
  bot.reply(message, 'Working!');
});

const houses = {
  slytherin: {
    name: 'slytherin',
    users: [],
    points: 0,
  },
  gryffindor: {
    name: 'gryffindor',
    users: [],
    points: 0,
  },
};

controller.hears('sort (.+) (.+)', ['direct_message', 'mention'], (bot, message) => {
  bot.reply(message, 'Sorted');
  const { match } = message;
  const user = match[1];
  const house = match[2];

  if (!houses[house].users.includes(user)) houses[house].users.push(user);

  bot.reply(message, `Sorted ${user} in house ${house}`);
});

controller.hears('list houses', ['direct_message', 'mention'], (bot, message) => {
  bot.reply(message, JSON.stringify(houses));
});
