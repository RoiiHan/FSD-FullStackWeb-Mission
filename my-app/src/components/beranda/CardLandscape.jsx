import React from 'react'
import { useRef } from 'react'
import "./style/CardLandscape.css"
import { useState,useEffect } from 'react'
import axios from 'axios'

function CardLandscape() {
    const [data, setData]  = useState([]);
    const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
    useEffect(() => {
      axios.get(`${BASE_URL}/Chill`).then((response) => {
        setData(response.data)
        console.log(response.data)
      }).catch((error) => {
        setError(true)
        console.log(error)
      })
    }, [])
    
    const trackRef = useRef(null)
    const scrollLeft = () => {
        const cardWidth = trackRef.current.firstChild?.offsetWidth || 300;
        trackRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    }
    const scrollRight = () => {
         const cardWidth = trackRef.current.firstChild?.offsetWidth || 300;
    trackRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
    }
  return (
    <div className='CardLandscape'>
        <div className='crousel'>
            <button className="before" onClick={scrollLeft}>&lt;</button>
            
            <div className="crousel-track" ref={trackRef}>
                {data.map ((item) => (
                    <div 
                        className="Card"
                        key={item.id}
                        style={{
                        backgroundImage: `linear-gradient(to bottom, 
                        rgba(0, 0, 0, 0) 20%, 
                        rgba(0, 0, 0, 0.8) 70%
                        ),url(${item.gambar})`}}>
                        <div className="content">
                            <p>{item.title}</p>
                            <p>{item.rating}</p>
                        </div>
                    </div>
                ))}
            </div>
                <button className="after" onClick={scrollRight}>&gt;</button>
        </div>
    </div>
  )
}

export default CardLandscape