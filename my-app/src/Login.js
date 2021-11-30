import { useState } from 'react'
import { useHistory, Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Login({setCurrentUser }) {

    const [formData, setFormData ] = useState({email: '', password: ''})

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

        fetch("/api/login", configObj)
        .then(r => {
            if(r.ok) {
                r.json()
                .then(user => setCurrentUser(user))
                setFormData({email: '', password: ''})
                history.push('/')
            } else {
                r.json()
                .then(errors => alert(errors.error))
            }
        })
    }

    return (
        <Container className="p-5">
            <h2>Log In</h2>
                <Form onSubmit={handleSubmit}> 
                    <Form.Group className="mb-3"> 
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={handleChange} value={formData.email} type="text" name="email"></Form.Control>
                    </Form.Group >
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handleChange} value={formData.password} type="password" name="password"></Form.Control>
                    </Form.Group>
                    <Button variant='light' type='submit'>Submit</Button>
                </Form>
                <b>Don't have an account? Sign up below</b>
        </Container>
    )
}

export default Login