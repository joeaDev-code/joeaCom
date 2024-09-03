'use client'

import React from 'react'

import Image from 'next/image'

import IMG1 from '../../assets/images/imgBannerContact.jpg'

import Link from 'next/link'

import { motion } from 'framer-motion'

function Banner() {
  return (
    <div id="BannerBlog">
        <motion.div
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{delay:1.8, duration:1.5, ease:'easeOut'}}
        className="img-container">
            <Image src={IMG1} alt="image banner"/>
        </motion.div>
        <div className="text-container">
            <h1> NOUS CONTACTER </h1>
            <motion.p
              initial={{y: 100, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{delay:0.2, duration:1.5, ease:'easeInOut'}}
            
            >Avez-vous une preoccupation ? Besoin de plus d&apos;information ?</motion.p>
        </div>
    </div>
  )
}

export default Banner