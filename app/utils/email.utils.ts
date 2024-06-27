import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { Booking } from "../types/booking";
import { format } from "date-fns";

require("dotenv").config();

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

  return transporter.sendMail({
    from: "SportSpace Auth API",
    to: email,
    subject: "Create account",
    html,
  });
};

export const sendEmailBookingInfo = (
  email: string,
  slots: Record<string, Booking[]>
) => {
  const html = Object.keys(slots)
    .map((date) => {
      const slotsHtml = slots[date]
        .map((slot) => {
          const startTime = new Date();
          const [hour, minute] = slot.time.split(":").map(Number);
          startTime.setHours(hour, minute, 0);

          const endTime = new Date(startTime);
          endTime.setHours(startTime.getHours() + 1);

          return `
            <p style="font-size: 14px; line-height: 1.35em; color: gray;">
              ${format(startTime, "HH:mm")} - ${format(endTime, "HH:mm")}
            </p>
          `;
        })
        .join("");

      return `
        <div>
          <p style="font-size: 14px; line-height: 1.35em; color: gray;">
            ${format(new Date(date), "EEE, dd MMMM, yyyy")}
          </p>
          ${slotsHtml}
        </div>
      `;
    })
    .join("");

  return transporter.sendMail({
    from: "SportSpace Auth API",
    to: email,
    subject: "Booking confirmation",
    html,
  });
};

export const ContactUs = (name: string, email: string, question: string) => {
  const html = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h1 style="color: #4CAF50;">Name: ${name}</h1>
    <p style="font-size: 1.2em; font-weight: bold;">Email: ${email}</p>
    <p style="font-size: 1.2em; font-weight: bold;">Question: ${question}</p>    
  </div>`;

  return transporter.sendMail({
    from: "SportSpace Auth API",
    to: process.env.SMTP_USER,
    subject: "Question from client",
    html,
  });
};
