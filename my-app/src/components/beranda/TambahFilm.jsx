import React, { useReducer, useState } from 'react'
import InputField from "./InputFieldBeranda"
import "./style/TambahFilm.css"
import { useNavigate } from 'react-router-dom'
import { addPotraitApi } from '../../service/API/filmApi'
import Navbar from "./navbar"
import { useDispatch, useSelector } from "react-redux";
import { addPotrait } from "../../store/redux/dataslice";

const defaultFrom = {
	title: "",
	deskripsi: "",
	rating: "",
	gambar: "",
    usia : ""
}

const action = (state, action) => {
    switch (action.type) {
        case "create_title" : {
            return {
                ...state,
                title : action.value
            }
        }
        case "create_deskripsi" : {
            return {
                ...state,
                deskripsi : action.value
            }
        } 
        case "create_rating" : {
            return {
                ...state,
                rating : action.value
            }
        } 
        case "create_link" : {
            return {
                ...state,
                gambar : action.value
            }
        } 
        case "create_usia" : {
            return {
                ...state,
                usia : action.value
            }
        }
        default: {
            return state;
        }
    }    
}

function TambahFilm() { 
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [data,setData] = useReducer(action,defaultFrom);
    const navigate = useNavigate();

    const createMenu = async (data) => {
            try {
                const result = await addPotraitApi(data);
                dispatch(addPotrait(result));
                setLoading(false);
                navigate("/beranda");
            }catch (error) {
                console.log(error);
            }finally {
                setLoading(false);
            }
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!data.title || !data.deskripsi || !data.rating || !data.gambar) {
        alert("Semua field harus diisi!")
        return; 
    }
        setLoading(true);
        createMenu(data);
        console.log("data =>", data)
    }
  return ( 
      <div className='Film'>
          <Navbar />
        <h1 className='header-tambah-film'>Tambah Film Anda</h1>
        <form className="Tambahfilm-form" onSubmit={handleSubmit}>
            <InputField 
                label="Input Title Film :  "
                input="Text"
                placeholder="Input Title Film"
                value={data.title}
                onChange = {(event) => {
                    setData({
                        type : "create_title",
                        value: event.target.value
                    })
                }}
            />
            <InputField 
                label="Input Deskripsi :  "
                input="Text"
                placeholder="Input Deskripsi"
                value={data.deskripsi}
                onChange = {(event) => {
                    setData({
                        type : "create_deskripsi",
                        value: event.target.value
                    })
                }}
            />
            <InputField 
                label="Input Rating :  "
                input="Text"
                placeholder="Input Rating"
                value={data.rating}
                onChange = {(event) => {
                    setData({
                        type : "create_rating",
                        value: event.target.value
                    })
                }}
            />
            <InputField 
                label="Input Link Gambar :  "
                input="Text"
                placeholder="Input Link Gambar"
                value={data.gambar}
                onChange = {(event) => {
                    setData({
                        type : "create_link",
                        value: event.target.value
                    })
                }}
            />
            <InputField 
                label="Input Usia Movie :  "
                input="Text"
                placeholder="Input Usia Movie"
                value={data.usia}
                onChange = {(event) => {
                    setData({
                        type : "create_usia",
                        value: event.target.value
                    })
                }}
            />
                <button className='button-tambahfilm' type='submit'>
                    {loading ? "Loading..." : "Simpan"}
                </button>
        </form>
    </div>
  )
}

export default TambahFilm