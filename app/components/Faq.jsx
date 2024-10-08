'use client'

import React, { useEffect, useState } from 'react'

import {faqData} from '../data/DataFaq'

function Faq() {

    const [indexAnswer, setIndexAnswer] = useState(0)
    const [isClick, setisClick] = useState(false)

    const handleClick= id =>{
        setisClick(!isClick)
        setIndexAnswer(id)
    }

    useEffect(()=>{
        if(isClick === false){
            setIndexAnswer(0)
        }
    }, [isClick])
  return (
    <div className='faq-container'>
        <h1 className='title'> Questions frequentes </h1>
        {faqData.slice(0,5).map((data, index)=>
        <div className="boxFaq" key={index}>
            <div className="question" onClick={()=>handleClick(data.id)}>
                <span>
                    {data.question} 
                </span>
                <span className='icon'> 
                    {indexAnswer === data.id && isClick ? '-' : '+'}
                </span>
            </div>
           {indexAnswer === data.id && <div className="answer">{data.answer}</div>} 
        </div>
        )}
    
    </div>
  )
}

export default Faq