import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import AddVehile from "./pages/AddVehile";
import EditeVehicle from "./pages/EditeVehile";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
         <Routes> 
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/add-vehicle' element={<AddVehile/>}/>
          <Route exact path='/edite-vehicle/:id' element={<EditeVehicle/>}/>
          
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
