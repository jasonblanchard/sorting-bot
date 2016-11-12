import logger from 'loglevel';

import houses from 'src/mockData';

export default function(bot, message) {
  logger.info({ message });

  const { match } = message;
  const user = match[1];
  const house = match[2];

  // TODO: If !house, sort into one of the lease-full houses.

  if (!houses[house].users.includes(user)) houses[house].users.push(user);

  bot.reply(message, `Sorted ${user} in house ${house}`);
}
