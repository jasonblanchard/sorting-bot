import bootstrap from 'src/bootstrap';
import environment from 'dotenv';

environment.config();

const registry = bootstrap();
const { logger, app } = registry;

logger.debug('\n>>> STARTING <<<\n');

app.start();

logger.debug('\n>>> STARTED <<<\n');
