const LOG_TAG = 'RespondTest';

export default class RespondTest {
  constructor(logger) {
    this._logger = logger;
    this.respond = this.respond.bind(this);
  }

  respond(bot, message) {
    try {
      this._logger.debug({ message }, LOG_TAG);

      bot.reply(message, 'Working!');
    } catch (error) {
      bot.reply(message, 'Something went wrong');
      this._logger.error(error, LOG_TAG);
    }
  }
}
