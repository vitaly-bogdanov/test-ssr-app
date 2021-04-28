import { Router } from 'express';
import UsersController from '../controllers/UsersController.js';
import userValidationMiddleware from '../middlewares/userValidationMiddleware.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = new Router();

export const apiUserRegistrationPath = '/api/user/registration';
router.post(apiUserRegistrationPath, userValidationMiddleware, UsersController.registation);

export const apiUserLogin = '/api/user/login';
router.post(apiUserLogin, userValidationMiddleware, UsersController.login);

export const apiUserCheck = '/api/user/check';
router.post(apiUserCheck, authMiddleware, UsersController.check);

export default router;