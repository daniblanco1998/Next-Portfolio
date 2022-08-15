
import { Layout } from "../../../../components/taskComponents/Layout"
import Error from "next/error"
import { Button, Grid, Confirm} from "semantic-ui-react"
import { useState } from "react"
import { useRouter } from "next/router"

export default function TaskDetail({task, error}){
  const [confirm, setConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const open = () => setConfirm(true)
  const close = () => setConfirm(false)
  const {query, push} = useRouter()

  const deleteTask = async() => {
    const {id} = query
    try {
      await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: 'DELETE',
      })
    } catch (error) {
      console.log(error)
    }

  }

  const handleDlete = () => {
    setIsDeleting(true)
    deleteTask()
    close()
    push("/tasksApi")
  }
  
  if(error && error.statusCode) 
    return <Layout><Error statusCode={error.statusCode} title={error.statusText}/></Layout>
      
  
  return (
    <>
        <Layout>
          <Grid centered verticalAlign='middle' columns={1} style={{height: "80vh"}}>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <h1>{task.title}</h1>
                <p>{task.plot}</p>
                <div>
                  <Button color="red" onClick={open} loading={isDeleting}>
                    Eliminar
                  </Button>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Confirm 
            header="Por favor confirme"
            content="Estas seguro que quieres eliminar esta tarea?"
            open={confirm} onConfirm={handleDlete} onCancel={close}/>
          </Grid>
        </Layout>
    </>
  )
}

export async function getServerSideProps({query: {id}}){
  
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`)

  if(res.status ===  200){
    const task = await res.json()
    return{
      props:{
        task
      }
    }
  }

  return{
    props: {
      error: {
        statusCode: res.status,
        statusText: "Id Invalido"
      }
    },
  }
}