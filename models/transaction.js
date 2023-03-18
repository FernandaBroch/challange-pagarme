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

module.exports = { Transaction, transactionInit };