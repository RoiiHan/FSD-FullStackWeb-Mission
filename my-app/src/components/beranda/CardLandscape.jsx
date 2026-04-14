import React from 'react'
import { useRef } from 'react'
import "./style/CardLandscape.css"
import { useState,useEffect } from 'react'
import { getLandscape } from '../../service/API/filmApi'
import { useDispatch, useSelector } from "react-redux";
import { setLandscape } from "../../store/redux/dataslice";

function CardLandscape() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.landscape);

    useEffect(() => {
      const fetchData = async () => {
        try {
        const result = await getLandscape();
        const dataFix = Array.isArray(result) ? result : [];
        dispatch(setLandscape(dataFix));
      } catch (error) {
        console.log(error);
      }
      };
      fetchData();
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