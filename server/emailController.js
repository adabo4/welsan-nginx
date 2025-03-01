require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {

    const { from_name, user_email, message, contact_number } = req.body;

    const emailpass = process.env.REACT_APP_PASS;
    const emaillogin = "infowelsan@gmail.com"


    const mailOptions = {
        from: user_email,
        to: emaillogin,
        subject: `Message from ${from_name}`,
        text: `Name: ${from_name}\nEmail: ${user_email}\nPhone: ${contact_number}\n\nMessage:\n${message}`
    };

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emaillogin,
            pass: emailpass
        },
    });


    try {
        const response = await transporter.sendMail(mailOptions)
        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }


}

module.exports = sendEmail;