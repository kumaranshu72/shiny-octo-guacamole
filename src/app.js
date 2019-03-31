import express from 'express'

import path from 'path'

import * as bodyParser from 'body-parser'

const app = express()

// defualt template engine as ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.render('index')
})

export default app
