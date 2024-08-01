import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Header setShowCart={setShowCart} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/cart"
            element={<Cart setShowCart={setShowCart} />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
