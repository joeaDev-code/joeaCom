'use client'

import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import SectionAbout from './components/SectionAbout';
import SectionWhatDo from './components/SectionWhatDo';
import Realisation from './components/Realisation';
import Equipe from './components/Equipe';
import ContactUs from './components/ContactUs';
import SectionBlog from './components/SectionBog';

export default function Home() {
  return (
    <div>
      <Banner />
      <SectionAbout />
      <SectionWhatDo />
      <Realisation />
      <Equipe />
      <SectionBlog />
      <ContactUs />
    </div>
  );
}
