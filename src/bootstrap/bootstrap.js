import Bottle from 'bottlejs';

import bootstrapApp from './bootstrapApp';
import bootstrapLogger from './bootstrapLogger';
import bootstrapRespondAwardPoints from './bootstrapRespondAwardPoints';
import bootstrapRespondListHouses from './bootstrapRespondListHouses';
import bootstrapRespondSort from './bootstrapRespondSort';
import bootstrapRespondTest from './bootstrapRespondTest';
import bootstrapStore from './bootstrapStore';
import bootstrapTeamService from './bootstrapTeamService';

export default function() {
  const bottle = new Bottle();

  bottle.factory('logger', bootstrapLogger);

  bottle.factory('app', bootstrapApp);

  bottle.factory('store', bootstrapStore);

  bottle.factory('teamService', bootstrapTeamService);

  bottle.factory('respondAwardPoints', bootstrapRespondAwardPoints);
  bottle.factory('respondListHouses', bootstrapRespondListHouses);
  bottle.factory('respondSort', bootstrapRespondSort);
  bottle.factory('respondTest', bootstrapRespondTest);

  return bottle.container;
}
