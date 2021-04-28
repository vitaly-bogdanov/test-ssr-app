import ApiError from '../error/ApiError.js';

export default (request, response, next) => {
  const { head, body } = request.body;
  if (!head) return next(ApiError.badRequest('поле head обязательно для заполнения'));
  if (!body) return next(ApiError.badRequest('поле body обязательно для заполнения'));
  next();
};