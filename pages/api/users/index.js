import dbConnect from "../../../utils/dbConnect.ts"
import User from '../../../models/modelUser.ts'

dbConnect()

export default async function handler(req, res) {

    const {method, body} = req

    switch (method) {
        case "GET":
            try {
                const users = await User.find()
                return res.status(200).json(users)
            } catch (error) {
                return res.status(500).json({error: error.message})
            }
        case "POST":
            try {
                const newUsers = new User(body)
                const savedUsers = await newUsers.save()
                return res.status(201).json(savedUsers)
            } catch (error) {
                return res.status(500).json({error: error.message})
            }
            

        default:
            return res.status(400).json({msg: "este metodo es invalido"})
    }

    
}