import express from 'express';

import healthCheckRoute from './healthCheckRoute.js';

const router = express.Router();
router.use('/health-check', healthCheckRoute);

export default router;
