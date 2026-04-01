  import React from 'react'
  import "../styling/beranda.css"
  import Navbar from '../components/beranda/navbar'
  import Herosection from '../components/beranda/HeroSection'
  import { useEffect } from 'react'
  import Axios from 'axios'
  import { useState } from 'react'

  function Beranda() {
    const [data, setData]  = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
      Axios.get("https://69cd706cddc3cabb7bd2c0e1.mockapi.io/Chill/1").then((response) => {
        setData(response.data)
        console.log(response.data)
      }).catch((error) => {
        setError(true)
        console.log(error)
      })
    }, [])


    return (
      <div className='beranda'>
          <Navbar />
          
            {data && (
              <Herosection 
                key={data.id}
                title={data.title}
                deskripsi={data.deskripsi}
              /> 
            )}
            
          </div>

    )
  }

  export default Beranda