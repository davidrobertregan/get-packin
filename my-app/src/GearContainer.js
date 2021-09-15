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
        <Switch>
          <Route exact path="/gear/new">
            <AddGearForm onAddGear={handleAddGear}/>
          </Route>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/gear/:id">
            <ItemDetails />
          </Route>
          <Route path="/">
            <SortGear filterCategory={handleCategory}/>
            <GearList gear={filteredGear} onDelete={handleDelete} onPackUpdate={updateGearItem}/>  
          </Route>
        </Switch>  
        </div>
    )
}

export default GearContainer