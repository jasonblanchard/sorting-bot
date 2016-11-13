import HandleListHouses from 'src/handlers/HandleListHouses';

export default function(registry) {
  const { logger, teamService } = registry;

  return new HandleListHouses(teamService, logger);
}
