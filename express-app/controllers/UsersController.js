import User from '../models/user.js';
import ApiError from '../error/ApiError.js';
import bcrypt from 'bcrypt';
import generateJwtToken from '../helpers/generateJwtToken.js';

export default {
  registation: async (request, response, next) => {
    const { name, password } = request.body;
    const candidate = await User.findOne({ where: { name } });
    if (candidate) return next(ApiError.badRequest(`пользователь под именем ${name} уже существует`));
    const hashPasword = await bcrypt.hash(password, 5); 
    const user = await User.create({ name, password: hashPasword });
    const token = generateJwtToken(user.id, user.name);
    response.status(201).json({ token });
  },

  login: async (request, response, next) => {
    const { name, password } = request.body;
    const user = await User.findOne({ where: { name } });
    if (!user) return next(ApiError.unauthorized(`повательзователь с именем ${name} не найден`));
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) return next(ApiError.unauthorized('указан неверный пароль'));
    const token = generateJwtToken(user.id, user.name);
    response.status(200).json({ token });
  },

  check: async (request, response) => {
    const { id, name } = request.user;
    const token = generateJwtToken(id, name);
    response.status(200).json({ token });
  }
};