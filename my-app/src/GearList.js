import React, { useState } from "react"
import GearCard from "./GearCard"

function GearList({ gear, onDelete, onPackUpdate }) {
    const [viewPacked, setViewPacked] = useState(false)
    
    const gearCards = filteredGear().map(item => 
    <GearCard key={item.id} gear={item} onDelete={onDelete} onPackUpdate={onPackUpdate}/>)

    function filteredGear() {
        if(viewPacked === true) {
        return gear.filter(item => item.packed !== false)
        }
        else { 
            return gear.filter(item => item.packed !== true)
        }
    }

    function handlePackedView () {
        setViewPacked(viewPacked => !viewPacked)
    }

    return (
        <div>
            <div>
                <h3>View Items</h3>
                <button onClick={handlePackedView}>Packed/Unpacked</button>
            </div>
            <div id="gear-list">
                {gearCards}
            </div>
        </div>
    )
}

export default GearList