import logger from 'loglevel';

import houses from 'mockData.js';

export default function(bot, message) {
  logger.info({ message });

  bot.reply(message, JSON.stringify(houses));
}
