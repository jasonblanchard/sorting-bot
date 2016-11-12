import BotService from 'src/services/BotService';

export default function(registry) {
  return new BotService(registry.store);
}
