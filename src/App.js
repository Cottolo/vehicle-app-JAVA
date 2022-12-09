import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
         <Routes> 
          <Route exact path='/' element={<Home/>}/>
          
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
