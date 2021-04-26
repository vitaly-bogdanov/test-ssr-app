import jwt from 'jsonwebtoken';

export default (id, name) => {
  return jwt.sign({ id, name }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
};