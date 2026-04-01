import React from 'react'
import "../styling/login.css"
import { Link } from 'react-router-dom'

import Logo from "../components/Logo"
import InputField from "../components/InputField"
import PasswordField from "../components/PasswordField"
import GoogleButton from "../components/GoogleButton"

function Login() {
  return (
    <section>
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