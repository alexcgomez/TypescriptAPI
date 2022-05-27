import express, { Request, Response, Router } from 'express';
import healthController from '../../controllers/HealthController';

const router: Router = express.Router();

/**
 * GET /health
 */
router.get(
  '/health',
  (req: Request, res: Response) => {
    // eslint-disable-next-line no-console
    console.log('GET /health');
    res.send(healthController.getHealth());
  }
);

export default router;
