import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Sobre from './components/sobre/Sobre'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



const app = () => {
  return (
   <>
        <Header />
        <Nav/>
        <Sobre/>
        <Experience/>
        <Portfolio/>
        <Contact/>
        <Footer/>


   </>
  )
}

export default app