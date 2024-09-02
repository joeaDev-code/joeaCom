import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// Configure le transporteur de mails
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utilisez le service de votre choix
  auth: {
    user: process.env.EMAIL_USER, // Adresse email de l'expéditeur
    pass: process.env.EMAIL_PASS, // Mot de passe de l'expéditeur
  },
});

export const config = {
  api: {
    bodyParser: false, // Désactive le parseur de corps par défaut pour utiliser formidable
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const form = new IncomingForm({
      keepExtensions: true, // Conserve les extensions des fichiers
      uploadDir: path.join(process.cwd(), '/public/uploads'), // Dossier d'upload des fichiers
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err); // Log l'erreur pour le débogage
        return res.status(500).json({ error: 'Une erreur est survenue lors du traitement de la demande.' });
      }

      console.log('Fields:', fields);
      console.log('Files:', files);

      // Préparer le contenu de l'email
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL, // Adresse email du destinataire
        subject: 'Nouvelle Candidature pour Rejoindre l\'Équipe',
        html: `
          <h1>Détails de la Candidature</h1>
          <p><strong>Nom:</strong> ${fields.name}</p>
          <p><strong>Email:</strong> ${fields.email}</p>
          <p><strong>Téléphone:</strong> ${fields.phone}</p>
          <p><strong>Poste Souhaité:</strong> ${fields.position}</p>
          <p><strong>Lien vers Portfolio:</strong> ${fields.portfolioLink || 'Non fourni'}</p>
          <p><strong>Lettre de Motivation:</strong> <a href="${files.coverLetter[0].filepath}">Télécharger</a></p>
          <p><strong>CV:</strong> <a href="${files.cv[0].filepath}">Télécharger</a></p>
        `,
      };

      // Envoyer l'email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error); // Log l'erreur pour le débogage
          return res.status(500).json({ error: 'Une erreur est survenue lors de l\'envoi de l\'email.' });
        }
        console.log('Email sent:', info.response); // Log la réponse de l'email
        return res.status(200).json({ message: 'Candidature envoyée avec succès !' });
      });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
