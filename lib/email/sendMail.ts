import nodemailer from "nodemailer";
import { renderToString } from "react-dom/server";
import EmailTemplate from "./Email";
import React from "react";
import { generateHtml } from "./generateHtml";

interface Admin {
    email: string;
    name: string;
}

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Gmail SMTP server
    port: 465, // Gmail SMTP port for SSL/TLS
    secure: true, // use SSL/TLS
    auth: {
      user: process.env.AUTH_EMAIL, // your Gmail email address
      pass: process.env.NODEMAILER_PASS, // the App Password you generated
    },
  });

export async function sendMail(admin: Admin, token: string) {
    try {
        const user = { name: admin.name, email: admin.email };

        const html = generateHtml(user, token);
        console.log(html);

        const mailOption = {
            from: "Ace & Grit LP",
            to: admin.email,
            subject: "Reset your password",
            html,
        };

        const result = await transporter.sendMail(mailOption);
        console.log(result.response);
    } catch (error) {
        throw new Error("Error sending recovery email");
    }
}
