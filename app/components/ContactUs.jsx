"use client"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: "BESOIN D'AIDE",
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      toast.success('Votre message a été envoyé avec succès !');
      setFormData({ name: '', email: '', telephone: '', subject: "BESOIN D'AIDE", message: '' });
    } else {
      toast.error('Une erreur est survenue lors de l\'envoi du message.');
    }
  };

  return (
    <div id='ContactUs'>
      <ToastContainer />
      <div className="container">
        <div className='col'>
          <h1>Besoin d'aide <br/> et de renseignements ?</h1>
          <p> Alors renseignez le formulaire </p>
        </div>
        <div className='col'>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom Complet</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder='Entrez votre nom complet'
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adresse Électronique</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='Entrez votre adresse électronique ...'
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Numéro de Téléphone</label>
              <input
                type="tel"
                name="telephone"
                id="phone"
                placeholder='Entrez votre numéro de téléphone ...'
                required
                value={formData.telephone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Votre Message</label>
              <textarea
                name="message"
                id="message"
                placeholder='Entrez votre message'
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type='submit'> Envoyer </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
