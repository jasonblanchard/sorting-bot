import logger from 'loglevel';

export default function(bot, message) {
  try {
    logger.info({ message });

    bot.reply(message, 'Working!');
  } catch (error) {
    bot.reply(message, 'Something went wrong');
    logger.error(error);
  }
}
