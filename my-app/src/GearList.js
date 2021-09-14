import GearCard from "./GearCard"

function GearList({ gear, onDelete }) {
    
    const gearCards = gear.map(item => <GearCard key={item.id} gear={item} onDelete={onDelete}/>)

    return (
        <div id="gear-list">
            {gearCards}
        </div>
    )
}

export default GearList