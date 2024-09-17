import {StrictMode} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Pages/Homepage';
import reportWebVitals from './reportWebVitals';
import { useLocation, useRoutes, Route, BrowserRouter } from "react-router-dom";
import Projects from './Pages/Projects';
import App from './App';
import KhanAcademy from './Pages/ProjectPages/KhanAcademy';
import FrameGame from './Pages/ProjectPages/TheFrameGame';
import ClimateCoach from './Pages/ProjectPages/ClimateCoach';
import CoffeeGuide from './Pages/ProjectPages/CoffeeGuide';
import Golem from './Pages/ProjectPages/TheGolem';
import Zoo from './Pages/ProjectPages/Zoo';
import Resume from './Pages/Resume';
import WrapperPage from './Pages/WrapperPage';
import { AnimatePresence } from "framer-motion";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);





root.render(

  
<StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>


//   <React.StrictMode>

// <HashRouter>

//       <Routes>
//       <AnimatePresence mode="wait">
//         <Route index element={<WrapperPage element={<Homepage />}/>}/>
//         <Route path="projects" element={<WrapperPage element={<Projects />}/>} />
//         <Route path="khanacademy" element={<WrapperPage element={<KhanAcademy />}/>} />
//         <Route path="framegame" element={<WrapperPage element={<FrameGame />}/>} />
//         <Route path="climatecoach" element={<WrapperPage element={<ClimateCoach />} />}/>
//         <Route path="coffeeguide" element={<WrapperPage element={<CoffeeGuide />}/>} />
//         <Route path="golem" element={<WrapperPage element={<Golem />}/>} />
//         <Route path="zoo" element={<WrapperPage element={<Zoo />} />}/>
//         <Route path="resume" element={<WrapperPage element={<Resume />}/>}/>
//         </AnimatePresence>
 
//       </Routes>
//     </HashRouter>
//   </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
