import React from 'react'
import "../styling/register.css"
import { Link } from 'react-router-dom'

import Logo from "../components/login/logo"
import InputField from "../components/login/InputField"
import PasswordField from "../components/login/PasswordField"
import GoogleButton from "../components/login/GoogleButton"

function Register() {
  return (
    <section className="register-section">
      <div className="register-box">
        <div className="register-box-desc">

          <Logo />

          <h3>Daftar</h3>
          <p>Selamat Datang!</p>

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

            <PasswordField
              label="Konfirmasi Kata Sandi"
              placeholder="Masukkan Kata Sandi"
            />

          </form>

          <div className="punya">
            <div className="punya1">
              <p>
                Sudah Punya Akun?
                <Link className="punya-link" to="/"> Masuk </Link>
              </p>
            </div>
          </div>

          <div className="daftar-btn">

            <Link to="/">
              <button className="btn-daftar-1">Daftar</button>
            </Link>

            <p>Atau</p>

            <GoogleButton text="Daftar Dengan Google" />

          </div>

        </div>
      </div>
    </section>
  )
}

export default Register