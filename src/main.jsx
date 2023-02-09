import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstBox } from './FirstBox'
import { SecondBox } from './SecondBox'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <main>
    <FirstBox />
    <SecondBox />
  </main>
)
