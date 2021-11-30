import {Button, ButtonGroup} from 'react-bootstrap'

function SortGear({ handleCategory, gear, filterCategory}) {

    function handleClick(e) {
        handleCategory(e)
    }

    const allCategories = gear.map(item => item.category)
    const categories = [...new Set(allCategories)]
    categories.unshift('All Items')


    const buttons = categories.map(cat => {
      const variant = filterCategory === cat ? "secondary" : "outline-secondary"
      return (<Button 
        key={cat}
        onClick={handleClick}
        name={cat}
        variant={variant}
        >
          {cat}
      </Button>)
    })


    return (
        <>
        <h4>Sort By:</h4>
          <ButtonGroup size='sm' className='me-auto'>
            {buttons}
          </ButtonGroup>
          </>
    )
}

export default SortGear