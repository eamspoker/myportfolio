import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Pages/Homepage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Projects from './Pages/Projects';
import KhanAcademy from './Pages/ProjectPages/KhanAcademy';
import FrameGame from './Pages/ProjectPages/TheFrameGame';
import ClimateCoach from './Pages/ProjectPages/ClimateCoach';
import CoffeeGuide from './Pages/ProjectPages/CoffeeGuide';
import Golem from './Pages/ProjectPages/TheGolem';
import Zoo from './Pages/ProjectPages/Zoo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>

<HashRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="khanacademy" element={<KhanAcademy />} />
        <Route path="framegame" element={<FrameGame />} />
        <Route path="climatecoach" element={<ClimateCoach />} />
        <Route path="coffeeguide" element={<CoffeeGuide />} />
        <Route path="golem" element={<Golem />} />
        <Route path="zoo" element={<Zoo />} />





      
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
