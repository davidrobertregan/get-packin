import React, { useState } from 'react';

function SortGear({ filterCategory }) {

    function handleClick(e) {
        filterCategory(e)
    }

    return (
        <>
        <h3>Sort By:</h3>
          <button onClick={handleClick} name='All Items' >All Items</button>
          <button onClick={handleClick} name='Clothing' >Clothing</button>
          <button onClick={handleClick} name='Packs & Bags'>Packs & Bags</button>
          <button onClick={handleClick} name='Sleeping Gear'>Sleeping Gear </button>
          <button onClick={handleClick} name='Miscellaneous Items'>Miscellaneous Items</button>
          <button onClick={handleClick} name='Optional Items'>Optional Items</button>
        </>
    )
}

export default SortGear