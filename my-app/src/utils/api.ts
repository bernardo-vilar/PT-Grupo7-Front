import axios from "axios";

interface User {
  nome: string;
  email: string;
  senha: string;
  curso: string;
  departamento: string;
}

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUser = async () => {
  try {
    const response = await api.get("/user");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch users");
  }
};

export const createUser = async (user: User) => {
  try {
    const response = await api.post("/user", user); 
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create user");
  }
};

export const loginUser = async (credentials: { email: string; senha: string }) => {
    const response = await api.post("/auth/login", credentials); 
    return response.data; 
  };

export const patchUser = async (user: Partial<User>, id: number) => {
  try {
    const response = await api.patch(`/user/${id}`, user);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to update user");
  }
};
