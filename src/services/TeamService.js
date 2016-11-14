import { Schema } from 'mongoose';

const LOG_TAG = 'TeamService';

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
        name: 'Slytherin',
        members: [],
        points: 0,
      },
      {
        name: 'Gryffindor',
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
        this._logger.error(error, LOG_TAG);
      }

      this._logger.debug({ team }, LOG_TAG);

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
          this._logger.error(error, LOG_TAG);
          reject(error); // TODO: TeamServiceError
        }

        this._logger.debug({ team }, LOG_TAG);

        resolve(team.houses);
      });
    });
  }

  sortUser(teamId, userId, houseName) {
    return new Promise((resolve, reject) => {
      this._model.findOne({ teamId }, (error, team) => {
        if (error) {
          reject(error); // TODO: TeamServiceError
        }

        this._logger.debug({ team }, LOG_TAG);

        const houseIndex = team.houses.findIndex(house => house.name.toLowerCase() === houseName.toLowerCase());

        this._model.findOneAndUpdate({ teamId }, { $addToSet: { [`houses.${houseIndex}.members`]: userId } }, { new: true }, (error, updatedTeam) => {
          if (error) {
            this._logger.error(error, LOG_TAG);
            reject(error); // TODO: TeamServiceError
          }

          this._logger.debug({ updatedTeam }, LOG_TAG);

          resolve(updatedTeam);
        });
      });
    });
  }

  awardPoints(teamId, houseName, amount) {
    return new Promise((resolve, reject) => {
      this._model.findOne({ teamId }, (error, team) => {
        if (error) {
          reject(error);
        }

        this._logger.debug({ team }, LOG_TAG);

        const houseIndex = team.houses.findIndex(house => house.name.toLowerCase() === houseName.toLowerCase());

        this._model.findOneAndUpdate({ teamId }, { $inc: { [`houses.${houseIndex}.points`]: amount } }, { new: true }, (error, updatedTeam) => {
          if (error) {
            this._logger.error(error, LOG_TAG);
            reject(error);
          }

          this._logger.debug({ updatedTeam }, LOG_TAG);

          resolve(updatedTeam.houses[houseIndex].points);
        });
      });
    });
  }
}
