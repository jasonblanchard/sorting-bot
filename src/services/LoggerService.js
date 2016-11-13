import logger from 'loglevel';

// TODO: Build this out.
export default class LoggerService {
  constructor(loglevel) {
    this._logger = logger;
    logger.setLevel(loglevel);
  }

  info(message) {
    this._logger.info(message);
  }

  debug(message) {
    this._logger.debug(message);
  }

  error(message) {
    this._logger.error(message);
  }
}
