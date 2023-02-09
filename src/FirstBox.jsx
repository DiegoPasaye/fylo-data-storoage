import React from 'react'
import logo from './images/logo.svg'
import page from './images/icon-document.svg'
import folder from './images/icon-folder.svg'
import upload from './images/icon-upload.svg'
import './styles.css'

export const FirstBox = () => {
  return (
    <div className='first-box'>
      <img className='logo' src={logo} alt="Logo icon" />

      <div className='first-logos'>
        <img src={page} alt="page icon" />
        <img src={folder} alt="folder icon" />
        <img src={upload} alt="upload icon" />
      </div>
    </div>
  )
}
