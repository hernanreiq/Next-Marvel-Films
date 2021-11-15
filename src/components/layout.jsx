import { Component } from "react";
import ProductDetails from "./product-details";
import ProductImage from "./product-img";

class Layout extends Component {
    render() {
        return (
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6 my-2">
                        <ProductImage />
                    </div>
                    <div className="col-md-6 my-2">
                        <ProductDetails />
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;