'use client'

import React, { useEffect, useState } from 'react'

import { Banner } from '../components/Banner'
import { Content} from '../components/Content'
import {Tarif} from '../components/Tarif'
import Testimony from '../components/Testimony'
import ContactUs from '@/app/components/ContactUs'

import Loader from '../../components/Loader'

const Page = ({params}: { params: { service: string } }) => {

    const id= Number(params.service)

    
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
        <Banner id={id} /> 
        <Content id={id}/>
        <Tarif id={id}/>
        <Testimony  id={id}/>
        <ContactUs />
    </div>
  )
}

export default Page