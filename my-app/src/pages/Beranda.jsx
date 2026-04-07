  import React from 'react'
  import "../styling/beranda.css"
  import Navbar from '../components/beranda/navbar'
  import Herosection from '../components/beranda/HeroSection'
  import CardLandscape from '../components/beranda/CardLandscape'
  import CardPotrait from '../components/beranda/CardPotrait'
  import "./style/beranda.css"
  import Footer from './Footer'

  function Beranda() {
    return (
      <div className='beranda'>
          <Navbar />
          <div>
            <Herosection />
            <h1>Melanjutkan Tonton Film</h1>
          </div>
          <CardLandscape />
          <h1>Top Rating Film dan Series Hari Ini</h1>
          <CardPotrait />
          <h1>Film Trending</h1>
          <CardPotrait />
          <h1>Rilis Baru</h1>
          <CardPotrait />
          <Footer />
      </div>

    )
  }

  export default Beranda