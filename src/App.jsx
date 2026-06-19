import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";


function App() {
  
  return (
    <>

      <Navbar />


      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>

    </>
  )
}

export default App
