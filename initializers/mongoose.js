import mongoose from 'mongoose';
import environment from '../config/environment.js';

if (environment.node_env === 'debug') {
  mongoose.set('debug', true);
}

mongoose.connect(`${environment.mongo_url}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

export default mongoose;
