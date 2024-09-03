"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { QRCode } from "react-qr-code";

const Qr_code = () => {
  return (
    <div id="QR_code">
            <div className="container">  
            <QRCode
              value="https://joea-com.vercel.app/"
              size={100}
              fgColor="#003366" // Couleur du QR Code
              level="L" // Niveau de correction d'erreur ('L', 'M', 'Q', 'H')
            />

        </div>
      
      
    </div>
  );
};

export default Qr_code;
