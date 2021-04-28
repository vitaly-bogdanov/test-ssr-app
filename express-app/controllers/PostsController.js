import Post from '../models/post.js';
import ApiError from '../error/ApiError.js';

export default {
  index: async (request, response) => {
    console.log(`PORT: ${process.env.PORT}`);
    console.log(`DB_NAME: ${process.env.DB_NAME}`);
    const posts = await Post.findAll();
    response.status(200).json(posts);
  },

  view: async (request, response, next) => {
    const { id } = request.params;
    const post = await Post.findOne({ where: { id } });
    response.status(200).json(post);
  },

  create: async (request, response) => {
    const { head, body } = request.body;
    const post = await Post.create({ head, body });
    response.status(201).json(post);
  }
}