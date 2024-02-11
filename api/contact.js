const nodemailer = require("nodemailer");
const emailPassword = process.env.EMAIL_PASSWORD;

module.exports = async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  if (req.method === "POST") {
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "mabdulahi954@gmail.com",
          pass: emailPassword,
        },
      });

      const mailOptions = {
        from: email,
        to: "mabdulahi954@gmail.com",
        subject: subject,
        text: `
        Name: ${fullName},
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: "Error sending email" });
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).json({ message: "Email sent successfully" });
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error processing the form" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
