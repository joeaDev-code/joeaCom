'use client'

import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import SectionAbout from './components/SectionAbout';
import SectionWhatDo from './components/SectionWhatDo';
import Realisation from './components/Realisation';
import Equipe from './components/Equipe';
import ContactUs from './components/ContactUs';
import SectionBlog from './components/SectionBog';
import Qr_code from './components/Qr_code'
import Loader from './components/Loader'; // Importez le Loader


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule un délai de chargement (par exemple pour charger des données)
    const timer = setTimeout(() => {
      setLoading(false); // Cache le loader après 2 secondes
    }, 2000);

    // Cleanup pour éviter les fuites de mémoire
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Affiche le loader si le site est en cours de chargement
  }

  // Affiche le contenu de la page une fois le chargement terminé
  return (
    <div>
      <Banner />
      <SectionAbout />
      <SectionWhatDo />
      <Realisation />
      <Equipe />
      <SectionBlog />
      <ContactUs />
    </div>
  );
}
