'use client'

import React, { useState, useEffect } from 'react';
import './index.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader'; // Assurez-vous d'avoir un composant Loader

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Utiliser l'état pour afficher ou cacher le Loader
  const [loading, setLoading] = useState(true);

  // Utiliser useEffect pour déclencher un timer de 5 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Cacher le loader après 5 secondes
    }, 5000);

    // Nettoyer le timer si le composant est démonté avant la fin du timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {loading ? (
          <Loader /> // Afficher le loader pendant 5 secondes
        ) : (
          <>
            <Header />
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
