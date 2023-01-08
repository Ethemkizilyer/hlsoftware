import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import PrivateRouter from "./router/PrivateRouter";
import Footer from "./components/Footer";
import { Contact } from "./page/Contact";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<PrivateRouter />} />
        <Route path="home/product" element={<Home />} />
        <Route path="home/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
