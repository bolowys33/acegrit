import nodemailer from "nodemailer";
import { renderToString } from "react-dom/server";
import EmailTemplate from "./Email";
import React from "react";

interface Admin {
    email: string;
    firstname: string;
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.NODEMAILER_PASS,
    },
});

export async function sendMail(admin: Admin, token: string) {
    try {
        const user = { name: admin.firstname, email: admin.email };

        const html = renderToString(
            React.createElement(EmailTemplate, { user, token })
        );

        const mailOption = {
            from: "Ace & Grit LP",
            to: admin.email,
            subject: "Reset your password",
            html,
        };

        const result = await transporter.sendMail(mailOption);
        console.log(result.accepted);
    } catch (error) {
        throw new Error("Error sending recovery email");
    }
}
