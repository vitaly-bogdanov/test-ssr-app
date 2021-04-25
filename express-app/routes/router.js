import { Router } from "express";
import posts from './posts.js';

const router = new Router();

router.use(posts);

export default router;