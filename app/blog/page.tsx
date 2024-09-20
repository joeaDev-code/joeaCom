'use client'

import React, { useEffect, useState } from 'react'

import Banner from './components/Banner'
import Content from './components/Content'


function Page() {
  return (
    <>
    <head>
      <title> Blog</title>
    </head>
    <div>
      <Banner />
      <Content />
    </div>
    </>
  )
}

export default Page