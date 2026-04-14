import React from 'react'
import { Link } from 'react-router-dom'
import "./style/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faArrowRightFromBracket, faArrowDown, faPlusMinus } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/Vector.png"
import Ellipse from "../../assets/Ellipse 395.png"
import TambahFilm from './TambahFilm';

function Navbar() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const toogleMenu = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <nav>
        <div className="logo">
            <img src={Logo} alt="logo" />
            <p>CHILL</p>
        </div>
        <ul>
            <Link to="/beranda" className='nav-link'>Series</Link>
            <Link to="/tentang" className='nav-link'>Film</Link>
            <Link to="/kontak" className='nav-link'>Daftar Saya</Link>
        </ul>

        <div className="profil">
            <img src={Ellipse} alt="fotoProfil" />
            <button className="toogle" onClick={toogleMenu}>
                <FontAwesomeIcon icon={faArrowDown} style={{color: "rgb(255, 255, 255)",}} />
            </button>

            {menuOpen && (
                <div className="menu" >
                    <ul>
                        <Link to="/profil"><li><FontAwesomeIcon icon={faUser} style={{color: "rgb(255, 255, 255)",}} /> Profil Saya</li></Link>
                        <Link to="/ubah-premium"><li><FontAwesomeIcon icon={faStar} style={{color: "rgb(255, 255, 255)",}} /> Ubah Premium</li></Link>
                        <Link to="/login"><li><FontAwesomeIcon icon={faArrowRightFromBracket} style={{color: "rgb(255, 255, 255)",}} /> Keluar</li></Link>
                        <Link to="/TambahFilm"><li><FontAwesomeIcon icon={faPlusMinus} style={{color: "rgb(255, 255, 255)",}} /> Tambah Film</li></Link>
                    </ul>
                </div>
            )}
        </div>

    </nav>
  )
}

export default Navbar