import Botkit from 'botkit';

const LOG_TAG = 'bootstrapApp';

export default function(registry) {
  const { logger, teamService, respondTest, respondListHouses, respondSort } = registry;
  logger.debug('\n>>> BOOTSTRAPPING <<<\n', LOG_TAG);

  const MESSAGE_TYPES = ['direct_message', 'direct_mention'];

  const controller = Botkit.slackbot({
    debug: false,
  });

  controller.hears('test', MESSAGE_TYPES, respondTest.respond);
  controller.hears('sort (.+) (.+)', MESSAGE_TYPES, respondSort.respond);
  controller.hears('list houses', MESSAGE_TYPES, respondListHouses.respond);

  // award [number] point(s) to [house]
  // which house [user]
  // show points
  // show points for [house | user]
  // show members of [house]
  // add house [house]

  // TODO: Move this all to the OAuth process instead of hard-coding
  const app = controller.spawn({
    token: process.env.BOT_TOKEN,
  });


  return {
    start: () => app.startRTM((error, bot) => {
      if (error) {
        logger.error({ error, bot }, LOG_TAG);
        return;
      }
      const token = bot.config.token;
      const teamId = bot.team_info.id;
      logger.debug({ bot: { token, teamId } }, LOG_TAG);
      teamService.register({ token, teamId }, LOG_TAG);
    }),
  };
}
