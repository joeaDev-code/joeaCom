import React from 'react'

import { DataService } from '@/app/data/DataService'

import Image from 'next/image'

export const Banner = ({id}) => {

    const fetchData = DataService.find(data=>
        data.id === id
    )
  return (
    <div id='Banner'>
        <div className="text-container-s">
        <h1>
            {fetchData.title}
        </h1>
        <p> {fetchData.subtitle} </p>
        </div>
        <div className="img-bg-container">
           {fetchData.imageBanner && <Image src={fetchData.imageBanner}/>} 
        </div>
    </div>
  )
}
