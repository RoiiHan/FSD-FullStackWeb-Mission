import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import Register from './pages/Register'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import Beranda from './pages/Beranda';
import TambahFilm from './components/beranda/TambahFilm';
import UpdateMovie from './pages/UpdateMovie';  

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
  ,
  {
    path : "/UpdateMovie/:id",
    Component : UpdateMovie
  }

])

function App() {
  return <RouterProvider router={router} />;
}

export default App
