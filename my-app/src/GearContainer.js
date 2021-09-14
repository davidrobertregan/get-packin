import { useEffect, useState } from 'react'
import GearList from "./GearList"
import AddGearForm from "./AddGearForm"

function GearContainer() {

    const [gear, setGear] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/gear')
        .then(resp => resp.json())
        .then(data => setGear(data))
    }, [])

    console.log(gear)

    function handleAddGear(newGear) {
        setGear([...gear, newGear])
    }

    function handleDelete(deletedGear) {
        const updatedGear = gear.filter(item => item.id !== deletedGear.id)
        setGear(updatedGear)
      }

    
    
    return (
        <div>
            <AddGearForm onAddGear={handleAddGear}/>
            <GearList gear={gear} onDelete={handleDelete}/>    
        </div>
    )
}

export default GearContainer