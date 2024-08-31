import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv"
import cors from "cors";

dotenv.config();

const app = express();


// const BaseURL = "http://localhost:5173";
const BaseURL = "https://vanafolio.vercel.app/";

app.use(cors({ origin: BaseURL, credentials: true }));

app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

app.get("/", async (req, res) => {
  res.send("<h1>VanaFolio Server </h1>");
});

app.post("/contact", async (req, res) => {
  console.log(req.body);

  const { name, email, message } = req?.body;

  await transporter
    .sendMail({
      from: "vanamuthuvana22@gmail.com",
      to: "vanamuthuvjob@gmail.com",
      subject: "Profolio Mail",
      html: `
                  <html>
                      <h1> VanaFolio </h1>
                      <p>From : ${name}</p>
                      <p>Email : ${email}</p>
                      <p><b>Message : </b></p>
                      <p>${message}</p>
                  </html>
              `,
    })
    .then(() => {
      console.log("Email Sent");
      res.json({
        message:
          "Thank you for your message. We have received it and will get back to you shortly.",
        variant: "success",
      });
    })
    .catch((error) => {
      console.log(error.message);
      res.json({
        message:
         "Error sending message. Please try again or email us at vanamuthuvjob@gmail.com.",
        variant: "error",
      });
    });
});

app.listen(5000, () => {
  console.log("Server is listening...");
});
