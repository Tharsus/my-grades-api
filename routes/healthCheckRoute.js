import express from 'express';

import HealthCheckController from '../controllers/healthCheckController.js';

const router = express.Router();
router.get('/', HealthCheckController.status);

export default router;
