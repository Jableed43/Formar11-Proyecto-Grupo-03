const nodemailer = require('nodemailer');

let controller = {
    home: (req, res, next) => {
        res.render('index');
    },
    contacto: (req, res, next) => {
        res.render('contacto');
    },
    contactoSend : (req, res) => {        
          let { Nombre, email, subject} = req.body;
    
          return new Promise((resolve,reject)=>{
          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
		    port: 465,
		    secure: true,
		    auth: {
			user: process.env.GMAIL_USER, // this should be YOUR GMAIL account
			pass: process.env.PASSWORD // this should be your password
		}
          });
    
          let mail = {
            to: process.env.GMAIL_USER,
            subject: "Consulta",
            text: `Recibimos un mensaje de ${Nombre}
                Email: ${email}
                Mensaje: ${subject}`
          };
    
          transporter.sendMail(mail, (error, info) => {
            if (error) {
                console.log("error is "+error);
               resolve(false); // or use rejcet(false) but then you will have to handle errors
            } 
           else {
               console.log('Email sent: ' + info.response);
               resolve(true);               
            }
            return res.redirect('/')   
           });
            })               
    },
    menu: (req, res, next) =>{
        res.render('menu');
    },
    beneficios: (req, res, next) => {
        res.render('beneficios');
    }
}

module.exports = controller