const express = require('express')
const app = express()
const port = 3000
const { initSequelize } = require('./models/sequelize_sync')
const { routes } = require('./routes/routes.js')
  
  app.listen(port, () => {
    initSequelize().then(() => {
      routes(app)
    })
    
    console.log(`Example app listening on port ${port}`)
  })


