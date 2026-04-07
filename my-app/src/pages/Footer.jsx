import React from 'react'
import logo from '../assets/Vector.png'
import './style/footer.css'

function Footer() {
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
            <h4 className="footer-title">Genre <span className="arrow">›</span></h4>
            <div className="footer-grid">
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
            <h4 className="footer-title">Bantuan <span className="arrow">›</span></h4>
            <ul>
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