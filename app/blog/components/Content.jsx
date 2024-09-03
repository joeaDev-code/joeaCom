'use client'

import React from 'react'

import { blogArticles } from '../../data/DataBlog'

import Link from 'next/link'

import Image from 'next/image'

function Content() {
  return (
    <div id='Articles'>
        <h1 className="title">
            Nos articles 
        </h1>
        <div className="container">
        {blogArticles.map(dt=>
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
    </div>
  )
}

export default Content