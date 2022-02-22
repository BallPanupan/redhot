import { Card } from "react-bootstrap";

let car = {type:"Fiat", model:"500", color:"white"};

function CardList(props) {
    let content = props.content;
    return (
    <Card>
        <div className="black-x"></div>
        <Card.Body>
        <Card.Title>{ content.title }</Card.Title>
        <Card.Text>{ content.content }</Card.Text>
        </Card.Body>
    </Card>
    );
  }
  
  export default CardList;