import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import './assets/style.css'
import NavBar from "./components/NavBar.tsx";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import First from "./pages/firstSemester/First.tsx";
import Second from "./pages/secondSemester/Second.tsx";
import Fourth from "./pages/fourthSemester/Fourth.tsx";
import Fifth from "./pages/fifthSemester/Fifth.tsx";
import Sixth from "./pages/sixthSemester/Sixth.tsx";
import Seventh from "./pages/seventhSemester/Seventh.tsx";
import ThirdSemester from "./pages/thirdSemester/ThirdSemester.tsx";


function App() {

  return (
      <Router>
          <NavBar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/first" element={<First />}/>
              <Route path="/second" element={<Second />}/>
              <Route path="/third" element={<ThirdSemester />} /> {/* Render HTML content here */}
              <Route path="/fourth" element={<Fourth />}/>
              <Route path="/fifth" element={<Fifth />}/>
              <Route path="/sixth" element={<Sixth />}/>
              <Route path="/seventh" element={<Seventh />}/>
          </Routes>
      </Router>
  )
}

export default App
