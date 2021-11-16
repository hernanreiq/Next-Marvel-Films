import { Component } from "react";
import LogoTMDB from "../copyright/tmdb.svg";

class Footer extends Component {
    render() {
        return (
            <div className="container p-3 bg-red rounded mb-4 shadow">
                <div className="row">
                    <div className="col-1">
                        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
                            <img src={LogoTMDB} alt="Copyright" />
                        </a>
                    </div>
                    <div className="col-11">
                        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer" className="text-decoration-none text-light">
                            This product uses the TMDB API but is not endorsed or certified by TMDB.
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;