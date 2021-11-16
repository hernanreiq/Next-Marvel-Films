import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../components/index";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Navbar />
                <Routes>
                    <Route exact path="/Next-Marvel-Films/movie" element={<Index product="movie" />} />
                    <Route exact path="/Next-Marvel-Films/tv" element={<Index product="tv" />} />
                    <Route path="/Next-Marvel-Films/*" element={<Index product="movie"/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default Router;