import React, { use } from 'react'
import "./style/heroSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleInfo, faVolumeXmark, } from '@fortawesome/free-solid-svg-icons';


  const HeroSection = (props) => {
  const {title, deskripsi, rating, gambar,id} = props;
  return (
    <div className='hero-section'> 
    <div className="fitur-herosection">
      <h1>{title}</h1>
      <p>{deskripsi}</p>
      
      <div className="action-herosection">
        <button className="mulai"> Mulai </button>
        <button className="selengkapnya"><FontAwesomeIcon icon={faCircleInfo} /></button>
        <button className="usia">{rating}+</button>
        <button className="volume">
            <FontAwesomeIcon className='detail-volume' icon={faVolumeXmark} />
        </button>
      </div>
    </div>
    </div>
  )
}

export default HeroSection