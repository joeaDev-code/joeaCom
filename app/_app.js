'use client'

// pages/_app.js
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader'; // Importez le composant Loader
import Router from 'next/router';
import '../styles/globals.css'; // Importez les styles globaux

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true); // Active le loader lors du changement de route
    };

    const handleRouteChangeComplete = () => {
      setLoading(false); // Désactive le loader une fois le changement terminé
    };

    // Attachez les événements au routeur de Next.js
    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeComplete);

    // Cleanup pour éviter les fuites de mémoire
    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeComplete', handleRouteChangeComplete);
      Router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
      {loading && <Loader />} {/* Affiche le Loader tant que loading est true */}
      <Component  />
    </>
  );
}

export default MyApp;
