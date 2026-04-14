import React from 'react'
import "../styling/homepage.css"
import preview from "/public/_PreviewBlock.png"
import Navbar from '../components/beranda/navbar'

function HomePage() {
  return (
    <div className='homepage'>
      <Navbar />
      <div className='container'>
        <div className='container-text'>
          <div className='header'>Movie Stream Platform</div>
          <div className='deskripsi'>
            <p>Chill</p>
            Chill adalah aplikasi berbasis web yang dirancang untuk memberi pengguna akses ke library film dan acara TV yang luas dari perangkat mereka. Chill menawarkan antarmuka yang ramah pengguna yang memungkinkan pengguna mencari film dan acara TV, dan mulai menonton secara instan. Chill menawarkan rekomendasi hasil personalisasi berdasarkan kebiasaan menonton pengguna, membantu pengguna menemukan film dan acara TV baru yang mungkin tidak mereka temukan sebelumnya. Selain itu, Chill juga menawarkan konten orisinal, termasuk film dan acara TV, yang hanya dapat ditemukan di aplikasi Chill, menjadikannya sumber yang unik dan berharga bagi pengguna.
          </div>
        </div>
        <div className='container-gambar'>
          <img src={preview} alt="Preview" />
        </div>
      </div>
    </div>
  )
}

export default HomePage