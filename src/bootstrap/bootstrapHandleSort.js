import HandleSort from 'src/handlers/HandleSort';

export default function(registry) {
  const { logger, teamService } = registry;

  return new HandleSort(teamService, logger);
}
