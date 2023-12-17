import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import "./style.css"
import SomaliQoute from './components/SomaliQoute'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div>
  <Header/>
  <SomaliQoute/>
  <Footer/>
 </div>

)
