import React from 'react'
import ButtonCrouselLeft from './ButtonCrouselLeft'
import ButtonCrouselRight from './ButtonCrouselRight'
import { useRef } from 'react'
import "./style/CardLandscape.css"

function CardLandscape({data}) {
    const trackRef = useRef(null)
    const scrollLeft = () => {
        trackRef.current.scrollBy({left : -800, behavior:'smooth'})
    }
    const scrollRight = () => {
        trackRef.current.scrollBy({left :   800, behavior:'smooth'})
    }
  return (
    <div className='CardLandscape'>
        <h1>Melanjutkan Tonton Film</h1>
        <div className='crousel'>
            <button className="before" onClick={scrollLeft}>&lt;</button>
            
            <div className="crousel-track" ref={trackRef}>
                {data.map ((item) => (
                    <div 
                        className="Card"
                        key={item.id}
                        style={{
                        backgroundImage: `url(${item.gambar})`}}>
                        <div className="content">
                            <p>{item.title}</p>
                            <p>{item.rating}</p>
                        </div>
                    </div>
                ))}
                <button className="after" onClick={scrollRight}>&gt;</button>
            </div>
        </div>
    </div>
  )
}

export default CardLandscape