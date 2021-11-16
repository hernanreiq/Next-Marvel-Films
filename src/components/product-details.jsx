import { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import { calDaysBetweenDates } from "./helpers/functions";

class ProductDetails extends Component {
    render() {
        const { release_date, overview, first_air_date } = this.props.product;
        return (
            <Card className="shadow">
                <Card.Header className="bg-red">
                    <h3 className="text-center text-white mb-0">
                        Details
                    </h3>
                </Card.Header>
                <Card.Body className="text-center">
                    <p className="h3">
                        Release in <Badge variant="primary" pill>{calDaysBetweenDates(release_date ? release_date : first_air_date)}</Badge> days.
                    </p>
                    <p className="h2">
                        Release date: <Badge variant="primary" pill>{release_date ? release_date : first_air_date}</Badge>
                    </p>
                    <p>{overview}</p>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductDetails;