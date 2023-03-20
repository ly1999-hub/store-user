const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const my_email=process.env.MY_EMAIL

// send email with SendGrid
module.exports.SendEMail= async (to,from,subject, html) =>{
    const msg = {
        to,
        from,
        subject,
        html,
    };

    try {
        await sgMail.send(msg);
        console.log('Email sent successfully');
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.error(error.response.body)
        }
    }
}