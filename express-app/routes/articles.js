import { Router } from 'express';
import ArticlesController from '../controllers/ArticlesController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = new Router();

export const apiArticlesPath = '/api/articles';
router.get(apiArticlesPath, authMiddleware, ArticlesController.index);

export default router;