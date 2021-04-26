import { Router } from 'express';

import PostsController from '../controllers/PostsController.js';

const router = new Router();

export const apiPostsPath = '/api/posts';
router.get(apiPostsPath, PostsController.index);

export const apiPostCreate = '/api/posts';
router.post(apiPostCreate, PostsController.create);

export const apiPostPath = (id = ':id') => `/api/posts/${id}`;
router.get(apiPostPath(), PostsController.view);

export default router;