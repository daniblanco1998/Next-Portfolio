import styled from 'styled-components'
import Container from '../../components/loginStyles/Container'
import Button from '../../components/loginStyles/LoginButton'
import { getSession, signOut } from 'next-auth/react'


function HomePage({session}) {
 

  return (
    <Container>
      {session ? (
        
        <div>
          <Title>TU PERFIL</Title>
          <Name>{session.user.name}</Name>
          <Email>{session.user.email}</Email>
          <Image src={session.user.image} alt="" />
        </div>
        
      ) : (
        <p>Skeleton</p>
      )}

      <Button onClick={() => signOut('github')}>
          Logout
      </Button>
        

    </Container>
  )
}

export const getServerSideProps = async (context) => {

  const session = await getSession(context)

  if(!session) return {
    redirect:{
      destination: '/loginDemo/login',
      permanent: false 
    }
  }

  return {
    props: {
      session
    }
  }
}

export default HomePage


const Title = styled.h1`
  font-weight: normal;
  color: #eee;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const Name = styled.h2`
font-weight: normal;
color: #eee;
text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
text-align: center; 

`

const Email = styled.p`
font-weight: normal;
color: #eee;
text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
text-align: center;
`

const Image = styled.img`
  width:300px;
  height:300px;
  border-radius:160px;
  border:2px solid #f03d4e;
  margin: 30px;

`