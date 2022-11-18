const express = require('express')
const BP = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongo = require('mongoose')
const api = require('./api/api')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const cookieParser = require('cookie-parser')
const ses = require('./middleware/session')
const PORT = 5000

const app = express()

app.use(morgan('combined'))
app.use(BP.json())


app.use(cors())




app.use(BP.urlencoded({extended:true}))//конвертирует html в понятную кодирвку для js
//2022-10-25T15:50:52.846+00:00
app.use(cookieParser());
const oneWeek = 1000 * 60 * 60 * 24 * 7
const store = new MongoStore({
    collection: 'sessions',
    uri: "mongodb://localhost:27017",
    
})
app.use(session({ //заюзаем сессии  
    secret: 'some secret value', //cтрока, на основе которой сессия шифруется
    resave: false, //
    cookie: { maxAge: oneWeek },
    saveUninitialized: false,
     //
    store
}))

 
// app.use(ses)

app.use('/', api)





async function start(){
    
   await mongo.connect("mongodb://localhost:27017")

    app.listen(PORT, ()=>{
        console.log(`this work ${PORT} port` )
    })
    
}
start()