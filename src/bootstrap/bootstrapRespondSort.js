import RespondSort from 'src/responders/RespondSort';

export default function(registry) {
  const { logger, teamService } = registry;

  return new RespondSort(teamService, logger);
}
