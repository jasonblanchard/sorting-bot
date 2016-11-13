import HandleListHouses from 'src/handlers/HandleListHouses';

export default function(registry) {
  const { logger } = registry;

  return new HandleListHouses(logger);
}
