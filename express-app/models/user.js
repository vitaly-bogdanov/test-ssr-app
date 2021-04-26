import sequelize from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = sequelize;

const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true
  },
  name: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  token: { type: DataTypes.STRING }
});

export default User;