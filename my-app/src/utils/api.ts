import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:3000'
})

const getUser = async () => {
const response = await api.get("/user")
return response.data;
}

export const creatrUser = async (User : <User>) => {
    const response = await api.post("/User",{

    }
    )
    return response.data;
}

export const patchUserReq = async (User: Partial<User>, id: number) => {
    api.patch()
}