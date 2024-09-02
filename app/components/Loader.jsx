// components/Loader.js
import React from 'react';
import '../loader.scss'; // Assurez-vous que le fichier CSS correct est importé

function Loader() {
  return (
    <div className="loader-container">
      <div className="wave">
        <div className="wave-circle"></div>
        <div className="wave-circle"></div>
      </div>
    </div>
  );
}

export default Loader;
