'use client'

import React from 'react'

import Image from 'next/image'

import IMG1 from '../../assets/images/imgBannerBlog.jpg'

import Link from 'next/link'

import { motion } from 'framer-motion'

function Banner() {
  return (
    <div id="BannerBlog">
      <Link href="/"> 
        <div id="logo">JOA COM </div>
      </Link>
        <motion.div
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{delay:1.8, duration:1.5, ease:'easeOut'}}
        className="img-container">
            <Image src={IMG1} alt="image_banner"/>
        </motion.div>
        <div className="text-container">
            <h1> BLOG </h1>
            <motion.p
              initial={{y: 100, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{delay:0.2, duration:1.5, ease:'easeInOut'}}
            
            >&ldquo;Inspiration et Connaissance : Des Articles pour Affiner Votre Entraînement&ldquo;</motion.p>
        </div>
    </div>
  )
}

export default Banner