var nodemailer = require('nodemailer');

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'user@email.com',
        pass: 'yourpassword'
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

var mailOptions = {
    from: 'user@emil.com',
    to: 'usera@email.com',
    subject: 'Sending first Email using Node.js',
    text: 'That was easy!'
    //to use html add html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(err, info){
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent:  ' + info.response);
    }
});