// Import nodemailer directly to avoid path issues
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    console.log('Function started, method:', req.method);
    
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        console.log('Request body:', req.body);
        const { from_name, user_email, message, contact_number } = req.body;

        console.log('Environment vars:', {
            emailLogin: process.env.REACT_APP_EMAIL_LOGIN ? 'Set' : 'Missing',
            emailPass: process.env.REACT_APP_PASS ? 'Set' : 'Missing'
        });

        const emailpass = process.env.REACT_APP_PASS;
        const emaillogin = process.env.REACT_APP_EMAIL_LOGIN;

        if (!emailpass || !emaillogin) {
            console.error('Missing environment variables');
            return res.status(500).json({ success: false, message: 'Server configuration error' });
        }

        console.log('Creating transporter...');
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: emaillogin,
                pass: emailpass
            },
        });

        const mailOptions = {
            from: user_email,
            to: emaillogin,
            subject: `Message from ${from_name}`,
            text: `Name: ${from_name}\nEmail: ${user_email}\nPhone: ${contact_number}\n\nMessage:\n${message}`
        };

        console.log('Sending email...');
        const response = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', response.messageId);

        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('API Error details:', error.message, error.stack);
        res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
}