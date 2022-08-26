import styled from 'styled-components'
import Container from '../../components/loginStyles/Container'
import Button from '../../components/loginStyles/LoginButton'
import Form from '../../components/loginStyles/Form'
import { signIn, useSession, getProviders } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect } from 'react'
import MdBuildCircle from 'react-icons/md'

// const ContainerButton = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-evenly;
// `
const Title = styled.h1`
  font-weight: normal;
  color: #eee;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const LoginDemo = () => {

    const { data: session, status } = useSession()
    const router = useRouter()
    console.log(session)
    
    useEffect(() => {
        (async () => {
            const providers = await getProviders()
            console.log(providers)
        })();
    },[])

    if (status !== 'loading' && status === 'authenticated') {
        router.push('/loginDemo')
    }

    return (
        <Container>
            <Form>
                {/* <Title>Inicia sesión</Title>

                <ContainerButton>
                    <Button onClick={() => signIn()}>
                        Redes Sociales
                    </Button>
                </ContainerButton> */}

                <Title>EN MANTENIMIENTO {<MdBuildCircle/>}</Title>


                <Link href="/">
                    <Button>
                        Volver
                    </Button>
                </Link>
            </Form>
        </Container>
    )
}

export default LoginDemo