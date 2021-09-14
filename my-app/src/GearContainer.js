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

    return (
        <div>
            <GearList gear={gear}/>
            {/* <AddGearForm /> */}
        </div>
    )
}

export default GearContainer