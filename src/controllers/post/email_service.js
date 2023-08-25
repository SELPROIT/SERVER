const nodemailer = require('nodemailer');
const { User } = require('../../db')

const getUserEmail = async (userId) => {

    const user = await User.findOne({ where: { id: userId } });
    return user.email;
};

const sendEmail = async (userId) => {
    const recipientEmail = await getUserEmail(userId);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'egdeprada@gmail.com',
            pass: 'ekipipwmqvgnejfn',
        },
    });

    const mailOptions = {
        from: 'egdeprada@gmail.com',
        to: recipientEmail,
        subject: 'Bienvenido!',
        text: 'Su cuenta ha sido creada exitosamente!.',
        html: '<h1>Si usted recive este email, es probable que sea especial</h1>',
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
