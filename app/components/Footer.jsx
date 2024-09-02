"use client"

import React from 'react'
import Link from 'next/link'

import Qr_code from './Qr_code'
function Footer() {
  return (
    <div id='Footer'>
        <div id='logo'>
        <Link href='/' onClick={() => setNameNav('')}> <h1 className='item'><span>JOEA <b>.</b></span><span>COM</span></h1></Link>
        </div>
        <div className="container">
            
        <div className="lien">
            <h2 className="title-footer"> Lien utile <span></span></h2>
            <ul>
                <Link href='/'><li>Accueil</li></Link>
                <Link href='/services'><li>Services</li></Link>
                <Link href='/blog'><li>Blog</li></Link>
                <Link href='/contact'><li>Nous contacter</li></Link>
                <li>Partager </li>
            </ul>
        </div>
        <div className="coordonnees">
            <h2 className="title-footer"> Nos coordonnées <span></span></h2>
            <ul>
                <li> joeagroup@gmail.com</li>
                <li> Numero de telephone</li>
                <li> Adresse Localisation</li>
            </ul>
        </div>
        <div className="follow">
            <h2 className="title-footer">
                Nous suivre <span></span>
            </h2>
            <ul>
                <li> Facebook</li>
                <li>Insta</li>
                <li>Tweet</li>
            </ul>
        </div>
        </div>
        <Qr_code />
    </div>
  )
}

export default Footer