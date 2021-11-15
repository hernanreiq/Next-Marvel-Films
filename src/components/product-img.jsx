import { Component } from "react";
import { Card } from "react-bootstrap";

class ProductImage extends Component {
    render() {
        const { poster_path, title } = this.props.product;
        return (
            <Card className="shadow">
                <Card.Header className="bg-red">
                    <h3 className="text-center text-white mb-0">
                        {title}
                    </h3>
                </Card.Header>
                <Card.Body className="p-0">
                    <Card.Img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                </Card.Body>
            </Card>
        )
    }
}

export default ProductImage;