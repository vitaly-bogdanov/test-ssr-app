import { Router } from 'express';
import postValidationMiddleware from '../middlewares/postValidationMiddleware.js';
import PostsController from '../controllers/PostsController.js';

const router = new Router();

export const apiPostCreate = '/api/posts';
router.post(apiPostCreate, postValidationMiddleware, PostsController.create);

export const apiPostsPath = '/api/posts';
router.get(apiPostsPath, PostsController.index);

export const apiPostPath = (id = ':id') => `/api/posts/${id}`;
router.get(apiPostPath(), PostsController.view);

export default router;