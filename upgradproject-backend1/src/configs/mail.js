const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "2b3df4dd6ea59e", // generated ethereal user
      pass:  "869b9d9971f4e8", // generated ethereal password
    },
  });

  module.exports = transporter