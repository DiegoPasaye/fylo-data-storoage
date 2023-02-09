import React from 'react'

export const SecondBox = () => {
  return (
    <div className='second-box'>
        <p className='space'>You´ve used <span>815 GB</span> of your storoage</p>
        <div className='bar'><span className='circle-bar'></span> <span className='rest-bar'></span></div>  

        <div className='storoage'>
            <p>0 GB</p>
            <p>1000 GB</p>
        </div>

        <div className='storoage-left'>
            <p>185 <span>GB LEFT</span></p>
        </div>
    </div>
  )
}
