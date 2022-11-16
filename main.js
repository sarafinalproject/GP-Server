const express=require("express");
const usersRouter=require("./Routers/usersRouters");
const productsRouter=require("./Routers/productsRouters")
const app=express();
var cors = require('cors');
app.use(cors());

//var cors=require('cors')

app.use(express.json());
require('./database')

app.use('/api/users',usersRouter)
app.use('/api/products',productsRouter)


app.listen(8000);





