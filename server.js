
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


mongoose.connect(
  'mongodb://localhost:27017/artesgraficasfortaleza',
   { useNewUrlParser: true, useUnifiedTopology: true});

requireDir('./src/models');



app.use(cors());

app.use(express.json());

app.use("/comments", require('./src/routes'));



app.listen(3333, ()=>{
  console.log('Backend started! 🤡');
})