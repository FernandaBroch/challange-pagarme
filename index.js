const express = require('express')
const app = express()
const port = 3000

app.get('/transactions', (req, res) => {
  res.json([ {
    'valor': 100.00,
    'descricao': 'Smartband XYZ 3.0',
    'metodoPagamento': 'debit_card',
    'numeroCartao': 0987,
    'nomePortadorCartao': 'Vernanda',
    'dataValidadeCartao': '07/2023',
    'codigoVerificacaoCartao': 123
  } ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})