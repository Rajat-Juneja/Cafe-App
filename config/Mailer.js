const nodemailer = require('nodemailer');

function SendMail(message){

    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: '1804rajat@gmail.com',
                   pass: 'tataphoton'
               }
           });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Developers " <1804rajat@gmail.com>', // sender address
            to: 'junejarajat98@gmail.com', // list of receivers
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