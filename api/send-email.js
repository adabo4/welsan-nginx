import sendEmail from '../controllers/emailController.js';

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }


    try {
        await sendEmail(req, res);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}