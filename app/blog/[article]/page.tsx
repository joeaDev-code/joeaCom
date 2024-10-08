'use client'

import React, { useEffect, useState } from 'react'
import { blogArticles } from "../../data/DataBlog"

import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'


function Page({ params }: { params: { article: string }}) {
  const { scrollYProgress } = useScroll()
  const [isFixed, setIsFixed] = useState(false)

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      setIsFixed(scrollPosition > (viewportHeight * 0.6))
    }

    window.addEventListener("scroll", handleScroll)
    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Convertir params.id en nombre si nécessaire
  const articleId = Number(params.article)

  // Recherchez l'article correspondant à l'id
  const fetchArticle = blogArticles.find(data => data.id === articleId)

  return (
    <div>
      {fetchArticle ? (
        <div className="each">
          <div className="BannerItemArticle">
            
            <h1>{fetchArticle.title}</h1>
            <h2>{fetchArticle.description}</h2>
          </div> 
   
          <div className="content">
            <div className="img-container">
                IMAGE NON DISPONIPLE POUR L&apos;INSTANT
            </div>
            
          <div className="info">
            <h4> {fetchArticle.date} </h4>
          </div>
            {fetchArticle.content.map(dt =>
              <div className="item" key={dt.subtitle}>
                <h3>{dt.subtitle}</h3>
                <p>{dt.text}</p>
              </div>
            )}
          </div>
          <div className="navigation">
            <Link href="/blog">
              <button>
                <FontAwesomeIcon className="icon" icon={faHome} />
                 Articles
                 </button>
            </Link>
            <div></div>
            <Link href={`/blog/article/${fetchArticle.id + 1}`}>
              <button>Prochain article 
                <FontAwesomeIcon className='icon' icon={faChevronRight} />
              </button>
            </Link>
          </div>

          <div className="avis">
            <div className="container"> 
            <h1> Cet article vous a t-il été utile ?</h1>
            <div className="btn-container">
              <button> OUI </button>
              <button>NON</button>
            </div>
            </div>
          </div>
          
          <div className="commentaire">
            <h1> Laissez un commentaire </h1>
            <form action="">
              <label htmlFor="comment"> Commentaire :</label>
              <textarea name="comment" id="comment"></textarea>
              <button> Envoyer</button>
            </form>
          </div>
        </div>
      ) : (
        <p>Article non trouvé</p>
      )}
    </div>
  )
}

export default Page
