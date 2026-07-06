import "./App.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Aboutme from "./pages/about-me";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import InDevelopment from "./pages/Indevelopment";

import Header from "./components/HeaderC";

import AeonikRegular from "./assets/fonts/Aeonik-Regular.ttf";
import Footer from "./components/FooterC";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<InDevelopment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
