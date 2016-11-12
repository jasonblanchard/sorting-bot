import { Schema } from 'mongoose';

const BotSchema = new Schema({
  token: String,
  teamId: String,
});

export default class BotService {
  constructor(store) {
    this._store = store;
    this._model = store.model('Bot', BotSchema);
  }

  create(params) {
    const model = new this._model(params);
    model.save();
  }
}
