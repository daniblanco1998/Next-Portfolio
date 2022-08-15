import { Layout } from "../../../components/taskComponents/Layout"
import {Button, Form, Grid} from "semantic-ui-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function TaskFormPage(){

  useEffect(() => {
    if(query.id){
      getTask()
    }
  }, [])

  const {query, push} = useRouter()

  const [newTask, setnewTask] = useState({
    title: "",
    plot: "",
    state: false,
  })

  const [errors, setErrors] = useState({
    title: "",
    plot: "",
  })

  const validate = () => {
    const errors = {}

    if (!newTask.title) errors.title = "Es requerido un titulo"
    if (!newTask.plot) errors.plot = "Es requerido una descripción"
    return errors
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let errors = validate()

    if(Object.keys(errors).length) return setErrors(errors)

    if(query.id){
      await upDateTask()
    }
    else{
      await createTask()
    }
    await push("/tasksApi")
    
  }

  const createTask = async () => {
    try {
      await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(newTask)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const upDateTask = async () => {
    try {
      await fetch(`http://localhost:3000/api/tasks/${query.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(newTask)
      })
    } catch (error) {
      console.log(error)
    }
  }


  const handleChange = (e) => setnewTask({...newTask,[e.target.name]: e.target.value})

  const getTask = async() => {
    const res = await fetch(`http://localhost:3000/api/tasks/${query.id}`)
    const data = await res.json()
    setnewTask({title: data.title, plot: data.plot})
  }

  return (
    <>
        <Layout>
          <Grid centered
                verticalAlign="middle"
                columns={3}
                style={{height: "80vh"}}
          >
            <Grid.Row>
              <Grid.Column textAlign="center">
                <h1>{query.id ? 'Actualiza tarea' : 'Crear tarea'}</h1>
                <Form onSubmit={handleSubmit}>

                  <Form.Input label='Titulo' 
                              placeholder='Titulo'
                              name="title"
                              onChange={handleChange}
                              error={
                                errors.title?{content: errors.title, pointing:'below'}
                                :null}
                              value={newTask.title}
                  />
                  <Form.TextArea label='Descripción'
                                placeholder='Descipción' 
                                name="plot"
                                onChange={handleChange}
                                error={
                                  errors.plot?{content: errors.plot, pointing:'below'}
                                  :null}
                                value={newTask.plot}
                  />

                  <Button primary>
                    {query.id ? 'Actualizar' : 'Crear'}
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Layout>
    </>
  )
}
