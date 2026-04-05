import { useState } from 'react'
import ReactDom from 'react-dom/client'

import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Register from './pages/Register'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import Beranda from './pages/Beranda';
import TambahFilm from './components/beranda/TambahFilm';

const rootElement = document.getElementById("root");

const root = ReactDom.createRoot(rootElement);

const router = createBrowserRouter([
  {
    path : "/",
    Component : Login
  },
  {
    path : "/register",
    Component : Register
  },
  {
    path : "/homepage",
    Component : HomePage
  },
  {
    path : "/Beranda",
    Component : Beranda
  },
  {
    path : "/TambahFilm",
    Component : TambahFilm
  }

])

root.render(<RouterProvider router={router} />)