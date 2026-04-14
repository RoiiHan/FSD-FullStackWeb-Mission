import React from 'react'
import { useState,useEffect,useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/beranda/navbar';  
import { getPotraitById, updatePotraitApi } from "../service/API/filmApi";
import '../styling/UpdateMovie.css';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/beranda/InputFieldBeranda';
import { useDispatch } from "react-redux";
import { updatePotrait } from "../store/redux/dataslice";

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
		case "change_all" : {
			return {
				...action.value,
			}
		}
        default: {
            return state;
        }
    }    
}

function MenuUpdate() {
    const [loading , setLoading] = useState(false);
    const dispatch = useDispatch();
		const [data,setData] = useReducer(action, defaultFrom);
		const navigate = useNavigate();
		const params = useParams();

		const updateMenu = async (data) => {
        try {
            const result = await updatePotraitApi(params.id, data);
            dispatch(updatePotrait(result));
            navigate("/beranda");
        } catch (error) {
            console.log("Data Updated Failed");
        } finally {
            setLoading(false);
        }
        };

		const handleSubmit = (event) => {
			event.preventDefault();
			setLoading(true);
			updateMenu(data);
			// console.log("data =>", data)
		}
	
	useEffect(() => {
        const fetchData = async () => {
        const result = await getPotraitById(params.id);
        setData({
            type: "change_all",
            value: result,
        });
        };
        fetchData();
		}, []);

  return (
    <div className="update-movie">
        <Navbar />
		<h1>Update Film </h1>
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

export default MenuUpdate