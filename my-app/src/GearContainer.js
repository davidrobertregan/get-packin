import { useEffect, useState } from 'react'
import GearList from "./GearList"
import AddGearForm from "./AddGearForm"
import SortGear from "./SortGear"
import { Route, Switch } from 'react-router-dom';
import ItemDetails from './ItemDetails';
import About from './About';

function GearContainer() {

    const [gear, setGear] = useState([])
    const [filterCategory, setFilterCategory] =useState("All Items")

    useEffect(() => {
        fetch('/api/gear_items')
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

    
    const packedGear = gear.filter(item => item.packed === true)
    const totalWeight = packedGear.reduce((total, currentValue) => total = total + currentValue.weight,0)

  
    const filteredGear = gear.filter(item => filterCategory === "All Items" ? true : item.category === filterCategory)

    return (
        <div>
        <Switch>
          <Route exact path="/new">
            <AddGearForm onAddGear={handleAddGear}/>
          </Route>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/gear/:id">
            <ItemDetails />
          </Route>
          <Route path="/">
            <h4>Total Pack Weight: {totalWeight}oz</h4>
            <SortGear handleCategory={handleCategory} filterCategory={filterCategory} gear={gear}/>
            <GearList gear={filteredGear} onDelete={handleDelete} onPackUpdate={updateGearItem}/>  
          </Route>
        </Switch>  
        </div>
    )
}

export default GearContainer