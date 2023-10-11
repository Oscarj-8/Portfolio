const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;
const emailPassword = process.env.EMAIL_PASSWORD;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle CORS (if your React app is on a different domain)
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://abdulahimuhammedportfolio.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Define a route to handle form submissions
app.post("/sendEmail", (req, res) => {
  const { fullName, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "mabdulahi954@gmail.com",
      pass: emailPassword,
    },
  });

  const mailOptions = {
    from: "mabdulahi954@gmail.com",
    to: "mabdulahi954@gmail.com",
    subject: subject,
    text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
