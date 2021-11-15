import { Component } from "react";
import Layout from "./layout";
import ProductImage from "./product-img";

class Index extends Component {
    render() {
        return (
            <main>
                <Layout>
                    <div className="col-md-6 my-2">
                        <ProductImage />
                    </div>
                </Layout>
            </main>
        )
    }
}

export default Index;