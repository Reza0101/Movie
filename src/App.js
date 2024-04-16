import { useEffect, useContext, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Langing from "./components/Langing";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";


function App() {
    return (
        <>
                <div className="App bg-stone-900">
                    <div className="mx-auto">
                        <Navbar />
                        <Langing />
                        <Index />
                        <Footer />
                    </div>
                </div>
        </>
    );
}

export default App;
