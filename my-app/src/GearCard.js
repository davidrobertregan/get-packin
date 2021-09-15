import { Link } from 'react-router-dom';

function GearCard({gear, onDelete, onPackUpdate}) {
    
    const {name, image, category, id, packed} = gear
    
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
        <div className="gear-card">
            <h4>{name}</h4>
            <div>
              <Link to={`/gear/${id}`}>
                <img src={image} style={{width: '150px'}}/>
              </Link>    
            </div>
                <p>{category}</p>
            <button onClick={handlePackClick}>
                Pack / Unpack
            </button>
            <button onClick={handleDelete}>
                Remove Gear
            </button>
        </div>
    )
}

export default GearCard