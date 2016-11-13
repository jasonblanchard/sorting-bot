import houses from 'src/mockData';

export default class HandleSort {
  constructor(logger) {
    this._logger = logger;
    this.handle = this.handle.bind(this);
  }

  handle(bot, message) {
    this._logger.info({ message });

    const { match } = message;
    const user = match[1];
    const house = match[2];

    // TODO: If !house, sort into one of the lease-full houses.

    if (!houses[house].users.includes(user)) houses[house].users.push(user);

    bot.reply(message, `Sorted ${user} in house ${house}`);
  }
}
