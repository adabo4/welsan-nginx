const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const emailRouter = require('./formaRoute');

const app = express();

dotenv.config();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/subscribe', emailRouter);

app.get('/', (req, res) => {
  res.send("API WORKING")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});