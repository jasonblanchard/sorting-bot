import Botkit from 'botkit';

// TODO: Move handlers to bootstrap;
import handleTest from 'src/handlers/handleTest';
import handleSort from 'src/handlers/handleSort';
import handleListHouses from 'src/handlers/handleListHouses';

export default function(registry) {
  const { logger, botService } = registry;
  logger.debug('\n>>> BOOTSTRAPPING <<<\n');

  const MESSAGE_TYPES = ['direct_message', 'direct_mention'];

  const controller = Botkit.slackbot({
    debug: false,
  });

  controller.hears('test', MESSAGE_TYPES, handleTest);
  controller.hears('sort (.+) (.+)', MESSAGE_TYPES, handleSort);
  controller.hears('list houses', MESSAGE_TYPES, handleListHouses);

  // award [number] point(s) to [user]
  // which house [user]
  // show points
  // show points for [house | user]
  // show members of [house]
  // add house [house]

  // TODO: Move this all to the OAuth process instead of hard-coding
  const app = controller.spawn({
    token: process.env.BOT_TOKEN,
  });

  botService.register({ token: process.env.BOT_TOKEN });

  return {
    start: () => app.startRTM(),
  };
}
