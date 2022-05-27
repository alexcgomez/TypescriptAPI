import express, { Request, Response, Router } from 'express';
import { userController } from '../../../controllers/UserController';

const userRouter: Router = express.Router();

/**
 * GET /users
 */
userRouter.get(
  '/users',
   async (req: Request, res: Response) => {
    res.send(await userController.getUsers());
  }
);

export default userRouter;
