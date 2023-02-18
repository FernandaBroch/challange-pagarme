const { Sequelize } = require('sequelize');
const { transactionInit } = require('./transaction.js');
const { userInit } = require('./user.js');

const database = new Sequelize('sqlite::memory:');

const initSequelize = async () => {
  await userInit(database);
  await transactionInit(database);
  await database.sync();
};

module.exports = {initSequelize};

