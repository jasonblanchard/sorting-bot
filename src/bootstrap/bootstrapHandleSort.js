import HandleSort from 'src/handlers/HandleSort';

export default function(registry) {
  const { logger } = registry;

  return new HandleSort(logger);
}
