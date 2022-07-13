const express = require('express')
const mongoose = require('./db.js')
const bodyparser = require('body-parser')
const cors = require('cors')
const routes = require('./Routes/routes.js')
const app = express();

app.use(bodyparser.json())
app.use(cors({origin:'http://localhost:4200'}))
app.listen(3000,()=>{console.log('server start at port:3000')})
app.use('/api',routes)
