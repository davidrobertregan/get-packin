import { useEffect, useState } from 'react'
import GearList from "./GearList"
import AddGearForm from "./AddGearForm"
import SortGear from "./SortGear"

function GearContainer() {

    const [gear, setGear] = useState([])
    const [filterCategory, setFilterCategory] =useState("All Items")

    useEffect(() => {
        fetch('http://localhost:3000/gear')
        .then(resp => resp.json())
        .then(data => setGear(data))
    }, [])

    function handleAddGear(newGear) {
        setGear([...gear, newGear])
    }

    function handleDelete(deletedGear) {
        const updatedGear = gear.filter(item => item.id !== deletedGear.id)
        setGear(updatedGear)
      }

    function handleCategory(e) {
        setFilterCategory(e.target.name)
    }
    
    function updateGearItem(updatedItem) {
        const updatedGear = gear.map(item => item.id === updatedItem.id ? updatedItem : item);
        setGear(updatedGear);
    }
  
    const filteredGear = gear.filter(item => filterCategory === "All Items" ? true : item.category === filterCategory)

    return (
        <div>
            <AddGearForm onAddGear={handleAddGear}/>
            <SortGear filterCategory={handleCategory}/>
            <GearList gear={filteredGear} onDelete={handleDelete} onPackUpdate={updateGearItem}/>    
        </div>
    )
}

export default GearContainer