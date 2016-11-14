const LOG_TAG = 'RespondSort';

export default class RespondSort {
  constructor(teamService, logger) {
    this._teamService = teamService;
    this._logger = logger;
    this.respond = this.respond.bind(this);
  }

  respond(bot, message) {
    this._logger.info({ message }, LOG_TAG);

    const { match } = message;
    const user = match[1];
    const house = match[2];

    // TODO: If !house, sort into one of the lease-full houses.

    this._teamService.sortUser(bot.team_info.id, user, house).then(() => {
      bot.reply(message, `Sorted ${user} in house ${house}`);
    }).catch(error => {
      this._logger.error(error, LOG_TAG);
      bot.reply(message, 'Something went wrong');
    });
  }
}
