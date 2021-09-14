
function GearCard({gear, onDelete}) {
    
    const {name, image, category, id} = gear
    
    function handleDelete() {
        fetch(`http://localhost:3000/gear/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(() => {
          onDelete(gear);
        });
      }

    return(
        <div className="gear-card">
            <h4>{name}</h4>
            <div>
                <img src={image} style={{width: '150px'}}/>
            </div>
                <p>{category}</p>
            <button>
                Pack / Unpack
            </button>
            <button onClick={handleDelete}>
                Remove Gear
            </button>
        </div>
    )
}

export default GearCard