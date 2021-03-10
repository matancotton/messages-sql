const express = require('express');
const cors = require('cors');
const sequelize = require('./db/sequelize');
const router = require('./routers/messagesRouter');

const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);


sequelize.sync()
.then(()=> app.listen(port,()=>console.log("server is up on port: ", port)))
.catch((err)=>console.log(err))