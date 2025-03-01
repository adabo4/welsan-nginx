const express = require('express');
const path = require('path');
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const { subscribeRouter, emailRouter } = require('./formaRoute');
const rateLimit = require("express-rate-limit");

const app = express();

dotenv.config();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 3, // 3 request na 5 min
  message: "Príliš veľa žiadostí, skúste znova neskôr.",
  trustProxy: 1,
  standardHeaders: true,
  legacyHeaders: false,
});

app.set('trust proxy', true);

app.use('/api/subscribe', subscribeRouter);
app.use('/api/send-email', limiter, emailRouter)



app.get('/ip', (request, response) => response.send(request.ip))

app.get('/', (req, res) => {
  res.send("API WORKING")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});