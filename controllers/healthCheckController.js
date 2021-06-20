export default {
  async status(req, res) {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    };

    res.send(healthcheck);
  },
};
