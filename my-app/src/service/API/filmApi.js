import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// Landscape 
export const getLandscape = async () => {
  const res = await axios.get(`${BASE_URL}/Chill`);
  return res.data; 
};

// Potrait
export const getPotrait = async () => {
  const res = await axios.get(`${BASE_URL}/potrait`);
  return res.data;
};

export const getPotraitById = async (id) => {
  const res = await axios.get(`${BASE_URL}/potrait/${id}`);
  return res.data;
};

export const addPotraitApi = async (data) => {
  const res = await axios.post(`${BASE_URL}/potrait`, data);
  return res.data;
};

export const updatePotraitApi = async (id, data) => {
  const res = await axios.put(`${BASE_URL}/potrait/${id}`, data);
  return res.data;
};

export const deletePotraitApi = async (id) => {
  await axios.delete(`${BASE_URL}/potrait/${id}`);
};