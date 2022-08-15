import axios from "axios"

export const loginUser = async(username, password) => {
    const  { data } = await axios.post('/api/login', { username, password })
    console.log(data)
}