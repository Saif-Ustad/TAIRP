import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./components/SingleProduct/SingleProduct";


import AppContext from "./utils/Context";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppContext >
          <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
            </Routes>
          <Footer />
        </AppContext>
    </BrowserRouter>
    
  );
}

export default App;
