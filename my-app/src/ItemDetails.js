import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { Button, Card, CardGroup } from 'react-bootstrap'

function ItemDetails () {
    const [item, setItem] = useState({});

    const { name, image, description, weight, packed } = item
    const id = useParams().id;
    let history = useHistory();
 
   
 useEffect(() => {
        fetch(`http://localhost:3000/gear/${id}`)
          .then((r) => r.json())
          .then((item) => {
            setItem(item);
          });
      }, [id]);

    return (
      <CardGroup style={{padding:'30px'}}>
        <Card style={{maxWidth: '30rem', marginLeft:'auto', marginRight: 'auto',}}>
        <Card.Header>
          <Card.Title>{name}</Card.Title> 
        </Card.Header>
        <Card.Body>
        <Card.Img src={image} alt={name} style={{maxHeight: '500px', objectFit: 'contain'}}/>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Weight: {weight}oz</Card.Text>
        <Card.Text>{packed ? "Item is packed!" : "Item is not packed."}</Card.Text>
        </Card.Body>
        <Button variant="secondary" size="lg" onClick={() => history.push("/")}>
         ⬅ Back
        </Button>
        </Card>
      </CardGroup >
    )     
}

export default ItemDetails