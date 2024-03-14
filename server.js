const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const colors = require('colors')

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    //use if you need
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("Welcome!")
})

const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api', employeeRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on 'http://localhost:${PORT}'`.bgMagenta);
});
