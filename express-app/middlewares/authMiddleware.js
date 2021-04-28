import jwt from 'jsonwebtoken';
import ApiError from '../error/ApiError.js';

export default (request, response, next) => {
  try {
    const token = request.headers.authorization.split(' ')[1];
    if (!token) return next(ApiError.forbidden('не авторизован 1'));
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    request.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    next(ApiError.badRequest('jwt невалиден'));
  }
}