import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contactus from "./components/Contactus";

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

