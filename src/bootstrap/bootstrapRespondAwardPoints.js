import RespondAwardPoints from 'src/responders/RespondAwardPoints';

export default function(registry) {
  const { logger, teamService } = registry;

  return new RespondAwardPoints(teamService, logger);
}
