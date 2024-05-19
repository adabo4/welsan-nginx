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

    const subscriptionState = response.data.subscription.state;

    let message = "Prihlásenie na odber bolo úspešné. Skontroluj si prosím mail.";

    if (subscriptionState === 'active') {
      // Subscription is active
      message = 'Už ste prihlásený na odber noviniek.';
    } else if (subscriptionState === 'inactive') {
      // Subscription is pending confirmation
      message = 'Prihlásenie na odber bolo úspešné. Skontrolujte si prosím mail.';
    } else if (subscriptionState === 'cancelled') {
      // Subscription is cancelled
      message = 'Opätovné prihlásenie treba potvrdiť v pôvodnom maili.';
    }

    res.status(200).json({
      message,
      subscriptionState,
    });

    console.log('Subscriber added:', response.data);
  } catch (error) {
    console.error('Error adding subscriber:', error.response.data);
    res.status(500).json({ message: 'Nepodarilo sa prihlásiť na odber noviniek.' });
  }
});
  



//     if (subscriptionState === 'active' || subscriptionState === 'cancelled') {
//       // Subscription successful
//       res.status(200).json({
//         message: 'Subscription successful',
//         subscriptionState, // Include the subscription state in the response
//       });
//       console.log('Subscriber added:', response.data);
//     } else {
//       // Subscription failed
//       res.status(200).json({
//         message: 'Subscription successful (but pending confirmation)',
//         subscriptionState, // Include the subscription state in the response
//       });
//       console.log('Subscriber added:', response.data);
//     }
//   } catch (error) {
//     console.error(error);
//     console.error('Error adding subscriber:', error.response.data);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

module.exports = router;
