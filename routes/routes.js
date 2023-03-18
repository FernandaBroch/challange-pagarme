
const { createTransaction, readTransactions } = require('../controllers/transactionsController.js')
const express = require('express')

const routes = (app) => {

  app.use(express.json())
     
  app.get('/transactions', async (req, res) => {
    const transactions = await readTransactions();
    res.json(transactions)
  })

  app.post('/transactions', async (req, res) => {
    const transactions = await createTransaction(req.body);
    res.json(transactions)
  })

}

module.exports = { routes };