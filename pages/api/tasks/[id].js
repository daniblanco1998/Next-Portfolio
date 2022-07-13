import dbConnect from "../../../utils/dbConnect.ts"
import Task from '../../../models/modelTask.ts'

dbConnect()

export default async(req, res) => {
    
    const {method, body, query: {id}} = req
    
    switch(method){
        case "GET":
            try {
                const task = await Task.findById(id) 
                if(!task) return res.status(404).json({ msg: "esta tarea no existe"})
                return res.status(200).json(task)
            } catch (error) {
                return res.status(500).json({msg: error.message})
            }

        case "PUT":
            try {
                const task = await Task.findByIdAndUpdate(id, body, {
                    new: true, //esto ultimo es para que me devuelva el objeto nuevo y no el viejo.
                })
                if(!task) return res.status(404).json({ msg: "Esta tarea no existe" })
                return res.status(200).json(task)
            } catch (error) {
                return res.status(500).json({msg: error.message})
            }

        case "DELETE":
            try {
                const deleteTask = await Task.findByIdAndDelete(id)
                if(!deleteTask) return res.status(400).json({msg: "La tarea no fue encontrada!"})
                return res.status(404).json()
            } catch (error) {
                return res.status(400).json({msg: error.message})
            }
            
        default:
            return res.status(400).json({msg: "este metodo es invalido"})
    }

}