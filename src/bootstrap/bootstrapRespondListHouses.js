import RespondListHouses from 'src/responders/RespondListHouses';

export default function(registry) {
  const { logger, teamService } = registry;

  return new RespondListHouses(teamService, logger);
}
