import styled from 'styled-components'
import Container from '../../components/loginStyles/Container'
import Button from '../../components/loginStyles/LoginButton'
import Form from '../../components/loginStyles/Form'
import Input from '../../components/loginStyles/Input'
import Link from 'next/link'

const ContainerButton = styled.div`
    display: flex;
    flex-direction: raw;
    justify-content: space-evenly;
`
const Title = styled.h1`
  font-weight: normal;
  color: #eee;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const LoginDemo = () => {
    return (
        <Container>
            <Form>
                <Title>LOGIN</Title>
                <Input placeholder="Usuario..." />
                <Input placeholder="Contraseña..."/>
                <ContainerButton>
                    <Button>Entrar</Button>
                    <Link href="/loginDemo/register"><Button>Register</Button></Link>
                </ContainerButton>
            </Form>
        </Container>
    )
}

export default LoginDemo