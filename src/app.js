import express from 'express'

import path from 'path'
import * as bodyParser from 'body-parser'

import router from './routes'

const app = express()

// defualt template engine as ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// using the routes defined in routes
app.use(router)

export default app
