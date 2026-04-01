import React from 'react'
import "../styling/login.css"
import { Link } from 'react-router-dom'
import Logo from "../components/login/logo"
import InputField from "../components/login/InputField"
import PasswordField from "../components/login/PasswordField"
import GoogleButton from "../components/login/GoogleButton"

function Login() {
  return (
    <section className='login'>
      <div className="login-box">
        <div className="login-box-desc">

          <Logo />

          <h3>Masuk</h3>
          <h6>Selamat Datang Kembali</h6>

          <form>

            <InputField
              label="Username"
              type="text"
              placeholder="Masukkan Username"
            />

            <PasswordField
              label="Kata Sandi"
              placeholder="Masukkan Kata Sandi"
            />

          </form>

          <div className="daftar">
            <div className="daftar1">
              <p>
                Belum Punya Akun?
                <Link to="/register" className="daftar-link"> Daftar </Link>
              </p>
            </div>

            <div className="daftar2">
              <a href="#" className="lupa-sandi">Lupa Kata Sandi?</a>
            </div>
          </div>

          <div className="masuk-btn">

            <Link to="/homepage">
              <button className="btn-masuk-1">Masuk</button>
            </Link>

            <p>Atau</p>

            <GoogleButton text="Masuk Dengan Google" />

          </div>

        </div>
      </div>
    </section>
  )
}

export default Login