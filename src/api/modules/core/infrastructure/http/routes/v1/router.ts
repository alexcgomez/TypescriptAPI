import express, { Router, Request, Response } from "express";
import healthController from '../../controllers/HealthController';

const router: Router = express.Router();

/**
 * GET /status
 */
router.get(
  '/health',
  (req: Request, res:Response) => res.send(healthController.getHealth())
);

export default router;
