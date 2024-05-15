
import { BrowserRouter, Routes, Route } from "react-router-dom";// import-react-router-dom
//this is use to create navigation routes for pages

import Header from "./Components/Header";
import LiteritureSurvey from "./Components/LiteritureSurvey";
import Home from "./Components/Home";



function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/header" element={<Header />} />
      <Route path="/ls" element={<LiteritureSurvey />} />
        


      </Routes>
    </BrowserRouter>
  )
}

export default App;
