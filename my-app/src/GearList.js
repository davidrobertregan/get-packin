import React, { useState } from "react"
import GearCard from "./GearCard"
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

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
                <Button variant="outline-success" onClick={handlePackedView}>Packed/Unpacked</Button>
            </div>
            <CardGroup className="justify-content-center"id="gear-list">
                {gearCards}
            </CardGroup>
        </div>
    )
}

export default GearList