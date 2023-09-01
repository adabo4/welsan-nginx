const express = require('express');
const axios = require('axios');
const router = express.Router();
const bodyParser = require('body-parser');
require('dotenv').config(); 


const CONVERTKIT_API_KEY=process.env.REACT_APP_CONVERTKIT_KEY;
const CONVERTKIT_ID=process.env.REACT_APP_CONVERKIT_ID;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;

    const response = await axios.post(
      `https://api.convertkit.com/v3/forms/${CONVERTKIT_ID}/subscribe`,
      {
        api_key: `${CONVERTKIT_API_KEY}`,
        email,
      }
    );

    if (response.data.subscription.state === 'active') {
      // Subscription successful
      res.status(200).json({ message: 'Subscription successful' });
      console.log('Subscriber added:', response.data);
    } else {
      // Subscription failed
      res.status(400).json({ message: 'Subscription failed' });
    }
  } catch (error) {
    console.error(error);
    console.error('Error adding subscriber:', error.response.data);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
