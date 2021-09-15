import React, { useEffect, useState } from "react";

function ItemDetails () {
    const [item, setItem] = useState({});

    const { name, image, description, weight, packed, id } = item
   
 useEffect(() => {
        fetch(`http://localhost:3000/gear/${id}`)
          .then((r) => r.json())
          .then((item) => {
            setItem(item);
          });
      }, [id]);

    return (
        <>
        <button>Back</button>
        <h2>{name}</h2>
        <div><img src={image}/></div>
        <div>{description}</div>
        <p>Weighs: {weight}oz</p>
        <div>{packed ? "Item is packed!" : "Item is not packed."}</div>
        </>
    )     
}

export default ItemDetails