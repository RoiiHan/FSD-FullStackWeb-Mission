import React, { use } from 'react'
import "./style/heroSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleInfo, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
import axios from 'axios';


  const HeroSection = (props) => {
  const {title, deskripsi, rating, gambar,id} = props;
  const [hero,setHero] = useState([null]);
  const [error, setError] = useState(false);

  useEffect(() => {
      axios.get("https://69cd706cddc3cabb7bd2c0e1.mockapi.io/Chill/1").then((response) => {
        setHero(response.data)
        console.log(response.data)
      }).catch((error) => {
        setError(true)
        console.log(error)
      })
    },[])

  return (
    <div className='hero-section' style={{
        backgroundImage: `linear-gradient(to bottom, 
          rgba(0, 0, 0, 0) 20%, 
          rgba(0, 0, 0, 0.8) 70%
        ), url(${hero.gambar})`   // ← gambar dari API
      }}> 
    <div className="fitur-herosection">
      <h1>{hero.title}</h1>
      <p>{hero.deskripsi}</p>
      
      <div className="action-herosection">
        <button className="mulai"> Mulai </button>
        <button className="selengkapnya"><FontAwesomeIcon icon={faCircleInfo} />Selengkapnya</button>
        <button className="usia">{hero.usia}</button>
        <button className="volume">
            <FontAwesomeIcon className='detail-volume' icon={faVolumeXmark} />
        </button>
      </div>
    </div>
    </div>
  )
}

export default HeroSection