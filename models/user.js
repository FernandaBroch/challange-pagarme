const { Sequelize, Model, DataTypes } = require('sequelize');

class User extends Model { };

const userInit = async (sequelize) => {
  User.init({
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, { sequelize, modelName: 'user' });
} 


const createUser = async (name, password) => {
  return await User.create({
    username: name,
    password: password
  }).catch(error => console.log(error));
}

const readUsers = async () => {
  return await User.findAll();
}
/*
  const user = await createUser('jaina', 'odeioArthas');
  const users = await readUsers();
  console.log(JSON.stringify(users, null, 2));
*/

module.exports = {userInit, createUser, readUsers}