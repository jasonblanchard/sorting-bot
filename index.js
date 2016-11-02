import Botkit from 'botkit';

const controller = Botkit.slackbot({
  debug: false,
});

controller.spawn({
  token: 'xoxb-99340059573-TOiPf7k3uUB2us2NG6VoRvST'
}).startRTM();

controller.hears('hello', ['direct_message', 'mention'], (bot, message) => {
  console.log(message);
  bot.reply(message, 'Got it!');
})

const houses = {
  'slytherin': {
    name: 'slytherin',
    users: [],
    points: 0
  },
  'gryffindor': {
    name: 'gryffindor',
    users: [],
    points: 0
  }
};

controller.hears('sort', ['direct_message', 'mention'], (bot, message) => {
  console.log(message);
  bot.reply(message, 'Sorted');
});
