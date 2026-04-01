import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleInfo, faVolumeXmark, } from '@fortawesome/free-solid-svg-icons';
import "./style/heroSection.css"

function ButtonActionHeroSection() {
  return (
    <div className="action-herosection">
        <button className="mulai"> Mulai </button>
        <button className="selengkapnya"><FontAwesomeIcon icon={faCircleInfo} /></button>
        <button className="usia">18+</button>
        <button className="volume">
            <FontAwesomeIcon icon={faVolumeXmark} />
        </button>
    </div>
  )
}

export default ButtonActionHeroSection