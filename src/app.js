import express from 'express'
var path = require('path')

const app = express()

// defualt template engine as ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
  res.render('index')
})

export default app
