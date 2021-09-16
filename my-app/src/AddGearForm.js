import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Form from "react-bootstrap/Form"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function AddGearForm({ onAddGear }) {
    const [formData, setFormData] = useState ({
        name: "",
        category: "",
        image:"",
        description:"",
        weight:""
    });

    let history = useHistory();

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('firing')

        const newGear = {
          name: formData.name,
          category: formData.category,
          image: formData.image,
          description: formData.description,
          weight: parseInt(formData.weight),
          quantitiy: 1,
          packed: false
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
          history.push("/")
      }

    return (
        <Container>
          <h3>Add Gear!</h3>
          <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Gear Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Form.Label>Category</Form.Label>
                <Form.Control
                  placeholder="Gear Category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
                <Form.Label className="text-align-left">Picture</Form.Label>
                <Form.Control
                  placeholder="Gear Picture"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder="Gear Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  placeholder="Gear Weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              <Button type="submit">Submit</Button>
          </Form.Group>
          </Form>
        </Container>
      );
    }

export default AddGearForm;