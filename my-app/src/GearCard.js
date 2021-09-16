import { Link } from 'react-router-dom';
import { Button, Card, CardGroup } from 'react-bootstrap'

function GearCard({gear, onDelete, onPackUpdate,}) {
    
    const { name, image, category, id, packed, description, weight } = gear
    
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

    const buttonText = packed ? "Unpack Gear" : "Pack Gear"
   
    return(
        
        <CardGroup style={{ padding:'5px'}}>
        <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', hover: {color: 'blue'} }} className="gear-card"  >
          <Card.Header>
            <Card.Title>{name}</Card.Title> 
          </Card.Header>
           <Link to={`/gear/${id}`}>
            <Card.Img variant="top" src={image} style={{maxHeight: '200px', objectFit: 'contain', padding: '10px'}}/>
            </Link>
          <Card.Body>     
            <Card.Text>{category}</Card.Text>
            <Card.Text>Weight: {weight}oz</Card.Text>
            <Card.Text>{description}</Card.Text>   
          </Card.Body> 
           <Button variant="secondary"  onClick={handlePackClick}>
                {buttonText}
            </Button> 
          <Button variant="danger"  onClick={handleDelete}>
                Remove Gear
           </Button>       
        </Card>
        </CardGroup>
   
    )
}

export default GearCard