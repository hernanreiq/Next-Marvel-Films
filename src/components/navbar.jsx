import { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        let styles = "btn w-100 text-white w-100 shadow";
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6 mt-4">
                            <NavLink to="/Next-Marvel-Films/movie"
                                className={isActive => {
                                    return isActive.isActive ? (styles + " bg-black") : (styles + " bg-red");
                                }}
                            >Movies</NavLink>
                        </div>
                        <div className="col-6 mt-4">
                        <NavLink to="/Next-Marvel-Films/tv"
                                className={isActive => {
                                    return isActive.isActive ? (styles + " bg-black") : (styles + " bg-red");
                                }}
                            >TV Show</NavLink>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Navbar;