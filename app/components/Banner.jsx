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
        <Image src={IMG_BANNER3}/>
      </motion.div>
      <motion.div
      initial={{y:'100vh'}}
      animate={{y:0}}
      transition={{duration:1.5, delay:1.5}}
       className="img-banner">
        <Image src={IMG_BANNER2}/>
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
      <div className="text">
        <motion.p
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, scale:1.1, color: "#00B2A9" }}
          transition={{ delay: 6.5, duration: 2 }}
          // exit={{display: 'none'}}
        >
          Marketing
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, scale:1.1, color: "#003366" }}
          transition={{ delay: 7.5, duration: 2 }}
        >
          Communication
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: 1,
            scale:1.1,
            color: "white",
            textShadow: "2px 2px 2px rgba(0,51,102,0.86)",
          }}
          transition={{ delay: 8.5, duration: 2 }}
        >
          Infographie
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: 1,
            scale:1.1,
            color: "black",
          }}
          transition={{ delay: 9.5, duration: 2 }}
        >
          Et bien d'autre service ...
        </motion.p>
      </div>
      <motion.div className="container-icon"
        initial={{opacity:0, scale:0.3}}
        animate={{opacity: 1, scale: 1}}
        transition={{delay: 11.5, duration: 1.5}}
      >      
       
        <Image src={ICON_MEGAP} className="icon megaphone"/>
        <Image src={ICON_GRAPH} className="icon design"/>
        <Image src={ICON_DIGITAL} className="icon digital"/>   
      </motion.div>
     
    </div>
  );
}

export default Banner;
