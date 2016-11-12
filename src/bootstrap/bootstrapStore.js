import mongoose from 'mongoose';

export default function() {
  return mongoose.createConnection(process.env.MONGO_URI);
}
