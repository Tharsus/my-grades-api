import healthService from '../services/healthService.js';
export default {
  health(req, res) {
    const health = healthService.health();

    res.send(health);
  },
};
