// Importaciones de React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';

//Importaciones Rect router dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import ErrorPage from './error-page';
import theme from './components/ThemeRegistry/theme';
import Layout from './components/Layout';
import RedirectButton from './components/utils/RedirectButton';

//Importaciones de vistas

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"",
        element:<RedirectButton url={'https://www.cleu.edu.mx/Somos_Criminologia_y_Criminalistica/'}/>
      },
      {
        path:"cdmx",
        element:<RedirectButton url={'https://www.cleu.edu.mx/Campus/CampusCDMX/'}/>
      },
      {
        path:"puebla",
        element:<RedirectButton url={'https://www.cleu.edu.mx/Campus/CampusPuebla/'}/>
      },
      {
        path:"leon",
        element:<RedirectButton url={'https://www.cleu.edu.mx/Campus/CampusLeon/'}/>
      },
      {
        path:"guadalajara",
        element:<RedirectButton url={'https://www.cleu.edu.mx/Campus/CampusGuadalajara/'}/>
      },
      {
        path:"merida",
        element:<RedirectButton url={'https://www.cleu.edu.mx/Campus/CampusMerida/'}/>
      },
      {
        path:"veracruz",
        element:<RedirectButton url={'https://www.cleu.edu.mx/Campus/CampusVeracruz/'}/>
      },
      {
        path:"oaxaca",
        element:<RedirectButton url={'https://www.cleu.edu.mx/Campus/CampusOaxaca/'}/>
      },
    ],
  },
],{
  basename:'/thanks'
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider  router={router} />
      </ThemeProvider>
  </React.StrictMode>,
)
