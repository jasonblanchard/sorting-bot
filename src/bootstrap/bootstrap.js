import Bottle from 'bottlejs';

import bootstrapApp from './bootstrapApp';
import bootstrapBotService from './bootstrapBotService';
import bootstrapHandleListHouses from './bootstrapHandleListHouses';
import bootstrapHandleSort from './bootstrapHandleSort';
import bootstrapHandleTest from './bootstrapHandleTest';
import bootstrapLogger from './bootstrapLogger';
import bootstrapStore from './bootstrapStore';

export default function() {
  const bottle = new Bottle();

  bottle.factory('logger', bootstrapLogger);

  bottle.factory('app', bootstrapApp);

  bottle.factory('store', bootstrapStore);

  bottle.factory('botService', bootstrapBotService);

  bottle.factory('handleListHouses', bootstrapHandleListHouses);
  bottle.factory('handleSort', bootstrapHandleSort);
  bottle.factory('handleTest', bootstrapHandleTest);

  return bottle.container;
}
