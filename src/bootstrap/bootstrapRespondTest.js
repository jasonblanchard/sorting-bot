import RespondTest from 'src/responders/RespondTest';

export default function(registry) {
  const { logger } = registry;

  return new RespondTest(logger);
}
