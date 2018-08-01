const nodemailer = require('nodemailer');

function SendMail(message){

    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: '****@gmail.com',
                   pass: '****'
               }
           });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Developers " <****@gmail.com>', // sender address
            to: '****@gmail.com', // list of receivers
            subject: "Customer Feedback/Suggestion/Complaint", // Subject line
            text: message // plain text body
            // html: '<b>Hello world?</b>' // html body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            }
            else{
                console.log(info);
            }
        });
    });
    
    }
    

    module.exports = SendMail;