import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <input type="text" placeholder="hey" />

      
        <Routes>

          <Route path="/" element={<Home />} />
         
        </Routes>
<input type ='text' />
    </BrowserRouter>
  );
}

export default App;
