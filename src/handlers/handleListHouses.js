import houses from 'src/mockData.js';

export default class handleListHouses {
  constructor(logger) {
    this._logger = logger;
    this.handle = this.handle.bind(this);
  }

  handle(bot, message) {
    this._logger.info({ message });

    bot.reply(message, JSON.stringify(houses));
  }
}
