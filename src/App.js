import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Add from "./pages/add/Add";
import Edit from './pages/edit/Edit';
import Home from "./pages/home/Home";
function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
</Router>
   
  );
}

export default App;
