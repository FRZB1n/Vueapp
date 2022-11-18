const express = require('express')
const BP = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongo = require('mongoose')
const api = require('./api/api')


const cookieParser = require('cookie-parser')

const PORT = 5000

const app = express()

app.use(morgan('combined'))
app.use(BP.json())
app.use(cors())
app.use(BP.urlencoded({extended:true}))
app.use(cookieParser());


app.use('/', api)





async function start(){
    
   await mongo.connect("mongodb://localhost:27017")

    app.listen(PORT, ()=>{
        console.log(`this work ${PORT} port` )
    })
    
}
start()