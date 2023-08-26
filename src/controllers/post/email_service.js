const nodemailer = require('nodemailer');
const { User } = require('../../db')

const getUserEmail = async (userId) => {

    const user = await User.findOne({ where: { id: userId } });
    if(!!user) return user.email;
    console.log('user.email', user.email)
};

const sendEmail = async (userId) => {
    const recipientEmail = await getUserEmail(userId);
    console.log('recipientEmail', recipientEmail)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'selpro.informacion@gmail.com',
            pass: 'vldobrtpfiygddwg',
        },
    });

    const mailOptions = {
        from: 'selpro.informacion@gmail.com',
        to: recipientEmail,
        subject: 'Bienvenido!',
        text: 'Su cuenta ha sido creada exitosamente!.',
        html: '<h1>Si usted recive este email, es porque usted tiene un problema con la cocaina, por favor dejela</h1>',
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = {
    sendEmail,
};
