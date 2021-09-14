import React, { useState } from "react"
import GearCard from "./GearCard"


function GearList({ gear, onDelete }) {
    const [viewPacked, setViewPacked] = useState(false)
    
    const gearCards = filteredGear().map(item => <GearCard key={item.id} gear={item} onDelete={onDelete}/>)

    function filteredGear() {
        if(viewPacked === true) {
        return gear.filter(item => item.packed !== false)
        }
        else { 
            return gear.filter(item => item.packed !== true)
        }
    }
    
    // const unpackedGear = gear.filter(item => item.packed !== true)
    // console.log(unpackedGear)

    // const packedGear = gear.filter(item => item.packed !== false)
    // console.log(packedGear)

    function handlePackedView () {
        setViewPacked(viewPacked => !viewPacked)
    }
   console.log(viewPacked)

    return (
        <div>
            <div>
                <button onClick={handlePackedView}>Packed/Unpacked</button>
            </div>
            <div id="gear-list">
                {gearCards}
            </div>
        </div>
    )
}

export default GearList