import { Schema } from 'mongoose';

const HouseSchema = new Schema({
  name: String,
  points: Number,
  members: Array,
});

const TeamSchema = new Schema({
  token: String,
  teamId: String,
  houses: {
    type: [HouseSchema],
    default: [
      {
        name: 'slytherin',
        members: [],
        points: 0,
      },
      {
        name: 'gryffindor',
        members: [],
        points: 0,
      },
    ],
  },
});

export default class TeamService {
  constructor(store, logger) {
    this._store = store;
    this._model = store.model('Team', TeamSchema);
    this._logger = logger;

    this.register = this.register.bind(this);
  }

  register(params) {
    this._model.findOne({ teamId: params.teamId }, (error, team) => {
      if (error) {
        this._logger.error(error);
      }

      this._logger.debug({ team });

      if (!team) {
        const instance = new this._model(params);
        instance.save();
      }
    });
  }

  listHouses(teamId) {
    return new Promise((resolve, reject) => {
      this._model.findOne({ teamId }, (error, team) => {
        if (error) {
          this._logger.error(error);
          reject(error); // TODO: TeamServiceError
        }

        this._logger.debug(team);

        resolve(team.houses);
      });
    });
  }
}
