'use client'

import React, { useEffect, useState } from 'react'

import Banner from './components/Banner'
import Content from './components/Content'

import Loader from '../components/Loader'

function page() {
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
      <Content />
    </div>
  )
}

export default page