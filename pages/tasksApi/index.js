import { Button, Card, Container, Grid, Segment, Divider } from 'semantic-ui-react'
import IMGnotTask from '../../public/img_noTareas.PNG'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Layout } from '../../components/taskComponents/Layout'
import { useState } from 'react'


export default function TaskApi({ tasks }) {

    const [state, setState] = useState({
        state: false
    })
    const router = useRouter()

    const deleteTask = async (id) => {
        try {
            await fetch(`https://next-portfolio-fvv3svzna-daniblanco1998.vercel.app/api/tasks/${id}`, {
                method: 'DELETE',
            })
        } catch (error) {
            console.log(error)
        }

    }

    const upDateTask = async (id) => {
        try {
            await fetch(`https://next-portfolio-fvv3svzna-daniblanco1998.vercel.app/api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(state)
            }
            )
        } catch (error) {
            console.log(error)
        }
    }

    const handleState = async (id) => {
        await setState({ state: true })
        await upDateTask(id)
        router.push("/tasksApi")
    }

    const handleDlete = async (id) => {
        await deleteTask(id)
        router.push("/tasksApi")
    }

    console.log(tasks)



    if (tasks.length === 0) return (
        <Layout>
            <Grid centered verticalAlign='middle' columns={1} style={{ height: "80vh" }}>
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
    return (
        <Layout>

            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <Container style={{ padding: '20px' }}>
                            <h2 style={{ textAlign: 'center' }}>Tareas</h2>
                            <Card.Group itemsPerRow={2}>
                                {
                                    tasks.map(task => !task.state ? (
                                        <Card key={task._id} >
                                            <Card.Content onClick={() => router.push(`/tasksApi/myTasks/${task._id}`)}>
                                                <Card.Header>{task.title}</Card.Header>
                                                <p>{task.plot}</p>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <Button primary onClick={() =>
                                                    router.push(`/tasksApi/myTasks/${task._id}/edit`)}>
                                                    Editar
                                                </Button>
                                                <Button color="red" onClick={() => {
                                                    handleDlete(task._id)
                                                }}>
                                                    Eliminar
                                                </Button>
                                                <Button color="green" onClick={() => {
                                                    handleState(task._id)
                                                }}>
                                                    Listo
                                                </Button>

                                            </Card.Content>
                                        </Card>
                                    ) : null)
                                }
                            </Card.Group>

                        </Container>
                    </Grid.Column>

                    <Grid.Column>
                        <Container style={{ padding: '20px' }}>
                            <h2 style={{ textAlign: 'center' }}>Tareas Listas</h2>
                            <Card.Group itemsPerRow={2}>
                                {
                                    tasks.map(task => task.state ? (
                                        <Card key={task._id}>
                                            <Card.Content >
                                                <Card.Header>{task.title}</Card.Header>
                                                <p>{task.plot}</p>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <Button primary onClick={() =>
                                                    router.push(`/tasksApi/myTasks/${task._id}`)}>
                                                    Detalles
                                                </Button>
                                                <Button color="red" onClick={() => {
                                                    handleDlete(task._id)
                                                }}>
                                                    Eliminar
                                                </Button>

                                            </Card.Content>
                                        </Card>
                                    ) : null)
                                }
                            </Card.Group>

                        </Container>
                    </Grid.Column>
                </Grid>

                <Divider vertical>And</Divider>
            </Segment>

        </Layout>
    )
}

export async function getServerSideProps() {

    const res = await fetch('https://next-portfolio-fvv3svzna-daniblanco1998.vercel.app/api/tasks')
    const data = await res.json()

    return {
        props: {
            tasks: data,
        }
    }
}