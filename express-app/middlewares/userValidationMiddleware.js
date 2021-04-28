import ApiError from '../error/ApiError.js';

export default (request, response, next) => {
  const { name, password } = request.body;
  if (!name) return next(ApiError.unauthorized('поле name пустое'));
  if (!password) return next(ApiError.unauthorized('поле password пустое'));
  next();
};