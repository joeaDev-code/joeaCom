// pages/api/contact.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Nouveau message du site Web PerfectBody+ `,
        text: message,
        html: ` <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
    <h1 style="color: #2c3e50;">Nouveau Message de ${name}</h1>
    <p><strong>Adresse email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p style="background-color: #f9f9f9; padding: 10px; border-left: 3px solid #3498db; border-radius: 5px;">
      ${message}
    </p>
    <footer style="margin-top: 20px; font-size: 0.9em; color: #888;">
      <p>&copy;2024 joaDev-code. tous droits reservés  </p>
    </footer>
  </div>`,
      });

      res.status(200).json({ message: "Email envoyé avec succès" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Échec de l'envoi de l'email" });
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}
