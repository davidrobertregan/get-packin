import React, {useState} from 'react';

function AddGearForm({ onAddGear }) {
    const [formData, setFormData] = useState ({
        name: "",
        category: "",
        image:"",
        description:"",
        weight:""
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault()

        const newGear = {
          name: formData.name,
          category: formData.category,
          image: formData.image,
          description: formData.description,
          weight: formData.weight,
          quantitiy:1
        };
    
        fetch("http://localhost:3000/gear", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGear),
        })
          .then((r) => r.json())
          .then(onAddGear);
      }

    return (
        <div>
          <h3>Add Gear!</h3>
          <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                placeholder="Gear Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label>Category</label>
              <input
                placeholder="Gear Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
              <label>Picture</label>
              <input
                placeholder="Gear Picture"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
              <label>Descirption</label>
              <input
                placeholder="Gear Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
               <label>Weight</label>
               <input
                placeholder="Gear Weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
              />
            <button>Submit</button>
          </form>
        </div>
      );
    }

export default AddGearForm;