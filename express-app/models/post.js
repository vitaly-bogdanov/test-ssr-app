import sequelize from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = sequelize;

const Post = db.define('post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true
  },
  head: { type: DataTypes.STRING },
  body: { type: DataTypes.TEXT }
});

export default Post;