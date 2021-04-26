import { Router } from 'express';

import UsersController from '../controllers/UsersController.js';
import userValidationMiddlevare from '../middlewares/userValidationMiddlevare.js';

const router = new Router();

export const apiUserRegistrationPath = '/api/user/registration';
router.post(apiUserRegistrationPath, userValidationMiddlevare, UsersController.registation);

export const apiUserLogin = '/api/user/login';
router.post(apiUserLogin, userValidationMiddlevare, UsersController.login);

export default router;