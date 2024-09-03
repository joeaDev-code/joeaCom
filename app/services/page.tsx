'use client'

import React, { useEffect, useState } from "react";
import head from "next/head";
import {Banner} from './components/Banner'

import Loader from '../components/Loader'

function Page() {
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
    <>
      <head>
        <title> Service</title>
      </head>
      <div>
      </div>
    </>
  )
}

export default Page;
