import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Home from "./pages/Home";
// import About from "./pages/About";
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
    useEffect(()=>{
        Aos.init({
            once: false,
        })
    });
    return (
        <div className="App min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
            <Home />
            {/* <About /> */}
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
