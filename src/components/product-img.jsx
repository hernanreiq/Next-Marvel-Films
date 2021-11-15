import { Component } from "react";
import { Card } from "react-bootstrap";

class ProductImage extends Component {
    render() {
        return (
            <Card className="shadow">
                <Card.Header className="bg-red">
                    <h3 className="text-center text-white mb-0">
                        Avengers Endgame
                    </h3>
                </Card.Header>
                <Card.Body className="p-0">
                    <Card.Img src={`https://m.media-amazon.com/images/I/81gCaSnFTvL._SL1364_.jpg`} alt="NOMBRE DE LA PELICULA O SERIE" />
                </Card.Body>
            </Card>
        )
    }
}

export default ProductImage;