import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Products from "./pages/Products";


function App() {
  
  return (
    <>

      <div className="border-b border-b-neutral-200 shadow-md py-3 px-10 flex justify-between">
        <Link to="/" className="font-semibold text-md">{/* API's and UseEffect */}SHOP CART</Link>

        <div className="flex gap-4 mr-30 ">
          <Link to="/">Home</Link>
          <Link to='details'>Details</Link>
        </div>
      </div>


      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>

    </>
  )
}

export default App
