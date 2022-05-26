import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aos from 'aos';
import 'aos/dist/aos.css'
import About from "./pages/About";
import {AnimatePresence} from "framer-motion";

function App() {
    useEffect(()=>{
        Aos.init({
            once: false,
        })
    });
    return (
        <AnimatePresence initial={false}>
            <div className="App min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
                <Home />
                <About />
                <Footer />
            </div>
        </AnimatePresence>
    );
}

export default App;
