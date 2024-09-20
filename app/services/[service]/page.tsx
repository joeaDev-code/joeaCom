'use client';

import React from 'react';
import { Banner } from '../components/Banner';
import { Content } from '../components/Content';
import { Tarif } from '../components/Tarif';
import Testimony from '../components/Testimony';
import ContactUs from '@/app/components/ContactUs';
import { DataService } from '@/app/data/DataService';
import Head from 'next/head'; // Importer le composant Head de Next.js

const Page = ({ params }: { params: { service: string } }) => {
  const id = Number(params.service);

  // Trouver le service correspondant via l'id
  const fetchService = DataService.find((data) => data.id === id);

  console.log(fetchService?.title)
  return (
    <>
      {/* Utilisation de Head pour définir dynamiquement le titre de l'onglet */}
      <head>
        <title>{fetchService ? fetchService.title : 'Service'}</title>
      </head>
      <div> 
        <Banner id={id} />
        <Content id={id} />
        <Tarif id={id} />
        <Testimony id={id} />
        <ContactUs />
      </div>
    </>
  );
};

export default Page;
