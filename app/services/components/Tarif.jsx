import React from 'react'

import {DataService} from '../../data/DataService'

export const Tarif = ({id}) => {
  const fetchData = DataService.find((data) => data.id === id);
  return (
    
    <div className="tarif">
    <h1 className='title'>Tarif</h1>
    <div className="container">
      {fetchData.pricing.map((tariff, index) => (
        <div key={index} className="tariff-card">
          <h1 className="title"> {tariff.category}</h1>
          <span className="price">{tariff.price}</span>
          <p>{tariff.details}</p>
        </div>
      ))}
    </div>
  </div>
  )
}
