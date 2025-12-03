import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button, Form } from "react-bootstrap"
import ApiClient from "../../../../utils/ApiClient"
import { NavLink } from "react-router"


interface signform{
    username: string,
    email: string,
    password: string
}

function SignUp() {
    const [form, setForm] = useState<signform>({
        username: "",
        email: "",
        password: ""
    })

    const onHandleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target

        setForm({
            ...form,
            [name]: value
        })

    }

    const onSubmit = async (event : FormEvent<HTMLInputElement>) => {
        event.preventDefault();

        try {
            const response = await ApiClient.post("/signup", form)

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return <div className="container mex-auto">
        <Form>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    value = {form.username}
                    onChange={onHandleChange}
                    name="username"
                    type="text" 
                    placeholder="Username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    value = {form.email}
                    onChange={onHandleChange}
                    name="email"
                    type="text" 
                    placeholder="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    value = {form.password}
                    onChange={onHandleChange}
                    name="password"
                    type="text" 
                    placeholder="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <NavLink to="/signin">Sign In</NavLink>
        </Form>
        </div>

}

export default SignUp