import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Footing from "./Components/Footing";
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link className="link" to ="/">Home</Link>
          <Link className="link" to = "/menu">Menu</Link>
          <Link className="link" to = "/cart">Cart</Link>
        </nav>
  
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
      <hr/>
      <Footing/>
    </div>
  );
}

export default App;