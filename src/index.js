import Botkit from 'botkit';
import environment from 'dotenv';
import logger from 'loglevel';

import handleTest from 'src/handlers/handleTest';
import handleSort from 'src/handlers/handleSort';
import handleListHouses from 'src/handlers/handleListHouses';

environment.config();

logger.setLevel(process.env.LOG_LEVEL);

const MESSAGE_TYPES = ['direct_message', 'direct_mention'];

const controller = Botkit.slackbot({
  debug: false,
});

controller.spawn({
  token: process.env.BOT_TOKEN,
}).startRTM();

controller.hears('test', MESSAGE_TYPES, handleTest);
controller.hears('sort (.+) (.+)', MESSAGE_TYPES, handleSort);

controller.hears('list houses', MESSAGE_TYPES, handleListHouses);

// award [number] point(s) to [user]
// which house [user]
// show points
// show points for [house | user]
// show members of [house]
// add house [house]
