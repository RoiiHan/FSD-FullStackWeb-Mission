import { useState } from 'react'
import ReactDom from 'react-dom/client'


import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Register from './pages/Register'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import Crud from './pages/Crud';

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
    path : "/crud",
    Component : Crud
  }

])

root.render(<RouterProvider router={router} />)