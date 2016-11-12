import Bottle from 'bottlejs';

import bootstrapApp from './bootstrapApp';
import bootstrapLogger from './bootstrapLogger';
import bootstrapBotService from './bootstrapBotService';
import bootstrapStore from './bootstrapStore';

export default function() {
  const bottle = new Bottle();

  bottle.factory('logger', bootstrapLogger);

  bottle.factory('app', bootstrapApp);

  bottle.factory('store', bootstrapStore);

  bottle.factory('botService', bootstrapBotService);

  return bottle.container;
}
