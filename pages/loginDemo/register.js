import styled from 'styled-components'
import Container from '../../components/loginStyles/Container'
import Button from '../../components/loginStyles/RegisterButton'
import Form from '../../components/loginStyles/Form'
import Input from '../../components/loginStyles/Input'
import { useState } from 'react'
import { useRouter } from "next/router"

const Title = styled.h1`
  font-weight: normal;
  color: #eee;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const Register = () => {

    const {push} = useRouter()

    const [newUser, setnewUser] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    })

    const validate = () => {
        const errors = {}

        if (!newUser.name) errors.name = "Es requerido nombre completo"
        if (!newUser.username) errors.username = "Es requerido un nombre de usuario"
        if (!newUser.email) errors.email = "Es requerido un correo electronico"
        if (!newUser.password) errors.password = "Es requerido un correo electronico"
        return errors
    }

    const createUser = async () => {
        try {
            await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => setnewUser({...newUser,[e.target.name]: e.target.value})

    const handleSubmit = async (e) => {
        e.preventDefault()
        let errors = validate()
    
        if(Object.keys(errors).length) return setErrors(errors)
    
        await createUser()
        await push("/loginDemo")
      }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>REGISTER</Title>
                <Input placeholder="Nombre..." name="name" value={newUser.name} onChange={handleChange}/>
                <Input placeholder="Usuario..." name="username" value={newUser.username} onChange={handleChange}/>
                <Input placeholder="Email..." name="email" value={newUser.email} onChange={handleChange}/>
                <Input placeholder="Contraseña..." name="password" value={newUser.password} onChange={handleChange}/>
                <Button>Registrar</Button>
            </Form>
        </Container>
    )
}

export default Register