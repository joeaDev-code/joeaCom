'use client'

import React, { useEffect, useState } from 'react'

import Banner from './components/Banner'
import Content from './components/Content'

import Loader from '../components/Loader'

function Page() {
  return (
    <div>
      <Banner />
      <Content />
    </div>
  )
}

export default Page