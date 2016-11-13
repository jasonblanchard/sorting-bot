export default class handleListHouses {
  constructor(teamService, logger) {
    this._logger = logger;
    this.handle = this.handle.bind(this);
    this._teamService = teamService;
  }

  handle(bot, message) {
    const teamId = bot.team_info.id;
    this._logger.info({ message, teamId });

    this._teamService.listHouses(teamId).then(houses => {
      this._logger.debug({ houses });

      const response = houses.map(house => `${house.name} has ${house.points} points. Members: ${house.members.join(', ')}`);

      bot.reply(message, response.join('\n'));
    }).catch(error => {
      this._logger.error({ error });
      bot.reply(message, 'Something went wrong');
    });
  }
}
