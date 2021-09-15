import {Button, ButtonGroup} from 'react-bootstrap'

function SortGear({ filterCategory }) {

    function handleClick(e) {
        filterCategory(e)
    }


    return (
        <>
        <h3>Sort By:</h3>
          <ButtonGroup size="md">
            <Button variant="outline-secondary" onClick={handleClick} name='All Items' >All Items</Button>
            <Button variant="outline-secondary" onClick={handleClick} name='Clothing' >Clothing</Button>
            <Button variant="outline-secondary" onClick={handleClick} name='Packs & Bags'>Packs & Bags</Button>
            <Button variant="outline-secondary" onClick={handleClick} name='Sleeping Gear'>Sleeping Gear </Button>
            <Button variant="outline-secondary" onClick={handleClick} name='Miscellaneous Items'>Miscellaneous Items</Button>
            <Button variant="outline-secondary" onClick={handleClick} name='Optional Items'>Optional Items</Button>
          </ButtonGroup>
          </>
    )
}

export default SortGear