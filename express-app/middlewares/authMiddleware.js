import jwt from 'jsonwebtoken';
import ApiError from '../error/ApiError.js';

export default (request, response, next) => {
  try {
    const token = request.headers.authorization.split(' ')[1];
    if (!token) return next(ApiError.unauthorized('не авторизован'));
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    request.user = decoded;
    next();
  } catch (error) {
    next(ApiError.badRequest('не авторизован'));
  }
}