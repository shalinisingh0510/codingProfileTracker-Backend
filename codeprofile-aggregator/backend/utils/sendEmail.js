const nodemailer = require('nodemailer');

const sendEmail = async ({ to, subject, html }) => {
    try {
        let transporter;
        
        // If EMAIL_USER and EMAIL_PASS are missing, fallback to Ethereal Email for testing
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.log('⚠️  EMAIL_USER or EMAIL_PASS not found in .env. Using Ethereal Email for testing...');
            // Create a test account on the fly
            const testAccount = await nodemailer.createTestAccount();
            transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass,
                },
            });
        } else {
            transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });
        }

        // Wrap sendMail in a timeout because Render free tier blocks SMTP ports
        // which causes the connection to hang indefinitely.
        const sendMailPromise = transporter.sendMail({
            from: `"CodeProfile Tracker" <${process.env.EMAIL_USER || 'test@ethereal.email'}>`,
            to,
            subject,
            html
        });

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('SMTP connection timed out. This usually means your hosting provider (like Render Free Tier) blocks outbound email ports.')), 4000);
        });

        const info = await Promise.race([sendMailPromise, timeoutPromise]);

        console.log(`[Email] Sent to ${to}: ${subject}`);
        
        if (!process.env.EMAIL_USER) {
            console.log(`📧 Test Email URL: ${nodemailer.getTestMessageUrl(info)}`);
        }

        return true;
    } catch (error) {
        console.error('[Email] Send failed:', error.message);
        throw error;
    }
};

module.exports = sendEmail;
