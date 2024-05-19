import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import PonukaKurzov from './components/PonukaKurzov';
import FiremneKurzy from './components/FiremneKurzy/FiremneKurzy';
import KdeNasNajdete from './components/KdeNasNajdete/KdeNasNajdete';
import Tlmocenie from './components/Tlmocenie/Tlmocenie';
import Blog from './components/Slider3/Blog';
import EngDospeli from './components/EngDospeli/EngDospeli';
import Dielna from './components/Dielna/Dielna'
import EngDeti from './components/EngDeti/EngDeti'
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
    element: <FiremneKurzy />


  },
  {
    path: "/kde-nas-najdete",
    element: <KdeNasNajdete />
  },
  {
    path: "/tlmocenie-a-preklady",
    element: <Tlmocenie></Tlmocenie>
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/ang-dospeli",
    element: <EngDospeli />
  },
  {
    path: "/ang-deti",
    element: <EngDeti />
  },
  {
    path: "/tvoriva-dielna",
    element: <Dielna />
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
