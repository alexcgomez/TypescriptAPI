import express, { Request, Response, Router } from 'express';
import healthController from '../../controllers/HealthController';
import userRouter from './users/userRoutes';

const router: Router = express.Router();

router.use('/', userRouter);

/**
 * GET /health
 */
router.get(
  '/health',
  (req: Request, res: Response) => {
    res.send(healthController.getHealth());
  }
);

export default router;
