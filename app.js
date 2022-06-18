const mongoose = require('mongoose')
const express = require('express')

const url = "mongodb://localhost/dummydatabase"

const app = express()

mongoose.connect(url, {useNewUrlParser: true})

const con = mongoose.connection

con.on('open', ()=>{
    console.log('Connected...')
})

app.use(express.json())

const router1 = require('./routes/rout')
app.use('/rout', router1)

app.listen(9000, ()=>{
    console.log("Server Started")
})