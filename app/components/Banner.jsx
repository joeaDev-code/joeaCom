'use client'

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, easeOut, delay } from "framer-motion";
import ICON_DIGITAL from '../assets/icons/digital.png';
import ICON_MEGAP from '../assets/icons/megaphone.png';
import ICON_GRAPH from '../assets/icons/graphic-design.png';
import IMG_BANNER3 from '../assets/images/img-banner-accueil3.jpg';
import IMG_BANNER2 from '../assets/images/img-banner-accueil2.jpg';
import Image from "next/image";

import {Link} from 'react-scroll'

function Banner() {
  const [isOver, setIsOver] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setIsOver(false)
    },6000)
  },[isOver])
  return (
    < div id="Banner">
        <motion.div className="title-banner-accueil"> 
        <motion.h1
        initial={{opacity:0, originX:0}}
        animate={{opacity:1, }}
        transition={{duration:1.5, ease:'easeInOut'}}
        exit={{scale:0}}
        > Bienvenue chez JOEA COM</motion.h1>
        <motion.p
        initial={{opacity:0, originX:0}}
        animate={{opacity:1, }}
        transition={{ delay: 2, duration:1.5, ease:'easeInOut'}}
        >Votre partenaire strategique où vos ambitions prennent vie</motion.p>
        </motion.div>

      <div className="img-c">
      <motion.div
      initial={{y:'100vh'}}
      animate={{y:0}}
      transition={{duration:1.5}}
       className="img-banner">
        <Image src={IMG_BANNER3} alt="image banner"/>
      </motion.div>
      <motion.div
      initial={{y:'100vh'}}
      animate={{y:0}}
      transition={{duration:1.5, delay:1.5}}
       className="img-banner">
        <Image src={IMG_BANNER2} alt="image banner"/>
      </motion.div>
      </div>

      <div className="btn-container">
        <Link to='ContactUs' smooth={true} duration={300}>
          <motion.button
        initial={{opacity:0, originX:0}}
        animate={{opacity:1, scale:[1, 1.2, 1] }}
        transition={{ delay: 3.5, duration:1.5, ease:'easeInOut'}}
          
          > Contacter</motion.button>
        </Link>
      </div>
     
    </div>
  );
}

export default Banner;
