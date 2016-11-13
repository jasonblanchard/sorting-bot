import TeamService from 'src/services/TeamService';

export default function(registry) {
  const { store, logger } = registry;
  return new TeamService(store, logger);
}
