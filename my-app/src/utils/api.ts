import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:3000'
})

const getUser = async (dados: User) => {
const response = await api.get("/user", dados)
return response.data;
}