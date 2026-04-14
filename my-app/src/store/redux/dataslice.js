import { createSlice } from "@reduxjs/toolkit";
import TambahFilm from "../../components/beranda/TambahFilm";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    landscape: [],
    potrait: []
  },
  reducers: {
    setLandscape: (state, action) => {
      state.landscape = action.payload;
    },
    setPotrait: (state, action) => {
      state.potrait = action.payload;
    },
    deletePotrait: (state, action) => {
      state.potrait = state.potrait.filter(item => item.id !== action.payload);
    },
    addPotrait: (state, action) => {
        state.potrait.push(action.payload);
    },
    updatePotrait: (state, action) => {
    const index = state.potrait.findIndex(
        item => item.id === action.payload.id
    );

    if (index !== -1) {
        state.potrait[index] = action.payload;
    }
    }
  }
});
export const { setLandscape, setPotrait, deletePotrait, addPotrait,updatePotrait  } = dataSlice.actions;
export default dataSlice.reducer;