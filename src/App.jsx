import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contactus from "./components/Contactus";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="Services" element={<Services/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="contact" element={<Contactus/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

