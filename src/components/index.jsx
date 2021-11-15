import { Component, Fragment } from "react";
import Layout from "./layout";
import { getAllMarvelProducts } from "./helpers/functions";

class Index extends Component {
    state = {
        films: [],
        series: []
    }
    getAllMarvelProducts = () => {
        let movies = getAllMarvelProducts('movie')
        movies.then(res => this.setState({ films: res }));
    }
    componentDidMount() {
        this.getAllMarvelProducts();
    }
    render() {
        return (
            <Fragment>
                {this.state.films.length &&
                    this.state.films.map(
                        (film, i) =>
                            <Layout key={i} product={film} />
                    )
                }
            </Fragment>
        )
    }
}

export default Index;