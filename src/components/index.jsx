import { Component, Fragment } from "react";
import Layout from "./layout";
import { getAllMarvelProducts } from "./helpers/functions";

class Index extends Component {
    state = {
        products: []
    }
    getAllMarvelProducts = () => {
        let search = getAllMarvelProducts(this.props.product)
        search.then(res => this.setState({ products: res }));
    }
    componentDidMount() {
        this.getAllMarvelProducts();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.product !== this.props.product) {
            this.getAllMarvelProducts();
        }
    }
    render() {
        return (
            <Fragment>
                {this.state.products.length &&
                    this.state.products.map(
                        (product, i) =>
                            <Layout key={i} product={product} />
                    )
                }
            </Fragment>
        )
    }
}

export default Index;