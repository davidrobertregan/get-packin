import React, { useState } from "react"
import GearCard from "./GearCard"
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container"

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
    const viewText = viewPacked ? "This Gear Is Packed!" : "This Gear Has Not Been Packed Yet"

    return (
        <div >
            <Container className="p-5">
                <Button variant="secondary" size="lg" onClick={handlePackedView}>See {buttonText}</Button>
            </Container>
            <h4>{viewText}</h4>
            <CardGroup className="justify-content-center"id="gear-list">
                {gearCards}
            </CardGroup>
        </div>
    )
}

export default GearList