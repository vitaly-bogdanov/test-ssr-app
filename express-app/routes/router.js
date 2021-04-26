import { Router } from "express";

import posts from './posts.js';
import users from './users.js';
import articles from './articles.js';

const router = new Router();

router.use(posts);
router.use(users);
router.use(articles);

export default router;