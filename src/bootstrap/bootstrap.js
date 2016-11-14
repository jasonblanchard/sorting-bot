import Bottle from 'bottlejs';

import bootstrapApp from './bootstrapApp';
import bootstrapTeamService from './bootstrapTeamService';
import bootstrapRespondListHouses from './bootstrapRespondListHouses';
import bootstrapRespondSort from './bootstrapRespondSort';
import bootstrapRespondTest from './bootstrapRespondTest';
import bootstrapLogger from './bootstrapLogger';
import bootstrapStore from './bootstrapStore';

export default function() {
  const bottle = new Bottle();

  bottle.factory('logger', bootstrapLogger);

  bottle.factory('app', bootstrapApp);

  bottle.factory('store', bootstrapStore);

  bottle.factory('teamService', bootstrapTeamService);

  bottle.factory('respondListHouses', bootstrapRespondListHouses);
  bottle.factory('respondSort', bootstrapRespondSort);
  bottle.factory('respondTest', bootstrapRespondTest);

  return bottle.container;
}
