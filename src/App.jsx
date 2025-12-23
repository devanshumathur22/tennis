import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

/* GLOBAL COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

/* PAGES */
import Home from "./Pages/Home"; 
import Programs from "./Pages/Programs";
import Tournaments from "./Pages/Tournaments";
import Gallery from "./Pages/Gallery";
import Coach from "./Pages/Coach";
import Contact from "./Pages/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
     

      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
        
          <Navbar />         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/coach" element={<Coach />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
    
  );
}
