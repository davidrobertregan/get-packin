import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';

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
        <>
        <button onClick={() => history.push("/")}>
          Back
        </button>
        <h2>{name}</h2>
        <div><img src={image}/></div>
        <div>{description}</div>
        <p>Weighs: {weight}oz</p>
        <div>{packed ? "Item is packed!" : "Item is not packed."}</div>
        </>
    )     
}

export default ItemDetails