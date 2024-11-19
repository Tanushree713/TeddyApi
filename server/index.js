const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config({path:'../.env'});
const mongoose = require('mongoose') 
const router = require('./router')

const PORT= process.env.PORT || 5000

app.use(express.json())
app.use(cors());
app.use('/api/v1' , router)


mongoose.connect(process.env.MONGODB_URI)
  .then(()=> console.log("MongoDB Connected Succesfully..."))
  .catch((err)=> console.error("MongoDB not connected", err))


app.listen(PORT , () => {
    console.log(`server is Running at ${PORT}`)
})
