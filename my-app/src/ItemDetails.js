import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap'

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
        <Card style={{width: '20rem', align: 'center'}}>
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Img src={image} alt={name}/>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Weighs: {weight}oz</Card.Text>
        <Card.Text>{packed ? "Item is packed!" : "Item is not packed."}</Card.Text>
        </Card.Body>
        <Button variant="success" size="lg" onClick={() => history.push("/")}>
         ⬅ Back
        </Button>
        </Card>
    )     
}

export default ItemDetails