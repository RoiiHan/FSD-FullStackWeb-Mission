import React from 'react'
import InputField from "./InputFieldBeranda"
import "./style/TambahFilm.css"

function TambahFilm() {
  return (
      <div className='Film'>
        <h1>Tambah Film Anda</h1>
        <form action="">
            <InputField 
                label="Input Judul Film :  "
                input="Text"
                placeholder="Input Judul Film"
            />
            <InputField 
                label="Input Deskripsi :  "
                input="Text"
                placeholder="Input Deskripsi"
            />
            <InputField 
                label="Input Rating :  "
                input="Text"
                placeholder="Input Rating"
            />
            <InputField 
                label="Input Link Gambar :  "
                input="Text"
                placeholder="Input Link Gambar"
            />
                <button type='submit'>Simpan</button>
        </form>
    </div>
  )
}

export default TambahFilm