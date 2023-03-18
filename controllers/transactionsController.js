const { Transaction } = require("../models/transaction.js")
const { protectCardNumber } = require("../services/transactionsService")

const createTransaction = async (transaction) => {
  console.log(protectCardNumber(transaction.card_number));
  return await Transaction.create({
    amount: transaction.amount,
    description: transaction.description,
    payment_method: transaction.payment_method,
    card_number: protectCardNumber(transaction.card_number),
    card_holder_name: transaction.card_holder_name,
    card_expire_date: transaction.card_expire_date,
    card_security_code: transaction.card_security_code,
  }).catch(error => console.log(error));
}

const readTransactions = async () => {
  return await Transaction.findAll();
}

module.exports = { readTransactions, createTransaction };