const { Sequelize, Model, DataTypes } = require('sequelize');

class Transaction extends Model { };

const transactionInit = async (sequelize) => {
  Transaction.init({
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    amount: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    payment_method: DataTypes.ENUM('debit_card', 'credit_card'),
    card_number: DataTypes.NUMBER,
    card_holder_name: DataTypes.STRING,
    card_expire_date: DataTypes.STRING,
    card_security_code: DataTypes.INTEGER
  }, { sequelize, modelName: 'transaction' });
}

const createTransaction = async (amount, description, payment_method, card_number, card_holder_name, card_expire_date, card_security_code) => {
  return await Transaction.create({
    amount: amount,
    description: description,
    payment_method: payment_method,
    card_number: card_number,
    card_holder_name: card_holder_name,
    card_expire_date: card_expire_date,
    card_security_code: card_security_code,
  }).catch(error => console.log(error));
}

const readTransactions = async () => {
  return await Transaction.findAll();
}

module.exports = { transactionInit, readTransactions, createTransaction };