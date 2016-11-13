export default class HandleTest {
  constructor(logger) {
    this._logger = logger;
    this.handle = this.handle.bind(this);
  }

  handle(bot, message) {
    try {
      this._logger.debug({ message, this: this });

      bot.reply(message, 'Working!');
    } catch (error) {
      bot.reply(message, 'Something went wrong');
      this._logger.error(error);
    }
  }
}
