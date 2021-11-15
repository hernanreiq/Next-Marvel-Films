import { Component } from "react";
import { Card, Badge } from "react-bootstrap";

class ProductDetails extends Component {
    render() {
        return (
            <Card className="shadow">
                <Card.Header className="bg-red">
                    <h3 className="text-center text-white mb-0">
                        Marvel: SERIE O PELICULA
                    </h3>
                </Card.Header>
                <Card.Body className="text-center">
                    <p className="h2">
                        Fecha de estreno
                    </p>
                    <p className="h3">
                        Faltan
                        <Badge variant="primary" pill className="mx-1">33</Badge>
                        días para el estreno
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at cumque nesciunt ipsum assumenda vitae laborum inventore officiis quia, atque, accusantium cupiditate! Nesciunt dicta eos molestias nihil ut totam rerum.</p>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductDetails;