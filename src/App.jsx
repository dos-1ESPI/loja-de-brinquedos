import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'

// Import Pages
import Inicio from './pages/Inicio'
import Idades from './pages/Idades'
import Categoria from './pages/Categoria'
import Sobre from './pages/Sobre'
import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Idades" element={<Idades/>} />
            <Route path="/Categoria" element={<Categoria/>} />
            <Route path="/Sobre" element={<Sobre/>} />
          <Routes/>
    <Router/>

      <Header/>
      <Hero/>
      <Footer/>
}

export default App
