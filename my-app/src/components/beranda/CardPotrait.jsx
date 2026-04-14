import React from 'react'
import { useRef } from 'react'
import "./style/CardPotrait.css"
import { useState,useEffect } from 'react'
import { getPotrait,deletePotraitApi } from '../../service/API/filmApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleInfo, faMagnifyingGlass, faTrash, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { setPotrait, deletePotrait } from "../../store/redux/dataslice";


function CardPotrait() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.potrait);
    const [loading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);
    const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

    useEffect(() => {
      const fetchData = async () => {
        try {
            const result = await getPotrait();
            dispatch(setPotrait(result));
            setLoading(false);
        }catch (error) {
            setIsError(true);
            setLoading(false);
        }
      }
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

    const handleDelete = async (id) => {
        setLoading(true);
            try {
                await deletePotraitApi(id);
                dispatch(deletePotrait(id));
                setLoading(false);
            }catch (error) {
                console.log(error);
                setLoading(false);
            }
    }

    return (
        <div className='CardPotrait'>
            <div className='crousel-potrait'>
                <button className="before" onClick={scrollLeft}>&lt;</button>
                
                <div className="crousel-track-potrait" ref={trackRef}>
                    {data.map ((item) => (
                        <div 
                            className="Card-potrait"
                            key={item.id}
                            style={{
                            backgroundImage: `url(${item.gambar})`}}>
                            <div className="content-potrait">
                                {/* <p>{item.title}</p>
                                <p>{item.rating}</p> */}
                                <FontAwesomeIcon onClick={() => handleDelete(item.id)} className='trash' icon={faTrash}/>
                                <NavLink to={`/UpdateMovie/${item.id}`}>
                                     <FontAwesomeIcon className='Detail' icon={faMagnifyingGlass}/>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
                    <button className="after" onClick={scrollRight}>&gt;</button>
            </div>
        </div>
    )
}

export default CardPotrait