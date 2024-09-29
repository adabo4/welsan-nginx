const express = require('express');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config();


const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;
const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL;
const myemail = process.env.REACT_APP_GMAIL_NAME;

const app2 = express();

const oAuth2Client = new google.auth.OAuth2(`${CLIENT_ID}`, `${CLIENT_SECRET}`, `${REDIRECT_URL}`)
oAuth2Client.setCredentials({ refresh_token: `${REFRESH_TOKEN}` });


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));



router.post('/', async (req, res) => {

  try {

    const data = req.body;

    const accessToken = oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: myemail,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken

      }
    })

    const mail_configs = {
      from: `${data.email}`,
      to: "ada.bohunicka@gmail.com",
      subject: `Message from ${data.name}`,
      text: "Hello World!",
      html: `
            <h1>Information </h1>
            <ul>
            <li> Name: ${data.name} </li>
            <li> Email: ${data.email} </li>
            </ul>

            <h3>Message</h3>
            <p>${data.message}</p>
            `
    };

    transporter.sendMail(mail_configs, (error, response) => {
      if (error) {
        res.send(error);
        console.error(error);
        res.status(500).json({ message: 'Email sending failed' });
      } else {
        res.send("Success!")
        console.log('Email sent to: ' + response.accepted);
        res.status(200).json({ message: 'Email sent successfully' });
      }

      transporter.close();

    });
  } catch {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });


  }

})

module.exports = router;