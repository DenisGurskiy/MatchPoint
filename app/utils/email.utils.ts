import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

require("dotenv").config();

console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_PORT:", process.env.SMTP_PORT);
console.log("SMTP_USER:", process.env.SMTP_USER);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
} as SMTPTransport.Options);

export const sendEmail = (email: string, password: string) => {
  const html = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h1 style="color: #4CAF50;">Your account successfully created!</h1>
    <p>Your password:</p>
    <p style="font-size: 1.2em; font-weight: bold; color: #FF5722;">${password}</p>
    <p style="font-size: 0.9em; color: #999;">Please keep this password in a safe place.</p>
  </div>`;

  console.log("send email...");

  return transporter.sendMail({
    from: "SportSpace Auth API",
    to: email,
    subject: "Create account",
    html,
  });
};
