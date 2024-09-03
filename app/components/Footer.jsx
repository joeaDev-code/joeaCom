"use client"

import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-solid-svg-icons'
import Qr_code from './Qr_code'

import { DataService } from '../data/DataService'

import FB_ICON from '../assets/icons/facebook-icon.png'
import INSTA_ICON from '../assets/icons/instagram-icon.png'
import TW_ICON from '../assets/icons/twitter-icon.png'

import Image from 'next/image'

function Footer() {
  return (
    <div id='Footer'>
      <div id='logo'>
        <Link href='/' onClick={() => setNameNav('')}>
          <h1 className='item'><span>JOEA <b>.</b></span><span>COM</span></h1>
        </Link>
      </div>
      <div className="container">
        <div className="lien">
          <h2 className="title-footer">Lien utile <span></span></h2>
          <ul>
            <li><Link href='/'>Accueil</Link></li>
            <li>Services
              <ul className='plus'>
                {DataService.map((p, index)=>
                <Link href={`/services/${p.id}`} key={index}>
                  <li >  {p.title}</li>
                </Link>
                )}
              </ul>
            </li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/contact'>Nous contacter</Link></li>
          </ul>
        </div>
        <div className="coordonnees">
          <h2 className="title-footer">Nos coordonnées <span></span></h2>
          <ul>
            <li><FontAwesomeIcon icon={faEnvelope} /> joeagroup@gmail.com</li>
            <li><FontAwesomeIcon icon={faPhone} /> +225 01 23 45 67</li>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Rue Exemple, Abidjan, Côte d&apos;Ivoire</li>
          </ul>
        </div>
        <div className="follow">
          <h2 className="title-footer">Nous suivre <span></span></h2>
          <ul>
            <li><Image src={FB_ICON} alt="facebook_icon" /></li>
            <li><Image src={INSTA_ICON} alt="instagram-icon"/> </li>
            <li><Image src={TW_ICON} alt="twitter_icon" /></li>
          </ul>
        </div>
      </div>
      <Qr_code />
    </div>
  )
}

export default Footer
