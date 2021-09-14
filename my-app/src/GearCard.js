
function GearCard({gear}) {
    
    const {name, image} = gear
    
    // add id router to gear details
    return(
        <div className="gear-card">
            <h4>{name}</h4>
            <div>
                <img src={image} style={{width: '150px'}}/>
            </div>
            <button>
                Pack / Unpack
            </button>
        </div>
    )
}

export default GearCard