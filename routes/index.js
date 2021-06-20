import express from 'express';

import healthRoute from './healthRoute.js';

const router = express.Router();
router.use('/health', healthRoute);

export default router;
