import { Component } from "react";

class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="container py-4">
                <div className="row">
                    {children}
                </div>
            </div>
        )
    }
}

export default Layout;