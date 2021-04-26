import ApiError from '../error/ApiError.js';

export default (error, request, response, next) => {
  const { name, password } = request.body;
  if (error instanceof ApiError) {  
    if (!name || !password) return next(ApiError.unauthorized('name или password не задан')); 
  }
  next();
};