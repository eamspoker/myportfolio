import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Pages/Homepage';
import reportWebVitals from './reportWebVitals';
import { useLocation, useRoutes, Route, HashRouter } from "react-router-dom";
import Projects from './Pages/Projects';
import KhanAcademy from './Pages/ProjectPages/KhanAcademy';
import FrameGame from './Pages/ProjectPages/TheFrameGame';
import ClimateCoach from './Pages/ProjectPages/ClimateCoach';
import CoffeeGuide from './Pages/ProjectPages/CoffeeGuide';
import Golem from './Pages/ProjectPages/TheGolem';
import Zoo from './Pages/ProjectPages/Zoo';
import Resume from './Pages/Resume';
import WrapperPage from './Pages/WrapperPage';
import { AnimatePresence } from "framer-motion";

function App() {


const location = useLocation();

    const element = useRoutes([
        {
          path: "/",
          element: <WrapperPage element={<Homepage />}/>
        },
        {
          path: "/projects",
          element: (
            <WrapperPage element={<Projects/>}/>
          )
        }, 
        {
          path: "/khanacademy",
          element: (
            <WrapperPage element={<KhanAcademy/>}/>
          )
        }, 
        {
          path: "/framegame",
          element: (
            <WrapperPage element={<FrameGame/>}/>
          )
        }, 
        {
          path: "/climatecoach",
          element: (
            <WrapperPage element={<ClimateCoach/>}/>
          )
        }, 
        {
          path: "/coffeeguide",
          element: (
            <WrapperPage element={<CoffeeGuide/>}/>
          )
        }, 
        {
          path: "/golem",
          element: (
            <WrapperPage element={<Golem/>}/>
          )
        }, 
        {
          path: "/zoo",
          element: (
            <WrapperPage element={<Zoo/>}/>
          )
        }, 
        {
          path: "/resume",
          element: (
            <WrapperPage element={<Resume/>}/>
          )
        }, 
      ]);

      if (!element) return null;


      return ( <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>);
      
}
export default App;