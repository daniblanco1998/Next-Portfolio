import dbConnect from "../../../utils/dbConnect.ts"
import Task from '../../../models/modelTask.ts'

dbConnect()

export default async function handler(req, res) {

    const {method, body} = req

    switch (method) {
        case "GET":
            try {
                const tasks = await Task.find()
                return res.status(200).json(tasks)
            } catch (error) {
                return res.status(500).json({error: error.message})
            }
        case "POST":
            try {
                const newTasks = new Task(body)
                const savedTasks = await newTasks.save()
                return res.status(201).json(savedTasks)
            } catch (error) {
                return res.status(500).json({error: error.message})
            }
            

        default:
            return res.status(400).json({msg: "este metodo es invalido"})
    }

    
}