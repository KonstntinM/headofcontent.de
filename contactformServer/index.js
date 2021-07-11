const express = require('express')
const nodemailer = require("nodemailer");
const {verify} = require('hcaptcha');
var bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

const hCaptchaSecret = process.env.HCAPTCHA_SECRET || ''

const corsOptions = {
    origin: ["https://www.headofcontent.de","https://headofcontent.de"],
    default: "https://www.headofcontent.de"
}

app.all('*', function(req, res, next) {
        var origin = corsOptions.origin.indexOf(req.header('origin').toLowerCase()) > -1 ? req.headers.origin : corsOptions.default;
        res.header("Access-Control-Allow-Origin", origin);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});

var transporter = nodemailer.createTransport({
    host: "mail.your-server.de",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.redirect('https://headofcontent.de');
})

app.post('/send-mail', (req, res) => {

    verify(hCaptchaSecret, req.body.hCaptcha)
        .then((data) => {
            console.log("hCaptcha Response", data);
            if (data.success) {

                const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                var absender = req.body.absender;
                var name = req.body.name;
                var inhalt = req.body.nachricht;

                if (!absender || !name || !inhalt || !emailPattern.test(absender)) {
                    console.error(absender, name, inhalt, "body", req.body, !absender, !name, !inhalt, )
                    return res.status(400).send({ status: 400, message: 'Bitte überprüfe deine Angaben und versuche es erneut.'})
                }

                absender = absender.replace('{', '(geschweifte Klammer auf)').replace('}', '(geschweifte Klammer zu)').replace(';', '.').replace('"', "\"").replace("'", "\'")
                name = name.replace('{', '(geschweifte Klammer auf)').replace('}', '(geschweifte Klammer zu)').replace(';', '.').replace('"', "\"").replace("'", "\'")
                inhalt = inhalt.replace('{', '(geschweifte Klammer auf)').replace('}', '(geschweifte Klammer zu)').replace(';', '.').replace('"', "\"").replace("'", "\'")

                transporter.verify(function(error, success) {
                    if (error) {
                    res.status(500).send();
                    } else {
                        var message = {
                            from: absender,
                            to: "kontakt@headofcontent.de",
                            subject: "Nachricht von " + name + " über das Kontaktformular auf unserer Webseite",
                            text: inhalt,
                        };
            
                        transporter.sendMail(message, function (err, info) {
                            if (err) {
                                res.status(500).send();
                            } else {
                                res.status(200).send({ stauts: 200, message: 'Deine Nachricht wurde erfolgreich versendet.'})
                            }
                        })
                    }
                });
            } else {
                res.status(400).send({ status: 400, message: "Bitte löse das hCaptcha erneut."})
            }
        })
        .catch(() => res.status(400).send({ status: 400, message: "Bitte löse das hCaptcha und versuche es."}));


})

app.use(function(req, res, next) {
    res.redirect('https://headofcontent.de');
});

app.listen(port, () => {
  console.log(`Contactform server listening to ${port}`)
})
