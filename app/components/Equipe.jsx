"use client";

import React from 'react';
import { motion } from 'framer-motion'; // Importez framer-motion
import Image from 'next/image';
import IMG_EQUIPE_1 from '../assets/images/equipe1.jpg';
import IMG_EQUIPE_2 from '../assets/images/equipe2.jpg';
import IMG_EQUIPE_3 from '../assets/images/equipe3.jpg';
import IMG_EQUIPE_4 from '../assets/images/equipe4.jpg';

import Link from 'next/link';

function Equipe() {
 
  return (
    <div id='Equipe'>
      <h1 className="title">Notre Équipe <span></span></h1>
      <div className="container" >
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.9 }} // État initial
          whileInView={{ opacity: 1, scale: 1}} // État final selon la visibilité
          transition={{ duration: 1, delay: 0.6, ease: 'easeInOut' }} // Durée et délai de l'animation
        >
          <div className="img-container">
            <Image src={IMG_EQUIPE_1} alt='Équipe 1' />
          </div>
          <h3>Nom 1</h3>
          <h2>Poste 1</h2>
        </motion.div>

        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.9 }} // État initial
          whileInView={{ opacity: 1 , scale: 1  }} // État final selon la visibilité
          transition={{ duration: 1, delay: 1.2, ease: 'easeInOut' }} // Durée et délai de l'animation
        >
          <div className="img-container">
            <Image src={IMG_EQUIPE_2} alt='Équipe 2' />
          </div>
          <h3>Nom 2</h3>
          <h2>Poste 2</h2>
        </motion.div>

        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.9 }} // État initial
          whileInView={{ opacity: 1, scale: 1 }} // État final selon la visibilité
          transition={{ duration: 1, delay: 1.8, ease: 'easeInOut' }} // Durée et délai de l'animation
        >
          <div className="img-container">
            <Image src={IMG_EQUIPE_3} alt='Équipe 3' />
          </div>
          <h3>Nom 3</h3>
          <h2>Poste 3</h2>
        </motion.div>

        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.9 }} // État initial
          whileInView={{ opacity: 1, scale: 1  }} // État final selon la visibilité
          transition={{ duration: 1, delay: 2.4, ease: 'easeInOut' }} // Durée et délai de l'animation
        >
          <div className="img-container">
            <Image src={IMG_EQUIPE_4} alt='Équipe 4' />
          </div>
          <h3>Nom 4</h3>
          <h2>Poste 4</h2>
        </motion.div>
      </div>

      <motion.div
          initial={{ opacity: 0, y: 100 }} // État initial
          whileInView={{ opacity: 1, y:0}} // État final selon la visibilité
          transition={{ duration: 1, delay: 2, ease: 'easeInOut' }} // Durée et délai de l'animation
       className="btn-container">
        <Link href="/join">
          <button> NOUS REJOINDRE </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Equipe;
