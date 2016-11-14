const LOG_TAG = 'RespondAwardPoints';

export default class RespondAwardPoints {
  constructor(teamService, logger) {
    this._teamService = teamService;
    this._logger = logger;
    this.respond = this.respond.bind(this);
  }

  respond(bot, message) {
    this._logger.info({ message }, LOG_TAG);

    const { match } = message;
    const amount = match[1];
    const house = match[2];

    this._logger.debug({ house, amount }, LOG_TAG);

    this._teamService.awardPoints(bot.team_info.id, house, amount).then(total => {
      bot.reply(message, `Awarded ${amount} points to ${house}. ${house} now has ${total} points.`);
    }).catch(error => {
      this._logger.error(error, LOG_TAG);
      bot.reply(message, 'Something went wrong');
    });
  }
}
