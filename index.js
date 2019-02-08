const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const mongoDBUrl = 'mongodb://localhost:27017/expbp'
mongoose.connect(mongoDBUrl, {useNewUrlParser: true})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./app/routes')(app)

app.listen(port, () => {console.log('listening on port 3000')})