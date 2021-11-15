import { Component, Fragment } from "react";

class Header extends Component {
    render() {
        return (
            <Fragment>
                <header className="shadow bg-red">
                    <div className="container pt-4">
                        <h1 className="display-3">Next Marvel Films</h1>
                    </div>
                    <div className="division-white my-2"></div>
                    <div className="container pb-4">
                        <h3>Find out how much time is left for the new Marvel movie or television series</h3>
                        <p>Development and Web Design by: <span className="badge badge-dark">
                            <a href="https://bit.ly/hernanreiq" target="_blank" rel="noreferrer" className="text-warning text-decoration-none">Hernan.Reiq</a>
                        </span>
                        </p>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Header;