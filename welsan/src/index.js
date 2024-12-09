import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import PonukaKurzov from './components/PonukaKurzov';
import BusinessCourses from './components/BusinessCourses/BusinessCourses';
import WhereWeAt from './components/WhereWeAt/WhereWeAt';
import Translation from './components/Translation/Translation';
import EngAdults from './components/EngAdults/EngAdults';
import Workshop from './components/Workshop/Workshop'
import EngChildren from './components/EngChildren/EngChildren'
import Gdpr from './components/Gdpr/Gdpr';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/o-kurzoch",
    element: <PonukaKurzov />,
  },

  {
    path: "/firemne-kurzy",
    element: <BusinessCourses />


  },
  {
    path: "/kde-nas-najdete",
    element: <WhereWeAt />
  },
  {
    path: "/tlmocenie-a-preklady",
    element: <Translation></Translation>
  },
  {
    path: "/ang-dospeli",
    element: <EngAdults />
  },
  {
    path: "/ang-deti",
    element: <EngChildren />
  },
  {
    path: "/tvoriva-dielna",
    element: <Workshop />
  },
  {
    path: "/gdpr",
    element: <Gdpr />
  }

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} ></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
