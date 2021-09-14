import GearCard from "./GearCard"

function GearList({ gear }) {
    
    const gearCards = gear.map(item => <GearCard key={item.id} gear={item}/>)

    return (
        <div id="gear-list">
            {gearCards}
        </div>
    )
}

export default GearList