import {Button, Card, Container, Grid} from 'semantic-ui-react'
import IMGnotTask from '../../public/img_noTareas.PNG'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Layout } from '../../components/taskComponents/Layout'

export default function taskApi({tasks}){
    const router = useRouter()
    if(tasks.length === 0)return(
        <Layout>
            <Grid centered verticalAlign='middle' columns={1} style={{height: "80vh"}}>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <h1>Aun no existen tareas</h1>
                        <Image src={IMGnotTask} alt="no tasks yet" />
                        <div>
                            <Button primary onClick={() => router.push('/tasksApi/myTasks/new')}>Crear tarea</Button>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>
    )
    //renderizando una lista de tareas
    return(
        <Layout>
            <Container style={{padding: '20px'}}>
                <Card.Group itemsPerRow={4}>
                    {
                        tasks.map(task => (
                            <Card key={task._id}>
                                <Card.Content>
                                    <Card.Header>{task.title}</Card.Header>
                                    <p>{task.plot}</p>
                                </Card.Content>
                                <Card.Content extra>
                                    <Button primary onClick={() => 
                                        router.push(`/tasksApi/myTasks/${task._id}`)}>
                                        Detalles
                                    </Button>
                                    <Button primary onClick={() => 
                                        router.push(`/tasksApi/myTasks/${task._id}/edit`)}>
                                        Editar
                                    </Button>
                                </Card.Content>
                            </Card>
                        ))
                    }
                </Card.Group>
            </Container>
        </Layout>
    )
}

export async function getServerSideProps(ctx){

    const res = await fetch('http://localhost:3000/api/tasks')
    const data = await res.json()

    return{
        props: {
            tasks: data,
        }
    }
}