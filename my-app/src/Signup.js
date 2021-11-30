import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Signup({setCurrentUser}) {

    const [formData, setFormData ] = useState({email:'', password: '', password_confirmation: '' })

    let history = useHistory()

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch("/api/signup", configObj)
        .then(r => {
            if(r.ok) {
                r.json()
                .then(user => setCurrentUser(user))
                setFormData({email: '', password:'', password_confirmation: ''})
                history.push("/")
            } else {
                r.json()
                .then(errors => alert("Hmmm... looks like that email is taken or your passwords don't match. Please try again."))
            }
        })
    }

    return(
        <Container className='p-5'>
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit} > 
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Button variant='light' type='submit'>Submit</Button>
            </Form>
        </Container>

    )
}

export default Signup