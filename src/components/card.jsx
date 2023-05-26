import Card from 'react-bootstrap/Card';
import './card.css'

function CardComponent(props) {
  return (
    <Card style={{ width: '25rem' }} className='cardComponent'>
      <Card.Body>
        <Card.Header>{props.title}</Card.Header>
        <br></br>
        {props.children}
        <Card.Text>{props.cardText1}</Card.Text>
        <Card.Text>{props.cardText2}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;