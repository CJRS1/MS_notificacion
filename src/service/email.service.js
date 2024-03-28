const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const fetch = require("node-fetch");

function sendMail(email, contentHtml, subject) {
  console.log('Ingresó al SendMail')
  console.log(email, contentHtml, subject);
  try {
    console.log(process.env.EMAIL_TEST);
    console.log(process.env.PASSWORD_TEST);
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_TEST,
        pass: process.env.PASSWORD_TEST,
      },
    });

    const mailOptions = {
      from: `Plataforma de Licenciamiento UNALM <${process.env.EMAIL_TEST}>`,
      to: email,
      subject: subject,
      html: contentHtml,
    };

    return transporter.sendMail(mailOptions);

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

function sendEmailMassive(users, contentHtml, subject) {
  try {
    users.forEach((email) => {
      sendMail(email, contentHtml, subject);
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

module.exports = {
  sendMail,
  sendEmailMassive,
};
