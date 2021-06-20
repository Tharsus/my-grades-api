import mongoose from '../initializers/mongoose.js';

export default {
  health() {
    const health = {
      message: 'listening',
      isHealthy: true,
      uptime: process.uptime(),
      db: mongoose.STATES[mongoose.connection.readyState],
      currentTime: new Date().toLocaleString(),
    };

    return health;
  },
};
