import dbConnect from "../../../utils/dbConnect.ts"
import Users from '../../../models/modelUser.ts'

dbConnect()

export default async function handler(req, res) {

    const {method, body} = req

    switch (method) {
        case "POST":
            try {
                const user = Users.findOne({ username: body.username, password: body.password })
                

            } catch (error) {
                return res.status(500).json({error: error.message})
            }
            

        default:
            return res.status(400).json({msg: "este metodo es invalido"})
    }

    
}