const express = require('express')
const app = express()
const homeRoutes = require('./routes/home')
const connectDB = require('./config/database')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)


app.listen(process.env.PORT, ()=>{
    console.log(`The server is running on port: ${process.env.PORT}`)
})