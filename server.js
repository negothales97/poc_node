const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando App
const app = express();
app.use(express.json());
app.use(cors);

// Iniciando DB
mongoose.connect(
    'mongodb://192.168.99.100:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

requireDir('./src/models');


app.use('/api', require('./src/routes'));

app.listen(3001)