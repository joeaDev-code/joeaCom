"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DataService } from "../data/DataService";
import Link from "next/link";

function SectionWhatDo() {
  return (
    <div id="SectionWhatDo">
      <h1 className="title">
        Ce que nous faisons ... <span></span>
      </h1>
      <div className="container">
        <motion.div
          className="row"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
        >
          {DataService.slice(0, 3).map((item) => (
            <Link href={`services/${item.id}`} key={item.id}>
              <motion.div className="box">
                <div className="img-container">
                  <Image src={item.imageDesc} alt={item.title} />
                </div>

                <div className="text">
                  <h5>{item.title}</h5>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        <motion.div
          className="row"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
        >
          {DataService.slice(0, 3).map((item) => (
            <Link href={`services/${item.id}`} key={item.id}>
              <motion.div className="box">
                <div className="img-container">
                  <Image src={item.imageDesc} alt={item.title} />
                </div>

                <div className="text">
                  <h5>{item.title}</h5>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWhatDo;
