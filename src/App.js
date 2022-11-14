import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Place from './pages/Place';
function App() {
  return (
    <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/place" element={<Place/>} />
         
        </Routes>

    </BrowserRouter>
  );
}

export default App;
