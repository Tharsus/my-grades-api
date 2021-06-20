import dotenv from 'dotenv';

dotenv.config();

export default {
  node_env: process.env.NODE_ENV || 'debug',
  node_port: process.env.NODE_PORT || 3000,
  mongo_url: process.env.MONGO_URL,
};
