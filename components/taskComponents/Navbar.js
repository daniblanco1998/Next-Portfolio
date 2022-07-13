import {Menu, Container, Button} from 'semantic-ui-react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
    
    const router = useRouter()

    return(
        <Menu inverted borderless attached>
            <Container>
                <Menu.Item>
                    <Link href="/tasksApi">
                        <Image 
                            src="/lamp-svgrepo-com.svg"
                            alt="icono de tareas"
                            width={40}
                            height={40} 
                        />
                    </Link>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button primary size="mini" onClick={() => router.push('/tasksApi/myTasks/new')}>
                            Nueva Tarea
                        </Button>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )
}