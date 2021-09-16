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

    const buttonText = viewPacked ? "Unpacked Gear" : "Packed Gear"
    const viewText = viewPacked ? "This gear is packed!" : "This gear has not been packed yet"

    return (
        <div>
            <div>
                <Button variant="primary" onClick={handlePackedView}>See {buttonText}</Button>
                <h3>{viewText}</h3>
            </div>
            <CardGroup className="justify-content-center"id="gear-list">
                {gearCards}
            </CardGroup>
        </div>
    )
}

export default GearList