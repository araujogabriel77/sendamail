const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = 3333;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/src/page'));

const transporter = nodemailer.createTransport({
    service: '', // your email service: gmail, yahoo ...
    auth: {
        user: '', //youremail@gmail.com
        pass: '' //your email password
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/page/index.html'));
    console.log(`Connected at ${PORT}`);
})

app.post('/form', (req, res) => {

    const { email, subject, text } = req.body;

    const mailOptions = {
        from: '', //youremail@gmail.com
        to: `${email}`,
        subject,
        text,
    };
    console.log({ email, subject, text });
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent: to ${mail}, ${info.response}`);
        }
    });
    res.json({ email, subject, text });
});

app.listen(PORT);