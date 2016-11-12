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

  register(params) {
    this._model.findOne({ token: params.token }, (err, doc) => {
      if (err) {
        // Do something;
      }

      if (!doc) {
        const instance = new this._model(params);
        instance.save();
      }
    });
  }

  create(params) {
    const instance = new this._model(params);
    instance.save();
  }
}
