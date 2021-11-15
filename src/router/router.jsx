import { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Films from "../components/films";
import Header from "../components/header";
import Navbar from "../components/navbar";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Navbar />
                <Routes>
                    <Route exact path="/Next-Marvel-Films/movie" element={<Films/>} />
                    <Route exact path="/Next-Marvel-Films/tv" element={<Navbar/>} />
                    <Route path="/Next-Marvel-Films/*" element={<Films/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;