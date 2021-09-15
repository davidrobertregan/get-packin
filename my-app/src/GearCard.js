import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

function GearCard({gear, onDelete, onPackUpdate,}) {
    
    const { name, image, category, id, packed, description } = gear
    
    function handleDelete() {
        fetch(`http://localhost:3000/gear/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(() => onDelete(gear));
    }

    function handlePackClick() {
        const updatedPack = {
            packed: !packed
        }
        fetch(`http://localhost:3000/gear/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPack),
        })
        .then((r) => r.json())
        .then(onPackUpdate);
  
    }

    return(
        

        <CardGroup>
        <Card style={{ width: '18rem' }} className="gear-card">
           <Link to={`/gear/${id}`}>
            <Card.Img variant="top" src={image} style={{maxHeight: '200px', objectFit: 'contain'}}/>
            </Link>
          <Card.Body>     
            <Card.Title>{name}</Card.Title> 
            <Card.Text>{category}</Card.Text>
            <Card.Text>{description}</Card.Text> 
          </Card.Body>
          <Button variant="success" size="sm" onClick={handlePackClick}>
                Pack / Unpack
            </Button>
            <Button variant="danger" size="sm" onClick={handleDelete}>
                Remove Gear
            </Button>
        </Card>
        </CardGroup>
   
    )
}

export default GearCard