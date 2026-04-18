const nodemailer = require('nodemailer');

const sendEmail = async ({ to, subject, html }) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE || 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: `"CodeProfile Tracker" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html
        });

        console.log(`[Email] Sent to ${to}: ${subject}`);
        return true;
    } catch (error) {
        console.error('[Email] Send failed:', error.message);
        return false;
    }
};

module.exports = sendEmail;
