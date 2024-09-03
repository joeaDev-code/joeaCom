'use client'

import React from 'react';
import { DataService } from '../../data/DataService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

function Testimony({ id }) {
  const fetchData = DataService.find((data) => data.id === id);

  return (
    <div id="Testimony">
      <h1 className="title">Ils nous ont fait confiance ...</h1>
      <div className="container">
        {fetchData.testimonials.slice(0, 2).map((p, index) => (
          <div className="boxTestimony" key={index}>
            <span>
              <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            <p>{p.feedback}</p>
            <h4>{p.client}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimony;
