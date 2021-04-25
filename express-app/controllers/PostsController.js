import Post from '../models/posts.js';
import ApiError from '../error/ApiError.js';

export default {
  index: async (request, response) => {
    const posts = await Post.findAll();
    response.status(200).json(posts);
  },

  view: async (request, response, next) => {
    const { id } = request.params;
    const post = await Post.findOne({ id });
    response.status(200).json(post);
  },

  create: async (request, response, next) => {
    const { head, body } = request.body;
    if (!head) return next(ApiError.badRequest('пустое поле head'));
    if (!body) return next(ApiError.badRequest('пустое поле body'));
    const post = await Post.create({ head, body });
    response.status(201).json(post);
  }
}