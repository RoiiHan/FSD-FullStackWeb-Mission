import React, { useState } from 'react'
import logo from '../assets/Vector.png'
import './style/footer.css'

function Footer() {
  const [genreOpen, setGenreOpen] = useState(false)
  const [bantuanOpen, setBantuanOpen] = useState(false)

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className='footer-brand-logo'>
            <img src={logo} alt="CHILL" />
            <h1>CHILL</h1>
          </div>
          <p>©2023 Chill All Rights Reserved</p>
        </div>

        <div className="footer-content">

          <div className="footer-section">
            <button className="footer-title" onClick={() => setGenreOpen(!genreOpen)}>
              Genre
              <span className={`arrow ${genreOpen ? 'open' : ''}`}>›</span>
            </button>
            <div className={`footer-grid ${genreOpen ? 'show' : ''}`}>
              <ul>
                <li>Aksi</li>
                <li>Anak-anak</li>
                <li>Anime</li>
                <li>Britania</li>
              </ul>
              <ul>
                <li>Drama</li>
                <li>Fantasi Ilmiah & Fantasi</li>
                <li>Kejahatan</li>
                <li>KDrama</li>
              </ul>
              <ul>
                <li>Komedi</li>
                <li>Petualangan</li>
                <li>Perang</li>
                <li>Romantis</li>
              </ul>
              <ul>
                <li>Sains & Alam</li>
                <li>Thriller</li>
              </ul>
            </div>
          </div>

          <div className="footer-section bantuan">
            <button className="footer-title" onClick={() => setBantuanOpen(!bantuanOpen)}>
              Bantuan
              <span className={`arrow ${bantuanOpen ? 'open' : ''}`}>›</span>
            </button>
            <ul className={`bantuan-list ${bantuanOpen ? 'show' : ''}`}>
              <li>FAQ</li>
              <li>Kontak Kami</li>
              <li>Privasi</li>
              <li>Syarat & Ketentuan</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer