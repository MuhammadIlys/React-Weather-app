import appstyle from "./App.module.css";
import Home from "../Home/Home";

import Navbar from '../Navbar/Navbar';
import Weather from "../Weather/Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='container'>

        <Router>
          <Navbar />
          <Routes>
            <Route path="/weather" element={<Weather />}> </Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
