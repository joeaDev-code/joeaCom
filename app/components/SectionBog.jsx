'use client'

import React from 'react'

import {blogArticles} from '../data/DataBlog'

import Image from 'next/image'

import Link from 'next/link'

function SectionBlog() {
  return (
    <div id='SectionBlog'>
      <h1 className="title"> Blog</h1>
      <p>Explorez nos conseils fitness, nutrition et bien-être pour atteindre vos objectifs de forme physique. Restez informé avec nos articles inspirants et pratiques.</p>
      <div className="container">
        {blogArticles.slice(0,3).map(dt=>
         <Link href={`/blog/${dt.id}`} key={dt.id}> 
            <div className="boxBlog" >
        <div className="img-container">
        </div>
        <div className="text-container">
          <h2> {dt.title} </h2>
          <p> {dt.description}</p>
        </div>
        <div className="footer">
          <p className='date'>{dt.date}</p>
        </div>
        </div>
         </Link>   
        
        )}
      </div>

       <Link href="/blog"><button> VOIR PLUS </button></Link>
    </div>
  )
}

export default SectionBlog