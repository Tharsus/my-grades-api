export default {
  health() {
    const health = {
      uptime: process.uptime(),
      isHealthy: true,
      message: 'OK',
      currentTime: new Date().toLocaleString(),
    };

    return health;
  },
};
