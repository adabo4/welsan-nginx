const axios = require('axios');

const subscribeEmail = async (req, res) => {

    const CONVERTKIT_API_KEY = process.env.REACT_APP_CONVERTKIT_KEY;
    const CONVERTKIT_ID = process.env.REACT_APP_CONVERKIT_ID;
    try {
        const { email } = req.body;

        const response = await axios.post(
            `https://api.convertkit.com/v3/forms/${CONVERTKIT_ID}/subscribe`,
            {
                api_key: CONVERTKIT_API_KEY,
                email,
            }
        );

        const subscriptionState = response.data.subscription.state;
        let message = "Prihlásenie na odber bolo úspešné. Skontroluj si prosím mail.";

        if (subscriptionState === 'active') {
            message = 'Už ste prihlásený na odber noviniek.';
        } else if (subscriptionState === 'inactive') {
            message = 'Prihlásenie na odber bolo úspešné. Skontrolujte si prosím mail.';
        } else if (subscriptionState === 'cancelled') {
            message = 'Opätovné prihlásenie treba potvrdiť v pôvodnom maili.';
        }

        res.status(200).json({
            message,
            subscriptionState,
        });

        console.log('Subscriber added:', response.data);
    } catch (error) {
        // Check if error.response exists before trying to access error.response.data
        console.error('Error adding subscriber:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Nepodarilo sa prihlásiť na odber noviniek.' });
    }
};

module.exports = subscribeEmail;
