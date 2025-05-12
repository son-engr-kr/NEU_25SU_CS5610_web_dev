import { ListGroup } from "react-bootstrap";

export default function Base() {
    return (
        <div id="wd-css-styling-lists">
            {/* 2.3.8 */}
            <h2>Favorite movies</h2>
            <ListGroup>
                <ListGroup.Item active>Aliens</ListGroup.Item>
                <ListGroup.Item>Terminator</ListGroup.Item>
                <ListGroup.Item>Blade Runner</ListGroup.Item>
                <ListGroup.Item>Lord of the Ring</ListGroup.Item>
                <ListGroup.Item disabled>Star Wars</ListGroup.Item>
            </ListGroup>
        </div>
    )
}