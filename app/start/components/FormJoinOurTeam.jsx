"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormJoinOurTeam() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    portfolioLink: "",
    coverLetter: null, // Pour le fichier lettre de motivation
    cv: null, // Pour le fichier CV
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "cv" || name === "coverLetter" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    }

    const res = await fetch("/api/join", {
      method: "POST",
      body: formDataToSend,
    });

    if (res.ok) {
      toast.success("Votre candidature a été envoyée avec succès !");
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        portfolioLink: "",
        coverLetter: null,
        cv: null,
      });
    } else {
      toast.error(
        "Une erreur est survenue lors de l'envoi de votre candidature."
      );
    }
  };

  return (
    <div id="JoinOurTeam">
      <ToastContainer />
      <div className="container">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="title">
              <h1>Rejoignez Notre Équipe</h1>
              <p>Remplissez ce formulaire pour nous rejoindre</p>
            </div>
            <div className="form-group">
              <label htmlFor="name">
                Nom Complet <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Entrez votre nom complet"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Adresse Électronique <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Entrez votre adresse électronique"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                Numéro de Téléphone <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Entrez votre numéro de téléphone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">
                Poste Souhaité <span className="required">*</span>
              </label>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Entrez le poste pour lequel vous postulez"
                required
                value={formData.position}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="portfolioLink">
                Lien vers votre Portfolio
              </label>
              <input
                type="url"
                name="portfolioLink"
                id="portfolioLink"
                placeholder="Entrez le lien vers votre portfolio en ligne"
                value={formData.portfolioLink}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="coverLetter">
                Lettre de Motivation (Téléchargez le fichier)
              </label>
              <input
                type="file"
                name="coverLetter"
                id="coverLetter"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cv">
                CV (Téléchargez votre CV) <span className="required">*</span>
              </label>
              <input
                type="file"
                name="cv"
                id="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Envoyer ma Candidature</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormJoinOurTeam;
