import HandleTest from 'src/handlers/HandleTest';

export default function(registry) {
  const { logger } = registry;

  return new HandleTest(logger);
}
