const express = require('express')
const app = express()
const port = 3000
const { initSequelize } = require('./models/sequelize_sync')
const { createTransaction, readTransactions } = require('./models/transaction')


initSequelize().then(() => {
  createTransaction(100.00, 'Smartband XYZ 3.0', 'debit_card', 0987, 'Vernanda', '07/2023', 123)
  createTransaction(200.00, 'Galaxy Watch XYZ 3.0', 'credit_card', 1234, 'Gisela', '08/2025', 321)
  console.log(readTransactions())
  
  app.get('/transactions', async (req, res) => {
    const transactions = await readTransactions();
    res.json(transactions)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})


